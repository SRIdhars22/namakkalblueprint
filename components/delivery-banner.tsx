import Link from 'next/link'
import { MapPin, Zap, MessageCircle, Home, Motorbike } from 'lucide-react'
import { Icon as IconifyIcon } from '@iconify/react'  // ✅ renamed to avoid conflict

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
      className="relative py-20 px-4 md:px-8 lg:px-12 bg-gradient-to-br from-[#0c1830] via-[#060c1a] to-[#03060f] dark:from-blue-navy dark:via-blue-deep dark:to-blue-deep/95 overflow-hidden border-y border-border/30"
    >
      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,200,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(0,200,255,0.035)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Center Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,200,255,0.06)_0%,transparent_70%)] pointer-events-none" />

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
              Within <span className="text-amber drop-shadow-[0_0_12px_rgba(255,184,0,0.3)]">5 KM Radius</span>
            </h2>
            <p className="text-sm md:text-base text-zinc-350 leading-relaxed max-w-md mb-6">
              {"Don't have time to visit our store? We've got you covered. Place your order on WhatsApp and we'll deliver your prints, xerox copies, and documents straight to your doorstep — fast and reliably within Namakkal city."}
            </p>

            {/* Pills */}
            <div className="flex flex-wrap gap-3">
              {deliveryPills.map((pill) => {
                const LucideIcon = pill.icon  // ✅ renamed to avoid shadowing IconifyIcon
                return (
                  <div
                    key={pill.label}
                    className="inline-flex items-center gap-2 bg-white/5 border border-cyan/20 rounded-full px-4 py-2 text-xs md:text-sm font-semibold text-cyan-light backdrop-blur-sm transition-all hover:bg-cyan/10 hover:border-cyan/40 hover:-translate-y-0.5"
                  >
                    {pill.label === 'WhatsApp Order'
                      ? <IconifyIcon icon="ic:baseline-whatsapp" className="w-4.5 h-4.5" />  // ✅ uses Iconify
                      : <LucideIcon className="w-4 h-4" />                               // ✅ renders Lucide directly
                    }
                    {pill.label}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Visual Element */}
          <div className="flex flex-col items-center gap-3">
            <div className="relative w-[150px] h-[150px] rounded-full border border-cyan/30 flex items-center justify-center shadow-[0_0_40px_rgba(0,200,255,0.06)]">
              <div className="absolute inset-[10px] rounded-full border border-dashed border-cyan/10" />
              <div className="w-[108px] h-[108px] bg-gradient-to-br from-primary to-cyan rounded-full flex items-center justify-center text-4xl shadow-[0_0_30px_rgba(0,200,255,0.2)]">
                <Motorbike className="w-16 h-16 text-white" />  {/* ✅ fixed typo */}
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-black text-amber drop-shadow-[0_0_12px_rgba(255,184,0,0.3)]">
                5 KM
              </div>
              <div className="text-xs font-semibold text-slate-350 tracking-wide uppercase">
                Delivery Zone
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}