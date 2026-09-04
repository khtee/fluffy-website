import React, { useState } from 'react'
import { Check, Maximize2, X, Cat, Sparkles, Ruler, Users, ChevronRight, Eye } from 'lucide-react'

export default function Rooms({ onSelectRoom }) {
  const [activeModalImage, setActiveModalImage] = useState(null)

  const rooms = [
    {
      id: 'standard',
      name: 'Standard Room',
      subtitle: 'Cozy Private Cabin Suite',
      badge: 'Most Popular',
      badgeColor: 'bg-brand-pink text-white',
      themeColor: 'pink',
      price: 25,
      extraCatPrice: 10,
      maxCats: 2,
      dimensions: 'L81cm × W62cm × H81cm',
      image: './images/standard-room.jpg',
      flyer: './images/flyer-standard.jpg',
      description: 'A cozy wooden cabin suite featuring warm ambient lighting, jumping ledge, and private sanctuary. Perfect for solo adventurers or paired bonded buddies.',
      features: [
        'Can fit up to 2 cats',
        'Warm ambient LED lighting & climbing ledge',
        'Smart Heart premium kibbles included',
        'Dust-free Tofu litter provided',
        'Continuous filtered drinking water',
        '15–30 min daily dedicated playtime',
        '24/7 ventilation fan & HEPA air purifier',
        'Daily photos & videos via WhatsApp',
        'Sanitization & cleaning twice daily',
      ],
      note: 'Additional RM10/night for 2nd cat',
    },
    {
      id: 'deluxe',
      name: 'Deluxe Room',
      subtitle: 'Spacious Open Playpen Suite',
      badge: 'Spacious & Multi-Cat',
      badgeColor: 'bg-brand-blue text-white',
      themeColor: 'blue',
      price: 35,
      extraCatPrice: 10,
      maxCats: 4,
      dimensions: '105cm × 105cm × 70cm',
      image: './images/deluxe-room.jpg',
      flyer: './images/flyer-deluxe.jpg',
      description: 'An expansive playpen enclosure with rich wood flooring. Provides plenty of open floor space for active cats or families with up to four feline members.',
      features: [
        'Can fit up to 4 cats comfortably',
        'Spacious open layout on wood flooring',
        'Smart Heart premium kibbles included',
        'Dust-free Tofu litter provided',
        'Continuous filtered drinking water',
        '15–30 min daily dedicated playtime',
        '24/7 ventilation fan & HEPA air purifier',
        'Daily photos & videos via WhatsApp',
        'Sanitization & cleaning twice daily',
      ],
      note: 'Additional RM10/night per cat (2nd cat onwards)',
    },
  ]

  const handleBookRoom = (roomId) => {
    if (onSelectRoom) {
      onSelectRoom(roomId)
    }
    const calcElement = document.getElementById('calculator')
    if (calcElement) {
      calcElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="rooms" className="py-20 bg-brand-cream-soft border-y border-brand-cream-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-pink-soft text-brand-pink text-xs font-bold uppercase tracking-wider mb-3">
            <Cat className="w-3.5 h-3.5" />
            <span>Boarding Suites</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight">
            Designed For Comfort, Play & Total Relaxation
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-charcoal-muted leading-relaxed">
            Every suite is thoroughly disinfected before arrival and equipped with all boarding essentials. Choose the setup that best suits your cat’s personality and space needs.
          </p>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {rooms.map((room) => {
            const isPink = room.themeColor === 'pink'
            
            return (
              <div
                key={room.id}
                className={`group rounded-3xl bg-white border transition-all duration-300 flex flex-col overflow-hidden ${
                  isPink 
                    ? 'border-brand-pink-soft/80 shadow-soft hover:shadow-soft-hover' 
                    : 'border-brand-blue-light shadow-blue-soft hover:shadow-lg'
                }`}
              >
                {/* Image Container with Badges */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-brand-cream-border">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-extrabold tracking-wide uppercase ${room.badgeColor}`}>
                      {room.badge}
                    </span>
                    <button
                      onClick={() => setActiveModalImage(room.flyer)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 hover:bg-black/80 text-white text-xs font-semibold backdrop-blur-md transition-colors"
                      title="View official flyer package"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Official Flyer</span>
                    </button>
                  </div>

                  {/* Bottom Image Overlay Details */}
                  <div className="absolute bottom-4 left-4 right-4 text-white flex items-end justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-200 font-semibold">{room.subtitle}</p>
                      <h3 className="text-2xl font-bold text-white">{room.name}</h3>
                    </div>
                    <div className="text-right bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-2xl border border-white/20">
                      <span className="text-2xl sm:text-3xl font-black text-white">RM {room.price}</span>
                      <span className="text-xs font-normal text-gray-300 block">per night</span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div className="space-y-6">
                    
                    {/* Quick Specs Pills */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-2xl bg-brand-cream-soft border border-brand-cream-border flex items-center gap-3">
                        <Users className={`w-5 h-5 shrink-0 ${isPink ? 'text-brand-pink' : 'text-brand-blue'}`} />
                        <div>
                          <p className="text-[11px] font-semibold text-brand-charcoal-muted uppercase">Capacity</p>
                          <p className="text-xs sm:text-sm font-bold text-brand-charcoal">Up to {room.maxCats} Cats</p>
                        </div>
                      </div>
                      
                      <div className="p-3 rounded-2xl bg-brand-cream-soft border border-brand-cream-border flex items-center gap-3">
                        <Ruler className={`w-5 h-5 shrink-0 ${isPink ? 'text-brand-pink' : 'text-brand-blue'}`} />
                        <div>
                          <p className="text-[11px] font-semibold text-brand-charcoal-muted uppercase">Suite Size</p>
                          <p className="text-xs sm:text-sm font-bold text-brand-charcoal">{room.dimensions}</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-brand-charcoal-muted leading-relaxed">
                      {room.description}
                    </p>

                    {/* Features Checklist */}
                    <div className="space-y-2.5 pt-2 border-t border-brand-cream-border/70">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">Package Features:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {room.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs font-medium text-brand-charcoal-muted">
                            <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isPink ? 'text-brand-pink' : 'text-brand-blue'}`} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing Note */}
                    <div className="p-3 rounded-xl bg-brand-pink-light/50 border border-brand-pink-soft text-xs text-brand-charcoal font-medium">
                      💡 <strong>Extra Cat Policy:</strong> {room.note}.
                    </div>

                  </div>

                  {/* Actions */}
                  <div className="pt-6 mt-6 border-t border-brand-cream-border flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => handleBookRoom(room.id)}
                      className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-bold text-sm shadow-sm transition-all transform hover:-translate-y-0.5 ${
                        isPink 
                          ? 'bg-brand-pink hover:bg-brand-pink-hover shadow-soft' 
                          : 'bg-brand-blue hover:bg-brand-blue-hover shadow-blue-soft'
                      }`}
                    >
                      <span>Calculate Stay for {room.name}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    
                    <button
                      onClick={() => setActiveModalImage(room.flyer)}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl border border-brand-cream-border bg-white hover:bg-brand-cream-soft text-brand-charcoal font-semibold text-sm transition-colors"
                    >
                      <Maximize2 className="w-4 h-4 text-brand-charcoal-muted" />
                      <span>Flyer</span>
                    </button>
                  </div>

                </div>
              </div>
            )
          })}
        </div>

      </div>

      {/* Lightbox Modal for Official Flyers */}
      {activeModalImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveModalImage(null)}
        >
          <div 
            className="relative max-w-xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-2 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-3 border-b border-brand-cream-border">
              <span className="text-sm font-bold text-brand-charcoal">Official Boarding Package Flyer</span>
              <button
                onClick={() => setActiveModalImage(null)}
                className="p-1.5 rounded-full hover:bg-gray-100 text-brand-charcoal transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-2">
              <img
                src={activeModalImage}
                alt="Official Boarding Package Flyer"
                className="w-full h-auto rounded-2xl shadow-sm"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  )
}
