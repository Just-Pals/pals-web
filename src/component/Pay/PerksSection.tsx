"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// TAGLINE IMAGES
const items = [
  {
    title: "Purchase",
    tagline: "scan and pay <br/> instantly.",
    desc: "Make payments securely using Pals. Enjoy fast checkouts and exclusive rewards every time you scan and pay.",
    img: "/PerksSection/language.png",
  },
  {
    title: "Loan",
    tagline: "borrow from pals <br/> and pools.",
    desc: "Access flexible borrowing options directly from your Pals Circle or community pools without paperwork.",
    img: "/PerksSection/loan.png",
  },
  {
    title: "Charity",
    tagline: "donate to the causes <br/> you care about.",
    desc: "Support meaningful causes and contribute instantly. Every donation helps create real impact.",
    img: "/PerksSection/charity.png",
  },
  {
    title: "Invest",
    tagline: "invest in curated <br/> projects and startups.",
    desc: "Grow your money by investing in verified, high-potential startups and community-driven projects.",
    img: "/PerksSection/invest.png",
  },
];

// ---- FIXED VARIANTS (NO TYPING CONFLICTS) ----
const containerVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

// custom delay function
const delayFn = (i: number) => ({
  transition: {
    delay: i * 0.3,
    duration: 0.7,
    ease: "easeInOut",
  }
});

// floating animation
const floatVariant = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function PerksSection() {
  return (
    <section className="w-full bg-black text-white py-28 px-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-32">

        {items.map((item, i) => (
          <motion.div
  key={i}
  variants={containerVariant}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  custom={i}
  transition={{
    delay: i * 0.3,
    duration: 0.7,
    ease: "easeInOut",
  }}
  className="flex flex-col items-center text-center gap-10"
>


            {/* IMAGE */}
           <motion.div
  animate={{
    y: [0, -12, 0],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="relative w-[220px] h-[220px]"
>

              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-contain"
              />
            </motion.div>

            {/* TEXT */}
            <div className="flex flex-col items-center gap-4">
              <p className="text-sm tracking-[4px] text-gray-300 uppercase">
                {item.title}
              </p>

              <h2
                className="text-5xl md:text-6xl font-semibold text-[#d2ff00] leading-tight italic"
                dangerouslySetInnerHTML={{ __html: item.tagline }}
              />

              <p className="max-w-xl text-gray-300 text-lg leading-relaxed">
                {item.desc}
              </p>
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}
