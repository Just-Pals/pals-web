"use client";

import { useEffect, useRef } from "react";

export default function ReturnsSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleScroll = () => {
      // Scroll ho raha hai → play
      video.play();

      // Agar scroll ruk gaya → pause
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        video.pause();
      }, 150); // 150ms baad pause
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="bg-[#ffffff] py-32 overflow-hidden">
      <video
        ref={videoRef}
        muted
        playsInline
        className="w-full h-auto object-contain"
      >
        <source
          src="https://web-images.credcdn.in/_next/assets/videos/mint/nine_rbi_desktop.mp4"
          type="video/mp4"
        />
      </video>
    </section>
  );
}