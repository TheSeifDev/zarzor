import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh] mt-10">
      <section className="bg-black text-white flex flex-col justify-center px-10 py-16 space-y-6">
        <p>Ahmed Eid</p>
        <h2 className="text-6xl font-light leading-tight brown-sugar">
          <span className="block">GET IN</span>
          <span className="block">TOUCH</span>
        </h2>

      <div className="bg-black text-white px-10 pt-8 space-y-6 ml-50">
          <div>
            <p className="text-lg mb-1 font-semibold">Email:</p>
            <p className="text-gray-300">ahmedromu4@gmail.com</p>
          </div>

          <div>
            <p className="text-lg mb-1 font-semibold">Location: </p>
            <p className="text-gray-300">Egypt<br />Alexandria, ST 12345</p>
          </div>

          <Link href="#" className="uppercase text-sm font-semibold tracking-wide border-b border-white w-fit hover:text-gray-300">
            Open for Collabs
          </Link>
        </div>
      </section>

      <section className="relative">
        <Image
          src="/images/boat.jpg"
          alt="Boat on dark water"
          fill
          className="object-cover grayscale"
        />
      </section>
    </footer>
  )
}

export default Footer
