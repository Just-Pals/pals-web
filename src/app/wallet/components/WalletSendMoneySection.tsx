"use client";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export default function WalletSendMoneySection() {
  return (
    <section
      className="
        relative h-screen 
        bg-white
        overflow-hidden
        flex items-center
        px-6 lg:px-20
        bg-no-repeat
        bg-cover
        bg-right
      "
      style={{
        backgroundImage: "url('/qw11.jpg')", // wave line background
      }}
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 items-center">
        {/* LEFT PHONE IMAGE */}
        <div className="relative flex justify-center lg:justify-start lg:mt-15">
          <img
            src="/purpose.png"
            alt="Phone"
            className="
      w-[240px]
      sm:w-[280px]
      md:w-[320px]
      lg:w-[360px]
      xl:w-[400px]
      object-contain
    "
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="max-w-2xl mt-12 lg:mt-0">
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
              lg:text-[110px]
            `}
          >
            send
            <br />
            money
            <br />
            to family
          </h2>

          <p className="mt-8 text-lg md:text-xl text-[#555] leading-relaxed max-w-xl">
            pay anyone, no matter what app they're on: works with contacts,
            phone numbers, or UPI IDs.
          </p>
        </div>
      </div>
    </section>
  );
}
