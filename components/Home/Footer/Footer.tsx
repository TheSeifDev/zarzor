"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh] mt-10 overflow-hidden bg-black"
    >
      {/* Left side - Text */}
      <motion.section
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className=" text-white flex flex-col justify-center px-6 sm:px-10 py-12 sm:py-16 space-y-6 text-center md:text-left"
      >
        <p>Ahmed Eid</p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight brown-sugar"
        >
          <span className="block">GET IN</span>
          <span className="block">TOUCH</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-white px-0 sm:px-6 md:px-10 pt-6 sm:pt-8 space-y-6 md:ml-60"
        >
          <div>
            <p className="text-base sm:text-lg mb-1 font-semibold">Email:</p>
            <p className="text-gray-300 text-sm sm:text-base">
              ahmedromu4@gmail.com
            </p>
          </div>

          <div>
            <p className="text-base sm:text-lg mb-1 font-semibold">Location:</p>
            <p className="text-gray-300 text-sm sm:text-base">
              Egypt
              <br />
              Alexandria, 45&apos;s Street
            </p>
          </div>

          <Link
            href="#work"
            className="uppercase text-xs sm:text-sm font-semibold tracking-wide border-b border-white w-fit mx-auto md:mx-0 hover:text-gray-300"
          >
            Open for Collabs
          </Link>
        </motion.div>
      </motion.section>

      {/* Right side - Image */}
      <motion.section
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="relative w-full h-[300px] sm:h-[400px] md:h-auto"
      >
        <Image
          src="/images/boat.jpg"
          alt="Boat on dark water"
          fill
          className="object-cover grayscale"
        />
      </motion.section>
    </footer>
  );
};

export default Footer;
