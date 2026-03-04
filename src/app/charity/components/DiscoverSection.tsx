"use client";

import Image from "next/image";

export default function DiscoverSection() {
  return (
    <section className="min-h-screen bg-[#ffff] py-16">
      <div className="max-w-7xl mx-auto px-6 h-full flex flex-col">
        {/* HEADER */}
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-[#111827] mb-6">
            Discover fundraisers inspired by what you care about
          </h2>

          <div className="flex items-center justify-between">
            <button className="border border-gray-300 rounded-full px-6 py-2 text-sm bg-white">
              Happening worldwide ▾
            </button>

            <div className="flex gap-3">
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center bg-white hover:bg-gray-100">
                ←
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center bg-white hover:bg-gray-100">
                →
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">

  <FundCard
    large
    img="/girl.jpg"
    donations="3.2K donations"
    title="Help Khimberly's Family After Deadly School Bullying"
    amount="$126,612 raised"
  />

  <FundCard
    img="/famil.jpg"
    donations="12.4K donations"
    title="Help Chuck, an 88-Year-Old Veteran, Get Off the Streets"
    amount="$335,623 raised"
  />

  <FundCard
    img="/cause.jpg"
    donations="1.8K donations"
    title="Help Walter (Mr. Tendernism) Relaunch His Dream"
    amount="$50,747 raised"
  />

  <FundCard
    img="/med.jpg"
    donations="2.9K donations"
    title="SMITTEN KITTEN X NHN RENTAL RELIEF FUND"
    amount="$242,069 raised"
  />

  <FundCard
    img="/animal.jpg"
    donations="7.5K donations"
    title="A NOSSA ÚLTIMA TENTATIVA PARA CONTINUAR"
    amount="€100,709 raised"
  />

</div>
      </div>
    </section>
  );
}

/* CARD COMPONENT */

function FundCard({
  img,
  donations,
  title,
  amount,
  large,
}: {
  img: string;
  donations: string;
  title: string;
  amount?: string;
  large?: boolean;
}) {
  return (
    <div className={`group ${large ? "row-span-2" : ""}`}>
      <div className="relative rounded-2xl overflow-hidden">
        {/* IMAGE */}
        <div className={`relative ${large ? "h-[500px]" : "h-[220px]"}`}>
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />

          {/* Donations Badge */}
          <span className="absolute bottom-4 left-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
            {donations}
          </span>
        </div>
      </div>

      {/* TEXT */}
      <div className="mt-4">
        <h3 className="font-semibold text-lg text-[#111827] group-hover:text-green-700 transition">
          {title}
        </h3>

        {amount && (
          <>
            <div className="h-2 bg-gray-200 rounded-full mt-4">
              <div className="h-2 bg-green-500 rounded-full w-[75%]" />
            </div>
            <p className="text-sm mt-2 font-medium text-[#111827]">{amount}</p>
          </>
        )}
      </div>
    </div>
  );
}
