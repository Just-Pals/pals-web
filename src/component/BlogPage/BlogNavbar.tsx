"use client";

import Image from "next/image";
import Link from "next/link";

export default function BlogNavbar() {
  return (
    <nav className="w-full flex justify-between items-center py-6 px-12 border-b border-black/10 bg-white sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-3 cursor-pointer">
        <Image src="/Transparent.png" alt="logo" width={32} height={32} />
        <span className="text-2xl font-semibold tracking-tight">pals</span>
      </Link>

      <button className="px-6 py-3 border border-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition">
        Download PALS
      </button>
    </nav>
  );
}
