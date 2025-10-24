import Image from 'next/image'
import React from 'react'

const Flow = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen gap-x-8 px-4 sm:px-6">
      {/* Left side - Text */}
      <div className="flex items-center justify-center md:justify-start text-center md:text-left px-4 sm:px-8 md:px-0 mt-10 md:mt-0">
        <p className="brown-sugar text-3xl sm:text-4xl md:text-5xl md:ml-20 leading-snug">
          The Al-Fath Mosque in Cairo rises with calm grace, where faith meets geometry in a harmony of light and form.
        </p>
      </div>

      {/* Right side - Image */}
      <div className="flex items-center justify-center md:justify-end relative mt-10 md:mt-0">
        <div className="relative w-[90%] sm:w-[80%] md:w-[75%] h-[250px] sm:h-[400px] md:h-[90%]">
          <Image
            src="/images/mosque.jpg"
            alt="mosque"
            fill
            className="object-cover"
          />
        </div>
        <p className="absolute -bottom-6 md:-bottom-4 left-1/2 md:left-40 transform -translate-x-1/2 md:translate-x-0 text-xs sm:text-sm tracking-wide">
          2025 – Al-Fath Mosque
        </p>
      </div>
    </section>
  )
}

export default Flow
