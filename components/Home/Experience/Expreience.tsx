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
                Nabd Masr –FlutterFlow Developer
              </h3>
              <p className="text-gray-700 text-sm">
                January 2024 – Present , Remote
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Wasla Tech - Team Leader</h3>
              <p className="text-gray-700 text-sm">
                Octobar 2025 – Present , Remote
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
                BATU - Faculty of Industrial and Energy Technology
              </h3>
              <p className="text-gray-700 text-sm">
                2025 - present , Information Technology
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium">Alexandria Advanced Military Technical School</h3>
              <p className="text-gray-700 text-sm">
                2022 - 2025 , Copmuter Technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
