"use client";

import React from "react";

export default function Victors() {
  return (
    <section className="w-full bg-black text-white py-12 sm:py-16 md:py-24 px-4 sm:px-6 text-center relative overflow-hidden">

      {/* ---- Top Small Text ---- */}
      <p className="text-[10px] xs:text-[11px] sm:text-[12px] md:text-sm tracking-[0.3em] sm:tracking-[0.4em] text-gray-300 mb-4 sm:mb-6">
        {/* A WINNER EVERY HOUR */}
        ROOTED IN FAITH
      </p>

      {/* ---- Main Big Header ---- */}
      <h1
        className="font-bold italic leading-[0.9] text-[#c6ff00]
                   text-2xl xs:text-xl sm:text-5xl md:text-6xl lg:text-[70px] px-2">
        {/* be amongst<br />the victors */}
        reimagining islamic finance <br />
for a modern world.
      </h1>

      {/* ---- Sub Text ---- */}
      <p className="mt-6 sm:mt-8 md:mt-10 text-gray-300 mb-12 sm:mb-15 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-4">
        taking it from theory. into real life.<br className="hidden sm:block" />
       
from abstract ideals. to something cool, modern, everyday.
      </p>

      {/* ---- Bottom Pink Stripes ---- */}
      <div className="absolute bottom-0 left-0 w-full h-12 sm:h-16 md:h-20 flex justify-between pointer-events-none opacity-100">
        <div className="w-1/3 h-full bg-pink-500 skew-x-[-20deg]"></div>
        <div className="w-1/3 h-full bg-pink-500 skew-x-[-20deg]"></div>
        <div className="w-1/3 h-full bg-pink-500 skew-x-[-20deg]"></div>
      </div>
    </section>
  );
}
