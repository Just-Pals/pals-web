"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const winners = [
  {
    img: "/dummy/user1.png",
    name: "Ankit",
    location: "Nexus Esplanade",
  },
  {
    img: "/dummy/user2.png",
    name: "Chetan",
    location: "Nexus Westend Mall",
  },
  {
    img: "/dummy/user3.png",
    name: "Ruchika",
    location: "The Pavillion Mall",
  },
  {
    img: "/dummy/user4.png",
    name: "Bibek",
    location: "Nexus Esplanade",
  },
  {
    img: "/dummy/user5.png",
    name: "Suresh",
    location: "Nexus Celebration Mall",
  },
];

// Duplicate list to create seamless infinite scroll
const scrollList = [...winners, ...winners, ...winners];

export default function WinnersSlider() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrame: number;

    const scroll = () => {
      container.scrollLeft += 1;
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="w-full bg-black py-20  overflow-hidden relative">
      {/* Pink diagonal stripes behind images */}
      <div className="absolute inset-0 flex justify-between opacity-100 pointer-events-none">
        <div className="w-1/3 bg-pink-500 skew-x-[-20deg]"></div>
        <div className="w-1/3 bg-pink-500 skew-x-[-20deg]"></div>
        <div className="w-1/3 bg-pink-500 skew-x-[-20deg]"></div>
      </div>

      {/* Image Slider Container */}
      <div
        ref={containerRef}
        className="relative z-10 flex gap-6 overflow-x-scroll no-scrollbar scroll-smooth py-6"
      >
        {scrollList.map((w, idx) => (
          <div
            key={idx}
            className="min-w-[260px] bg-white rounded-2xl overflow-hidden shadow-xl"
          >
            {/* Photo */}
            <div className="relative w-full h-64">
              <Image
                src={w.img}
                alt={w.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Label */}
            <div className="text-center py-3 text-black">
              <span className="font-bold">{w.name}</span> at <br />
              <span className="font-medium text-gray-700">{w.location}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
