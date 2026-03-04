"use client";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export default function WalletRewardsSection() {
  return (
    <section className="relative h-screen bg-[#ffff] px-6 lg:px-24 overflow-hidden">

      <div className="max-w-[1400px] mx-auto h-full grid lg:grid-cols-[1.3fr_1fr_1fr]">

        {/* LEFT — BIG HEADING */}
        <div className="flex items-start pt-28">
          <h2
            className={`
              ${playfair.className}
              text-black
              font-black
              leading-[0.85]
              tracking-[-1px]
              text-6xl
              sm:text-7xl
              md:text-8xl
              lg:text-[100px]
            `}
          >
            rewarding,
            <br />
            as always.
          </h2>
        </div>

        {/* CENTER — MEDAL (perfect center) */}
        <div className="flex items-center justify-center">
          <img
            src="/circle.png"
            alt="Rewards Medal"
            className="w-[380px] lg:w-[460px] object-contain"
          />
        </div>

        {/* RIGHT — TEXT BOTTOM ALIGNED */}
        <div className="flex items-end pb-28 justify-start">
          <div className="max-w-sm">
            <p className="uppercase tracking-[5px] text-xs font-semibold text-black mb-6">
              GET THE MIDAS TOUCH.
            </p>

            <p className="text-[#555] text-base leading-relaxed">
              earn cashback and rewards with every
              payment you make, always. life's
              better when you're favored.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}