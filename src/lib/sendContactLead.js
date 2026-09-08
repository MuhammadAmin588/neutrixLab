const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim() || ''
const CONTACT_INBOX = 'info@neutrixlab.com'

/**
 * Sends a contact-form lead via Web3Forms (no visitor activation needed).
 * Create a free access key at https://web3forms.com linked to your inbox email.
 */
export async function sendContactLead(form) {
  if (!ACCESS_KEY) {
    throw new Error(
      'Contact form is not configured yet. Add VITE_WEB3FORMS_ACCESS_KEY to your .env file.',
    )
  }

  const payload = {
    access_key: ACCESS_KEY,
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
    throw new Error(data.message || 'Could not send your message. Please try again.')
  }

  return data
}

export function getContactInbox() {
  return CONTACT_INBOX
}

export function isContactEmailConfigured() {
  return Boolean(ACCESS_KEY)
}
