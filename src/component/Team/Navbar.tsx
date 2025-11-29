"use client";

import Link from "next/link";
import Image from "next/image";

export default function TeamNavbar() {
  return (
    <nav className="w-full bg-black text-white py-4 sm:py-5 md:py-6 px-4 sm:px-6 md:px-8 flex justify-between items-center">
      {/* Left - Home */}
      <Link href="/" className="text-[10px] xs:text-xs sm:text-xs tracking-widest hover:opacity-70 transition">
        HOME
      </Link>

      {/* Center Logo */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        <Image
          src="/Transparent.png" // place your white icon in public folder
          alt="Pals Logo"
          width={28}
          height={28}
          className="opacity-90 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
        />
        <span className="text-[10px] xs:text-xs sm:text-sm tracking-widest uppercase">PALS Pay</span>
      </div>

      {/* Right - External Link */}
      <Link
        href="https://pals.club"
        className="text-[10px] xs:text-xs sm:text-xs tracking-widest hover:opacity-70 transition"
      >
        PALS.CLUB
      </Link>
    </nav>
  );
}
