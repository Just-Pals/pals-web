"use client";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export default function FinalCTASection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/sky.jpg')", // put your sky image here
        }}
      />

      {/* Dark Overlay (optional for better contrast) */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

        {/* QR Box */}
        <div className="mb-10 border border-white/60 px-6 py-5 flex items-center gap-6 backdrop-blur-sm">

          <img
            src="/qr.png"
            alt="QR Code"
            className="w-20 h-20 object-contain"
          />

          <p className="text-white text-lg leading-tight">
            scan to
            <br />
            claim access
          </p>

        </div>

        {/* Main Heading */}
        <h2
          className={`
            ${playfair.className}
            text-white
            font-black
            leading-[0.95]
            tracking-[-1px]
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-[72px]
          `}
        >
          know your worth.
          <br />
          then grow it.
        </h2>

      </div>
    </section>
  );
}