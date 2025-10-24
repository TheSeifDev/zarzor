"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen overflow-hidden">
      {/* Left side - Images with fade-up motion */}
      <div className="flex flex-col gap-4 p-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-64 md:h-1/2"
        >
          <Image
            src="/images/landscape1.jpg"
            alt="Landscape 1"
            fill
            className="object-cover border"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-full h-64 md:h-1/2"
        >
          <Image
            src="/images/landscape2.jpg"
            alt="Landscape 2"
            fill
            className="object-cover border"
          />
        </motion.div>
      </div>

      {/* Right side - Text content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col justify-between p-6 md:p-8 text-center md:text-left"
      >
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight brown-sugar"
        >
          Ahmed Eid<br /> portfolio
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-6 text-sm"
        >
          <div>
            <p>Ahmed Eid</p>
            <p>Photographer & App Developer</p>
          </div>
          <Link
            href="#contact"
            className="text-gray-400 underline font-bold uppercase hover:cursor-pointer"
          >
            Work with me
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
