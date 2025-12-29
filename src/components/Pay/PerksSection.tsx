"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Section from "../common/Section";
import Container from "../common/Container";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
    img: "/perks/language.png",
  },
  {
    title: "Loan",
    tagline: "borrow from pals <br/> and pools.",
    desc: "Access flexible borrowing options directly from your Pals Circle or community pools without paperwork.",
    img: "/perks/loan.png",
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const cards = gsap.utils.toArray(".h-card");
      // ensure there's space at the end so the last card can fully scroll into view
      const sectionWidth = section.clientWidth || window.innerWidth;
      track.style.paddingRight = `${sectionWidth}px`;
      // compute scrollable width (total track width minus visible section width)
      const totalWidth = track.scrollWidth - sectionWidth;

      const horizontalAnimation = gsap.to(track, {
        x: () => -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalWidth}`, // scroll distance equals track.scrollWidth - window.innerWidth
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // optional: fade/scale cards while passing center
      cards.forEach((card) => {
        ScrollTrigger.create({
          trigger: card as Element,
          containerAnimation: horizontalAnimation,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <>
    <style>{`
        .horizontal-section {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }
        .scroll-track {
          display: flex;
          height: 100%;
          width: 100%;
        }
       
       
      `}</style>
    
    <Section backgroundColor="black" padding="xl">
      <Container>
        <div className="relative">
          <div
            ref={sectionRef}
            className="horizontal-section"
            id="horizontal-scroll"
          >
            <div ref={trackRef} className="flex h-full scroll-track w-full">
              {perks.map((perk, index) => (
                <motion.div
                  key={perk.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.7,
                    ease: "easeInOut",
                  }}
                  className="h-card flex-col md:flex-[0_0_50vw] flex-[0_0_100vw] md:w-[50vw] w-screen h-full flex items-center justify-center overflow-hidden px-4"
                >
                  <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px] mx-auto"
                  >
                    <Image
                      src={perk.img}
                      alt={perk.title}
                      fill
                      className="object-contain"
                    />
                  </motion.div>

                  <div className="flex flex-col items-center gap-3 sm:gap-4">
                    <p className="text-xs sm:text-sm tracking-[4px] text-gray-300 uppercase">
                      {perk.title}
                    </p>

                    <h2
                      className="text-[28px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-semibold text-[#d2ff00] leading-tight italic"
                      dangerouslySetInnerHTML={{ __html: perk.tagline }}
                    />

                    <p className="max-w-xl text-gray-300 text-base sm:text-lg leading-relaxed px-4">
                      {perk.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
    </>
  );
}
