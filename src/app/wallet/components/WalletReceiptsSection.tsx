"use client";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

export default function WalletGridSection() {
  return (
    <section className="bg-[#ffff] px-6 lg:px-24 py-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-10">
          {/* WIN CARD */}
          <div className="bg-[#ededed] min-h-[680px] flex flex-col items-center justify-center p-16 text-center">
            <img
              src="/win.png"
              alt="Win Win"
              className="w-[380px] object-contain mb-10"
            />

            <p className="uppercase tracking-[5px] text-sm font-semibold">
              INVITE FRIENDS.
            </p>
            <p className="uppercase tracking-[5px] text-sm font-semibold mt-2">
              MULTIPLY YOUR REWARD.
            </p>
          </div>

          {/* PAYMENT RECEIPTS */}
          <div className="bg-[#ededed] min-h-[920px] pt-20 px-16 flex flex-col items-center relative overflow-hidden">
            {/* TOP TEXT */}
            <div className="text-center w-full max-w-6xl mx-auto">
              <p className="uppercase tracking-[5px] text-sm mb-6">
                ANNOUNCE YOUR
                <br />
                STATUS WITH SHAREABLE
              </p>

              <h2
                className={`${playfair.className}
    text-black font-black leading-[0.9]
    tracking-[-1px]
    text-5xl sm:text-6xl md:text-7xl lg:text-[90px]`}
              >
                payment
                <br />
                receipts
              </h2>
            </div>

            {/* PHONE */}
            <div className="relative flex justify-center mt-45">
              <img
                src="/phone.webp"
                alt=""
                className="w-[700px] md:w-[750px] lg:w-[820px] object-contain"
              />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-10">
          {/* POWERED BY */}
          <div className="bg-[#ededed] min-h-[320px] flex flex-col items-center justify-center p-12 text-center">
            <p className="uppercase tracking-[6px] text-xs mb-6">POWERED BY</p>
            <img
              src="https://web-images.credcdn.in/v2/_next/assets/images/p2p-10/upi-black.svg"
              alt="UPI"
              className="w-[180px]"
            />
          </div>

          {/* ALIAS TEXT */}
          <div className="bg-[#ededed] min-h-[620px] p-12 flex flex-col justify-center">
            {/* Heading */}
            <h2
              className={`${playfair.className}
    text-black font-black leading-[0.9]
    tracking-[-1px]
    text-5xl sm:text-6xl md:text-7xl lg:text-[100px]`}
            >
              pay with
              <br />
              an alias
            </h2>

            {/* Alias Box */}
            <div className="mt-14 border border-dashed border-[#cfcfcf] rounded-xl px-6 py-5 flex items-center gap-4 max-w-xl bg-white/40">
              {/* Left Icon */}
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-orange-500"></div>
              </div>

              {/* Alias Text */}
              <p className="text-xl md:text-2xl text-[#333] tracking-wide">
                majestic999@axisb<span className="animate-pulse">|</span>
              </p>
            </div>

            {/* Description */}
            <p className="mt-12 text-2xl md:text-2xl font-semibold leading-relaxed text-[#222] max-w-lg">
              keep sensitive details secure on all payments by generating your
              own alias UPI ID on CRED.
            </p>
          </div>

          {/* DARK CTA */}
          <div className="relative min-h-[500px] bg-black overflow-hidden px-12 py-20 flex flex-col justify-center">
            {/* Content */}
            <div className="relative z-10 max-w-4xl">
              {/* Heading */}
              <h2
                className={`${playfair.className}
      text-white font-black leading-[0.9]
      tracking-[-1px]
      text-5xl sm:text-6xl md:text-7xl lg:text-[95px]`}
              >
                start
                <br />
                sending
                <br />
                money.
              </h2>

              {/* Subtitle */}
              <div className="mt-10 inline-block px-4 py-2">
                <p className="text-white uppercase tracking-[3px] text-sm font-semibold">
                  when the occasion calls for more.
                </p>
              </div>

              {/* Button */}
              <button className="mt-14 bg-white text-black px-10 py-5 text-lg tracking-[3px] uppercase font-semibold hover:bg-gray-200 transition">
                try it now →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
