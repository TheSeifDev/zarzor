import Image from 'next/image'
import React from 'react'

const Previous = () => {
  return (
    <section id='work' className="grid grid-cols-1 md:grid-cols-2 min-h-screen gap-x-8 px-6  ">
      {/* Left side - Text */}
      <div className="flex flex-col justify-start p-10">
        <div className="text-8xl font-light tracking-tight mb-10 brown-sugar ">
          <h3>Previous<br />Picturing</h3>
        </div>
        <div className="relative w-[750px] h-[300px]">
          <Image
            src="/images/landscape3.jpg"
            alt="Landscape 3"
            fill
            className="object-cover rounded- border"
          />
          <p className="absolute -bottom-10 text-sm tracking-wide">
            2025 – Alexandria Sea
          </p>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="flex items-center justify-end relative">
        <div className="relative w-[75%] h-[86%] ">
          <Image
            src="/images/Sunset.jpg"
            alt="Sunset"
            fill
            className="object-cover "
          />
        </div>
        <p className="absolute -bottom-0 left-40 text-sm tracking-wide">
          2025 – Sunset
        </p>
      </div>
    </section>
  )
}

export default Previous