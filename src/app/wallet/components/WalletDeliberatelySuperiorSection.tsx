"use client";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export default function WalletDeliberatelySuperiorSection() {
  return (
    <section
  className="
    relative h-screen px-6 lg:px-20
    overflow-hidden flex items-center
    bg-white
    bg-no-repeat
    bg-cover
    bg-center
  "
  style={{
    backgroundImage: "url('/best.jpg')",
    backgroundPosition: "right center",
  }}
>
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 items-center">
        {/* LEFT CONTENT */}
        <div className="max-w-2xl">
          {/* Powered by UPI */}
          <div className="flex items-center gap-3 mb-8">
            <p className="uppercase tracking-[5px] text-sm text-black font-semibold">
              Powered by
            </p>

            <img
              src="https://web-images.credcdn.in/v2/_next/assets/images/p2p-10/upi-black.svg"
              alt="UPI"
              className="h-2 w-[100px] object-contain"
            />
          </div>

          {/* Heading */}
          <h2
            className={`
              ${playfair.className}
              text-black
              font-black
              leading-[0.9]
              tracking-[-1px]
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-[120px]
            `}
          >
            deliberately
            <br />
            superior
          </h2>

          {/* Description */}
          <p className="mt-8 text-lg md:text-xl text-[#444] leading-relaxed max-w-xl">
            the experience of sending money, now rebuilt from the ground up.
            because the creditworthy deserve more.
          </p>
        </div>
      </div>

     
    </section>
  );
}
