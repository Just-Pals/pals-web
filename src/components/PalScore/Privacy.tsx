"use client";

export default function Privacy() {
  return (
    <section className="w-full bg-white py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-16 lg:px-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
        
        {/* LEFT BIG HEADING */}
        <div className="text-center lg:text-left">
          <h1 className="font-[PlayfairDisplay] text-[36px] xs:text-[42px] sm:text-[55px] md:text-[70px] leading-[1.1] font-bold text-black">
            credit is{" "}
            <span className="bg-gradient-to-r from-[#0f6b3d] to-[#35dd95] text-transparent bg-clip-text italic">
              private.
            </span>
            <br />
            end of story.
          </h1>
        </div>

        {/* RIGHT DESCRIPTION */}
        <div className="flex items-center">
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
            your CIBIL score is securely accessed through TransUnion CIBIL,
            following the strictest RBI-mandated security protocols. every
            request is encrypted, every consent protected, and every access
            monitored.
          </p>
        </div>

      </div>
    </section>
  );
}
