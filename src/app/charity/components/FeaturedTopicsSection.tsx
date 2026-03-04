"use client";

import Image from "next/image";

export default function FeaturedTopicsSection() {
  return (
    <section className="bg-[#ffff] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-4xl font-bold text-[#111827] mb-12">
          Featured topics
        </h2>

        {/* TOP LARGE CARD */}
        <div className="grid md:grid-cols-2 bg-[#efefec] rounded-3xl overflow-hidden mb-12">

          {/* IMAGE */}
          <div className="relative h-[420px]">
            <Image
              src="/fla.png"
              alt="Milan 2026"
              fill
              className="object-cover"
            />

            <span className="absolute top-6 left-6 bg-purple-200 text-purple-800 text-sm px-3 py-1 rounded-full font-medium">
              New
            </span>
          </div>

          {/* CONTENT */}
          <div className="p-12 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-[#111827] mb-4">
              Support athletes on the road to Milan 2026
            </h3>

            <p className="text-gray-600 leading-relaxed mb-8">
              Getting to the Games isn’t easy. Most athletes cover their own
              costs. Together, we can help them compete and represent their
              countries with pride.
            </p>

            <button className="font-semibold text-[#111827] flex items-center gap-2 hover:gap-3 transition-all">
              Learn more →
            </button>
          </div>

        </div>

        {/* BOTTOM GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          <SmallCard
            img="/phone.webp"
            badge="New"
            title="GoFundMe Giving Funds"
            button="Learn more"
          />

          <SmallCard
            img="/cause.jpg"
            badge="Urgent cause"
            title="How to Help: Winter Storm Relief"
            button="Donate now"
            urgent
          />

          <SmallCard
            img="/animal.jpg"
            badge="New"
            title="Fund Fibroid Research with Lupita Nyong'o"
            button="Learn more"
          />

        </div>

      </div>
    </section>
  );
}

/* SMALL CARD */

function SmallCard({
  img,
  badge,
  title,
  button,
  urgent,
}: {
  img: string;
  badge: string;
  title: string;
  button: string;
  urgent?: boolean;
}) {
  return (
    <div className="bg-[#efefec] rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition duration-300 group">

      {/* IMAGE */}
      <div className="relative h-[240px]">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        <span
          className={`absolute top-4 left-4 text-sm px-3 py-1 rounded-full font-medium ${
            urgent
              ? "bg-pink-200 text-pink-800"
              : "bg-purple-200 text-purple-800"
          }`}
        >
          {badge}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-[#111827] mb-6">
          {title}
        </h3>

        <button className="font-semibold text-[#111827] flex items-center gap-2 hover:gap-3 transition-all">
          {button} →
        </button>
      </div>
    </div>
  );
}