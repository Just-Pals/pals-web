"use client";

import Image from "next/image";

export default function Exclusive() {
  return (
    <section className="w-full bg-black text-white py-16 sm:py-24 md:py-32 px-4 sm:px-6 text-center">
      {/* Center Badge */}
      <div className="flex justify-center mb-8 sm:mb-10 md:mb-12">
        <div className="relative w-[180px] h-[180px] xs:w-[220px] xs:h-[220px] sm:w-[240px] sm:h-[240px] md:w-[260px] md:h-[260px]">
          {/* Outer Rings */}
          <div className="absolute inset-0 rounded-full border-[2px] sm:border-[3px] border-[#00e176] opacity-30"></div>
          <div className="absolute inset-2 sm:inset-3 rounded-full border-[1.5px] sm:border-[2px] border-[#00e176] opacity-20"></div>
          <div className="absolute inset-4 sm:inset-6 rounded-full border-[1.5px] sm:border-[2px] border-[#00e176] opacity-20"></div>

          {/* Green Center */}
          <div className="absolute inset-0 bg-[#00e176] rounded-full"></div>

          {/* Two icons in center */}
          <div className="absolute inset-0 flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
            <div className="bg-black p-2 sm:p-2.5 md:p-3 rounded-full shadow-xl">
              <span className="text-white text-lg sm:text-xl md:text-2xl">✔</span>
            </div>
            <div className="bg-white p-2 sm:p-2.5 md:p-3 rounded-full shadow-xl">
              <span className="text-black text-lg sm:text-xl md:text-2xl">🛡️</span>
            </div>
          </div>
        </div>
      </div>

      {/* Heading Small */}
      <p className="text-[10px] xs:text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] text-gray-300 uppercase mb-2 sm:mb-3">
        ALL OF THE ABOVE IS
      </p>

      {/* Main Heading */}
      <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold mb-2">
        CRED <span className="italic font-semibold">pay</span>
      </h1>

      {/* Sub Heading */}
      <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl italic font-bold mb-6 sm:mb-8 md:mb-10">
        exclusive
      </h2>

      {/* Description */}
      <p className="text-gray-300 max-w-xl mx-auto leading-relaxed mb-8 sm:mb-10 md:mb-12 text-sm sm:text-base md:text-lg px-4">
        crafted exclusively for the 1%, it is the newest payment
        system by CRED that promises assured rewards after
        every payment.
      </p>

      {/* CTA Button */}
      <button className="bg-[#00e176] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold tracking-wide flex items-center gap-2 sm:gap-3 mx-auto hover:opacity-90 transition text-sm sm:text-base">
        LEARN MORE
        <span className="text-lg sm:text-xl">→</span>
      </button>
    </section>
  );
}
