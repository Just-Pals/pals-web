"use client";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export default function SecurityTrustSection() {
  return (
    <section className="relative bg-[#F2EEE9] h-screen flex items-center px-6 overflow-hidden">

      {/* Centered Content */}
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
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
          your wealth stays unseen
          <br />
          by everyone but you.
        </h2>

        {/* Paragraph */}
        <p className="mt-12 text-[#6d6356] text-lg leading-relaxed max-w-3xl mx-auto">
          CRED is ISO 27001 & 27701 certified and built on RBI's account
          aggregator framework. every detail of your wealth is encrypted,
          consent-driven, and invisible to everyone else. your wealth stays
          protected with global security standards, RBI frameworks, and the
          trust of India's top financial institutions.
        </p>

        {/* Logos Row */}
        <div className="mt-16 flex justify-center opacity-70">
  <img
    src="/bank-logos-new.png"   // your combined logos image
    alt="Partners"
    className="w-full max-w-4xl object-contain"
  />
</div>
      </div>

      {/* Decorative Seal Bottom Right */}
      <div className="absolute bottom-0 right-40 top-100 hidden md:block">
        <img
          src="/seal.png"
          alt="Seal"
          className="w-[380px] opacity-90"
        />
      </div>

    </section>
  );
}