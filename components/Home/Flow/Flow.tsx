import Image from 'next/image'
import React from 'react'

const Flow = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen gap-x-8 px-6 ">
      {/* Left side - Text */}
      <div className="flex items-center justify-center text-center md:text-left">
        <p className="brown-sugar text-5xl ml-20">
          The Al-Fath Mosque in Cairo rises with calm grace, where faith meets geometry in a harmony of light and form.
        </p>

      </div>

      {/* Right side - Image */}
      <div className="flex items-center justify-end relative">
        <div className="relative w-[75%] h-[90%] ">
          <Image
            src="/images/mosque.jpg"
            alt="mosque"
            fill
            className="object-cover "
          />
        </div>
        <p className="absolute -bottom-4 left-40 text-sm tracking-wide">
          2025 – Al-Fath Mosque
        </p>
      </div>
    </section>
  )
}

export default Flow
