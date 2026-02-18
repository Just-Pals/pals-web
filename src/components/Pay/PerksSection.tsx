"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Section from "../common/Section";
import Container from "../common/Container";

interface PerkItem {
  title: string;
  tagline: string;
  desc: string;
  img: string;
}

const perks: PerkItem[] = [
  {
    title: "Purchase",
    tagline: "scan and pay <br/> instantly.",
    desc: "Make payments securely using Pals. Enjoy fast checkouts and exclusive rewards every time you scan and pay.",
    img: "/perks/scanandpay.png",
  },
  {
    title: "Loan",
    tagline: "borrow from pals <br/> and pools.",
    desc: "Access flexible borrowing options directly from your Pals Circle or community pools without paperwork.",
    img: "/perks/borrow.png",
  },
  {
    title: "Charity",
    tagline: "donate to the causes <br/> you care about.",
    desc: "Support meaningful causes and contribute instantly. Every donation helps create real impact.",
    img: "/perks/charity.png",
  },
  {
    title: "Invest",
    tagline: "invest in curated <br/> projects and startups.",
    desc: "Grow your money by investing in verified, high-potential startups and community-driven projects.",
    img: "/perks/invest.png",
  },
];

export default function PerksSection() {
  return (
    <Section backgroundColor="black" padding="xl">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 sm:gap-x-16 gap-y-20 lg:gap-y-24">

          {perks.map((perk, index) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.3,
                duration: 0.7,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center text-center gap-8 sm:gap-10"
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
                className="relative w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px]"
              >
                <Image
                  src={perk.img}
                  alt={perk.title}
                  fill
                  className="object-contain"
                />
              </motion.div>

              {/* TEXT */}
              <div className="flex flex-col items-center gap-3 sm:gap-4">
                <p className="text-xs sm:text-sm tracking-[4px] text-gray-300 uppercase">
                  {perk.title}
                </p>

                <h2
                  className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-semibold text-[#d2ff00] leading-tight italic"
                  dangerouslySetInnerHTML={{ __html: perk.tagline }}
                />

                <p className="max-w-xl text-gray-300 text-base sm:text-lg leading-relaxed px-4">
                  {perk.desc}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </Container>
    </Section>
  );
}
