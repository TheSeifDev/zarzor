"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 min-h-screen px-4 sm:px-6 md:px-8 text-black mt-2 overflow-hidden">
      {/* Left side - Image */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative w-full h-[250px] sm:h-[350px] md:h-[600px]"
      >
        <Image
          src="/images/feet.jpg"
          alt="Photographer"
          fill
          className="object-cover border"
          priority
        />
      </motion.div>

      {/* Right side - Text */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="space-y-12 text-center md:text-left px-4 sm:px-6 md:px-0 mt-8 md:mt-0"
      >
        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-wide mb-6 brown-sugar">
            EXPERIENCE
          </h2>
          <div className="space-y-4 ml-0 sm:ml-12 md:ml-24">
            <div>
              <h3 className="text-base sm:text-lg font-medium">
                Nabd Masr – FlutterFlow Developer
              </h3>
              <p className="text-gray-700 text-sm">
                January 2024 – Present , Remote
              </p>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-medium">
                Wasla Tech - Team Leader
              </h3>
              <p className="text-gray-700 text-sm">
                October 2025 – Present , Remote
              </p>
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-wide mb-6 brown-sugar">
            EDUCATION
          </h2>
          <div className="space-y-4 ml-0 sm:ml-12 md:ml-24">
            <div>
              <h3 className="text-base sm:text-lg font-medium">
                BATU - Faculty of Industrial and Energy Technology
              </h3>
              <p className="text-gray-700 text-sm">
                2025 - present , Information Technology
              </p>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-medium">
                Alexandria Advanced Military Technical School
              </h3>
              <p className="text-gray-700 text-sm">
                2022 - 2025 , Computer Technology
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
