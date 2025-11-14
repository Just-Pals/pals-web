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
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-32 grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Empty space on left to show background */}
          <div className="h-full"></div>

          {/* Right Text Block */}
          <div className="flex flex-col justify-center">

            {/* QR Download Box */}
            <div className="border border-white/20 px-4 py-3 rounded-lg w-fit mb-10 flex items-center gap-3">
              <Image src="/qr.png" alt="QR" width={45} height={45} />
              <span className="text-[15px] leading-tight">
                download <br /> PALS
              </span>
            </div>

            <h2 className="text-[48px] md:text-[72px] font-semibold leading-[1.05] tracking-tight">
              not everyone <br /> gets it
            </h2>

            <p className="mt-6 text-white/70 text-[15px] md:text-[18px] max-w-md leading-relaxed">
              like all good things in life, earning a PALS membership is not easy;
              but the possibility of unlocking a greater future makes the effort worthwhile.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
