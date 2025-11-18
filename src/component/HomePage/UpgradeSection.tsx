"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const features = [
  { 
    tag: "Purchase",
    title: "scan & pay any UPI QR",
    img: "/features/scan-pay.png",
  },
  {
    tag: "Loan",
    title: "UPI payments on credit.",
    img: "/features/upi-credit.png",
  },
  {
    tag: "Charity",
    title: "tap your phone. pay on credit.",
    img: "/features/tap-to-pay.png",
  },
  {
    tag: "Invest",
    title: "send money to any UPI app",
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
    <section className="bg-black py-16 sm:py-20 md:py-28 px-4 sm:px-6 select-none overflow-hidden">
      <h2 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[72px] font-semibold mb-8 sm:mb-10 md:mb-12 leading-[1.05]">
        upgrade your life.
        <br />bit by bit.
      </h2>

      <div className="overflow-hidden">
        <motion.div
          ref={containerRef}
          className="flex gap-4 sm:gap-6 md:gap-8 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={constraints}
          style={{ x }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              className="border border-white/15 w-[280px] sm:w-[320px] md:w-[350px] shrink-0 rounded-xl overflow-hidden group hover:border-white/40 transition"
            >
              <div className="p-4 sm:p-5 md:p-6">
                <p className="text-white/60 text-[10px] sm:text-xs tracking-[0.22em] uppercase">
                  {f.tag}
                </p>
                <h3 className="mt-2 sm:mt-3 text-[18px] sm:text-[20px] md:text-[22px] font-medium leading-tight">
                  {f.title}
                </h3>

                <button className="mt-3 sm:mt-4 text-[10px] sm:text-xs border border-white/30 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full hover:bg-white/10 transition">
                  know more →
                </button>
              </div>

              <div className="w-full h-[280px] sm:h-[320px] md:h-[380px] overflow-hidden">
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
