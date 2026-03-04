"use client";

import Image from "next/image";

export default function FundHeroSection() {
  return (
    <section className="relative bg-white overflow-hidden min-h-screen h-screen">

      {/* Background Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[1600px] h-[1600px] rounded-full border border-gray-200 opacity-30" />
        <div className="absolute w-[1100px] h-[1100px] rounded-full border border-gray-200 opacity-20" />
        <div className="absolute w-[750px] h-[750px] rounded-full border border-gray-200 opacity-20" />
      </div>

      {/* CENTER CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 text-center">

        <p className="text-sm font-semibold tracking-wide text-gray-500 mb-8">
          #1 crowdfunding platform
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[92px] font-extrabold leading-[0.95] tracking-tight text-[#111827]">
          Successful fundraisers <br /> start here
        </h1>

        <button className="mt-10 bg-[#2f5d3a] hover:bg-[#24482e] text-white px-10 py-4 rounded-full text-lg font-semibold transition">
          Start a GoFundMe
        </button>
      </div>

      {/* BOTTOM CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto mt-25 grid md:grid-cols-2 gap-24 px-6">
        <p className="text-[28px] font-bold leading-snug text-[#111827]">
          More than $50 million is raised every week on GoFundMe.*
        </p>

        <p className="text-lg text-gray-600 leading-relaxed">
          Get started in just a few minutes — with helpful new tools,
          it’s easier than ever to pick the perfect title, write a compelling
          story, and share it with the world.
        </p>
      </div>

      <FloatingCircles />

    </section>
  );
}

function FloatingCircles() {
  return (
    <>
      {/* LEFT SIDE */}
      <div className="absolute top-34 left-45 hidden 2xl:block">
        <CircleImage src="/cause.jpg" label="cause" />
      </div>

      <div className="absolute top-[320px] left-10 hidden 2xl:block">
        <CircleImage src="/med.jpg" label="Medical" />
      </div>

      <div className="absolute bottom-48 left-76 hidden 2xl:block">
        <CircleImage src="/emer.jpg" label="Emergency" />
      </div>

      {/* RIGHT SIDE */}
      <div className="absolute top-34 right-45 hidden 2xl:block">
        <CircleImage src="/edu.jpg" label="Education" />
      </div>

      <div className="absolute top-[320px] right-8 hidden 2xl:block">
        <CircleImage src="/animal.jpg" label="Animal" />
      </div>

      <div className="absolute bottom-48 right-76 hidden 2xl:block">
        <CircleImage src="/cause.jpg" label="Business" />
      </div>
    </>
  );
}

function CircleImage({ src, label }: { src: string; label: string }) {
  return (
    <div className="relative w-44 h-44">

      {/* IMAGE WRAPPER */}
      <div className="relative w-full h-full rounded-full border-[8px] border-green-800 overflow-hidden bg-white shadow-sm">
        <Image src={src} alt={label} fill className="object-cover" />
      </div>

      {/* LABEL (HALF OUTSIDE) */}
      <span className="
        absolute 
        left-2/3 
        -translate-x-1/2 
        bottom-0 
        translate-y-1/2
        bg-green-800 
        text-sm 
        text-white
        px-5 
        py-1.5 
        rounded-full 
        shadow-md
        font-medium
      ">
        {label}
      </span>

    </div>
  );
}