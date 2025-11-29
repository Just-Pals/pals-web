"use client";

import Link from "next/link";
import Image from "next/image";

export default function TeamNavbar() {
  return (
    <nav className="w-full bg-black text-white py-6 px-8 flex justify-between items-center">
      {/* Left - Home */}
      <Link href="/" className="text-xs tracking-widest hover:opacity-70">
        HOME
      </Link>

      {/* Center Logo */}
      <div className="flex items-center gap-2">
        <Image
          src="/Transparent.png" // place your white icon in public folder
          alt="Pals Logo"
          width={28}
          height={28}
          className="opacity-90"
        />
        <span className="text-sm tracking-widest uppercase">PALS Pay</span>
      </div>

      {/* Right - External Link */}
      <Link
        href="https://pals.club"
        className="text-xs tracking-widest hover:opacity-70"
      >
        PALS.CLUB
      </Link>
    </nav>
  );
}
