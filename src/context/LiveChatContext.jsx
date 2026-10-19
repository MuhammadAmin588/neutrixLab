import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const LiveChatContext = createContext(null)

export function LiveChatProvider({ children }) {
  const [open, setOpen] = useState(false)
  const [humanTakeover, setHumanTakeover] = useState(false)
  const [humanOffline, setHumanOffline] = useState(false)

  const closeChat = useCallback(() => setOpen(false), [])
  const startHumanTakeover = useCallback(() => {
    setHumanTakeover(true)
    setHumanOffline(false)
    setOpen(false)
  }, [])
  const endHumanTakeover = useCallback(() => {
    setHumanTakeover(false)
    setOpen(false)
  }, [])
  const noteHumanOffline = useCallback(() => {
    setHumanTakeover(false)
    setHumanOffline(true)
    setOpen(true)
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
    const onOffline = () => noteHumanOffline()
    window.addEventListener('NEUTRIX:open-live-chat', onOpen)
    window.addEventListener('NEUTRIX:tawk-offline', onOffline)
    return () => {
      window.removeEventListener('NEUTRIX:open-live-chat', onOpen)
      window.removeEventListener('NEUTRIX:tawk-offline', onOffline)
    }
  }, [humanTakeover, noteHumanOffline])

  const value = useMemo(
    () => ({
      open,
      humanTakeover,
      openChat,
      closeChat,
      toggleChat,
      humanOffline,
      startHumanTakeover,
      endHumanTakeover,
    }),
    [open, humanTakeover, humanOffline, openChat, closeChat, toggleChat, startHumanTakeover, endHumanTakeover],
  )

  return <LiveChatContext.Provider value={value}>{children}</LiveChatContext.Provider>
}

export function useLiveChat() {
  const ctx = useContext(LiveChatContext)
  if (!ctx) throw new Error('useLiveChat must be used within LiveChatProvider')
  return ctx
}
