"use client";

import Image from "next/image";
import Link from "next/link";

export default function BlogNavbar() {
  return (
    <nav className="w-full flex justify-between items-center py-4 sm:py-5 md:py-6 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-black/10 bg-white sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-2 sm:gap-3 cursor-pointer">
        <Image src="/common/logo.png" alt="logo" width={32} height={32} className="w-6 h-6 sm:w-8 sm:h-8 md:w-[32px] md:h-[32px]" />
        <span className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight">pals</span>
      </Link>

      <button className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 border border-black rounded-full text-xs sm:text-sm font-medium hover:bg-black hover:text-white transition">
        Download PALS
      </button>
    </nav>
  );
}
