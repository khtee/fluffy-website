import React from 'react'
import { Clock, ShieldCheck, AlertCircle, FileText, Download, CalendarCheck, CheckCircle2 } from 'lucide-react'

export default function Policies() {
  return (
    <section id="policies" className="py-20 bg-brand-cream-soft border-y border-brand-cream-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-pink-soft text-brand-pink text-xs font-bold uppercase tracking-wider mb-3">
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>Guest Guidelines</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight">
            Boarding Procedures & House Policies
          </h2>
          <p className="mt-3 text-base sm:text-lg text-brand-charcoal-muted">
            To ensure the health, safety, and utmost comfort of every guest, we uphold clear boarding standards and hygienic protocols.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* 1. Pick up & Drop off Time */}
          <div className="p-7 rounded-3xl bg-white border border-brand-cream-border shadow-soft flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-brand-pink-light flex items-center justify-center text-brand-pink">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-charcoal-muted">Operating Hours</span>
                  <h3 className="text-xl font-bold text-brand-charcoal">Pick-up & Drop-off Times</h3>
                </div>
              </div>

              <div className="space-y-3.5 text-sm text-brand-charcoal">
                <div className="p-3.5 rounded-2xl bg-brand-cream-soft border border-brand-cream-border">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Weekdays (Mon – Fri):</span>
                    <span className="font-extrabold text-brand-pink px-2.5 py-0.5 rounded-lg bg-white border border-brand-pink-soft">
                      6:00 PM – 9:00 PM
                    </span>
                  </div>
                  <p className="text-xs text-brand-charcoal-muted mt-1">Evening drop-off and collection</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-brand-cream-soft border border-brand-cream-border">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Weekends & Public Holidays:</span>
                    <span className="font-extrabold text-brand-blue px-2.5 py-0.5 rounded-lg bg-white border border-brand-blue/30">
                      8:00 AM – 9:00 PM
                    </span>
                  </div>
                  <p className="text-xs text-brand-charcoal-muted mt-1">All-day flexible drop-off and collection</p>
                </div>

                <div className="flex items-start gap-2 pt-2 text-xs text-brand-charcoal-muted">
                  <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Late Checkout Notice:</strong> Checkouts after 9:00 PM will incur an additional 1-night charge.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Booking & Cancellation Policy */}
          <div className="p-7 rounded-3xl bg-white border border-brand-cream-border shadow-soft flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue-light flex items-center justify-center text-brand-blue">
                  <CalendarCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-charcoal-muted">Reservations</span>
                  <h3 className="text-xl font-bold text-brand-charcoal">Booking & Cancellation Terms</h3>
                </div>
              </div>

              <div className="space-y-3.5 text-sm text-brand-charcoal">
                <div className="p-3.5 rounded-2xl bg-brand-cream-soft border border-brand-cream-border">
                  <p className="font-bold text-brand-charcoal">Deposit & Payment</p>
                  <p className="text-xs text-brand-charcoal-muted mt-1">
                    A <strong>50% deposit</strong> is required to secure your room booking. The remaining balance must be paid upon check-in.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-brand-cream-soft border border-brand-cream-border">
                  <p className="font-bold text-brand-charcoal">Cancellation Policy</p>
                  <ul className="text-xs text-brand-charcoal-muted mt-1.5 space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                      <span><strong>≥ 3 Days Before Stay:</strong> 50% deposit is 100% fully refunded.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-pink shrink-0" />
                      <span><strong>&lt; 3 Days Before Stay:</strong> Deposit is converted into Boarding Credit valid for your next booking.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Vaccination Record */}
          <div className="p-7 rounded-3xl bg-white border border-brand-cream-border shadow-soft flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-brand-pink-light flex items-center justify-center text-brand-pink">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-charcoal-muted">Health Standard</span>
                  <h3 className="text-xl font-bold text-brand-charcoal">Vaccination & Health Record</h3>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-brand-charcoal-muted leading-relaxed">
                <p>
                  • <strong>Up-to-Date Vaccine Card:</strong> All feline guests must have valid and up-to-date vaccination records prior to boarding.
                </p>
                <p>
                  • <strong>Health Condition:</strong> Cats must be in healthy condition, free from wounds, open sores, fever, or infectious illnesses.
                </p>
                <p>
                  • <strong>Medication:</strong> If your cat is on specific oral vitamins or medication, please inform us in advance so we can assist.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Deflea & Tick Protection */}
          <div className="p-7 rounded-3xl bg-white border border-brand-cream-border shadow-soft flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue-light flex items-center justify-center text-brand-blue">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-charcoal-muted">Safety Protocol</span>
                  <h3 className="text-xl font-bold text-brand-charcoal">Deflea & Parasite Prevention</h3>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-brand-charcoal-muted leading-relaxed">
                <p>
                  • <strong>Deflea Verification:</strong> All guests must have documented deflea treatment within the recommended window.
                </p>
                <p>
                  • <strong>Vet Clinic Care:</strong> If fleas/ticks are found during boarding, owners may authorize us to take them to a partner vet clinic for professional treatment (service fee applies).
                </p>
                <p>
                  • <strong>Protective Isolation:</strong> Any cat found with parasites will be isolated in a dedicated room (standard suite size) to safeguard other guests; no refunds will be provided.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Download Procedure PDF Banner */}
        <div className="mt-10 p-6 rounded-3xl bg-white border border-brand-cream-border shadow-soft flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-pink-soft flex items-center justify-center text-brand-pink">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-brand-charcoal">Official Boarding Procedure Document</h4>
              <p className="text-xs text-brand-charcoal-muted">Read or save the complete official Fluffy Boarding procedure guidelines</p>
            </div>
          </div>

          <a
            href="./docs/fluffy-boarding-procedure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-cream-soft hover:bg-brand-pink-light border border-brand-cream-border text-brand-charcoal hover:text-brand-pink font-bold text-xs transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF Guide</span>
          </a>
        </div>

      </div>
    </section>
  )
}
