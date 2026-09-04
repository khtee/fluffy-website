import React, { useState } from 'react'
import { MessageCircle, Menu, X, MapPin, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Room Suites', href: '#rooms' },
    { name: 'What’s Included', href: '#amenities' },
    { name: 'Quote Calculator', href: '#calculator' },
    { name: 'Boarding Guide', href: '#policies' },
    { name: 'Location & Hours', href: '#location' },
  ]

  const whatsappNumber = '601154396129'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello Fluffy Boarding! 🐾 I would like to inquire about cat hotel boarding.')}`

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-brand-cream-border transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-brand-pink to-brand-peach flex items-center justify-center shadow-soft group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6 text-white" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 78C42 78 35 71 36 62C37 53 44 48 50 48C56 48 63 53 64 62C65 71 58 78 50 78Z" />
                <circle cx="31" cy="41" r="7.5" />
                <circle cx="44" cy="32" r="7.5" />
                <circle cx="56" cy="32" r="7.5" />
                <circle cx="69" cy="41" r="7.5" />
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-brand-charcoal group-hover:text-brand-pink transition-colors">
                  Fluffy Boarding
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-brand-pink-soft text-brand-pink">
                  Cat Hotel
                </span>
              </div>
              <span className="text-xs font-medium text-brand-charcoal-muted flex items-center gap-1">
                <MapPin className="w-3 h-3 text-brand-pink inline" /> Sentul, Kuala Lumpur
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-brand-charcoal-muted hover:text-brand-pink transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* WhatsApp CTA Action */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-white text-sm font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-brand-charcoal hover:bg-brand-pink-light transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-brand-cream-border bg-white px-4 pt-3 pb-6 space-y-3 shadow-elevated">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-semibold text-brand-charcoal hover:bg-brand-pink-light hover:text-brand-pink transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-whatsapp text-white font-bold text-sm shadow-md"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Chat on WhatsApp (+6011-5439 6129)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
