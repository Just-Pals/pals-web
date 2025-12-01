export default function ProofSection() {
  return (
    <section className="w-full bg-black py-12 sm:py-16 md:py-24 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="text-center md:text-left">
          <p className="text-[9px] xs:text-[10px] sm:text-[11px] md:text-[12px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-white/60">
            Trusted by 15M members
          </p>

          <h2 className="mt-3 sm:mt-4 text-[28px] xs:text-[32px] sm:text-[40px] md:text-[48px] lg:text-[72px] font-semibold leading-[1.05] tracking-tight">
            the proof
            <br />
            writes itself
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-6 sm:gap-8 md:gap-12 md:justify-end">

          {/* APP STORE */}
          <div className="text-center">
            <div className="text-[14px] xs:text-[16px] sm:text-[18px] md:text-[20px] mb-2">★★★★★</div>
            <div className="text-[28px] xs:text-[32px] sm:text-[38px] md:text-[46px] font-semibold leading-none">
              4.8<span className="text-[18px] xs:text-[20px] sm:text-[24px] md:text-[26px] font-medium">/5</span>
            </div>
            <p className="text-white/60 text-[9px] xs:text-[10px] sm:text-[11px] md:text-[12px] tracking-wider mt-2">
              APP STORE
            </p>
          </div>

          {/* PLAY STORE */}
          <div className="text-center">
            <div className="text-[14px] xs:text-[16px] sm:text-[18px] md:text-[20px] mb-2">★★★★☆</div>
            <div className="text-[28px] xs:text-[32px] sm:text-[38px] md:text-[46px] font-semibold leading-none">
              4.8<span className="text-[18px] xs:text-[20px] sm:text-[24px] md:text-[26px] font-medium">/5</span>
            </div>
            <p className="text-white/60 text-[9px] xs:text-[10px] sm:text-[11px] md:text-[12px] tracking-wider mt-2">
              PLAY STORE
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
