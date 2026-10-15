const CONTACT_INBOX = 'kingabdulmalik159@gmail.com'

async function getAccessKey() {
  const response = await fetch('/api/contact', {
    method: 'GET',
    headers: { Accept: 'application/json' },
  })
  const data = await response.json().catch(() => ({}))
  const accessKey = String(data.access_key || '').trim()
  if (!accessKey) {
    throw new Error(data.message || 'Contact form is not configured.')
  }
  return accessKey
}

/**
 * Loads the Web3Forms key from Netlify at runtime, then submits from the
 * browser. Web3Forms blocks serverless IPs, so the function cannot send mail.
 */
export async function sendContactLead(form) {
  const accessKey = await getAccessKey()

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `New interested lead: ${form.name.trim()} - Neutrix Lab`,
      from_name: 'Neutrix Lab',
      replyto: form.email.trim(),
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      company: form.company.trim() || 'Not provided',
      budget: form.budget.trim() || 'Not provided',
      reason: form.reason,
      message: form.message.trim(),
      source: 'Neutrix Lab - Contact form',
    }),
  })

  const data = await response.json().catch(() => ({}))
  const succeeded = data.success === true || data.success === 'true'

  if (!succeeded) {
    throw new Error(data.message || 'Could not send your message. Please try again.')
  }

  return data
}

export function getContactInbox() {
  return CONTACT_INBOX
}

export function isContactEmailConfigured() {
  return true
}
