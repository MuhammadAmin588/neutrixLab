// Public widget IDs from tawk.to embed (not secrets — they appear in page source).
const PROPERTY_ID = '6aa17370bc444e3446a8fa57'
const WIDGET_ID = '1k23alsiu'

let pendingHumanChat = false
let prefillMessage = ''

export function isTawkConfigured() {
  return Boolean(PROPERTY_ID)
}

export function getTawkIds() {
  return { propertyId: PROPERTY_ID, widgetId: WIDGET_ID }
}

export function isHumanChatPending() {
  return pendingHumanChat
}

export function markHumanChatClosed() {
  pendingHumanChat = false
  prefillMessage = ''
}

function getApi() {
  return window.Tawk_API
}

function applyPrefill(api) {
  const message = String(prefillMessage || '').trim()
  if (!message || typeof api.setChatInputMessage !== 'function') return
  try {
    api.setChatInputMessage(message, () => {})
  } catch {
    // ignore
  }
}

function revealNow() {
  const api = getApi()
  if (!api || typeof api.maximize !== 'function') return false

  try {
    api.start?.({ showWidget: true })
  } catch {
    // older widgets do not expose start()
  }

  try {
    api.showWidget?.()
    api.maximize?.()
  } catch {
    return false
  }

  applyPrefill(api)
  return true
}

export function showTawkWidget() {
  return revealNow()
}

export function hideTawkWidget() {
  if (pendingHumanChat) return
  const api = getApi()
  if (!api) return
  try {
    api.minimize?.()
    api.hideWidget?.()
  } catch {
    // ignore
  }
}

/**
 * Open tawk.to so the visitor can type a message to a human.
 * Always opens the widget — do not block on Tawk's online/offline flag.
 */
export function openTawkHumanChat(message = '') {
  if (!isTawkConfigured()) return false

  pendingHumanChat = true
  prefillMessage = String(message || '').trim()

  if (revealNow()) {
    ;[120, 400, 900].forEach((ms) => {
      window.setTimeout(() => {
        if (!pendingHumanChat) return
        revealNow()
      }, ms)
    })
    return true
  }

  window.Tawk_API = window.Tawk_API || {}
  const previous = window.Tawk_API.onLoad
  window.Tawk_API.onLoad = function onLoad() {
    if (typeof previous === 'function') previous.call(this)
    if (pendingHumanChat) revealNow()
  }
  return true
}
