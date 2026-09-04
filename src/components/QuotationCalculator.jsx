import React, { useState, useMemo, useEffect } from 'react'
import { Calendar, Plus, Trash2, MessageCircle, Copy, Check, Info, Calculator, Shield, Sparkles, Cat } from 'lucide-react'

// Helper to format Date to YYYY-MM-DD
function toDateInputValue(date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

// Format date for readable display (e.g., "15 Sep 2026")
function formatReadableDate(dateString) {
  if (!dateString) return ''
  const parts = dateString.split('-')
  if (parts.length !== 3) return dateString
  const date = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]))
  return date.toLocaleDateString('en-MY', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
}

export default function QuotationCalculator({ preselectedRoom }) {
  const today = useMemo(() => new Date(), [])
  
  // Default check-in: tomorrow; Default check-out: 3 days after tomorrow
  const defaultCheckIn = useMemo(() => {
    const d = new Date(today)
    d.setDate(d.getDate() + 1)
    return toDateInputValue(d)
  }, [today])

  const defaultCheckOut = useMemo(() => {
    const d = new Date(today)
    d.setDate(d.getDate() + 4)
    return toDateInputValue(d)
  }, [today])

  const [checkInDate, setCheckInDate] = useState(defaultCheckIn)
  const [checkOutDate, setCheckOutDate] = useState(defaultCheckOut)
  const [rooms, setRooms] = useState([
    { id: 1, type: 'standard', cats: 1 }
  ])
  const [copied, setCopied] = useState(false)

  // Listen for room selection from Room showcase cards
  useEffect(() => {
    if (preselectedRoom) {
      setRooms((prev) => {
        const updated = [...prev]
        updated[0] = { ...updated[0], type: preselectedRoom, cats: 1 }
        return updated
      })
    }
  }, [preselectedRoom])

  // Calculate number of nights
  const numberOfNights = useMemo(() => {
    if (!checkInDate || !checkOutDate) return 0
    const start = new Date(checkInDate)
    const end = new Date(checkOutDate)
    const diffTime = end.getTime() - start.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays > 0 ? diffDays : 0
  }, [checkInDate, checkOutDate])

  // Calculate room rates and totals
  const calculation = useMemo(() => {
    const roomBreakdowns = rooms.map((room, index) => {
      const baseRate = room.type === 'standard' ? 25 : 35
      const extraCats = Math.max(0, room.cats - 1)
      const extraCatFee = extraCats * 10
      const ratePerNight = baseRate + extraCatFee
      const roomTotal = ratePerNight * numberOfNights

      return {
        roomIndex: index + 1,
        type: room.type,
        typeName: room.type === 'standard' ? 'Standard Room' : 'Deluxe Room',
        cats: room.cats,
        baseRate,
        extraCatFee,
        ratePerNight,
        roomTotal,
      }
    })

    const totalAmount = roomBreakdowns.reduce((acc, r) => acc + r.roomTotal, 0)
    // Excel formula: =_xlfn.CEILING.MATH(B7/2, 1) -> 50% deposit rounded up to nearest RM1
    const depositRequired = Math.ceil(totalAmount / 2)
    const balanceAtCheckIn = totalAmount - depositRequired

    return {
      roomBreakdowns,
      totalAmount,
      depositRequired,
      balanceAtCheckIn,
    }
  }, [rooms, numberOfNights])

  // Handle room type change
  const handleRoomTypeChange = (index, type) => {
    setRooms((prev) => {
      const updated = [...prev]
      const maxCats = type === 'standard' ? 2 : 4
      const currentCats = updated[index].cats
      updated[index] = {
        ...updated[index],
        type,
        cats: currentCats > maxCats ? maxCats : currentCats
      }
      return updated
    })
  }

  // Handle number of cats change
  const handleCatsChange = (index, cats) => {
    setRooms((prev) => {
      const updated = [...prev]
      updated[index] = {
        ...updated[index],
        cats: parseInt(cats, 10)
      }
      return updated
    })
  }

  // Add another room
  const handleAddRoom = () => {
    if (rooms.length >= 4) return
    setRooms((prev) => [
      ...prev,
      { id: Date.now(), type: 'standard', cats: 1 }
    ])
  }

  // Remove room
  const handleRemoveRoom = (index) => {
    if (rooms.length <= 1) return
    setRooms((prev) => prev.filter((_, i) => i !== index))
  }

  // Generate formatted WhatsApp inquiry message
  const whatsappMessage = useMemo(() => {
    const checkInStr = formatReadableDate(checkInDate)
    const checkOutStr = formatReadableDate(checkOutDate)
    
    let text = `Hello Fluffy Boarding! 🐾\nI would like to inquire about booking a stay for my cat(s):\n\n`
    text += `📅 Check-in: ${checkInStr}\n`
    text += `📅 Check-out: ${checkOutStr} (${numberOfNights} night${numberOfNights > 1 ? 's' : ''})\n\n`
    text += `🏠 Room Setup:\n`
    
    calculation.roomBreakdowns.forEach((r) => {
      text += `• Room ${r.roomIndex}: ${r.typeName} (${r.cats} cat${r.cats > 1 ? 's' : ''}) — RM${r.ratePerNight}/night\n`
    })

    text += `\n💰 Estimated Total: RM ${calculation.totalAmount}\n`
    text += `💳 50% Deposit: RM ${calculation.depositRequired}\n`
    text += `💵 Balance at Check-in: RM ${calculation.balanceAtCheckIn}\n\n`
    text += `📍 Location: Sentul, Kuala Lumpur\n`
    text += `Could you please confirm room availability for these dates? Thank you!`

    return text
  }, [checkInDate, checkOutDate, numberOfNights, calculation])

  const whatsappUrl = `https://wa.me/601154396129?text=${encodeURIComponent(whatsappMessage)}`

  const handleCopyQuote = () => {
    navigator.clipboard.writeText(whatsappMessage)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  // Minimum allowed checkout date (1 day after check-in)
  const minCheckOutDate = useMemo(() => {
    if (!checkInDate) return ''
    const d = new Date(checkInDate)
    d.setDate(d.getDate() + 1)
    return toDateInputValue(d)
  }, [checkInDate])

  return (
    <section id="calculator" className="py-20 bg-gradient-to-b from-white to-brand-cream-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-pink-light border border-brand-pink-soft text-brand-pink text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Instant Quotation Generator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-charcoal tracking-tight">
            Estimate Your Stay & Book Directly on WhatsApp
          </h2>
          <p className="mt-3 text-base sm:text-lg text-brand-charcoal-muted">
            Customize your dates, rooms, and number of cats. Review the instant transparent breakdown, then click to check availability with us on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-brand-cream-border shadow-elevated space-y-8">
            
            {/* 1. Date Selection */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-brand-charcoal flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-brand-pink" />
                  <span>1. Select Dates of Stay</span>
                </h3>
                {numberOfNights > 0 && (
                  <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-brand-pink-soft text-brand-pink">
                    {numberOfNights} Night{numberOfNights > 1 ? 's' : ''} Stay
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal-muted mb-1.5">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    min={toDateInputValue(today)}
                    value={checkInDate}
                    onChange={(e) => {
                      const newCheckIn = e.target.value
                      setCheckInDate(newCheckIn)
                      // Auto adjust checkout if it is on or before new check-in
                      if (newCheckIn >= checkOutDate) {
                        const d = new Date(newCheckIn)
                        d.setDate(d.getDate() + 1)
                        setCheckOutDate(toDateInputValue(d))
                      }
                    }}
                    className="w-full px-4 py-3 rounded-xl border border-brand-cream-border bg-brand-cream-soft/50 text-brand-charcoal font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-transparent transition-all"
                  />
                  <span className="text-[11px] text-brand-charcoal-light mt-1 block">
                    Check-in: 6:00 PM – 9:00 PM (Weekdays)
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal-muted mb-1.5">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    min={minCheckOutDate}
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-brand-cream-border bg-brand-cream-soft/50 text-brand-charcoal font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-transparent transition-all"
                  />
                  <span className="text-[11px] text-brand-charcoal-light mt-1 block">
                    Check-out: before 9:00 PM
                  </span>
                </div>
              </div>
            </div>

            {/* 2. Room Configuration */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-brand-charcoal flex items-center gap-2">
                  <Cat className="w-5 h-5 text-brand-pink" />
                  <span>2. Room Setup & Number of Cats</span>
                </h3>
                <span className="text-xs text-brand-charcoal-muted">
                  {rooms.length} Room{rooms.length > 1 ? 's' : ''} Selected
                </span>
              </div>

              <div className="space-y-4">
                {rooms.map((room, index) => {
                  const maxCats = room.type === 'standard' ? 2 : 4
                  const baseRate = room.type === 'standard' ? 25 : 35
                  const isStandard = room.type === 'standard'

                  return (
                    <div
                      key={room.id}
                      className="p-4 sm:p-5 rounded-2xl bg-brand-cream-soft/70 border border-brand-cream-border relative space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold uppercase tracking-wider text-brand-charcoal px-2.5 py-1 rounded-md bg-white border border-brand-cream-border">
                          Room {index + 1}
                        </span>

                        {rooms.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveRoom(index)}
                            className="inline-flex items-center gap-1 text-xs text-red-500 hover:text-red-700 font-semibold p-1 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Remove</span>
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Room Type Selector */}
                        <div>
                          <label className="block text-xs font-semibold text-brand-charcoal-muted mb-1">
                            Room Type
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            <button
                              type="button"
                              onClick={() => handleRoomTypeChange(index, 'standard')}
                              className={`px-3 py-2.5 rounded-xl text-xs font-bold border transition-all text-center ${
                                isStandard
                                  ? 'bg-brand-pink text-white border-brand-pink shadow-sm'
                                  : 'bg-white text-brand-charcoal border-brand-cream-border hover:border-brand-pink/50'
                              }`}
                            >
                              Standard
                              <span className="block text-[10px] font-normal opacity-90">RM25 (1-2 cats)</span>
                            </button>

                            <button
                              type="button"
                              onClick={() => handleRoomTypeChange(index, 'deluxe')}
                              className={`px-3 py-2.5 rounded-xl text-xs font-bold border transition-all text-center ${
                                !isStandard
                                  ? 'bg-brand-blue text-white border-brand-blue shadow-sm'
                                  : 'bg-white text-brand-charcoal border-brand-cream-border hover:border-brand-blue/50'
                              }`}
                            >
                              Deluxe
                              <span className="block text-[10px] font-normal opacity-90">RM35 (1-4 cats)</span>
                            </button>
                          </div>
                        </div>

                        {/* Number of Cats Selector */}
                        <div>
                          <label className="block text-xs font-semibold text-brand-charcoal-muted mb-1">
                            Number of Cats in this Room
                          </label>
                          <select
                            value={room.cats}
                            onChange={(e) => handleCatsChange(index, e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl border border-brand-cream-border bg-white text-brand-charcoal font-bold text-sm focus:outline-none focus:ring-2 focus:ring-brand-pink"
                          >
                            {Array.from({ length: maxCats }, (_, i) => i + 1).map((num) => (
                              <option key={num} value={num}>
                                {num} {num === 1 ? 'Cat' : 'Cats'} {num > 1 ? `(+RM${(num - 1) * 10}/nt)` : '(Base)'}
                              </option>
                            ))}
                          </select>
                          <span className="text-[10px] text-brand-charcoal-light mt-1 block">
                            {isStandard ? 'Max 2 cats per standard suite' : 'Max 4 cats per deluxe suite'}
                          </span>
                        </div>
                      </div>

                      {/* Room Pricing Sub-line */}
                      <div className="pt-2 border-t border-brand-cream-border/60 flex items-center justify-between text-xs text-brand-charcoal-muted">
                        <span>Nightly rate for this room:</span>
                        <span className="font-bold text-brand-charcoal">
                          RM {baseRate + Math.max(0, room.cats - 1) * 10} / night
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Add Room Button */}
              {rooms.length < 4 && (
                <button
                  type="button"
                  onClick={handleAddRoom}
                  className="mt-4 w-full py-3 px-4 rounded-xl border-2 border-dashed border-brand-pink/40 hover:border-brand-pink bg-brand-pink-light/30 hover:bg-brand-pink-light/60 text-brand-pink font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Another Room (Multi-Room Booking)</span>
                </button>
              )}
            </div>

            {/* Information Notice */}
            <div className="p-4 rounded-2xl bg-brand-cream-soft border border-brand-cream-border flex items-start gap-3 text-xs text-brand-charcoal-muted">
              <Info className="w-4 h-4 text-brand-pink shrink-0 mt-0.5" />
              <div>
                <strong>How pricing is calculated:</strong> Standard Room base rate is RM25/night. Deluxe Room base rate is RM35/night. Each additional cat in the same room is +RM10/night. A 50% deposit is required to lock in the reservation.
              </div>
            </div>

          </div>

          {/* Right Column: Instant Live Quotation Breakdown & WhatsApp Action */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-cream-border shadow-elevated space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-brand-cream-border">
                <div>
                  <h3 className="text-xl font-extrabold text-brand-charcoal">Quotation Summary</h3>
                  <p className="text-xs text-brand-charcoal-muted">Fluffy Boarding • Sentul, KL</p>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-brand-pink-soft flex items-center justify-center text-brand-pink">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              {/* Dates & Nights Overview */}
              <div className="p-4 rounded-2xl bg-brand-cream-soft border border-brand-cream-border space-y-2">
                <div className="flex justify-between text-xs font-semibold text-brand-charcoal">
                  <span className="text-brand-charcoal-muted">Dates:</span>
                  <span>{formatReadableDate(checkInDate)} → {formatReadableDate(checkOutDate)}</span>
                </div>
                <div className="flex justify-between text-xs font-semibold text-brand-charcoal">
                  <span className="text-brand-charcoal-muted">Duration:</span>
                  <span className="font-bold text-brand-pink">{numberOfNights} Night{numberOfNights > 1 ? 's' : ''}</span>
                </div>
              </div>

              {/* Line items for each room */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-charcoal-muted">Breakdown by Room:</h4>
                {calculation.roomBreakdowns.map((r) => (
                  <div key={r.roomIndex} className="flex items-center justify-between text-xs py-1.5 border-b border-dashed border-brand-cream-border">
                    <div>
                      <span className="font-bold text-brand-charcoal">Room {r.roomIndex} ({r.typeName})</span>
                      <span className="block text-[11px] text-brand-charcoal-muted">
                        {r.cats} Cat{r.cats > 1 ? 's' : ''} • RM{r.ratePerNight}/nt × {numberOfNights} nts
                      </span>
                    </div>
                    <span className="font-bold text-brand-charcoal">RM {r.roomTotal}</span>
                  </div>
                ))}
              </div>

              {/* Totals Section */}
              <div className="pt-2 space-y-3">
                <div className="flex justify-between items-center text-sm font-semibold text-brand-charcoal">
                  <span>Total Estimated Cost:</span>
                  <span className="text-2xl font-black text-brand-charcoal">RM {calculation.totalAmount}</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-brand-pink-light border border-brand-pink-soft flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-brand-pink block">50% Deposit Required</span>
                    <span className="text-[10px] text-brand-charcoal-muted">To secure your reservation</span>
                  </div>
                  <span className="text-lg font-black text-brand-pink">RM {calculation.depositRequired}</span>
                </div>

                <div className="flex justify-between text-xs text-brand-charcoal-muted px-1">
                  <span>Balance payable at check-in:</span>
                  <span className="font-semibold text-brand-charcoal">RM {calculation.balanceAtCheckIn}</span>
                </div>
              </div>

              {/* Direct WhatsApp Call to Action */}
              <div className="pt-4 border-t border-brand-cream-border space-y-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-brand-whatsapp hover:bg-brand-whatsapp-dark text-white font-extrabold text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Send Quote via WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyQuote}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-brand-cream-border hover:bg-brand-cream-soft text-brand-charcoal font-semibold text-xs transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-green-600">Quotation Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-brand-charcoal-muted" />
                      <span>Copy Quotation Summary</span>
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-brand-charcoal-muted">
                  Direct WhatsApp: <a href="tel:+601154396129" className="font-semibold text-brand-charcoal underline">+60 11-5439 6129</a>. No commitment required.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
