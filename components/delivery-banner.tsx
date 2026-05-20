import Link from 'next/link'
import { MapPin, Zap, MessageCircle, Home } from 'lucide-react'

const deliveryPills = [
  { icon: MapPin, label: 'Namakkal Store' },
  { icon: Zap, label: 'Quick Turnaround' },
  { icon: MessageCircle, label: 'WhatsApp Order' },
  { icon: Home, label: 'Home Delivery' },
]

export function DeliveryBanner() {
  return (
    <section
      id="delivery"
      className="relative py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-blue-navy via-blue-deep to-blue-deep/95 overflow-hidden"
    >
      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,200,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,200,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Center Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,200,255,0.07)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1">
            <p className="text-xs font-bold text-cyan tracking-[3px] uppercase mb-3">
              Fast Delivery Feature
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 text-balance">
              Doorstep Delivery
              <br />
              Within <span className="text-amber shadow-[0_0_28px_rgba(255,184,0,0.4)]">8 KM Radius</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-md mb-6">
              {"Don't have time to visit our store? We've got you covered. Place your order on WhatsApp and we'll deliver your prints, xerox copies, and documents straight to your doorstep — fast and reliably within Namakkal city."}
            </p>

            {/* Pills */}
            <div className="flex flex-wrap gap-3">
              {deliveryPills.map((pill) => {
                const Icon = pill.icon
                return (
                  <div
                    key={pill.label}
                    className="inline-flex items-center gap-2 bg-white/5 border border-cyan/20 rounded-full px-4 py-2 text-sm font-semibold text-cyan-light backdrop-blur-sm transition-all hover:bg-cyan/10 hover:border-cyan/40 hover:-translate-y-0.5"
                  >
                    <Icon className="w-4 h-4" />
                    {pill.label}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Visual Element */}
          <div className="flex flex-col items-center gap-3">
            {/* Spinning Ring */}
            <div className="relative w-[150px] h-[150px] rounded-full border-2 border-cyan/30 flex items-center justify-center shadow-[0_0_40px_rgba(0,200,255,0.1)] animate-spin-ring">
              {/* Inner dashed circle */}
              <div className="absolute inset-[10px] rounded-full border border-dashed border-cyan/20" />
              
              {/* Center Icon */}
              <div className="w-[108px] h-[108px] bg-gradient-to-br from-primary to-cyan rounded-full flex items-center justify-center text-4xl shadow-[0_0_30px_rgba(0,200,255,0.3)] animate-spin-ring [animation-direction:reverse]">
                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
                  <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2" />
                  <circle cx="7" cy="18" r="2" />
                  <path d="M15 18H9" />
                  <circle cx="17" cy="18" r="2" />
                </svg>
              </div>
            </div>

            {/* Radius Text */}
            <div className="text-center">
              <div className="text-3xl font-black text-amber shadow-[0_0_20px_rgba(255,184,0,0.4)]">
                8 KM
              </div>
              <div className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
                Delivery Zone
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
