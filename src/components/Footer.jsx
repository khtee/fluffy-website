import React from 'react'
import { MapPin, Phone, MessageCircle, Heart } from 'lucide-react'

export default function Footer() {
  const whatsappUrl = `https://wa.me/601154396129?text=${encodeURIComponent('Hello Fluffy Boarding! 🐾')}`

  return (
    <footer className="bg-brand-charcoal text-white pt-16 pb-12 border-t border-brand-charcoal/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="./images/logo.png"
                alt="Fluffy Boarding Logo"
                className="w-12 h-12 rounded-2xl object-cover border border-white/20 shadow-md"
              />
              <span className="text-xl font-black tracking-tight text-white">
                Fluffy Boarding
              </span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              Sentul’s trusted boutique cat hotel. Providing safe, loving, hygienic, and stress-free boarding experiences for your feline companions.
            </p>
            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-whatsapp text-white text-xs font-bold shadow hover:bg-brand-whatsapp-dark transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>+60 11-5439 6129</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-peach">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#rooms" className="hover:text-brand-peach transition-colors">Room Suites & Pricing</a></li>
              <li><a href="#amenities" className="hover:text-brand-peach transition-colors">What’s Included</a></li>
              <li><a href="#calculator" className="hover:text-brand-peach transition-colors">Quotation Generator</a></li>
              <li><a href="#policies" className="hover:text-brand-peach transition-colors">Boarding Procedures & Policies</a></li>
              <li><a href="#location" className="hover:text-brand-peach transition-colors">Location & FAQs</a></li>
            </ul>
          </div>

          {/* Operating Times */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-peach">Hours & Location</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-pink shrink-0 mt-0.5" />
                <span>Sentul, Kuala Lumpur, Malaysia</span>
              </p>
              <div className="pt-1 text-xs space-y-1 text-gray-400">
                <p><strong className="text-gray-200">Weekdays (Mon – Fri):</strong> 6:00 PM – 9:00 PM</p>
                <p><strong className="text-gray-200">Weekends & Public Holidays:</strong> 8:00 AM – 9:00 PM</p>
                <p className="text-[11px] text-amber-400 mt-1">Checkouts after 9:00 PM incur 1 night charge</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Fluffy Boarding. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with <Heart className="w-3.5 h-3.5 text-brand-pink fill-brand-pink" /> for cats & cat lovers in Sentul, KL
          </p>
        </div>

      </div>
    </footer>
  )
}
