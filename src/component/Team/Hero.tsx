"use client";

import React from "react";
import Image from "next/image";

export default function TeamHero() {
  return (
    <section className="relative w-full h-[700px] sm:h-[850px] md:h-[950px] lg:h-[1050px] overflow-hidden bg-black">
      
      {/* FULL WIDTH HERO IMAGE */}
      <Image
        src="/teams22.png"
        alt="hero"
        fill
        priority
        className="object-cover w-full h-full"
      />

      {/* TEXT OVERLAY */}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="text-black">
          {/* TOP SMALL TEXT */}
          <p className="uppercase text-sm tracking-[0.3em] mb-3">
            THE
          </p>

          {/* MAIN BIG ITALIC TEXT — REAL CRED FONT STYLE */}
          <h1 className="font-[PlayfairDisplay] italic font-bold text-[55px] sm:text-[80px] md:text-[110px] leading-[1.05] drop-shadow-lg">
            the most<br />
            rewarding<br />
            payment<br />
            system
          </h1>

          {/* BOTTOM SMALL TEXT */}
          <p className="uppercase text-sm tracking-[0.3em] mt-4">
            EVER
          </p>
        </div>
      </div>
    </section>
  );
}
