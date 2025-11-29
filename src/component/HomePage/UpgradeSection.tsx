"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const features = [
  { 
    tag: "Purchase",
    title: "scan and pay instantly.",
    img: "/features/scan-pay.png",
  },
  {
    tag: "Loan",
    title: "borrow from pals and pools.",
    img: "/features/upi-credit.png",
  },
  {
    tag: "Charity",
    title: "donate to the causes you care about.",
    img: "/features/tap-to-pay.png",
  },
  {
    tag: "Invest",
    title: "invest in curated projects and startups.",
    img: "/features/pay-anyone.png",
  },
  // {
  //   tag: "CAR GARAGE",
  //   title: "manage your car’s vitals",
  //   img: "/features/car-garage.png",
  // },
  // {
  //   tag: "TRAVEL MEMBERSHIP",
  //   title: "travel, curated for members",
  //   img: "/features/travel-membership.png",
  // },
];

export default function UpgradeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const scrollWidth = container.scrollWidth;
      const visibleWidth = container.offsetWidth;
      const maxDrag = visibleWidth - scrollWidth;
      setConstraints({ left: maxDrag, right: 0 });
    }
  }, []);

  return (
    <section className="bg-black py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 select-none overflow-hidden">
      <h2 className="text-[28px] xs:text-[32px] sm:text-[42px] md:text-[52px] lg:text-[72px] font-semibold mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-[1.05] px-2">
        upgrade your life.
        <br />bit by bit.
      </h2>

      <div className="overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-8 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={constraints}
          style={{ x }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              className="border border-white/15 w-[260px] xs:w-[280px] sm:w-[300px] md:w-[320px] lg:w-[350px] shrink-0 rounded-lg sm:rounded-xl overflow-hidden group hover:border-white/40 transition"
            >
              <div className="p-3 sm:p-4 md:p-5 lg:p-6">
                <p className="text-white/60 text-[9px] xs:text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.22em] uppercase">
                  {f.tag}
                </p>
                <h3 className="mt-2 sm:mt-3 text-[16px] xs:text-[18px] sm:text-[20px] md:text-[22px] font-medium leading-tight">
                  {f.title}
                </h3>

                <button className="mt-2.5 sm:mt-3 md:mt-4 text-[9px] xs:text-[10px] sm:text-xs border border-white/30 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full hover:bg-white/10 transition">
                  know more →
                </button>
              </div>

              <div className="w-full h-[240px] xs:h-[280px] sm:h-[300px] md:h-[320px] lg:h-[380px] overflow-hidden">
                <Image
                  src={f.img}
                  alt={f.title}
                  width={800}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-[1.08] transition duration-500"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
