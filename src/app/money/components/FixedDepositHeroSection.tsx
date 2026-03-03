"use client";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

export default function FixedDepositHeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/newsw.jpg"   // put this image in public
          alt="Fixed Deposits"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content aligned bottom-right */}
      <div className="relative z-10 h-full flex items-end">

        <div className="max-w-[1280px] mx-auto w-full px-6 sm:px-10 lg:px-16 pb-24 flex justify-end">

          <div className="max-w-3xl text-right">

            {/* Small Label */}
            <p className="uppercase tracking-[8px] text-base text-white/90 font-semibold mb-8">
              CRED FIXED DEPOSITS
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
              `}
            >
              fixed deposits
              <br />
              made flexible.
            </h1>

            {/* Paragraph */}
            <p className="mt-8 text-white/80 text-lg leading-relaxed max-w-xl ml-auto">
              not every investment demands risk. sometimes, wealth that
              endures is wealth that’s protected. with CRED, invest in fixed
              deposits from India’s top banks and NBFCs tailored to your
              timeline—high-yield, transparent, and secure.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}