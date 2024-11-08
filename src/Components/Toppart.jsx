import React from 'react'
import TopNav from './TopNav'
import HeroSection from './HeroSection'

const Toppart = () => {
  return (
    <div className="fulltop-area w-full h-160 xs:h-175 sm:h-240 md:h-130 lg:h-148 xl:h-220 2xl:h-200 bg-Top bg-top-bg bg-cover bg-center">
      <TopNav />
      <HeroSection />
    </div>
  )
}

export default Toppart