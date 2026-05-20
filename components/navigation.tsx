'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#delivery', label: 'Delivery' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/90 shadow-[0_4px_30px_rgba(0,200,255,0.06)] border-b border-border/80'
          : 'bg-background/70'
      } backdrop-blur-xl border-b border-border/40`}
    >
      {/* Gradient line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent opacity-80" />

      <div className="flex items-center justify-between px-4 md:px-8 lg:px-12 h-[70px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 flex items-center justify-center scale-1.5">
            <Image
              src="/logo.jpeg"
              alt="Namakkal Blueprint Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[11px] font-bold text-cyan tracking-[3.5px] uppercase">
              Namakkal
            </span>
            <span className="text-xl font-extrabold text-foreground tracking-wide group-hover:text-primary transition-colors">
              BLUE PRINT
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative text-[14px] font-bold text-muted-foreground hover:text-foreground tracking-wide uppercase transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-[-4px] left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button & Toggle */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          
          <Button
            asChild
            className="hidden sm:inline-flex bg-gradient-to-r from-amber to-amber-light hover:from-amber-light hover:to-amber text-blue-deep font-bold text-sm tracking-wide uppercase px-5 py-2.5 rounded shadow-[0_4px_14px_rgba(255,184,0,0.25)] hover:shadow-[0_6px_20px_rgba(255,184,0,0.4)] hover:-translate-y-0.5 transition-all cursor-pointer"
          >
            <Link href="https://wa.me/919500698927" target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 border-b border-border/80 backdrop-blur-xl shadow-lg">
          <ul className="flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-6 py-3 text-[14px] font-bold text-muted-foreground hover:text-foreground hover:bg-muted/50 tracking-wide uppercase transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="px-4 pt-2">
              <Button
                asChild
                className="w-full bg-gradient-to-r from-amber to-amber-light text-blue-deep font-bold text-sm tracking-wide uppercase"
              >
                <Link href="https://wa.me/919500698927" target="_blank" rel="noopener noreferrer">
                  WhatsApp Us
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
