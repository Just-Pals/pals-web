import Image from "next/image";

export default function RewardsSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/backgrounds/rewards-background.png"
        alt="Rewards Background"
        fill
        priority
        className="object-cover brightness-[0.75]"
      />

      {/* Text Content */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[72px] font-semibold leading-[1.05]">
          feel the odds fall
          <br />
          in your favor
        </h2>

        <p className="mt-4 sm:mt-6 text-white/70 text-[13px] sm:text-[14px] md:text-[17px] max-w-2xl mx-auto leading-relaxed">
          unlock cashback, exclusive rewards from select brands, and special
          access to curated products and experiences.
        </p>
      </div>
    </section>
  );
}
