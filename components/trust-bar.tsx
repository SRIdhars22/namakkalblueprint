'use client'

import { useRef, useEffect, useState } from 'react'

const trustItems = [
  'Google Rating: 5.0/5 ★★★★★',
  'Building Approval Specialist',
  'Justdial Rating: 4.5/5 ★★★★☆',
  'Land Layout Plans',
  '8 KM Doorstep Delivery',
  'Survey Work & Demarcation',
  '2D Architectural Plans',
  'Large-Format A0-A4 Printing',
  'E-Seva Government Services',
  'Money Transfer Support',
  'Bank Estimates & Valuation',
]

export function TrustBar() {
  const [isHovered, setIsHovered] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    if (isHovered) {
      track.style.animationPlayState = 'paused'
    } else {
      track.style.animationPlayState = 'running'
    }
  }, [isHovered])

  return (
    <div className="relative bg-muted/30 border-y border-border/80 overflow-hidden">
      {/* Fade gradients */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div
        ref={trackRef}
        className="flex items-center py-4.5 w-max animate-marquee"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Double the items for seamless loop */}
        {[...trustItems, ...trustItems].map((item, index) => {
          const isGoogle = item.includes('Google')
          const isJustdial = item.includes('Justdial')
          
          return (
            <div
              key={`${item}-${index}`}
              className="flex items-center gap-2.5 px-8 whitespace-nowrap text-[14px] font-bold text-muted-foreground tracking-wide hover:text-foreground transition-colors cursor-default"
            >
              <span className="text-cyan text-sm">&#9670;</span>
              {isGoogle ? (
                <span className="flex items-center gap-1">
                  <span className="font-extrabold text-blue-500">Google:</span>
                  <span className="text-foreground">{item.replace('Google Rating:', '')}</span>
                </span>
              ) : isJustdial ? (
                <span className="flex items-center gap-1">
                  <span className="font-extrabold text-orange-500">Justdial:</span>
                  <span className="text-foreground">{item.replace('Justdial Rating:', '')}</span>
                </span>
              ) : (
                item
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
