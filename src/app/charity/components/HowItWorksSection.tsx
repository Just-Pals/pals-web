"use client";

import Image from "next/image";

export default function HowItWorksSection() {
  return (
    <section className="bg-[#f6f6f4] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP ROW */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-[#111827]">
            How GoFundMe works
          </h2>

          <button className="hidden md:block border border-gray-300 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition">
            Learn more
          </button>
        </div>

        {/* VIDEO CARD */}
        <div className="relative rounded-3xl overflow-hidden group">

          {/* IMAGE */}
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
            <Image
              src="/cart.jpg" // apni image path daalo
              alt="How GoFundMe works"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* PLAY BUTTON */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-6 py-3 md:px-8 md:py-4 rounded-full shadow-md hover:scale-105 transition duration-300">

              {/* Play Icon */}
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#111827] text-white text-sm">
                ▶
              </div>

              <span className="font-medium text-[#111827] text-sm md:text-base">
                Play 1 min video
              </span>
            </button>
          </div>

        </div>

        {/* Mobile Learn More Button */}
        <div className="mt-8 md:hidden">
          <button className="w-full border border-gray-300 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition">
            Learn more
          </button>
        </div>

      </div>
    </section>
  );
}