'use client'

import Link from 'next/link'
import { Icon } from '@iconify/react';

export function FloatingWhatsApp() {
  return (
    <Link
      href="https://wa.me/919500898927"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-28 right-7 z-50 w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#1aa44d] rounded-full flex items-center justify-center text-white shadow-[0_6px_28px_rgba(37,211,102,0.45)] hover:scale-110 hover:shadow-[0_8px_36px_rgba(37,211,102,0.6)] transition-all animate-float-bounce hover:animate-none"
      aria-label="Chat on WhatsApp"
    >
      <Icon icon="ic:baseline-whatsapp" className="w-9 h-9" />
    </Link>
  )
}
