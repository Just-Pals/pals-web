"use client";

import Image from "next/image";

export default function Score() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-16 lg:px-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE — SCORE CIRCLE */}
        <div className="flex justify-center relative">
          {/* BACK LARGE FADE CIRCLE */}
          <div className="absolute w-[520px] h-[520px] bg-gradient-to-tr 
            from-[#ffe8d2] via-[#e8fff4] to-[#c9ffef] rounded-full opacity-60 blur-2xl">
          </div>

          {/* MAIN SCORE CIRCLE */}
          <div className="relative w-[420px] h-[420px] rounded-full bg-white shadow-xl flex items-center justify-center">
            
            {/* TOP PROGRESS ARC */}
            <div className="absolute w-full h-full rounded-full 
               bg-[conic-gradient(#00e49a_0deg,#00e49a_120deg,transparent_120deg)] 
               opacity-90">
            </div>

            {/* INNER WHITE CIRCLE */}
            <div className="absolute w-[330px] h-[330px] bg-white rounded-full flex flex-col items-center justify-center shadow-lg">
              
              {/* SMALL TOP NUMBER */}
              <p className="text-sm text-[#00bd6d] font-semibold -mt-4">
                07 ↑
              </p>

              {/* BIG SCORE */}
              <h1 className="text-[110px] font-black text-gray-800 drop-shadow-xl">
                803
              </h1>

              {/* CIBIL TEXT */}
              <p className="text-xs uppercase text-gray-500 tracking-widest">
                CIBIL
              </p>
              <p className="text-[10px] text-gray-400 -mt-1">
                Part of TransUnion
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — TEXT CONTENT */}
        <div>
          {/* QR BOX */}
         {/* QR BOX */}
<div className="border border-gray-300 p-4 w-[230px] rounded-lg mb-10">
  <div className="flex gap-3 items-center">
    {/* Add a fallback background to see if image area exists */}
    <div className="w-[70px] h-[70px] bg-gray-200 flex-shrink-0">
      <Image
        src="/qr.png"
        width={70}
        height={70}
        alt="QR"
      />
    </div>
    <div>
  <p className="text-black font-medium">download</p>
  <p className="text-black font-medium">PALS</p>
</div>
  </div>
</div>

          {/* SMALL HEADING */}
          <p className="uppercase text-gray-500 tracking-[0.25em] text-xs mb-4">
            take control of your credit
          </p>

          {/* MAIN TITLE LIKE CRED (SERIF + BOLD + ITALIC) */}
           <h1 className="font-[PlayfairDisplay] text-[55px] sm:text-[70px] leading-[1.05] font-bold text-[#1a1a1a]">
            the future 
            <span className="italic text-[#0f6b3d]"> is</span> <br />
            <span className="italic text-[#0f6b3d]">yours to shape.</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-600 mt-6 leading-relaxed text-lg">
            take the first step by checking your score.
          </p>
        </div>
      </div>
    </section>
  );
}
