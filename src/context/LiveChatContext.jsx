import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const LiveChatContext = createContext(null)

export function LiveChatProvider({ children }) {
  const [open, setOpen] = useState(false)
  const [humanTakeover, setHumanTakeover] = useState(false)

  const closeChat = useCallback(() => setOpen(false), [])
  const startHumanTakeover = useCallback(() => {
    setHumanTakeover(true)
    setOpen(false)
  }, [])
  const endHumanTakeover = useCallback(() => {
    setHumanTakeover(false)
    setOpen(false)
  }, [])
  const openChat = useCallback(() => {
    if (humanTakeover) return
    setOpen(true)
  }, [humanTakeover])
  const toggleChat = useCallback(() => {
    if (humanTakeover) return
    setOpen((v) => !v)
  }, [humanTakeover])

  useEffect(() => {
    const onOpen = () => {
      if (humanTakeover) return
      setOpen(true)
    }
    window.addEventListener('NEUTRIX:open-live-chat', onOpen)
    return () => window.removeEventListener('NEUTRIX:open-live-chat', onOpen)
  }, [humanTakeover])

  const value = useMemo(
    () => ({
      open,
      humanTakeover,
      openChat,
      closeChat,
      toggleChat,
      startHumanTakeover,
      endHumanTakeover,
    }),
    [open, humanTakeover, openChat, closeChat, toggleChat, startHumanTakeover, endHumanTakeover],
  )

  return <LiveChatContext.Provider value={value}>{children}</LiveChatContext.Provider>
}

export function useLiveChat() {
  const ctx = useContext(LiveChatContext)
  if (!ctx) throw new Error('useLiveChat must be used within LiveChatProvider')
  return ctx
}
