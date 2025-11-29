"use client";

import Image from "next/image";

export default function Foresight() {
  return (
    <section className="w-full bg-black text-white py-32 px-6 md:px-16 lg:px-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* ================= LEFT TEXT AREA ================= */}
        <div className="relative">

          {/* Glow Effect Behind Heading */}
          <div className="absolute -top-10 -left-10 w-[400px] h-[200px] bg-white/10 blur-3xl rounded-full"></div>

          <p className="uppercase tracking-[0.25em] text-gray-400 text-xs mb-6 relative">
            Introducing Foresight
          </p>

          <h1 className="font-[PlayfairDisplay] text-[55px] sm:text-[70px] font-bold leading-[1.05] mb-6 relative">
            see the effect.<br />
            drive the cause.
          </h1>

          <p className="text-gray-400 text-lg max-w-md relative">
            with foresight, test different financial decisions and 
            see their effect on your score.
          </p>

        </div>


        {/* ================= RIGHT CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="bg-gradient-to-b from-[#1d352c] to-[#0e1613] rounded-2xl p-6 text-center border border-white/10 shadow-xl">
            <p className="text-lg mb-6 leading-snug">
              Pay off some<br />cards/loans
            </p>

            <div className="flex justify-center">
              <Image
                src="/foresight1.png"
                alt="Pay Icon"
                width={90}
                height={90}
                className="opacity-90"
              />
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-gradient-to-b from-[#301c49] to-[#130d1f] rounded-2xl p-6 text-center border border-white/10 shadow-xl">
            <p className="text-lg mb-6 leading-snug">
              Take a new<br />home loan
            </p>

            <div className="flex justify-center">
              <Image
                src="/foresight1.png"
                alt="Home Icon"
                width={90}
                height={90}
                className="opacity-90"
              />
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-gradient-to-b from-[#442618] to-[#1d1410] rounded-2xl p-6 text-center border border-white/10 shadow-xl">
            <p className="text-lg mb-6 leading-snug">
              Miss a loan or<br />card payment
            </p>

            <div className="flex justify-center">
              <Image
                src="/foresight1.png"
                alt="Calendar Icon"
                width={90}
                height={90}
                className="opacity-90"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
