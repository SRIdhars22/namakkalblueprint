'use client'

import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

export function FloatingWhatsApp() {
  return (
    <Link
      href="https://wa.me/919500698927"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-7 right-7 z-50 w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#1aa44d] rounded-full flex items-center justify-center text-white shadow-[0_6px_28px_rgba(37,211,102,0.45)] hover:scale-110 hover:shadow-[0_8px_36px_rgba(37,211,102,0.6)] transition-all animate-float-bounce hover:animate-none"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </Link>
  )
}
