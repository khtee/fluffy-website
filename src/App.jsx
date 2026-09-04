import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Rooms from './components/Rooms'
import Amenities from './components/Amenities'
import QuotationCalculator from './components/QuotationCalculator'
import Policies from './components/Policies'
import LocationContact from './components/LocationContact'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Footer from './components/Footer'

export default function App() {
  const [selectedRoomForCalc, setSelectedRoomForCalc] = useState(null)

  const handleSelectRoom = (roomId) => {
    setSelectedRoomForCalc(roomId)
  }

  return (
    <div className="min-h-screen flex flex-col bg-brand-cream text-brand-charcoal">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Rooms onSelectRoom={handleSelectRoom} />
        <Amenities />
        <QuotationCalculator preselectedRoom={selectedRoomForCalc} />
        <Policies />
        <LocationContact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
