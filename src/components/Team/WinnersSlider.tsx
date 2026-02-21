"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const winners = [
  {
    img: "/linkedin/Dr. Mohammed Obaidullah.png",
    name: "Dr. Mohammed Obaidullah",
    position: "Chairman IBF Net Group",
    location: "Indonesia",
    link: "https://www.linkedin.com/in/dr-obaidullah/",
  },
  {
    img: "/linkedin/Shahzan Mulla.png",
    name: "Shahzan Mulla",
    position: "Head of IT & Security Groww",
    location: "Bangalore, India",
    link: "https://www.linkedin.com/in/shahzanmulla/",
  },
  {
    img: "/linkedin/Parvez Jasani.png",
    name: "Parvez Jasani",
    position: "Chairman at CELLPAY",
    location: "United States",
    link: "https://www.linkedin.com/in/parvez-jasani-2b17456a/",
  },
  {
    img: "/linkedin/Syed Asif Iqbal.png",
    name: "Syed Asif Iqbal",
    position: "Strategy Officer at Lawyered",
    location: "Delhi, India",
    link: "https://www.linkedin.com/in/startupwithsyed/",
  },
  {
    img: "/linkedin/Aaquib Hussain.png",
    name: "Aaquib Hussain",
    position: "Partner at Freeflow Ventures",
    location: "Kolkata, India",
    link: "https://www.linkedin.com/in/aaquibh/",
  },
];

const scrollList = [...winners, ...winners, ...winners];

export default function WinnersSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrame: number;
    let lastTime = 0;
    const scrollSpeed = 0.5;

    const scroll = (currentTime: number) => {
      if (!isPaused && container) {
        if (lastTime === 0) lastTime = currentTime;
        const deltaTime = currentTime - lastTime;

        container.scrollLeft += scrollSpeed * (deltaTime / 16);

        const singleSetWidth = container.scrollWidth / 3;
        if (container.scrollLeft >= singleSetWidth) {
          container.scrollLeft = 0;
        }

        lastTime = currentTime;
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  return (
    <section className="w-full bg-black py-12 sm:py-16 md:py-20 overflow-hidden relative">

      {/* Background */}
      <div className="absolute inset-0 flex justify-between opacity-20 pointer-events-none overflow-hidden">
        <div className="w-1/3 bg-pink-500 skew-x-[-20deg] h-full"></div>
        <div className="w-1/3 bg-pink-500 skew-x-[-20deg] h-full"></div>
        <div className="w-1/3 bg-pink-500 skew-x-[-20deg] h-full"></div>
      </div>

      {/* Slider */}
      <div
        ref={containerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative z-10 flex gap-4 sm:gap-5 md:gap-6 overflow-x-hidden no-scrollbar py-4 sm:py-5 md:py-6 px-2 sm:px-4"
      >
        {scrollList.map((w, idx) => (
          <div
            key={idx}
            className="min-w-[220px] xs:min-w-[240px] sm:min-w-[260px] md:min-w-[280px] bg-white rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            {/* Image */}
            <div className="relative w-full h-48 xs:h-56 sm:h-64 overflow-hidden rounded-t-xl sm:rounded-t-2xl">
              <Image
                src={w.img}
                alt={w.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 220px, (max-width: 768px) 260px, 280px"
              />
            </div>

            {/* Text Section */}
            <div className="text-center py-3 sm:py-4 text-black px-3">

              {/* Name + LinkedIn */}
              <div className="flex items-center justify-center gap-2 mb-1">
                <p className="font-bold text-sm sm:text-base">
                  {w.name}
                </p>

                <a
                  href={w.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition"
                >
                  <img
                    src="/linkedin-icon.png"
                    alt="linkedin"
                    className="w-4 h-4"
                  />
                </a>
              </div>

              <p className="font-medium text-gray-600 text-xs sm:text-sm mb-1">
                {w.position}
              </p>

              <p className="font-medium text-gray-500 text-xs">
                {w.location}
              </p>

            </div>

          </div>
        ))}
      </div>
    </section>
  );
}