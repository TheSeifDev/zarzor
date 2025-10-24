// components/Work.jsx
import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <section className="relative min-h-screen px-8 md:px-20 py-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-y-12 items-start relative">

        {/* Left side: Top and Bottom images together */}
        <div className="col-span-12 md:col-span-9 flex flex-col gap-12">
          {/* Top image */}
          <div className="flex justify-center items-start gap-6">
            {/* Image centered */}
            <div className="relative w-[420px] h-[270px] overflow-hidden">
              <Image
                src="/images/School.jpg"
                alt="School"
                fill
                className="object-cover border"
              />
            </div>

            {/* Caption on the right side of the image */}
            <div className="text-[14px] leading-snug text-[#111] flex items-center">
              <p className="font-normal">2023 – <br /> SunSet in my school</p>
            </div>
          </div>


          {/* Bottom wide image */}
          <div>
            <div className="relative w-full h-[160px] md:h-[220px] overflow-hidden">
              <Image
                src="/images/AlexLib.jpg"
                alt="Alexandria Library"
                fill
                className="object-cover border"
              />
            </div>
            <p className="text-sm text-[#111] mt-4">
              <span className="font-normal">2025 –</span> Alexandria Advanced Military Technical School
            </p>
          </div>
        </div>

      </div>

      {/* Right side image (floating outside grid) */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2">
        <div className="relative w-[220px] h-[350px] overflow-hidden">
          <Image
            src="/images/coffe.jpg"
            alt="A coffee"
            fill
            className="object-cover border"
          />
        </div>
        <p className="text-sm text-[#111] mt-4 text-right w-[220px]">
          <span className="font-normal">2023 –</span> Me With my Cup of coffee
        </p>
      </div>
    </section>
  );
};

export default Work;
