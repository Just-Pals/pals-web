"use client";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export default function PortfolioIntroSection() {
  return (
    <section className="bg-[#F2EEE9] py-40 px-6">

      <div className="max-w-4xl mx-auto text-center">

        {/* Small Label */}
        <p className="uppercase tracking-[8px] text-xs sm:text-sm text-[#8a7a63] font-semibold mb-10">
          YOUR WEALTH, WHOLE AT LAST
        </p>

        {/* Main Heading */}
        <h2
          className={`
            ${playfair.className}
            text-[#7C5A37]
            font-black
            leading-[1]
            tracking-[-1px]
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-[64px]
          `}
        >
          your entire portfolio.
          <br />
          one clear frame.
        </h2>

        {/* Paragraph */}
        <p className="mt-10 text-[#6d6356] text-lg leading-relaxed max-w-3xl mx-auto">
          track your mutual funds, stocks, EPF, NPS, deposits, and bank balances
          in one place. see real-time performance, one-day changes, and long-term
          growth, detailed and secure. wealth is easiest to preserve when it is
          seen whole.
        </p>

      </div>
    </section>
  );
}