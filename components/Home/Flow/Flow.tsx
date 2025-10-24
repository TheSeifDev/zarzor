"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Flow = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen gap-x-6 sm:gap-x-8 px-4 sm:px-6 overflow-hidden">
      {/* Left side - Text */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex items-center justify-center md:justify-start text-center md:text-left px-4 sm:px-8 md:px-0 mt-10 md:mt-0"
      >
        <p className="brown-sugar text-3xl sm:text-4xl md:text-5xl leading-snug md:ml-20">
          The Al-Fath Mosque in Cairo rises with calm grace, where faith meets geometry in a harmony of light and form.
        </p>
      </motion.div>

      {/* Right side - Image */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex items-center justify-center md:justify-end relative mt-10 md:mt-0"
      >
        <div className="relative w-[90%] sm:w-[85%] md:w-[75%] h-[250px] sm:h-[400px] md:h-[90%]">
          <Image
            src="/images/mosque.jpg"
            alt="mosque"
            fill
            className="object-cover"
          />
        </div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="absolute -bottom-6 md:bottom-0 left-1/2 md:left-40 transform -translate-x-1/2 md:translate-x-0 text-xs sm:text-sm tracking-wide"
        >
          2025 – Al-Fath Mosque
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Flow;
