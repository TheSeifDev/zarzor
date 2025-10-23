import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
      <div className="bg-black text-white flex flex-col justify-center px-10 py-16 space-y-6">
        <h2 className="text-6xl font-light leading-tight">
          <span className="block">GET IN</span>
          <span className="block">TOUCH</span>
        </h2>

        <div>
          <p className="text-lg font-light mb-1">Email:</p>
          <p className="text-gray-300">hello@reallygreatsite.com</p>
        </div>

        <div>
          <p className="text-lg font-light mb-1">Studio:</p>
          <p className="text-gray-300">123 Anywhere St.<br />Any City, ST 12345</p>
        </div>

        <Link href="#" className="uppercase text-sm font-semibold tracking-wide border-b border-white w-fit hover:text-gray-300">
          Open for Collabs
        </Link>
      </div>

      <div className="relative">
        <Image
          src="/images/boat.jpg"
          alt="Boat on dark water"
          fill
          className="object-cover grayscale"
        />
      </div>
    </footer>
  )
}

export default Footer
