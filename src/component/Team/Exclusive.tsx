"use client";

import Image from "next/image";

export default function Exclusive() {
  return (
    <section className="w-full bg-black text-white py-32 px-6 text-center">
      {/* Center Badge */}
      <div className="flex justify-center mb-12">
        <div className="relative w-[260px] h-[260px]">
          {/* Outer Rings */}
          <div className="absolute inset-0 rounded-full border-[3px] border-[#00e176] opacity-30"></div>
          <div className="absolute inset-3 rounded-full border-[2px] border-[#00e176] opacity-20"></div>
          <div className="absolute inset-6 rounded-full border-[2px] border-[#00e176] opacity-20"></div>

          {/* Green Center */}
          <div className="absolute inset-0 bg-[#00e176] rounded-full"></div>

          {/* Two icons in center */}
          <div className="absolute inset-0 flex items-center justify-center gap-4">
            <div className="bg-black p-3 rounded-full shadow-xl">
              <span className="text-white text-2xl">✔</span>
            </div>
            <div className="bg-white p-3 rounded-full shadow-xl">
              <span className="text-black text-2xl">🛡️</span>
            </div>
          </div>
        </div>
      </div>

      {/* Heading Small */}
      <p className="text-sm tracking-[0.25em] text-gray-300 uppercase mb-3">
        ALL OF THE ABOVE IS
      </p>

      {/* Main Heading */}
      <h1 className="text-5xl sm:text-6xl font-extrabold mb-2">
        CRED <span className="italic font-semibold">pay</span>
      </h1>

      {/* Sub Heading */}
      <h2 className="text-4xl sm:text-5xl italic font-bold mb-10">
        exclusive
      </h2>

      {/* Description */}
      <p className="text-gray-300 max-w-xl mx-auto leading-relaxed mb-12 text-lg">
        crafted exclusively for the 1%, it is the newest payment
        system by CRED that promises assured rewards after
        every payment.
      </p>

      {/* CTA Button */}
      <button className="bg-[#00e176] text-black px-8 py-4 rounded-lg font-semibold tracking-wide flex items-center gap-3 mx-auto hover:opacity-90 transition">
        LEARN MORE
        <span className="text-xl">→</span>
      </button>
    </section>
  );
}
