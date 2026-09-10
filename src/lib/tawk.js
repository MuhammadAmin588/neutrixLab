// Public widget IDs from tawk.to embed (not secrets — they appear in page source).
const PROPERTY_ID = '6aa2ad3cbc444e3446a90359'
const WIDGET_ID = '1k25n9d9h'

export function isTawkConfigured() {
  return Boolean(PROPERTY_ID)
}

export function getTawkIds() {
  return { propertyId: PROPERTY_ID, widgetId: WIDGET_ID }
}

export function showTawkWidget() {
  const api = window.Tawk_API
  if (!api) return false
  try {
    api.showWidget?.()
    api.maximize?.()
    return true
  } catch {
    return false
  }
}

export function hideTawkWidget() {
  const api = window.Tawk_API
  if (!api) return
  try {
    api.minimize?.()
    api.hideWidget?.()
  } catch {
    // ignore
  }
}

/**
 * Open tawk.to for a live human agent.
 * Widget stays hidden until this is called (AI chat is the primary UI).
 */
export function openTawkHumanChat() {
  if (!isTawkConfigured()) return false

  if (showTawkWidget()) return true

  window.Tawk_API = window.Tawk_API || {}
  const previous = window.Tawk_API.onLoad
  window.Tawk_API.onLoad = function onLoad() {
    if (typeof previous === 'function') previous.call(this)
    showTawkWidget()
  }
  return true
}
