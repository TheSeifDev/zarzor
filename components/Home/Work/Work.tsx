// components/Work.jsx
import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <section className="bg-[#f3f3f3] px-8 md:px-20 py-16">
      <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-y-12 items-start">

        {/* Top-left image */}
        <div className="col-span-12 md:col-span-5 flex justify-start">
          <div className="w-[420px] h-[270px]">
            <Image
              src="/images/flower.jpg"
              alt="It's Not Even Spring"
              width={420}
              height={270}
              className="object- border"
            />
          </div>
        </div>

        {/* Top-left caption (to the right of that image) */}
        <div className="col-span-12 md:col-start-6 md:col-span-2 flex md:items-start md:justify-start">
          <div className="md:mt-2 text-[14px] leading-snug text-[#111]">
            <div className="font-normal">2023 –</div>
            <div className="mt-1">It&apos;s Not Even Spring</div>
          </div>
        </div>

        {/* Top-right tall image */}
        <div className="col-span-12 md:col-start-10 md:col-span-3 flex md:justify-end">
          <div className="w-[220px] h-[350px]">
            <Image
              src="/images/path.jpg"
              alt="A Singular Path"
              width={220}
              height={350}
              className="object- border"
            />
          </div>
        </div>

        {/* Bottom wide image (starts under the left image, spans most width) */}
        <div className="col-span-12 md:col-start-1 md:col-span-9">
          <div className="w-full h-[160px] md:h-[220px]">
            <Image
              src="/images/resin.jpg"
              alt="Resin Patterns"
              width={1000}
              height={220}
              className="object- border"
            />
          </div>
        </div>

        {/* Caption for bottom wide image (left aligned under the wide image) */}
        <div className="col-span-12 md:col-start-1 md:col-span-9">
          <p className="text-sm text-[#111] mt-4">
            <span className="font-normal">2024 –</span> Resin Patterns by Artist Chun
            Hei Kim
          </p>
        </div>

      </div>
    </section>
  );
};

export default Work;
