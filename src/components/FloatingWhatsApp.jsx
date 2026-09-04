import React, { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

export default function FloatingWhatsApp() {
  const [dismissed, setDismissed] = useState(false)
  const whatsappUrl = `https://wa.me/601154396129?text=${encodeURIComponent('Hello Fluffy Boarding! 🐾 I would like to inquire about cat hotel boarding.')}`

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-none">
      
      {/* Friendly floating popup hint */}
      {!dismissed && (
        <div className="pointer-events-auto bg-white rounded-2xl p-3 shadow-xl border border-brand-cream-border max-w-xs flex items-start gap-2.5 animate-in fade-in slide-in-from-bottom-3 duration-300">
          <div className="w-2.5 h-2.5 rounded-full bg-brand-whatsapp mt-1 shrink-0 animate-ping" />
          <div className="flex-1 text-xs text-brand-charcoal">
            <p className="font-bold text-brand-charcoal">Need quick help?</p>
            <p className="text-brand-charcoal-muted text-[11px] mt-0.5">
              Chat with us on WhatsApp for fast quotation & room booking!
            </p>
          </div>
          <button
            onClick={() => setDismissed(true)}
            className="text-gray-400 hover:text-gray-600 p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* WhatsApp Floating Circle Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto w-14 h-14 rounded-full bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all transform hover:scale-110 active:scale-95 animate-pulse-ring"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    </div>
  )
}
