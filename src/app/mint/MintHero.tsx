"use client";

export default function MintHero() {
  return (
    <section className="bg-[#ffff] overflow-x-hidden">

      {/* Top Content */}
      <div className="min-h-screen flex flex-col items-center justify-center px-6 relative">
        
        <div className="absolute top-20 opacity-60">
          <span className="text-gray-500 text-lg tracking-wide">
            CRED mint
          </span>
        </div>

        <h1 className="text-center font-serif text-black leading-tight 
                       text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
                       max-w-5xl">
          for those who like to <br />
          watch their wealth <br />
          multiply
        </h1>
      </div>

      {/* Video Section (Normal Flow) */}
      <div className="flex justify-center -mt-32">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-[950px] max-w-none"
        >
          <source src="https://web-images.credcdn.in/_next/assets/videos/mint/currency.mp4" type="video/mp4" />
        </video>
      </div>

    </section>
  );
}