const CONTACT_INBOX = 'kingabdulmalik159@gmail.com'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

function json(statusCode, body) {
  return {
    statusCode,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  }
}

export async function handler(event) {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: corsHeaders, body: '' }
  }

  if (event.httpMethod !== 'POST') {
    return json(405, { success: false, message: 'Method not allowed' })
  }

  let form
  try {
    form = JSON.parse(event.body || '{}')
  } catch {
    return json(400, { success: false, message: 'Invalid request' })
  }

  const name = String(form.name || '').trim()
  const email = String(form.email || '').trim()
  const phone = String(form.phone || '').trim()
  const message = String(form.message || '').trim()

  if (!name || !email || !phone || message.length < 20) {
    return json(400, { success: false, message: 'Please complete the required fields.' })
  }

  const payload = {
    name,
    visitor_email: email,
    _replyto: email,
    _subject: `New interested lead: ${name} - Neutrix Lab`,
    _template: 'table',
    _captcha: 'false',
    phone,
    company: String(form.company || '').trim() || 'Not provided',
    budget: String(form.budget || '').trim() || 'Not provided',
    reason: String(form.reason || '').trim() || 'Not provided',
    message,
    source: 'Neutrix Lab - Contact form',
  }

  const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_INBOX}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Origin: 'https://neutrixlab.com',
      Referer: 'https://neutrixlab.com/contact',
    },
    body: JSON.stringify(payload),
  })

  const data = await response.json().catch(() => ({}))
  const succeeded = data.success === true || data.success === 'true'

  if (!succeeded) {
    return json(502, {
      success: false,
      message: data.message || 'Could not send your message. Please try again.',
    })
  }

  return json(200, { success: true })
}
