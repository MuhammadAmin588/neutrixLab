const CONTACT_INBOX = 'kingabdulmalik159@gmail.com'

/**
 * Sends a contact-form lead to the studio inbox via FormSubmit.
 * Independent of Netlify / Web3Forms keys so the previous account cannot intercept leads.
 */
export async function sendContactLead(form) {
  const payload = {
    name: form.name.trim(),
    email: form.email.trim(),
    _replyto: form.email.trim(),
    _subject: `New interested lead: ${form.name.trim()} - Neutrix Lab`,
    _template: 'table',
    _captcha: 'false',
    phone: form.phone.trim(),
    company: form.company.trim() || 'Not provided',
    budget: form.budget.trim() || 'Not provided',
    reason: form.reason,
    message: form.message.trim(),
    source: 'Neutrix Lab - Contact form',
  }

  const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_INBOX}`, {
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
    const hint = String(data.message || '')
    if (/activat|confirm|email/i.test(hint)) {
      throw new Error(
        'Check kingabdulmalik159@gmail.com for a FormSubmit confirmation link, then submit again.',
      )
    }
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
