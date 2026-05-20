import Link from 'next/link'
import Image from 'next/image'
import { Phone, Truck, MessageCircle, MapPin, Instagram, Facebook } from 'lucide-react'

const serviceLinks = [
  'Laser Xerox (B&W & Colour)',
  'Large-Format A0/A1/A2',
  'A3 & A4 Printing',
  '2D Building Plans',
  'Architectural Layouts',
  'E-Seva Gov Documents',
  'Certificate Services',
  'Bulk Printing',
]

const workingHours = [
  { day: 'Mon - Fri', time: '9:00 AM - 8:00 PM', isOpen: true },
  { day: 'Saturday', time: '9:00 AM - 7:00 PM', isOpen: true },
  { day: 'Sunday', time: '10:00 AM - 4:00 PM', isOpen: false },
]

const shopLocations = [
  {
    name: 'Shop 1 — Salem Road',
    address: 'No 707 A, Murugan Kovil Bus Stop, Namakkal – Salem Road, Tamil Nadu 637001',
    phone: '+919500698927',
    phoneDisplay: '95006 98927',
    whatsapp: '919500698927',
    mapsUrl: 'https://maps.google.com/?q=No+707+A+Murugan+Kovil+Bus+Stop+Namakkal+Tamil+Nadu+637001',
    color: 'cyan',
  },
  {
    name: 'Shop 2 — Paramathi Road',
    address: 'Canara Bank, No.8/13, opp. Paramathi Road, S P Pudur, Thillaipuram, Namakkal, Tamil Nadu 637001',
    phone: '+919500928927',
    phoneDisplay: '95009 28927',
    whatsapp: '919500928927',
    mapsUrl: 'https://maps.google.com/?q=Canara+Bank+No+8+13+Paramathi+Road+SP+Pudur+Thillaipuram+Namakkal+Tamil+Nadu+637001',
    color: 'amber',
  },
  {
    name: 'Shop 3 — Paramathi to Namakkal Road',
    address: '6597+G44, S P Pudur, Thillaipuram, Namakkal, Tamil Nadu 637001',
    phone: '+917639898927',
    phoneDisplay: '76398 98927',
    whatsapp: '917639898927',
    mapsUrl: 'https://maps.google.com/?q=6597%2BG44+SP+Pudur+Thillaipuram+Namakkal+Tamil+Nadu+637001',
    color: 'green',
  },
]

export function Footer() {
  return (
    <footer id="contact" className="relative bg-blue-deep border-t-2 border-cyan overflow-hidden">
      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,200,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(0,200,255,0.025)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(0,200,255,0.05)_0%,transparent_70%)] pointer-events-none" />

      {/* Main Footer Content */}
      <div className="relative z-10 py-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-[52px] h-[52px] bg-white rounded-lg flex items-center justify-center p-1 shadow-[0_0_14px_rgba(0,200,255,0.2)]">
                <Image
                  src="/logo.jpeg"
                  alt="Namakkal Blueprint Logo"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-[11px] font-bold text-cyan tracking-[2px] uppercase">
                  Namakkal
                </div>
                <div className="text-xl font-black text-white">BLUE PRINT</div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-[280px]">
              Your trusted one-stop shop for all printing, 2D architectural plan services, and government E-Seva in Namakkal.
            </p>

            {/* Social Links */}
            <div className="flex gap-2.5 mb-4">
              <Link
                href="#"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-muted-foreground hover:bg-cyan hover:border-cyan hover:text-blue-deep hover:-translate-y-0.5 hover:shadow-[0_4px_14px_rgba(0,200,255,0.35)] transition-all"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.instagram.com/namakkal__blueprint"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-muted-foreground hover:bg-cyan hover:border-cyan hover:text-blue-deep hover:-translate-y-0.5 hover:shadow-[0_4px_14px_rgba(0,200,255,0.35)] transition-all"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                href="https://wa.me/919500698927"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-muted-foreground hover:bg-cyan hover:border-cyan hover:text-blue-deep hover:-translate-y-0.5 hover:shadow-[0_4px_14px_rgba(0,200,255,0.35)] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
              </Link>
            </div>

            {/* Instagram Follow Button */}
            <Link
              href="https://www.instagram.com/namakkal__blueprint"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-lg px-4 py-3 text-white hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-[0_6px_20px_rgba(253,29,29,0.35)]"
            >
              <Instagram className="w-5 h-5" />
              <div>
                <div className="text-sm font-bold">Follow us on Instagram</div>
                <div className="text-xs opacity-85">@namakkal_blueprint</div>
              </div>
            </Link>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-base font-extrabold text-white tracking-wide uppercase mb-4 relative">
              Services
              <span className="absolute bottom-[-8px] left-0 w-7 h-0.5 bg-gradient-to-r from-cyan to-transparent" />
            </h4>
            <ul className="flex flex-col gap-2.5 mt-6">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#services"
                    className="text-sm text-muted-foreground hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-cyan">&#8250;</span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours Column */}
          <div>
            <h4 className="text-base font-extrabold text-white tracking-wide uppercase mb-4 relative">
              Working Hours
              <span className="absolute bottom-[-8px] left-0 w-7 h-0.5 bg-gradient-to-r from-cyan to-transparent" />
            </h4>
            <div className="flex flex-col gap-2 mt-6">
              {workingHours.map((hour) => (
                <div
                  key={hour.day}
                  className="flex justify-between items-center text-sm py-1.5 border-b border-white/5"
                >
                  <span className="text-muted-foreground">{hour.day}</span>
                  <span className="text-white font-semibold flex items-center gap-2">
                    {hour.time}
                    {hour.isOpen && (
                      <span className="text-[11px] font-bold text-green-400">OPEN</span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-base font-extrabold text-white tracking-wide uppercase mb-4 relative">
              Contact Us
              <span className="absolute bottom-[-8px] left-0 w-7 h-0.5 bg-gradient-to-r from-cyan to-transparent" />
            </h4>
            <div className="flex flex-col gap-3.5 mt-6">
              {/* Phone */}
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <div className="w-8 h-8 bg-cyan/8 border border-cyan/20 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5 text-cyan" />
                </div>
                <div>
                  <strong className="text-white block text-xs mb-0.5">Phone / WhatsApp</strong>
                  <Link href="tel:+919500698927" className="text-cyan hover:text-cyan-light transition-colors">
                    +91 95006 98927
                  </Link>
                </div>
              </div>

              {/* Delivery */}
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <div className="w-8 h-8 bg-cyan/8 border border-cyan/20 rounded-lg flex items-center justify-center shrink-0">
                  <Truck className="w-3.5 h-3.5 text-cyan" />
                </div>
                <div>
                  <strong className="text-white block text-xs mb-0.5">Delivery Zone</strong>
                  Up to 8 KM from our stores
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <Link
              href="https://wa.me/919500698927"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#25D366] to-[#1ebe5e] hover:from-[#1ebe5e] hover:to-[#16a84e] text-white font-bold text-sm tracking-wide uppercase px-5 py-3 rounded-lg mt-4 shadow-[0_4px_16px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_22px_rgba(37,211,102,0.45)] hover:-translate-y-0.5 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </Link>

            {/* Shop Locations */}
            <div className="flex flex-col gap-3 mt-5">
              {shopLocations.map((shop) => (
                <div
                  key={shop.name}
                  className={`bg-white/4 border border-cyan/15 rounded-lg p-3 transition-all hover:bg-cyan/5 ${
                    shop.color === 'cyan' ? 'border-l-[3px] border-l-cyan' :
                    shop.color === 'amber' ? 'border-l-[3px] border-l-amber' :
                    'border-l-[3px] border-l-green-400'
                  }`}
                >
                  <div className={`text-xs font-bold tracking-[1.5px] uppercase mb-1 ${
                    shop.color === 'cyan' ? 'text-cyan' :
                    shop.color === 'amber' ? 'text-amber' :
                    'text-green-400'
                  }`}>
                    {shop.name}
                  </div>
                  <div className="text-xs text-muted-foreground leading-relaxed mb-2">
                    {shop.address}
                  </div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <Link
                      href={`tel:${shop.phone}`}
                      className="text-xs font-bold text-cyan flex items-center gap-1"
                    >
                      <Phone className="w-3 h-3" />
                      {shop.phoneDisplay}
                    </Link>
                    <Link
                      href={`https://wa.me/${shop.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-green-400 flex items-center gap-1"
                    >
                      <MessageCircle className="w-3 h-3" />
                      WhatsApp
                    </Link>
                    <Link
                      href={shop.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-amber flex items-center gap-1"
                    >
                      <MapPin className="w-3 h-3" />
                      Maps
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/5 py-5 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} <span className="text-cyan">Namakkal Blueprint</span>. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <Link
              href="https://www.instagram.com/namakkal__blueprint"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#fcb045] font-semibold hover:text-amber transition-colors"
            >
              @namakkal_blueprint
            </Link>
            <span>·</span>
            Print • Plan • E-Seva
            <span>·</span>
            <span className="text-cyan">Namakkal, Tamil Nadu</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
