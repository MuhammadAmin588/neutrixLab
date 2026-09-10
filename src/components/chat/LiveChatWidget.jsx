import { useEffect, useRef, useState } from 'react'
import Icon from '../common/Icon'
import { useLiveChat } from '../../context/LiveChatContext'
import { generateAiReply, getWelcomeMessage } from '../../lib/aiChat'
import { isTawkConfigured, openTawkHumanChat } from '../../lib/tawk'
import { BRAND } from '../../constants/brand'

function uid(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
}

function connectHuman(startHumanTakeover) {
  const opened = openTawkHumanChat()
  if (opened) {
    startHumanTakeover()
    return {
      text: 'Connecting you to a human agent now. Our live chat is opening - a NEUTRIX team member will reply there.',
      quickReplies: [],
    }
  }

  return {
    text:
      "I'd love to connect you with a human, but live agent chat isn't linked yet.\n\n" +
      `Meanwhile you can reach the team at ${BRAND.email} or ${BRAND.phones.map((p) => p.display).join(' / ')}, or use the Contact form.`,
    quickReplies: ['Our services', 'Pricing'],
  }
}

export default function LiveChatWidget() {
  const { open, closeChat, toggleChat, humanTakeover, startHumanTakeover } = useLiveChat()
  const [messages, setMessages] = useState(() => [getWelcomeMessage()])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const listRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const id = window.setTimeout(() => inputRef.current?.focus(), 120)
    return () => window.clearTimeout(id)
  }, [open])

  useEffect(() => {
    if (!listRef.current) return
    listRef.current.scrollTop = listRef.current.scrollHeight
  }, [messages, typing, open])

  async function sendText(raw) {
    const text = raw.trim()
    if (!text || typing || humanTakeover) return

    const userMsg = { id: uid('user'), role: 'user', text }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setTyping(true)

    try {
      const reply = await generateAiReply(text, [...messages, userMsg])
      const payload = reply.action === 'handoff_human' ? connectHuman(startHumanTakeover) : reply

      setMessages((prev) => [
        ...prev,
        {
          id: uid('ai'),
          role: 'assistant',
          text: payload.text,
          quickReplies: payload.quickReplies,
        },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: uid('ai'),
          role: 'assistant',
          text: `Something went wrong on my side. Please try again, or email ${BRAND.email} / call ${BRAND.phones.map((p) => p.display).join(' or ')}.`,
        },
      ])
    } finally {
      setTyping(false)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    sendText(input)
  }

  if (humanTakeover) return null

  return (
    <div className="chat-dock fixed bottom-5 right-5 z-[80] flex flex-col items-end gap-3 pointer-events-none">
      {open && (
        <section
          className="pointer-events-auto w-[min(100vw-1.5rem,380px)] h-[min(72vh,560px)] flex flex-col rounded-xl border border-outline-variant/40 bg-surface-container-low/95 backdrop-blur-xl shadow-2xl overflow-hidden animate-[chat-pop_0.28s_ease-out]"
          role="dialog"
          aria-label="NEUTRIX AI live chat"
        >
          <header className="flex items-center justify-between gap-md px-md py-md border-b border-outline-variant/30 bg-surface-container">
            <div className="flex items-center gap-md min-w-0">
              <div className="relative w-10 h-10 rounded-full bg-primary-container/20 border border-primary-container/40 flex items-center justify-center shrink-0">
                <Icon name="smart_toy" className="text-primary-container text-[22px]" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-primary-container border-2 border-surface-container" />
              </div>
              <div className="min-w-0">
                <p className="font-headline-sm text-on-surface text-[15px] truncate">NEUTRIX AI</p>
                <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                  {isTawkConfigured() ? 'AI + human agents available' : 'Online · AI assistant'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <button
                type="button"
                onClick={() => sendText('Talk to a human')}
                disabled={typing}
                className="inline-flex items-center gap-1 rounded-lg border border-primary-container/40 px-2.5 py-1 text-[11px] font-label-caps tracking-wide text-primary-container hover:bg-primary-container/10 disabled:opacity-50"
                title="Talk to a human"
              >
                <Icon name="support_agent" className="text-[16px]" />
                Human
              </button>
              <button
                type="button"
                aria-label="Close chat"
                onClick={closeChat}
                className="text-on-surface-variant hover:text-on-surface transition-colors p-1"
              >
                <Icon name="close" className="text-[22px]" />
              </button>
            </div>
          </header>

          <div ref={listRef} className="flex-1 overflow-y-auto px-md py-md space-y-md">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div
                  className={`max-w-[88%] rounded-xl px-md py-sm whitespace-pre-wrap font-body-sm text-[14px] leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-primary-container text-on-primary-fixed rounded-br-sm'
                      : 'bg-surface-container-high text-on-surface rounded-bl-sm border border-outline-variant/25'
                  }`}
                >
                  {msg.text}
                </div>
                {msg.role === 'assistant' && msg.quickReplies?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2 max-w-[95%]">
                    {msg.quickReplies.map((label) => (
                      <button
                        key={label}
                        type="button"
                        disabled={typing}
                        onClick={() => sendText(label)}
                        className="text-[12px] font-label-caps tracking-wide px-3 py-1.5 rounded-full border border-primary-container/40 text-primary-container hover:bg-primary-container/10 disabled:opacity-50 transition-colors"
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {typing && (
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-surface-container-high border border-outline-variant/25 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-on-surface-variant animate-bounce [animation-delay:0ms]" />
                <span className="w-1.5 h-1.5 rounded-full bg-on-surface-variant animate-bounce [animation-delay:120ms]" />
                <span className="w-1.5 h-1.5 rounded-full bg-on-surface-variant animate-bounce [animation-delay:240ms]" />
              </div>
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            data-netlify="false"
            className="border-t border-outline-variant/30 p-md bg-surface-container flex items-center gap-sm"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask AI, or request a human..."
              disabled={typing}
              className="flex-1 bg-surface-container-low border border-outline-variant/40 rounded-lg px-md py-sm text-on-surface font-body-sm text-[14px] focus:outline-none focus:border-primary-container disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={typing || !input.trim()}
              aria-label="Send message"
              className="shrink-0 w-10 h-10 rounded-lg bg-primary-container text-on-primary-fixed flex items-center justify-center disabled:opacity-50 hover:scale-105 transition-transform"
            >
              <Icon name="send" className="text-[20px]" />
            </button>
          </form>
        </section>
      )}

      <button
        type="button"
        onClick={toggleChat}
        aria-label={open ? 'Close live chat' : 'Open live chat'}
        className="chat-fab pointer-events-auto w-12 h-12 rounded-full bg-primary-container text-on-primary-fixed shadow-2xl cyber-glow flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
      >
        {open ? (
          <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
            <path
              fill="currentColor"
              d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12 5.7 16.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4Z"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
            <path
              fill="currentColor"
              d="M4.5 5.75A2.75 2.75 0 0 1 7.25 3h9.5A2.75 2.75 0 0 1 19.5 5.75v8.5A2.75 2.75 0 0 1 16.75 17H9.06l-3.22 2.42A1 1 0 0 1 4.25 18.6V5.75Zm2.75-.25a.25.25 0 0 0-.25.25v11.12l1.78-1.34a1 1 0 0 1 .6-.2h7.37a.25.25 0 0 0 .25-.25v-8.5a.25.25 0 0 0-.25-.25h-9.5Z"
            />
          </svg>
        )}
      </button>
    </div>
  )
}
