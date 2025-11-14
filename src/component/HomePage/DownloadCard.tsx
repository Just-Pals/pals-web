"use client";
import { useState } from "react";
import Image from "next/image";

export default function DownloadCard() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 bg-white text-black rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.15)] p-5 flex items-center gap-4 transition">
      <Image src="/qr.png" alt="qr" width={80} height={80} />

      <p className="font-medium text-[16px] leading-snug">
        Scan to download <br/> the PALS app
      </p>

      <button
        onClick={() => setVisible(false)}
        className="text-black/50 hover:text-black transition text-xl ml-2"
      >
        ×
      </button>
    </div>
  );
}