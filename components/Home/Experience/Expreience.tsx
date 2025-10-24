import Image from "next/image";

export default function Experience() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 min-h-screen px-4 bg-[#f3f3f3] text-black mt-2">
      {/* Left side - Image */}
      <div className="relative w-full h-[400px] md:h-[600px]">
        <Image
          src="/images/feet.jpg"
          alt="Photographer"
          fill
          className="object-cover border"
          priority
        />
      </div>

      {/* Right side - Text */}
      <div className="space-y-12">
        {/* Experience */}
        <div>
          <h2 className="text-4xl md:text-5xl font-serif tracking-wide mb-6 brown-sugar">
            EXPERIENCE
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">
                Associate Creative Director
              </h3>
              <p className="text-gray-700 text-sm">
                2021–present, Studio Rallia
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Photographer</h3>
              <p className="text-gray-700 text-sm">
                2017–2021, Studio Rallia
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-4xl md:text-5xl font-serif tracking-wide mb-6 brown-sugar">
            EDUCATION
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">
                MA in Professional Photography
              </h3>
              <p className="text-gray-700 text-sm">
                2025, Venston Bay Art Institute
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">BA in Advertising</h3>
              <p className="text-gray-700 text-sm">
                2017, University of Falworth
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
