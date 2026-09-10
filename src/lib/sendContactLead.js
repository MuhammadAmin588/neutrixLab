const CONTACT_INBOX = 'kingabdulmalik159@gmail.com'

/**
 * Posts to a Netlify function so FormSubmit never asks the visitor to activate.
 */
export async function sendContactLead(form) {
  const response = await fetch('/.netlify/functions/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      company: form.company.trim(),
      budget: form.budget.trim(),
      reason: form.reason,
      message: form.message.trim(),
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
