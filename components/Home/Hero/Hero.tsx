import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="grid grid-cols-2 h-screen">
      {/* Left side - Images */}
      <div className="flex flex-col gap-4 p-4">
        <div className="relative w-full h-1/2 min-h-[200px]">
          <Image
            src="/images/landscape1.jpg"
            alt="Landscape 1"
            fill
            className="object-cover rounded- border"
            priority
          />
        </div>
        <div className="relative w-full h-1/2 min-h-[200px]">
          <Image
            src="/images/landscape2.jpg"
            alt="Landscape 2"
            fill
            className="object-cover rounded- border"
          />
        </div>
      </div>

      {/* Right side - Text content */}
      <div className="flex flex-col justify-between p-8">
        <h1 className="text-8xl leading-tight brown-sugar">
          Ahmed Eid<br /> portfolio
        </h1>

        <div className="flex items-center justify-between text-sm ">
          <div>
          <p>Ahmed Eid</p>
          <p>Photographer & App developer</p>
          </div>
          <Link href="#" className="text-gray-400 underline font-bold uppercase hover:cursor-pointer">
            Work with me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
