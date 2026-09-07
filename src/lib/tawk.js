const PROPERTY_ID = import.meta.env.VITE_TAWK_PROPERTY_ID?.trim() || ''
const WIDGET_ID = import.meta.env.VITE_TAWK_WIDGET_ID?.trim() || 'default'

export function isTawkConfigured() {
  return Boolean(PROPERTY_ID)
}

export function getTawkIds() {
  return { propertyId: PROPERTY_ID, widgetId: WIDGET_ID }
}

/**
 * Open tawk.to for a live human agent.
 * Widget stays hidden until this is called (AI chat is the primary UI).
 */
export function openTawkHumanChat() {
  if (!isTawkConfigured()) return false

  const api = window.Tawk_API
  if (!api) return false

  const show = () => {
    try {
      api.showWidget?.()
      api.maximize?.()
    } catch {
      // ignore
    }
  }

  if (typeof api.maximize === 'function' || typeof api.showWidget === 'function') {
    show()
    return true
  }

  const previous = api.onLoad
  api.onLoad = function onLoad() {
    if (typeof previous === 'function') previous.call(this)
    show()
  }
  return true
}
