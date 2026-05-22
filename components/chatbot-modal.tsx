'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { X, Send, MessageCircle, Bot, User, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

const INITIAL_MESSAGE: Message = {
  id: 'welcome',
  role: 'assistant',
  content: "Hello! Welcome to Namakkal Blueprint. I'm here to help you with building approvals, land layout, survey work, 2D plans, printing services, and E-Seva government documents. How can I assist you today?",
  timestamp: new Date(),
}

const QUICK_QUESTIONS = [
  'Building Approval Process',
  '2D Plan Services',
  'Printing Prices',
  'Delivery Info',
  'E-Seva Services',
]

export function ChatbotModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [hasNotification, setHasNotification] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleOpen = () => {
    setIsOpen(true)
    setHasNotification(false)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: content.trim(),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.content || "I'm sorry, I couldn't process that request. Please try again or contact us directly via WhatsApp at +91 95006 98927.",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error('Chat error:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "I'm experiencing some technical difficulties. Please feel free to contact us directly via WhatsApp at +91 95006 98927 for immediate assistance.",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(input)
  }

  const handleQuickQuestion = (question: string) => {
    sendMessage(question)
  }

  return (
    <>
      {/* Chat Trigger Button */}
      <button
        onClick={handleOpen}
        className="fixed bottom-7 right-7 z-50 w-16 h-16 bg-gradient-to-br from-blue-navy to-primary border-2 border-cyan/50 rounded-full flex items-center justify-center cursor-pointer shadow-[0_6px_28px_rgba(0,200,255,0.3)] hover:scale-110 hover:border-cyan transition-all animate-chat-pulse hover:animate-none"
        aria-label="Open chat assistant"
      >
        <Bot className="w-7 h-7 text-white" />
        
        {/* Notification Dot */}
        {hasNotification && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-amber rounded-full border-2 border-background animate-pulse" />
        )}
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-28 right-7 z-50 w-[360px] max-w-[calc(100vw-56px)] bg-card border border-cyan/20 rounded-2xl shadow-[0_16px_60px_rgba(0,200,255,0.2)] overflow-hidden animate-fade-up">
          {/* Header */}
          <div className="relative bg-gradient-to-r from-blue-navy to-blue-deep px-4 py-3 border-b border-cyan/15">
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,200,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,200,255,0.04)_1px,transparent_1px)] bg-[size:20px_20px] opacity-50" />
            
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan to-primary rounded-xl flex items-center justify-center shadow-[0_4px_12px_rgba(0,200,255,0.3)]">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Namakkal Blueprint</h3>
                  <p className="text-xs text-cyan flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    AI Assistant • Online
                  </p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-muted-foreground hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="h-[320px] overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-card to-secondary/30">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  'flex gap-2',
                  message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                )}
              >
                <div
                  className={cn(
                    'w-7 h-7 rounded-lg flex items-center justify-center shrink-0',
                    message.role === 'user'
                      ? 'bg-primary text-white'
                      : 'bg-cyan/20 text-cyan'
                  )}
                >
                  {message.role === 'user' ? (
                    <User className="w-3.5 h-3.5" />
                  ) : (
                    <Bot className="w-3.5 h-3.5" />
                  )}
                </div>
                <div
                  className={cn(
                    'max-w-[75%] rounded-xl px-3 py-2 text-sm',
                    message.role === 'user'
                      ? 'bg-primary text-white rounded-br-none'
                      : 'bg-muted text-foreground rounded-bl-none'
                  )}
                >
                  {message.content}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex gap-2">
                <div className="w-7 h-7 rounded-lg bg-cyan/20 text-cyan flex items-center justify-center shrink-0">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="bg-muted rounded-xl rounded-bl-none px-3 py-2">
                  <Loader2 className="w-4 h-4 text-cyan animate-spin" />
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length <= 2 && (
            <div className="px-4 pb-3 flex flex-wrap gap-1.5">
              {QUICK_QUESTIONS.map((question) => (
                <button
                  key={question}
                  onClick={() => handleQuickQuestion(question)}
                  className="text-xs px-2.5 py-1 bg-cyan/10 hover:bg-cyan/20 text-cyan border border-cyan/20 rounded-full transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          )}

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-border bg-card">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1 bg-muted border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-cyan/50 focus:border-cyan disabled:opacity-50"
              />
              <Button
                type="submit"
                size="icon"
                disabled={!input.trim() || isLoading}
                className="bg-gradient-to-r from-amber to-amber/90 hover:from-amber-light hover:to-amber text-blue-deep disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-[10px] text-muted-foreground text-center mt-2">
              Or call us at{' '}
              <a href="tel:+919500698927" className="text-cyan hover:underline">
                +91 95008 98927
              </a>
            </p>
          </form>
        </div>
      )}
    </>
  )
}
