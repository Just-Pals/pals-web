"use client";

export default function MoneyHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/uni.jpg"  // put your image in public folder
          alt="Money Hero"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
        <h1
          className="
            text-white
            uppercase
            font-extrabold
            leading-[1.05]
            tracking-tight

            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            xl:text-[88px]
          "
        >
          All that you own.
          <br />
          At a glance.
        </h1>
      </div>

    </section>
  );
}