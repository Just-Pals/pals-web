"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-12 py-6 fixed w-full top-0 left-0 z-40 bg-transparent">
      <div className="flex items-center gap-3">
        <Image src="/logo.png" alt="logo" width={32} height={32} />
        <span className="text-[20px] font-medium tracking-tight">pals</span>
      </div>

      <div
        className="relative border border-white/30 rounded-full px-6 py-2 cursor-pointer hover:bg-white/10 transition"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <span className="text-sm tracking-widest">MENU</span>

        {open && (
          <div className="absolute right-0 top-full mt-3 bg-black border border-white/20 shadow-2xl rounded-xl p-6 w-64">
            <ul className="space-y-3 text-white/70">
              <li className="hover:text-white transition">About</li>
              <li className="hover:text-white transition">Rewards</li>
              <li className="hover:text-white transition">Credit Score</li>
              <li className="hover:text-white transition">Support</li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
