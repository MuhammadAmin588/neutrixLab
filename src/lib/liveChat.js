import { isTawkConfigured } from './tawk'

/** Open NEUTRIX AI live chat (primary). Human handoff uses openTawkHumanChat separately. */
export function openLiveChat() {
  window.dispatchEvent(new CustomEvent('NEUTRIX:open-live-chat'))
}

export { isTawkConfigured }
