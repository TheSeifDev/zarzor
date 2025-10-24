import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      {/* Left side - Images */}
      <div className="flex flex-col gap-4 p-4">
        <div className="relative w-full h-64 md:h-1/2">
          <Image
            src="/images/landscape1.jpg"
            alt="Landscape 1"
            fill
            className="object-cover border"
            priority
          />
        </div>
        <div className="relative w-full h-64 md:h-1/2">
          <Image
            src="/images/landscape2.jpg"
            alt="Landscape 2"
            fill
            className="object-cover border"
          />
        </div>
      </div>

      {/* Right side - Text content */}
      <div className="flex flex-col justify-between p-6 md:p-8 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight brown-sugar">
          Ahmed Eid<br /> portfolio
        </h1>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-6 text-sm">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
