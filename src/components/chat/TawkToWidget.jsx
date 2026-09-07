import { useEffect } from 'react'
import { getTawkIds, isTawkConfigured } from '../../lib/tawk'

const SCRIPT_ID = 'tawk-to-script'

/**
 * Loads tawk.to in the background for human handoff.
 * The default bubble stays hidden - AI chat is primary; we show tawk on demand.
 */
export default function TawkToWidget() {
  useEffect(() => {
    if (!isTawkConfigured()) return undefined
    if (document.getElementById(SCRIPT_ID)) return undefined

    const { propertyId, widgetId } = getTawkIds()

    window.Tawk_API = window.Tawk_API || {}
    window.Tawk_LoadStart = new Date()

    window.Tawk_API.onLoad = function onTawkLoad() {
      try {
        window.Tawk_API.hideWidget?.()
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

    window.Tawk_API.onChatMinimized = function onTawkMinimized() {
      try {
        window.Tawk_API.hideWidget?.()
      } catch {
        // ignore
      }
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
