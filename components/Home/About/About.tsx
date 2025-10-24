import Image from "next/image";

export default function About() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen gap-x-8 px-4">
      {/* Left side - Image */}
      <div className="relative w-full h-[400px] md:h-auto ">
        <Image
          src="/images/me.jpg"
          alt="Photographer"
          fill
          className="object-cover border"
          priority
        />
      </div>

      {/* Right side - Text */}
      <div className="flex flex-col justify-start p-10">
        <h2 className="text-8xl font-light tracking-tight mb-16 brown-sugar">
          ABOUT <br /> <span className="font-thin">ME</span>
        </h2>
        <p className="text-gray-700 text-sm leading-relaxed max-w-md ml-56">
          I started my career in landscape photography and then eventually moved
          into architectural photography. I was amazed at the patterns that
          human hands could produce. I made it my mission to show more of it to
          the world.
        </p>
      </div>
    </section>
  );
}
