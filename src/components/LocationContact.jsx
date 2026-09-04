import React, { useState } from 'react'
import { MapPin, Phone, MessageCircle, Clock, HelpCircle, ChevronDown, ChevronUp, Navigation, Sparkles } from 'lucide-react'

export default function LocationContact() {
  const [openFaq, setOpenFaq] = useState(0)

  const faqs = [
    {
      q: 'What items should I bring along during check-in?',
      a: 'Please bring your cat’s updated vaccination card and deflea record. Smart Heart kibbles, filtered water, and tofu litter are already provided! However, you are most welcome to bring your cat’s favorite home food/canned food, personal treats, and a familiar blanket or toy to make them feel instantly at home.',
    },
    {
      q: 'Can my cats stay together in the same room?',
      a: 'Yes, cats from the same household can share a room! The Standard Room comfortably fits up to 2 cats (RM25 base + RM10 for 2nd cat). The Deluxe Room is an expansive playpen suite that fits up to 4 cats (RM35 base + RM10 per extra cat).',
    },
    {
      q: 'How and when will I receive daily photo and video updates?',
      a: 'We send daily photo and video updates directly to your WhatsApp every evening. You’ll get to see them eating well, enjoying their 15–30 min dedicated playtime, and relaxing in their suite.',
    },
    {
      q: 'How does the booking and 50% deposit work?',
      a: 'Use our instant quotation generator above to calculate your estimated total. Click the WhatsApp button to verify room availability. Once confirmed, a 50% deposit locks in your suite. The remaining balance is payable upon check-in.',
    },
    {
      q: 'Where in Sentul are you located?',
      a: 'We are conveniently located in Sentul, Kuala Lumpur. For the privacy, quiet tranquility, and safety of our boarded guests, our full street address and building entrance details will be shared upon booking confirmation.',
    },
  ]

  const whatsappUrl = `https://wa.me/601154396129?text=${encodeURIComponent('Hello Fluffy Boarding! 🐾 I have an inquiry regarding cat boarding.')}`

  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-pink-light text-brand-pink text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit & Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight">
            Location & Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base sm:text-lg text-brand-charcoal-muted">
            Have questions about our suites, feeding habits, or drop-off timing? We’re always here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Location & Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Location Card */}
            <div className="p-7 rounded-3xl bg-brand-cream-soft border border-brand-cream-border shadow-soft space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-brand-pink flex items-center justify-center text-white shadow-soft">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-charcoal">Fluffy Boarding</h3>
                  <p className="text-xs text-brand-charcoal-muted">Sentul, Kuala Lumpur, Malaysia</p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-brand-charcoal">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-brand-cream-border">
                  <Clock className="w-5 h-5 text-brand-pink shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-brand-charcoal">Drop-off & Pick-up Hours</p>
                    <p className="text-xs text-brand-charcoal-muted mt-0.5">
                      <strong className="text-brand-charcoal">Mon – Fri:</strong> 6:00 PM – 9:00 PM<br />
                      <strong className="text-brand-charcoal">Sat, Sun & Public Holidays:</strong> 8:00 AM – 9:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-brand-cream-border">
                  <Phone className="w-5 h-5 text-brand-whatsapp shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-brand-charcoal">WhatsApp & Mobile Contact</p>
                    <a
                      href="https://wa.me/601154396129"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-brand-whatsapp hover:underline block mt-0.5"
                    >
                      +60 11-5439 6129
                    </a>
                  </div>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-white font-bold text-sm shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat Directly on WhatsApp</span>
              </a>
            </div>

            {/* Safety badge */}
            <div className="p-5 rounded-2xl bg-brand-pink-light/60 border border-brand-pink-soft text-xs text-brand-charcoal space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-brand-pink">
                <Sparkles className="w-4 h-4" />
                <span>Peace of Mind Guarantee</span>
              </div>
              <p className="text-brand-charcoal-muted leading-relaxed">
                We maintain an intimate boutique capacity to ensure every cat receives personal affection and attentive care.
              </p>
            </div>

          </div>

          {/* Right: FAQ Accordion */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-lg font-bold text-brand-charcoal flex items-center gap-2 mb-2">
              <HelpCircle className="w-5 h-5 text-brand-pink" />
              <span>Frequently Asked Questions</span>
            </h3>

            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-brand-cream-border bg-brand-cream-soft/40 overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-brand-cream-soft transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-brand-charcoal">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-brand-pink shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-brand-charcoal-muted shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-brand-charcoal-muted leading-relaxed border-t border-brand-cream-border/50 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
