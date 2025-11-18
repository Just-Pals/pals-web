import Image from "next/image";

export default function CardsSection() {
  return (
    <section className="w-full bg-black py-28 px-6 border-y border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT TEXT */}
        <div className="">
          <h2 className="text-[48px] md:text-[64px] font-semibold leading-[1.05] tracking-tight">
              because your circle {'>'} any bank
          </h2>

          <p className="mt-6 text-white/60 text-[16px] leading-relaxed max-w-md">
            manage your credit cards better and improve your credit score:
            receive payment reminders, uncover hidden fees, get spending
            insights, and discover ways to maximize card benefits.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full flex justify-center md:justify-end">
          <Image
            src="/cardRight.png"
            alt="pals cards showcase"
            width={1200}
            height={1200}
            className="w-full max-w-[520px] object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
}
