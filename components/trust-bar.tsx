'use client'

import { useRef, useEffect, useState } from 'react'

const trustItems = [
  'Building Approval',
  'Land Layout',
  'Survey Work',
  '2D Architectural Plans',
  'Large-Format Printing',
  'Money Transfer',
  'E-Seva Gov Docs',
  'Photoshop Design',
  'Bank Estimate',
  '8 KM Delivery',
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
    <div className="relative bg-blue-navy border-t-2 border-cyan border-b border-cyan/10 overflow-hidden">
      {/* Fade gradients */}
      <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-blue-navy to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-blue-navy to-transparent z-10 pointer-events-none" />

      <div
        ref={trackRef}
        className="flex items-center py-4 w-max animate-marquee"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Double the items for seamless loop */}
        {[...trustItems, ...trustItems].map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-2.5 px-7 whitespace-nowrap text-[15px] font-semibold text-muted-foreground tracking-wide hover:text-white transition-colors"
          >
            <span className="text-cyan text-base">&#9670;</span>
            {index === 0 || index === trustItems.length ? (
              <span className="flex items-center gap-1">
                <span className="text-amber">&#9733;</span> {item}
              </span>
            ) : (
              item
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
