"use client";

import React from "react";

export default function Victors() {
  return (
    <section className="w-full bg-black text-white py-24 px-6 text-center relative overflow-hidden">

      {/* ---- Top Small Text ---- */}
      <p className="text-[12px] md:text-sm tracking-[0.4em] text-gray-300 mb-6">
        A WINNER EVERY HOUR
      </p>

      {/* ---- Main Big Header ---- */}
      <h1
        className="font-bold italic leading-[0.9] text-[#c6ff00]
                   text-5xl sm:text-6xl md:text-[90px]">
        be amongst<br />the victors
      </h1>

      {/* ---- Sub Text ---- */}
      <p className="mt-10 text-gray-300 mb-15 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
        pay at CRED pay select malls. stand to<br />
        win 100% cashback when you pay via CRED pay
      </p>

      {/* ---- Bottom Pink Stripes ---- */}
      <div className="absolute bottom-0 left-0 w-full h-20 flex justify-between pointer-events-none opacity-100">
        <div className="w-1/3 h-full bg-pink-500 skew-x-[-20deg]"></div>
        <div className="w-1/3 h-full bg-pink-500 skew-x-[-20deg]"></div>
        <div className="w-1/3 h-full bg-pink-500 skew-x-[-20deg]"></div>
      </div>
    </section>
  );
}
