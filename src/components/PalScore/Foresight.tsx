"use client";

import Image from "next/image";

export default function Foresight() {
  return (
    <section className="w-full bg-black text-white py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-16 lg:px-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center">

        {/* ================= LEFT TEXT AREA ================= */}
        <div className="relative text-center lg:text-left">

          {/* Glow Effect Behind Heading */}
          <div className="absolute -top-10 -left-10 w-[300px] sm:w-[400px] h-[150px] sm:h-[200px] bg-white/10 blur-3xl rounded-full hidden lg:block"></div>

          <p className="uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gray-400 text-[10px] xs:text-xs mb-4 sm:mb-6 relative">
            Introducing Foresight
          </p>

          <h1 className="font-[PlayfairDisplay] text-[36px] xs:text-[42px] sm:text-[55px] md:text-[70px] font-bold leading-[1.05] mb-4 sm:mb-6 relative px-2">
            see the effect.<br />
            drive the cause.
          </h1>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-md relative mx-auto lg:mx-0">
            with foresight, test different financial decisions and 
            see their effect on your score.
          </p>

        </div>


        {/* ================= RIGHT CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">

          {/* CARD 1 */}
          <div className="bg-gradient-to-b from-[#1d352c] to-[#0e1613] rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-white/10 shadow-xl">
            <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-snug">
              Pay off some<br />cards/loans
            </p>

            <div className="flex justify-center">
              <Image
                src="/pal-score/foresight.png"
                alt="Pay Icon"
                width={90}
                height={90}
                className="opacity-90 w-16 h-16 sm:w-20 sm:h-20 md:w-[90px] md:h-[90px]"
              />
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-gradient-to-b from-[#301c49] to-[#130d1f] rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-white/10 shadow-xl">
            <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-snug">
              Take a new<br />home loan
            </p>

            <div className="flex justify-center">
              <Image
                src="/pal-score/foresight.png"
                alt="Home Icon"
                width={90}
                height={90}
                className="opacity-90 w-16 h-16 sm:w-20 sm:h-20 md:w-[90px] md:h-[90px]"
              />
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-gradient-to-b from-[#442618] to-[#1d1410] rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border border-white/10 shadow-xl">
            <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-snug">
              Miss a loan or<br />card payment
            </p>

            <div className="flex justify-center">
              <Image
                src="/pal-score/foresight.png"
                alt="Calendar Icon"
                width={90}
                height={90}
                className="opacity-90 w-16 h-16 sm:w-20 sm:h-20 md:w-[90px] md:h-[90px]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
