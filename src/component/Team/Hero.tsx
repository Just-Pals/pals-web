"use client";

import React from "react";
import Image from "next/image";

export default function TeamHero() {
  return (
    <section className="relative w-full h-[500px] xs:h-[600px] sm:h-[700px] md:h-[850px] lg:h-[950px] xl:h-[1050px] overflow-hidden bg-black">
      
      {/* FULL WIDTH HERO IMAGE */}
      <Image
        src="/teams22.png"
        alt="hero"
        fill
        priority
        className="object-cover w-full h-full"
      />

      {/* TEXT OVERLAY */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <div className="text-black">
          {/* TOP SMALL TEXT */}
          <p className="uppercase text-[10px] xs:text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-3">
            THE
          </p>

          {/* MAIN BIG ITALIC TEXT — REAL CRED FONT STYLE */}
          <h1 className="font-[PlayfairDisplay] italic font-bold text-[32px] xs:text-[42px] sm:text-[55px] md:text-[80px] lg:text-[110px] leading-[1.05] drop-shadow-lg">
            the most<br />
            rewarding<br />
            payment<br />
            system
          </h1>

          {/* BOTTOM SMALL TEXT */}
          <p className="uppercase text-[10px] xs:text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] mt-3 sm:mt-4">
            EVER
          </p>
        </div>
      </div>
    </section>
  );
}
