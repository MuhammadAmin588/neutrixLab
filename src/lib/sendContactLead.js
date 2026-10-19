import { BRAND } from '../constants/brand'

const SUBMIT_URL = 'https://api.web3forms.com/submit'
const TIMEOUT_MS = 15000

function failureMessage() {
  const phones = BRAND.phones.map((phone) => phone.display).join(' or ')
  return `Could not send your message. Please try again, or email ${BRAND.email} or call ${phones}.`
}

async function readAccessKey(url) {
  const response = await fetch(url, {
    method: 'GET',
    headers: { Accept: 'application/json' },
  })
  const data = await response.json().catch(() => ({}))
  return {
    accessKey: String(data.access_key || '').trim(),
    message: data.message,
    status: response.status,
  }
}

async function getAccessKey() {
  let result
  try {
    result = await readAccessKey('/api/contact')
  } catch {
    throw new Error(failureMessage())
  }

  if (result.accessKey) return result.accessKey
  if (result.status === 429) {
    throw new Error(result.message || 'Too many requests. Please wait a few minutes and try again.')
  }
  throw new Error(result.message || 'Contact form is not configured.')
}

function leadBody(accessKey, form) {
  const body = new FormData()
  const fields = {
    access_key: accessKey,
    subject: `New interested lead: ${form.name.trim()} - Neutrix Lab`,
    from_name: 'Neutrix Lab',
    replyto: form.email.trim(),
    name: form.name.trim(),
    email: form.email.trim(),
    phone: form.phone.trim(),
    company: form.company.trim() || 'Not provided',
    budget: form.budget.trim() || 'Not provided',
    reason: form.reason || 'General inquiry',
    message: form.message.trim(),
    source: 'Neutrix Lab - Contact form',
  }
  Object.entries(fields).forEach(([key, value]) => {
    body.append(key, String(value))
  })
  return body
}

async function postLead(accessKey, form) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)
  try {
    const response = await fetch(SUBMIT_URL, {
      method: 'POST',
      signal: controller.signal,
      headers: { Accept: 'application/json' },
      body: leadBody(accessKey, form),
    })
    const data = await response.json().catch(() => ({}))
    const succeeded = data.success === true || data.success === 'true'
    if (!succeeded) {
      throw new Error(data.message || failureMessage())
    }
    return data
  } finally {
    clearTimeout(timer)
  }
}

/**
 * Loads the Web3Forms key from the same-origin Netlify function, then submits
 * from the browser. Web3Forms blocks serverless IPs, so the function cannot send mail.
 * A filled `botcheck` field is treated as spam and is not sent.
 */
export async function sendContactLead(form) {
  if (String(form.botcheck || '').trim()) {
    return { success: true }
  }

  const accessKey = await getAccessKey()
  let lastError
  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      return await postLead(accessKey, form)
    } catch (err) {
      lastError = err
      const blocked = err instanceof Error && (err.name === 'AbortError' || err.name === 'TypeError')
      if (!blocked || attempt === 1) break
    }
  }

  if (lastError instanceof Error && (lastError.name === 'AbortError' || lastError.name === 'TypeError')) {
    throw new Error(failureMessage())
  }
  throw lastError instanceof Error ? lastError : new Error(failureMessage())
}

export function isContactEmailConfigured() {
  return true
}
