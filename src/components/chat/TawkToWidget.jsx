import { useEffect, useRef } from 'react'
import { useLiveChat } from '../../context/LiveChatContext'
import { getTawkIds, hideTawkWidget, isTawkConfigured, showTawkWidget } from '../../lib/tawk'

const SCRIPT_ID = 'tawk-to-script'

/**
 * Loads tawk.to in the background for human handoff.
 * When an agent messages, AI steps aside and this widget is shown.
 */
export default function TawkToWidget() {
  const { humanTakeover, startHumanTakeover, endHumanTakeover } = useLiveChat()
  const takeoverRef = useRef(humanTakeover)
  const startRef = useRef(startHumanTakeover)
  const endRef = useRef(endHumanTakeover)

  takeoverRef.current = humanTakeover
  startRef.current = startHumanTakeover
  endRef.current = endHumanTakeover

  useEffect(() => {
    if (!isTawkConfigured()) return undefined
    if (document.getElementById(SCRIPT_ID)) return undefined

    const { propertyId, widgetId } = getTawkIds()

    window.Tawk_API = window.Tawk_API || {}
    window.Tawk_LoadStart = new Date()

    function revealHumanChat() {
      startRef.current()
      showTawkWidget()
    }

    window.Tawk_API.onLoad = function onTawkLoad() {
      try {
        if (!takeoverRef.current) hideTawkWidget()
        window.Tawk_API.addTags?.(['website', 'neutrix-lab'])
        window.Tawk_API.setAttributes?.(
          {
            source: 'neutrix-lab-web',
            page: window.location.pathname,
          },
          () => {},
        )
      } catch {
        // ignore attribute/hide failures
      }
    }

    window.Tawk_API.onChatMessageAgent = function onChatMessageAgent() {
      revealHumanChat()
    }

    window.Tawk_API.onChatStarted = function onChatStarted() {
      revealHumanChat()
    }

    window.Tawk_API.onUnreadCountChanged = function onUnreadCountChanged(count) {
      if (count > 0) revealHumanChat()
    }

    window.Tawk_API.onChatEnded = function onChatEnded() {
      endRef.current()
      hideTawkWidget()
    }

    window.Tawk_API.onChatMinimized = function onTawkMinimized() {
      if (takeoverRef.current) return
      hideTawkWidget()
    }

    const script = document.createElement('script')
    script.id = SCRIPT_ID
    script.async = true
    script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`
    script.charset = 'UTF-8'
    script.setAttribute('crossorigin', '*')

    const firstScript = document.getElementsByTagName('script')[0]
    firstScript.parentNode.insertBefore(script, firstScript)

    return undefined
  }, [])

  return null
}
