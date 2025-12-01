"use client";

import Image from "next/image";

export default function Score() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-16 lg:px-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
        
        {/* LEFT SIDE — SCORE CIRCLE */}
        <div className="flex justify-center relative order-2 lg:order-1">
          {/* BACK LARGE FADE CIRCLE */}
          <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[520px] md:h-[520px] bg-gradient-to-tr 
            from-[#ffe8d2] via-[#e8fff4] to-[#c9ffef] rounded-full opacity-60 blur-2xl">
          </div>

          {/* MAIN SCORE CIRCLE */}
          <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px] rounded-full bg-white shadow-xl flex items-center justify-center">
            
            {/* TOP PROGRESS ARC */}
            <div className="absolute w-full h-full rounded-full 
               bg-[conic-gradient(#00e49a_0deg,#00e49a_120deg,transparent_120deg)] 
               opacity-90">
            </div>

            {/* INNER WHITE CIRCLE */}
            <div className="absolute w-[220px] h-[220px] sm:w-[270px] sm:h-[270px] md:w-[330px] md:h-[330px] bg-white rounded-full flex flex-col items-center justify-center shadow-lg">
              
              {/* SMALL TOP NUMBER */}
              <p className="text-[10px] sm:text-xs md:text-sm text-[#00bd6d] font-semibold -mt-2 sm:-mt-4">
                07 ↑
              </p>

              {/* BIG SCORE */}
              <h1 className="text-[60px] sm:text-[80px] md:text-[110px] font-black text-gray-800 drop-shadow-xl">
                803
              </h1>

              {/* CIBIL TEXT */}
              <p className="text-[9px] sm:text-[10px] md:text-xs uppercase text-gray-500 tracking-widest">
                CIBIL
              </p>
              <p className="text-[8px] sm:text-[9px] md:text-[10px] text-gray-400 -mt-1">
                Part of TransUnion
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — TEXT CONTENT */}
        <div className="order-1 lg:order-2 text-center lg:text-left">
          {/* QR BOX */}
         <div className="border border-gray-300 p-3 sm:p-4 w-full max-w-[230px] rounded-lg mb-8 sm:mb-10 mx-auto lg:mx-0">
  <div className="flex gap-2 sm:gap-3 items-center">
    {/* Add a fallback background to see if image area exists */}
    <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] bg-gray-200 flex-shrink-0">
      <Image
        src="/common/qr-code.png"
        width={70}
        height={70}
        alt="QR"
        className="w-full h-full object-contain"
      />
    </div>
    <div>
  <p className="text-black font-medium text-sm sm:text-base">download</p>
  <p className="text-black font-medium text-sm sm:text-base">PALS</p>
</div>
  </div>
</div>

          {/* SMALL HEADING */}
          <p className="uppercase text-gray-500 tracking-[0.2em] sm:tracking-[0.25em] text-[10px] xs:text-xs mb-3 sm:mb-4">
            take control of your credit
          </p>

          {/* MAIN TITLE LIKE CRED (SERIF + BOLD + ITALIC) */}
           <h1 className="font-[PlayfairDisplay] text-[36px] xs:text-[42px] sm:text-[55px] md:text-[70px] leading-[1.05] font-bold text-[#1a1a1a]">
            the future 
            <span className="italic text-[#0f6b3d]"> is</span> <br />
            <span className="italic text-[#0f6b3d]">yours to shape.</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-600 mt-4 sm:mt-6 leading-relaxed text-sm sm:text-base md:text-lg">
            take the first step by checking your score.
          </p>
        </div>
      </div>
    </section>
  );
}
