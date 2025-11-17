export default function Hero() {
  return (
    <section className="relative hero-bg w-full h-screen flex flex-col justify-center items-center text-center px-4">

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/40"></div>

      {/* CONTENT */}
      <div className="relative z-10">
        <h1 className="text-[64px] md:text-[108px] leading-[0.95] font-extrabold tracking-[-2px] flex gap-2">

          <span className="text-red-600 drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)]">P</span>
          <span className="text-white drop-shadow-[0_4px_6px_rgba(0,0,0,1)]">a</span>
          <span className="text-green-500 drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]">l</span>
          <span className="text-white drop-shadow-[0_4px_6px_rgba(0,0,0,1)]">s</span>

          <span className="text-white">&nbsp;Over Banks</span>
        </h1>

        <p className="mt-6 text-[22px] md:text-[26px] text-white font-semibold max-w-2xl leading-relaxed text-center mx-auto">
  Pals is a members-only circle. <br />
  Where your pals become your power. <br />
  Gold-backed. Interest-free.
</p>

      </div>
    </section>
  );
}
