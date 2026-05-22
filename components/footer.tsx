'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, Instagram, Motorbike } from 'lucide-react'
import { Icon } from '@iconify/react'

const serviceLinks = [
  'Laser Xerox (B&W & Colour)',
  'Large-Format A0/A1/A2 Prints',
  'A3 to A6 High-Quality Printing',
  '2D Building Plan Drafting',
  'Architectural Layout Designs',
  'E-Seva Online Gov Services',
  'Certificate Applications',
  'Bulk Printing & Xerox Discounts',
]

const workingHours = [
  { day: 'Mon - Sat', time: '9:00 AM - 8:00 PM', isOpen: true },
  // { day: 'Saturday', time: '9:00 AM - 7:00 PM', isOpen: true },
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
    <footer id="contact" className="relative bg-gradient-to-b from-[#0c1830] to-[#040812] dark:from-[#060d1b] dark:to-[#02050b] border-t border-border/80 overflow-hidden text-slate-300">
      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,200,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,200,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(0,200,255,0.04)_0%,transparent_70%)] pointer-events-none" />

      {/* Main Footer Content */}
      <div className="relative z-10 py-16 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="flex flex-col gap-5">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-[52px] h-[52px] bg-white rounded-lg flex items-center justify-center p-1 shadow-[0_0_14px_rgba(0,200,255,0.2)]">
                <Image
                  src="/logo.jpg"
                  alt="Namakkal Blueprint Logo"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-[11px] font-bold text-cyan tracking-[2px] uppercase leading-tight">
                  Namakkal
                </div>
                <div className="text-xl font-black text-white leading-tight">BLUE PRINT</div>
              </div>
            </div>

            <p className="text-[13px] text-slate-350 leading-relaxed max-w-[280px]">
              Namakkal's premium one-stop shop for building approvals, survey layout designs, all-size printing, and official E-Seva online services.
            </p>

            <p className="text-[13px] text-slate-350 leading-relaxed max-w-[280px]">
              Email: <a href="mailto:namakkalblueprint@gmail.com">namakkalblueprint@gmail.com</a>
            </p>

            {/* Google & Justdial ratings summary */}
            <div className="flex flex-col gap-2 bg-white/5 border border-cyan/15 rounded-xl p-4 max-w-[280px]">
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-xs font-bold text-white">Google Rating</span>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-black text-cyan">5.0 / 5</span>
                  <span className="text-amber-400 text-xs">★★★★★</span>
                </div>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="text-xs font-bold text-white">Justdial Rating</span>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-black text-cyan">4.5 / 5</span>
                  <span className="text-amber-400 text-xs">★★★★☆</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-2.5">
              {/* <Link
                href="#"
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-slate-350 hover:bg-cyan hover:border-cyan hover:text-blue-deep hover:-translate-y-0.5 hover:shadow-[0_4px_14px_rgba(0,200,255,0.3)] transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </Link> */}
              <Link
                href="https://www.instagram.com/namakkal__blueprint"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-slate-350 hover:bg-cyan hover:border-cyan hover:text-blue-deep hover:-translate-y-0.5 hover:shadow-[0_4px_14px_rgba(0,200,255,0.3)] transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                href="https://wa.me/919500898927"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-slate-350 hover:bg-cyan hover:border-cyan hover:text-blue-deep hover:-translate-y-0.5 hover:shadow-[0_4px_14px_rgba(0,200,255,0.3)] transition-all"
                aria-label="WhatsApp"
              >
              <Icon icon="ic:baseline-whatsapp" className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-sm font-extrabold text-white tracking-[2.5px] uppercase mb-4 relative">
              Services
              <span className="absolute bottom-[-8px] left-0 w-7 h-0.5 bg-gradient-to-r from-cyan to-transparent" />
            </h4>
            <ul className="flex flex-col gap-2.5 mt-7">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <Link
                    href="#services"
                    className="text-xs md:text-sm text-slate-350 hover:text-cyan transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-cyan text-sm">&rsaquo;</span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours Column */}
          <div>
            <h4 className="text-sm font-extrabold text-white tracking-[2.5px] uppercase mb-4 relative">
              Working Hours
              <span className="absolute bottom-[-8px] left-0 w-7 h-0.5 bg-gradient-to-r from-cyan to-transparent" />
            </h4>
            <div className="flex flex-col gap-2 mt-7">
              {workingHours.map((hour) => (
                <div
                  key={hour.day}
                  className="flex justify-between items-center text-xs md:text-sm py-1 border-b border-white/5"
                >
                  <span className="text-slate-350">{hour.day}</span>
                  <span className="text-white font-bold flex items-center gap-2">
                    {hour.time}
                    {/* {hour.isOpen && (
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                        OPEN
                      </span>
                    )} */}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-white/5 border border-cyan/15 rounded-xl p-4">
              <div className="flex items-center gap-3 text-xs md:text-sm">
                <Motorbike className="w-5 h-5 text-amber-light shrink-0" />
                <div>
                  <strong className="text-white block text-xs mb-0.5">5 KM Delivery Zone</strong>
                  <span className="text-slate-350 text-xs">For quick Xerox & A0-A6 prints</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Stores Column */}
          <div>
            <h4 className="text-sm font-extrabold text-white tracking-[2.5px] uppercase mb-4 relative">
              Our Stores
              <span className="absolute bottom-[-8px] left-0 w-7 h-0.5 bg-gradient-to-r from-cyan to-transparent" />
            </h4>

            <div className="flex flex-col gap-3.5 mt-7">
              {shopLocations.map((shop) => (
                <div
                  key={shop.name}
                  className={`bg-white/4 border border-cyan/10 rounded-xl p-3.5 transition-all hover:bg-cyan/5 ${shop.color === 'cyan' ? 'border-l-[3.5px] border-l-cyan' :
                    shop.color === 'amber' ? 'border-l-[3.5px] border-l-amber' :
                      'border-l-[3.5px] border-l-emerald-400'
                    }`}
                >
                  <div className={`text-xs font-bold tracking-[1.5px] uppercase mb-1 ${shop.color === 'cyan' ? 'text-cyan' :
                    shop.color === 'amber' ? 'text-amber' :
                      'text-emerald-400'
                    }`}>
                    {shop.name}
                  </div>
                  <div className="text-[11px] text-slate-350 leading-relaxed mb-2.5">
                    {shop.address}
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <Link
                      href={`tel:${shop.phone}`}
                      className="text-xs font-bold text-white hover:text-cyan flex items-center gap-1 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-cyan" />
                      {shop.phoneDisplay}
                    </Link>
                    <Link
                      href={`https://wa.me/${shop.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-emerald-400 flex items-center gap-1 transition-colors"
                    >
                                    <Icon icon="ic:baseline-whatsapp" className="w-4 h-4" />

                      WhatsApp
                    </Link>
                    <Link
                      href={shop.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-amber flex items-center gap-1 transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5" />
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
      <div className="relative z-10 border-t border-white/5 py-6 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs md:text-sm text-slate-400">
          <p>
            © {new Date().getFullYear()} <span className="text-cyan font-bold">Namakkal Blueprint</span>. All rights reserved.
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
            <span>&middot;</span>
            <span>Print &bull; Plan &bull; E-Seva</span>
            <span>&middot;</span>
            <span className="text-cyan font-bold">Namakkal, Tamil Nadu</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
