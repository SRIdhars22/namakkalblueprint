'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button 
        className="w-10 h-10 rounded-xl border border-border/60 bg-card/60 flex items-center justify-center text-muted-foreground opacity-50"
        aria-label="Toggle theme"
        disabled
      >
        <div className="w-5 h-5" />
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative w-10 h-10 rounded-xl border border-border/60 bg-card/60 text-foreground hover:text-cyan hover:border-cyan/50 hover:bg-cyan/5 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-[0_0_12px_rgba(0,200,255,0.15)] active:scale-95 group overflow-hidden"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <Sun className="absolute h-5 w-5 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 text-amber-500 group-hover:animate-pulse" />
        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 text-cyan group-hover:animate-pulse" />
      </div>
    </button>
  )
}
