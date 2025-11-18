import Image from "next/image";

export default function PhonesShowcase() {
  return (
    <section className="bg-black w-full pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Phones image */}
        <div className="relative w-full max-w-4xl mx-auto">
          <Image
            src="/phone.png"
            alt="PALS app on phones"
            width={1600}
            height={1200}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Headline + Copy */}
        <div className="mt-6 sm:mt-8 md:mt-10 text-center px-4">
          <h2 className="text-[32px] sm:text-[42px] md:text-[56px] lg:text-[92px] leading-[0.95] font-semibold tracking-[-0.5px]">
          
            our pals deserve better.
            <br />
and so much more.
          </h2>

          <p className="mt-4 sm:mt-6 text-white/70 text-[14px] sm:text-[16px] md:text-[18px] max-w-2xl mx-auto leading-relaxed">
            if you&apos;re a PALS member, you&apos;re already a step ahead. every
            experience you unlock takes you higher up the pedestal.
          </p>
        </div>
      </div>
    </section>
  );
}
