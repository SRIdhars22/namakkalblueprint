import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Truck } from 'lucide-react'
import { Button } from '@/components/ui/button'

const stats = [
  { value: 'A0-A4', label: 'All Paper Sizes', accent: false },
  { value: '8KM', label: 'Delivery Radius', accent: true },
  { value: '2D', label: 'Building Plans', accent: false },
  { value: 'E-Gov', label: 'Online Services', accent: true },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-blue-deep flex items-center overflow-hidden pt-[100px] pb-16 px-4 md:px-8 lg:px-12">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 blueprint-grid opacity-100" />
      
      {/* Large Orb Glow */}
      <div className="absolute right-[-200px] top-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(0,200,255,0.1)_0%,rgba(30,79,194,0.06)_40%,transparent_70%)] pointer-events-none" />
      
      {/* Top Left Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(0,200,255,0.06)_0%,transparent_65%)] pointer-events-none" />
      
      {/* Bottom Amber Glow */}
      <div className="absolute bottom-20 left-[40%] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(255,184,0,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="max-w-2xl">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 bg-cyan/8 border border-cyan/30 rounded px-4 py-2 mb-6 animate-fade-up shadow-[0_0_20px_rgba(0,200,255,0.08)_inset]">
              <span className="w-1.5 h-1.5 bg-cyan rounded-full animate-pulse-glow shadow-[0_0_6px_var(--cyan)]" />
              <span className="text-xs font-semibold text-cyan tracking-[2px] uppercase">
                {"Namakkal's #1 Building Approval & Print Partner"}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6 animate-fade-up [animation-delay:0.1s] text-balance">
              Namakkal Blueprint –
              <br />
              Your Ultimate{' '}
              <span className="text-amber shadow-[0_0_30px_rgba(255,184,0,0.35)]">
                Print, Building Approval,
              </span>
              <br />
              <span className="text-amber">Survey, Layout, 2D Plan</span>
              <br />& E-Seva Partner
            </h1>

            {/* Subheading */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-8 animate-fade-up [animation-delay:0.2s]">
              Professional building approvals, survey & layout services, large-format printing, 
              precision 2D plans, and government E-Seva — all under one roof in Namakkal.
            </p>

            {/* Delivery Badge */}
            <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-amber/12 to-amber/4 border-[1.5px] border-amber/55 rounded px-4 py-2.5 mb-10 animate-fade-up [animation-delay:0.3s] shadow-[0_4px_20px_rgba(255,184,0,0.1)]">
              <Truck className="w-5 h-5 text-amber-light" />
              <span className="text-base font-bold text-amber-light">
                Delivery available up to <strong>8 KM radius</strong> for Xerox & Prints!
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-up [animation-delay:0.4s]">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-amber to-amber/90 hover:from-amber-light hover:to-amber text-blue-deep font-extrabold text-base tracking-wide uppercase px-8 py-6 rounded shadow-[0_4px_20px_rgba(255,184,0,0.4)] hover:shadow-[0_8px_30px_rgba(255,184,0,0.55)] hover:-translate-y-0.5 transition-all relative overflow-hidden group"
              >
                <Link href="https://wa.me/919500698927" target="_blank" rel="noopener noreferrer">
                  <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[100%] transition-[left] duration-400" />
                  Upload & Order Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent text-white font-bold text-base tracking-wide uppercase px-7 py-6 rounded border-[1.5px] border-white/20 hover:border-cyan hover:text-cyan hover:shadow-[0_0_20px_rgba(0,200,255,0.15)] backdrop-blur-sm transition-all"
              >
                <Link href="#services">
                  View Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Hero Visual - Stats Cards */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4 max-w-md ml-auto animate-fade-up [animation-delay:0.5s]">
              {/* Logo Card */}
              <div className="col-span-2 bg-white rounded-xl p-4 flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
                <Image
                  src="/logo.jpeg"
                  alt="Namakkal Blueprint Logo"
                  width={160}
                  height={80}
                  className="object-contain"
                />
              </div>
              
              {/* Stat Cards */}
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`bg-white/3 border border-cyan/15 rounded-xl p-5 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${
                    stat.accent
                      ? 'hover:bg-amber/5 hover:border-amber/30 hover:shadow-[0_8px_30px_rgba(255,184,0,0.15)]'
                      : 'hover:bg-cyan/5 hover:border-cyan/30 hover:shadow-[0_8px_30px_rgba(0,200,255,0.15)]'
                  }`}
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div
                    className={`text-4xl font-black leading-none ${
                      stat.accent ? 'text-amber shadow-[0_0_20px_rgba(255,184,0,0.4)]' : 'text-cyan shadow-[0_0_20px_rgba(0,200,255,0.4)]'
                    }`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-muted-foreground tracking-wide uppercase mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
