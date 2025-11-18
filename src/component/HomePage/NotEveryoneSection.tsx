"use client";

import Image from "next/image";

export default function NotEveryoneSection() {
  return (
    <section className="w-full border-y border-white/10 bg-black">
      <div className="relative w-full min-h-[90vh] flex flex-col justify-center">
        
        {/* Background Image */}
        <Image
          src="/not-everyone-bg.png"
          alt="Light Door Background"
          fill
          priority
          className="object-cover object-left"
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-16 sm:py-20 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">

          {/* Empty space on left to show background */}
          <div className="h-full hidden md:block"></div>

          {/* Right Text Block */}
          <div className="flex flex-col justify-center">

            {/* QR Download Box */}
            <div className="border border-white/20 px-3 sm:px-4 py-2 sm:py-3 rounded-lg w-fit mb-6 sm:mb-8 md:mb-10 flex items-center gap-2 sm:gap-3">
              <Image src="/qr.png" alt="QR" width={45} height={45} className="w-8 h-8 sm:w-10 sm:h-10 md:w-[45px] md:h-[45px]" />
              <span className="text-[13px] sm:text-[14px] md:text-[15px] leading-tight">
                download <br /> PALS
              </span>
            </div>

            <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[72px] font-semibold leading-[1.05] tracking-tight">
              not everyone <br /> gets it
            </h2>

            <p className="mt-4 sm:mt-6 text-white/70 text-[14px] sm:text-[15px] md:text-[18px] max-w-md leading-relaxed">
              like all good things in life, earning a PALS membership is not easy;
              but the possibility of unlocking a greater future makes the effort worthwhile.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
