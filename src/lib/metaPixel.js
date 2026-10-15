export const META_PIXEL_ID = '27568204996188530'

function fbq() {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') return null
  return window.fbq
}

export function trackMetaPageView() {
  fbq()?.('track', 'PageView')
}

export function trackMetaLead() {
  fbq()?.('track', 'Lead')
}
