"use client";
import { useState } from "react";
import Image from "next/image";

export default function DownloadCard() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50 bg-white text-black rounded-xl sm:rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.15)] p-3 sm:p-4 md:p-5 flex items-center gap-2 sm:gap-3 md:gap-4 transition max-w-[calc(100vw-2rem)]">
      <Image src="/qr.png" alt="qr" width={80} height={80} className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 shrink-0" />

      <p className="font-medium text-[12px] sm:text-[14px] md:text-[16px] leading-snug">
        {/* Scan to download <br/> the PALS app */}
        Scan to register for <br/> PALS (Beta)
      </p>

      <button
        onClick={() => setVisible(false)}
        className="text-black/50 hover:text-black transition text-lg sm:text-xl ml-1 sm:ml-2 shrink-0"
      >
        ×
      </button>
    </div>
  );
}