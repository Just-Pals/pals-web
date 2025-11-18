export default function Hero() {
  return (
    <section className="relative hero-bg w-full min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 sm:py-0">

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/40"></div>

      {/* CONTENT */}
      <div className="relative z-10 px-4">
        <h1 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[108px] leading-[0.95] font-extrabold tracking-[-2px] flex flex-wrap gap-1 sm:gap-2 justify-center">

          <span className="text-red-600 drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)]">P</span>
          <span className="text-white drop-shadow-[0_4px_6px_rgba(0,0,0,1)]">a</span>
          <span className="text-green-500 drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]">l</span>
          <span className="text-white drop-shadow-[0_4px_6px_rgba(0,0,0,1)]">s</span>

          <span className="text-white">&nbsp;Over Banks</span>
        </h1>

        <p className="mt-4 sm:mt-6 text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] text-white font-semibold max-w-2xl leading-relaxed text-center mx-auto px-4">
  Pals is a members-only circle. <br className="hidden sm:block" />
  Where your pals become your power. <br className="hidden sm:block" />
  Gold-backed. Interest-free.
</p>

      </div>
    </section>
  );
}
