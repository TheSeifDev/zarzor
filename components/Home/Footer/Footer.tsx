import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-[#f5f5f5] h-[600px] w-full flex justify-between px-20 py-10'>
      <section>
        <div className=''>
          <p>Ahmed Eid</p>
          <h3 className='uppercase'>Get In Touch</h3>
        </div>
        <div>
          <div className=''>
            <h4>Email:</h4>
            <p>ahmedromu4@gmail.com</p>
          </div>
          <div className=''>
            <h4>Studio:</h4>
            <p></p>
          </div>
          <Link href="#" className='text-gray-300 underline font-bold uppercase hover:cursor-pointer'>Open for collabs</Link>
        </div>
      </section>
      <section>
        <image  />
      </section>
    </footer>
  )
}

export default Footer