import React from 'react'
import { MessageCircle, Calculator, Sparkles, ShieldCheck, Heart, Clock, Video, CheckCircle2 } from 'lucide-react'

export default function Hero() {
  const whatsappUrl = `https://wa.me/601154396129?text=${encodeURIComponent('Hello Fluffy Boarding! 🐾 I would like to check room availability for my cat.')}`

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-brand-cream to-white">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-peach/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 -ml-20 w-80 h-80 rounded-full bg-brand-pink/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-pink-light border border-brand-pink-soft text-brand-pink text-xs sm:text-sm font-bold shadow-sm">
              <Sparkles className="w-4 h-4 text-brand-pink" />
              <span>Boutique Cat Boarding in Sentul, KL</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-charcoal tracking-tight leading-[1.15]">
              A Cozy, Loving Home Away From Home For Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-peach">Furry Best Friends</span> 🐾
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-brand-charcoal-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Going on vacation or a business trip? Leave your fur-babies in caring, attentive hands. Enjoy pristine suites, 24/7 air purifiers, dedicated daily playtime, and frequent photo & video updates right on WhatsApp.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#calculator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-brand-pink hover:bg-brand-pink-hover text-white text-base font-bold shadow-soft hover:shadow-soft-hover transition-all transform hover:-translate-y-0.5"
              >
                <Calculator className="w-5 h-5" />
                <span>Calculate Your Stay</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-white hover:bg-brand-pink-light border-2 border-brand-pink text-brand-pink text-base font-bold shadow-sm hover:shadow transition-all"
              >
                <MessageCircle className="w-5 h-5 text-brand-whatsapp fill-brand-whatsapp" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-6 border-t border-brand-cream-border grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="p-3 rounded-xl bg-brand-cream-soft border border-brand-cream-border/60">
                <p className="text-xl font-extrabold text-brand-pink">RM 25<span className="text-xs font-normal text-brand-charcoal-muted">/night</span></p>
                <p className="text-xs font-medium text-brand-charcoal-muted mt-0.5">Starting rate</p>
              </div>
              <div className="p-3 rounded-xl bg-brand-cream-soft border border-brand-cream-border/60">
                <p className="text-xl font-extrabold text-brand-charcoal">2x Daily</p>
                <p className="text-xs font-medium text-brand-charcoal-muted mt-0.5">Sanitization & clean</p>
              </div>
              <div className="p-3 rounded-xl bg-brand-cream-soft border border-brand-cream-border/60">
                <p className="text-xl font-extrabold text-brand-charcoal">24/7 Air</p>
                <p className="text-xs font-medium text-brand-charcoal-muted mt-0.5">Purifier & ventilation</p>
              </div>
              <div className="p-3 rounded-xl bg-brand-cream-soft border border-brand-cream-border/60">
                <p className="text-xl font-extrabold text-brand-charcoal">Daily</p>
                <p className="text-xs font-medium text-brand-charcoal-muted mt-0.5">WhatsApp video updates</p>
              </div>
            </div>

          </div>

          {/* Right Hero Image Card Showcase */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Card */}
              <div className="relative rounded-3xl overflow-hidden bg-white p-3 shadow-elevated border border-brand-cream-border">
                <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-brand-cream-soft">
                  <img
                    src="./images/standard-room.jpg"
                    alt="Fluffy Boarding Standard Suite Cozy Wooden Cabin"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
                  
                  {/* Overlay Badge */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-brand-pink text-white text-xs font-extrabold uppercase tracking-wider mb-1">
                          Standard Room
                        </span>
                        <h2 className="text-lg font-bold">Cozy Wooden Suite</h2>
                      </div>
                      <span className="text-2xl font-black text-white bg-black/40 backdrop-blur-md px-3 py-1 rounded-xl">
                        RM25<span className="text-xs font-medium text-gray-200">/nt</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Secondary Mini Floating Card: Deluxe Room Preview */}
                <div className="mt-3 p-3 rounded-2xl bg-brand-blue-light/70 border border-brand-blue/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-brand-blue/30">
                      <img
                        src="./images/deluxe-room.jpg"
                        alt="Deluxe Room playpen setup"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brand-blue uppercase tracking-wide">Multi-Cat Option</p>
                      <h3 className="text-sm font-bold text-brand-charcoal">Deluxe Playpen Suite</h3>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-extrabold text-brand-blue">RM 35</span>
                    <span className="text-[10px] text-brand-charcoal-muted block">fits up to 4 cats</span>
                  </div>
                </div>

              </div>

              {/* Floating review/trust pill */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white rounded-2xl p-3.5 shadow-lg border border-brand-cream-border flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="w-10 h-10 rounded-xl bg-brand-pink-soft flex items-center justify-center text-brand-pink shrink-0">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-charcoal">Daily Video Updates</p>
                  <p className="text-[11px] text-brand-charcoal-muted">Sent straight to your WhatsApp</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
