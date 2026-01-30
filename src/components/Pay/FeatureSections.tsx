"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import QRSection from "./QRSection";
import PayInstantly from "./PayInstantly";
import RewardsInstant from "./RewardsInstant";
import PutMoney from "./PutMoney";

export default function FeatureSections() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const cards = gsap.utils.toArray(track.querySelectorAll(".h-card"));
      // compute scrollable width (total track width minus visible section width)
      const sectionWidth = section.clientWidth || window.innerWidth;
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
        .horizontal-track {
          display: flex;
          height: 100%;
          width: 100%;
        }
        /* make each direct child take the full viewport width so only one shows */
        .horizontal-track > * {
          flex: 0 0 100vw;
          width: 100vw;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
       
      `}</style>
      <section
        ref={sectionRef}
        className="horizontal-section"
        id="horizontal-scroll"
      >
        <div ref={trackRef} className="flex h-full horizontal-track w-full pt-0">
          
          <QRSection />
          <PayInstantly />
          <RewardsInstant />
          <PutMoney />
        </div>
      </section>
    </>
  );
}
