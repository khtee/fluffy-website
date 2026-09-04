import React from 'react'
import { Video, Wind, Sparkles, HeartHandshake, Utensils, Box, ShieldCheck, Smile } from 'lucide-react'

export default function Amenities() {
  const perks = [
    {
      icon: Video,
      title: 'Daily WhatsApp Photo & Video Updates',
      desc: 'Never miss a moment! We send daily personalized videos and photos right to your phone so you can see your kitty relaxing, playing, and eating happily.',
      color: 'text-brand-pink bg-brand-pink-light border-brand-pink-soft',
    },
    {
      icon: Wind,
      title: '24/7 Fan & HEPA Air Purifier',
      desc: 'A calm, climate-controlled environment with continuous ventilation and multi-stage air purification keeping the room fresh, cool, and allergen-free.',
      color: 'text-brand-blue bg-brand-blue-light border-brand-blue/20',
    },
    {
      icon: Sparkles,
      title: 'Sanitization & Cleaning 2x Daily',
      desc: 'Hygiene is our top priority. Litter boxes are scooped twice daily and living areas are sanitized with pet-safe hospital-grade disinfectants.',
      color: 'text-brand-pink bg-brand-pink-light border-brand-pink-soft',
    },
    {
      icon: HeartHandshake,
      title: '15–30 Mins Supervised Daily Playtime',
      desc: 'Every cat receives dedicated one-on-one attention, gentle brushing, interactive laser/wand play, and plenty of loving cuddles.',
      color: 'text-brand-blue bg-brand-blue-light border-brand-blue/20',
    },
    {
      icon: Utensils,
      title: 'Smart Heart Kibbles & Filtered Water',
      desc: 'Nutritious Smart Heart kibbles and fresh filtered drinking water are supplied. You are also welcome to bring your cat’s preferred canned food or dry diet!',
      color: 'text-brand-pink bg-brand-pink-light border-brand-pink-soft',
    },
    {
      icon: Box,
      title: 'Premium Tofu Cat Litter',
      desc: 'We provide gentle, natural, 99.9% dust-free tofu litter that is soft on kitty paws and highly absorbent for optimal comfort.',
      color: 'text-brand-blue bg-brand-blue-light border-brand-blue/20',
    },
  ]

  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-peach-light text-brand-charcoal text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-pink" />
            <span>All-Inclusive Boarding</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight">
            Everything Your Cat Needs For A Stress-Free Stay
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-charcoal-muted leading-relaxed">
            Every guest at Fluffy Boarding receives VIP treatment. No surprise fees — these premium amenities are included in both Standard and Deluxe room packages.
          </p>
        </div>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {perks.map((perk, idx) => {
            const IconComponent = perk.icon
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-brand-cream-soft/60 border border-brand-cream-border hover:border-brand-pink/30 hover:bg-white hover:shadow-soft transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${perk.color}`}>
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-charcoal mb-2.5 group-hover:text-brand-pink transition-colors">
                    {perk.title}
                  </h3>
                  <p className="text-sm text-brand-charcoal-muted leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
