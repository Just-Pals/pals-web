export default function ProofSection() {
  return (
    <section className="w-full bg-black py-24 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>
          <p className="text-[12px] tracking-[0.25em] uppercase text-white/60">
            Trusted by 15M members
          </p>

          <h2 className="mt-4 text-[48px] md:text-[72px] font-semibold leading-[1.05] tracking-tight">
            the proof
            <br />
            writes itself
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-12 md:justify-end">

          {/* APP STORE */}
          <div className="text-center">
            <div className="text-[20px] mb-2">★★★★★</div>
            <div className="text-[46px] font-semibold leading-none">
              4.8<span className="text-[26px] font-medium">/5</span>
            </div>
            <p className="text-white/60 text-[12px] tracking-wider mt-2">
              APP STORE
            </p>
          </div>

          {/* PLAY STORE */}
          <div className="text-center">
            <div className="text-[20px] mb-2">★★★★☆</div>
            <div className="text-[46px] font-semibold leading-none">
              4.8<span className="text-[26px] font-medium">/5</span>
            </div>
            <p className="text-white/60 text-[12px] tracking-wider mt-2">
              PLAY STORE
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
