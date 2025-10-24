import Image from 'next/image'
import React from 'react'

const Previous = () => {
  return (
    <section
      id="work"
      className="grid grid-cols-1 md:grid-cols-2 min-h-screen gap-x-8 px-4 sm:px-6"
    >
      {/* Left side - Text */}
      <div className="flex flex-col justify-start p-6 sm:p-8 md:p-10 text-center md:text-left">
        <div className="text-5xl sm:text-6xl md:text-8xl font-light tracking-tight mb-6 sm:mb-8 md:mb-10 brown-sugar">
          <h3>
            Previous
            <br />
            Picturing
          </h3>
        </div>

        <div className="relative w-full sm:w-[600px] md:w-[750px] h-[200px] sm:h-[250px] md:h-[300px] mx-auto md:mx-0">
          <Image
            src="/images/landscape3.jpg"
            alt="Landscape 3"
            fill
            className="object-cover border"
          />
          <p className="absolute -bottom-8 sm:-bottom-10 text-xs sm:text-sm tracking-wide w-full text-center md:text-left">
            2025 – Alexandria Sea
          </p>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="flex items-center justify-center md:justify-end relative mt-12 md:mt-0">
        <div className="relative w-[90%] sm:w-[80%] md:w-[75%] h-[250px] sm:h-[400px] md:h-[86%]">
          <Image
            src="/images/Sunset.jpg"
            alt="Sunset"
            fill
            className="object-cover"
          />
        </div>
        <p className="absolute -bottom-6 md:-bottom-0 left-1/2 md:left-40 transform -translate-x-1/2 md:translate-x-0 text-xs sm:text-sm tracking-wide">
          2025 – Sunset
        </p>
      </div>
    </section>
  )
}

export default Previous
