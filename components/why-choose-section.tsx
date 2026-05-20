import Link from 'next/link'
import Image from 'next/image'
import { Zap, Target, Shield, DollarSign, Landmark, Smartphone } from 'lucide-react'
import { Button } from '@/components/ui/button'

const features = [
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description: 'Most orders processed and ready within hours, not days.',
  },
  {
    icon: Target,
    title: 'Precision Output',
    description: 'Accurate scaled prints and drafts for professional use.',
  },
  {
    icon: Shield,
    title: 'Trusted & Secure',
    description: 'Your documents handled with complete privacy and care.',
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: 'Competitive rates for individuals, businesses, and bulk.',
  },
  {
    icon: Landmark,
    title: 'Gov. Expertise',
    description: 'Experienced staff for all TN government online services.',
  },
  {
    icon: Smartphone,
    title: 'WhatsApp Orders',
    description: 'Send files directly on WhatsApp for the fastest service.',
  },
]

const panelStats = [
  { value: 'A0-A4', label: 'All Paper Sizes' },
  { value: '8 KM', label: 'Delivery Coverage' },
  { value: '3-in-1', label: 'Print+Plan+ESeva' },
  { value: 'Fast', label: 'WhatsApp Orders' },
]

export function WhyChooseSection() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2.5 text-xs font-bold text-cyan tracking-[3px] uppercase mb-4">
              <span className="w-7 h-0.5 bg-gradient-to-r from-cyan to-cyan/30" />
              Why Us
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight mb-4 text-balance">
              Why Choose
              <br />
              <span className="text-primary">Namakkal Blueprint?</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-md mb-10">
              We combine professional quality, quick service, and trusted government expertise to serve every customer need.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-5">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <div
                    key={feature.title}
                    className="relative bg-secondary rounded-lg border-l-[3px] border-primary p-5 transition-all duration-300 hover:bg-primary/5 hover:border-cyan hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(30,79,194,0.1)] group overflow-hidden"
                  >
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                    <div className="relative z-10">
                      <Icon className="w-6 h-6 text-primary mb-2.5" />
                      <h4 className="text-base font-extrabold text-foreground mb-1.5">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Panel */}
          <div className="bg-gradient-to-br from-blue-navy to-blue-deep rounded-2xl p-10 border border-cyan/10 relative overflow-hidden shadow-[0_24px_80px_rgba(10,22,40,0.25)]">
            {/* Blueprint grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,200,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,200,255,0.04)_1px,transparent_1px)] bg-[size:30px_30px]" />

            {/* Top right glow */}
            <div className="absolute top-[-60px] right-[-60px] w-[200px] h-[200px] bg-[radial-gradient(circle,rgba(0,200,255,0.1)_0%,transparent_70%)] pointer-events-none" />

            <div className="relative z-10">
              {/* Logo */}
              <div className="flex items-center gap-3.5 mb-8">
                <div className="w-[72px] h-[72px] bg-white rounded-xl flex items-center justify-center p-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.3),0_0_0_1px_rgba(0,200,255,0.2)]">
                  <Image
                    src="/logo.jpeg"
                    alt="Namakkal Blueprint Logo"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-xs font-bold text-cyan tracking-[2px] uppercase">
                    Namakkal
                  </div>
                  <div className="text-2xl font-black text-white">BLUE PRINT</div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-7">
                {panelStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/4 border border-cyan/10 rounded-lg p-4 text-center transition-all duration-300 hover:bg-cyan/7 hover:border-cyan/25 hover:-translate-y-0.5"
                  >
                    <div className="text-3xl font-black text-cyan shadow-[0_0_16px_rgba(0,200,255,0.4)]">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                asChild
                className="w-full bg-gradient-to-r from-amber to-amber/90 hover:from-amber-light hover:to-amber text-blue-deep font-extrabold text-base tracking-wide uppercase py-6 rounded-lg shadow-[0_4px_20px_rgba(255,184,0,0.35)] hover:shadow-[0_6px_28px_rgba(255,184,0,0.5)] transition-all relative overflow-hidden group"
              >
                <Link href="https://wa.me/919500698927" target="_blank" rel="noopener noreferrer">
                  <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[100%] transition-[left] duration-400" />
                  Send Your File Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
