"use client";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export default function WealthFocusSection() {
  return (
    <section className="bg-[#ffff] py-32 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-28 items-center">
        {/* Left — Phone Image */}
        <div className="flex justify-center lg:justify-start">
          <img
            src="/purpose.png"
            alt="Wealth App Preview"
            className="w-[320px] sm:w-[300px] lg:w-[350px]
xl:w-[420px] object-contain"
          />
        </div>

        {/* Right — Text Content */}
        <div className="max-w-2xl">
          {/* Small Upper Label */}
          <p className="uppercase tracking-[6px] text-xs text-[#8a7a63] font-bold mb-10">
            YOUR WEALTH, IN FOCUS.
          </p>

          {/* Main Heading */}
          <h2
            className={`
              ${playfair.className}
              text-[#7a5f3e]
              font-black
              leading-[0.9]
              tracking-[-1px]
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-[88px]
            `}
          >
            <span className="block lg:whitespace-nowrap">wealth thrives</span>

            <span className="block lg:whitespace-nowrap">when</span>

            <span className="block lg:whitespace-nowrap">
              you see it whole,
            </span>

            <span className="block lg:whitespace-nowrap">
              not in fragments.
            </span>
          </h2>

          {/* Paragraph */}
          <p className="mt-12 text-[#6d6356] text-lg leading-relaxed max-w-lg font-normal">
            CRED gathers the pieces of your assets into a single view, so that
            every decision moves your wealth forward.
          </p>

          {/* Button */}
          <button className="mt-14 flex items-center gap-6 bg-gradient-to-r from-[#c7a77b] to-[#8c6b45] text-white px-12 py-6 rounded-full shadow-xl hover:opacity-90 transition">
            <span className="tracking-[3px] text-sm font-semibold">
              WATCH FILM
            </span>

            <span className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center shadow-md">
              ▶
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
