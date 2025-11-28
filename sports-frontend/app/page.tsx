'use client';

import SportsHero from '@/components/HeroComponent'
import Navbar from '@/components/Navbar'
import F1JapanCard from '@/components/F1JapanCard'
import TopPackages from '@/components/TopPackages'
import ContactSection from '@/components/ContactSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import Footer from '@/components/Footer'
import "../app/globals.css"

export default function Home() {
  return (
    <div className='w-full h-full'>
      <Navbar />
      <div className="relative">
        <SportsHero />
        <F1JapanCard />
      </div>
      <TopPackages />
      <WhyChooseUs />
      <ContactSection />
      <Footer />

      <div className="fixed bottom-2 right-2 z-50">
        <a
          href={"https://wa.me/919588680004?text=Hello%20there"}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-12 h-12"
          />
        </a>

      </div>
    </div>
  )
}
