import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Truck } from 'lucide-react'
import { Button } from '@/components/ui/button'

const stats = [
  { value: 'A0-A6', label: 'All Paper Sizes', accent: false },
  { value: '8KM', label: 'Delivery Radius', accent: true },
  { value: '2D', label: 'Building Plans', accent: false },
  { value: 'E-Gov', label: 'Online Services', accent: true },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-background flex items-center overflow-hidden pt-[110px] pb-16 px-4 md:px-8 lg:px-12">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 blueprint-grid opacity-100" />

      {/* Large Orb Glow */}
      <div className="absolute right-[-200px] top-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(0,200,255,0.08)_0%,rgba(30,79,194,0.04)_40%,transparent_70%)] pointer-events-none" />

      {/* Top Left Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(0,200,255,0.04)_0%,transparent_65%)] pointer-events-none" />

      {/* Bottom Amber Glow */}
      <div className="absolute bottom-20 left-[40%] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(255,184,0,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="max-w-2xl">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 bg-cyan/8 border border-cyan/30 rounded px-4 py-2 mb-6 animate-fade-up shadow-[0_0_20px_rgba(0,200,255,0.05)_inset]">
              <span className="w-1.5 h-1.5 bg-cyan rounded-full animate-pulse-glow shadow-[0_0_6px_var(--cyan)]" />
              <span className="text-sm font-bold text-cyan tracking-[2.5px] uppercase">
                {"Namakkal's #1 Building Approval & Print Partner"}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.15] tracking-wide mb-4 animate-fade-up [animation-delay:0.1s] text-balance">
              Namakkal Blueprint - Your Ultimate{' '}
              <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-amber to-amber-light">
                Building Approval, Survey, Layout, 2D Plan, Print
              </span>
              <br />
              & E-Seva Partner
            </h1>

            {/* Google & Justdial Badges */}
            <div className="flex flex-wrap items-center gap-4 mb-6 animate-fade-up [animation-delay:0.15s]">
              {/* Google Reviews */}
              <a
                href="https://maps.google.com/?q=No+707+A+Murugan+Kovil+Bus+Stop+Namakkal+Tamil+Nadu+637001"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-card/60 hover:bg-card border border-border/80 hover:border-cyan/40 rounded-xl px-4 py-2 transition-all duration-300 group shadow-sm active:scale-95"
              >
                <span className="font-bold tracking-tight text-[15px] select-none">
                  <span className="text-blue-500">G</span>
                  <span className="text-red-500">o</span>
                  <span className="text-yellow-500">o</span>
                  <span className="text-blue-500">g</span>
                  <span className="text-green-500">l</span>
                  <span className="text-red-500">e</span>
                </span>
                <div className="h-3 w-px bg-border" />
                <div className="flex items-center gap-1 text-sm font-bold text-foreground">
                  <span>5.0</span>
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="leading-none text-base">★</span>
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground font-normal ml-0.5 group-hover:text-cyan transition-colors">(150+ reviews)</span>
                </div>
              </a>

              {/* Justdial Ratings */}
              <a
                href="#contact"
                className="flex items-center gap-2.5 bg-card/60 hover:bg-card border border-border/80 hover:border-cyan/40 rounded-xl px-4 py-2 transition-all duration-300 group shadow-sm active:scale-95"
              >
                <span className="font-extrabold tracking-tight text-[15px] text-orange-500 select-none">
                  Justdial
                </span>
                <div className="h-3 w-px bg-border" />
                <div className="flex items-center gap-1 text-sm font-bold text-foreground">
                  <span>4.5</span>
                  <div className="flex items-center text-amber-500">
                    {[...Array(4)].map((_, i) => (
                      <span key={i} className="leading-none text-base">★</span>
                    ))}
                    <span className="text-muted-foreground/35 leading-none text-base">★</span>
                  </div>
                  <span className="text-xs text-muted-foreground font-normal ml-0.5 group-hover:text-cyan transition-colors">(220+ ratings)</span>
                </div>
              </a>
            </div>

            {/* Subheading */}
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mb-7 animate-fade-up [animation-delay:0.2s]">
              Professional building approvals, survey & layout services, large-format printing,
              precision 2D plans, and government E-Seva — all under one roof in Namakkal.
            </p>

            {/* Delivery Badge */}
            <div className="inline-flex items-center gap-2.5 bg-amber/8 dark:bg-amber/12 border border-amber/40 dark:border-amber/55 rounded-lg px-4 py-2.5 mb-8 animate-fade-up [animation-delay:0.25s] shadow-[0_4px_16px_rgba(255,184,0,0.06)]">
              <Truck className="w-5 h-5 text-amber-light animate-float-bounce" />
              <span className="text-sm md:text-base font-bold text-foreground">
                Delivery available up to <strong className="text-amber">8 KM radius</strong> for Xerox & Prints!
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-up [animation-delay:0.3s]">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-amber to-amber/90 hover:from-amber-light hover:to-amber text-blue-deep font-extrabold text-base tracking-wide uppercase px-8 py-6 rounded shadow-[0_4px_20px_rgba(255,184,0,0.3)] hover:shadow-[0_8px_30px_rgba(255,184,0,0.45)] hover:-translate-y-0.5 transition-all relative overflow-hidden group cursor-pointer"
              >
                <Link href="https://wa.me/919500898927" target="_blank" rel="noopener noreferrer">
                  <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[100%] transition-[left] duration-400" />
                  Upload & Order Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent text-foreground hover:bg-card font-bold text-base tracking-wide uppercase px-7 py-6 rounded border border-border/80 hover:border-cyan hover:text-cyan hover:shadow-[0_0_20px_rgba(0,200,255,0.08)] backdrop-blur-sm transition-all cursor-pointer"
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
            <div className="grid grid-cols-2 gap-4 max-w-md ml-auto animate-fade-up [animation-delay:0.4s]">

              {/* Logo Video Card */}
              <div className="col-span-2 bg-white dark:bg-card border border-border/60 rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(10,22,40,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source
                    src="https://res.cloudinary.com/drpx7xk1y/video/upload/v1779468506/Merge_videos_project_-_22_May_2026_at_21.53.41_w9gr0s.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>

              {/* Stat Cards */}
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`bg-card border border-border/80 rounded-xl p-5 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md ${stat.accent
                      ? 'hover:bg-amber/5 hover:border-amber/30'
                      : 'hover:bg-cyan/5 hover:border-cyan/30'
                    }`}
                  style={{ animationDelay: `${0.4 + index * 0.08}s` }}
                >
                  <div
                    className={`text-2xl font-bold leading-none ${stat.accent ? 'text-amber' : 'text-cyan'
                      }`}
                  >
                    {stat.value}
                  </div>

                  <div className="text-xs font-semibold text-muted-foreground tracking-wide uppercase mt-2">
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
