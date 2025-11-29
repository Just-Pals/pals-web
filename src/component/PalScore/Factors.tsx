"use client";

import Image from "next/image";
import React from "react";

export default function Factors() {
  return (
    <section className="w-full bg-white flex justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center">

        {/* LEFT — iPhone Image */}
        <div className="flex justify-center md:justify-end order-2 md:order-1">
          <div className="relative w-[280px] xs:w-[320px] sm:w-[360px] md:w-[420px] h-[540px] xs:h-[620px] md:h-[700px]">
            <Image
              src="/pals-pullstrings.png" // Replace with your actual image
              alt="Credit Factors Mobile UI"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* RIGHT — TEXT CONTENT */}
        <div className="flex flex-col gap-4 sm:gap-6 md:pl-6 order-1 md:order-2 text-center md:text-left">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl leading-tight font-semibold tracking-tight text-[#0f3b2e]">
            be the one <br />
            <span className="text-[#1b5e32] underline decoration-2">
              pulling the <br /> strings.
            </span>
          </h1>

          <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-md leading-relaxed mt-2 sm:mt-4 mx-auto md:mx-0">
            see the key factors shaping your score. <br className="hidden sm:block" />
            use them to your advantage.
          </p>
        </div>
      </div>
    </section>
  );
}
