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

function web3Key() {
  return String(process.env.WEB3FORMS_ACCESS_KEY || process.env.VITE_WEB3FORMS_ACCESS_KEY || '').trim()
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

  const accessKey = web3Key()
  if (!accessKey) {
    return json(500, {
      success: false,
      message: 'Contact form is not configured. Add WEB3FORMS_ACCESS_KEY in Netlify.',
    })
  }

  const payload = {
    access_key: accessKey,
    subject: `New interested lead: ${name} - Neutrix Lab`,
    from_name: 'Neutrix Lab',
    replyto: email,
    name,
    email,
    phone,
    company: String(form.company || '').trim() || 'Not provided',
    budget: String(form.budget || '').trim() || 'Not provided',
    reason: String(form.reason || '').trim() || 'Not provided',
    message,
    source: 'Neutrix Lab - Contact form',
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
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

  return json(200, { success: true, inbox: CONTACT_INBOX })
}
