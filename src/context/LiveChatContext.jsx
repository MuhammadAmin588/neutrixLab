import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const LiveChatContext = createContext(null)

export function LiveChatProvider({ children }) {
  const [open, setOpen] = useState(false)

  const openChat = useCallback(() => setOpen(true), [])
  const closeChat = useCallback(() => setOpen(false), [])
  const toggleChat = useCallback(() => setOpen((v) => !v), [])

  useEffect(() => {
    const onOpen = () => setOpen(true)
    window.addEventListener('NEUTRIX:open-live-chat', onOpen)
    return () => window.removeEventListener('NEUTRIX:open-live-chat', onOpen)
  }, [])

  const value = useMemo(
    () => ({ open, openChat, closeChat, toggleChat }),
    [open, openChat, closeChat, toggleChat],
  )

  return <LiveChatContext.Provider value={value}>{children}</LiveChatContext.Provider>
}

export function useLiveChat() {
  const ctx = useContext(LiveChatContext)
  if (!ctx) throw new Error('useLiveChat must be used within LiveChatProvider')
  return ctx
}
