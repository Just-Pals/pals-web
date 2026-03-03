"use client";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

export default function GoldHeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/news.webp"
          alt="CRED Gold"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content aligned bottom-left */}
      <div className="relative z-10 h-full flex items-end">

        <div className="max-w-[1280px] mx-auto w-full px-6 sm:px-10 lg:px-16 pb-24">

          <div className="max-w-3xl">

            {/* Small Label */}
            <p className="uppercase tracking-[8px] text-base sm:text-lg text-white/90 font-semibold mb-10">
  CRED GOLD
</p>

{/* Heading */}
<h1
  className={`
    ${playfair.className}
    text-[#F1E4C8]
    leading-[0.9]
    tracking-[-1.5px]
    font-black
    text-5xl
    sm:text-6xl
    md:text-7xl
    lg:text-[96px]
    xl:text-[110px]
  `}
>
  24K permanence in
  <br />
  your portfolio.
</h1>

            {/* Paragraph */}
            <p className="mt-8 text-white/80 text-lg leading-relaxed max-w-xl">
              for centuries, gold has held its value through change. with CRED,
              you own 24k gold—pure, digital, and liquid. buy, sell, or convert
              it when you choose, with insured delivery to your doorstep.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}