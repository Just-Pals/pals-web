"use client";

import { useRef, useState, useEffect } from "react";

export default function InvestmentSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [value, setValue] = useState(40); // default 40 lakh

  // Investment calculation
  const investmentAmount = value * 100000; // 1 lakh = 100000
  const returnsAmount = investmentAmount * 0.09; // 9% return

  // Format currency
  const formatCurrency = (num: number) =>
    num.toLocaleString("en-IN");

  // Video scrub based on slider
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const percentage = value / 100;
    if (video.duration) {
      video.currentTime = video.duration * percentage;
    }
  }, [value]);

  return (
    <section className="bg-white pt-40 pb-32 px-6 text-center overflow-hidden">

      {/* Heading */}
      <h2 className="font-serif text-black 
                     text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                     leading-tight max-w-4xl mx-auto">
        invest in the creditworthy.
        <br />
        reap the rewards.
      </h2>

      {/* Paragraph */}
      <p className="mt-10 text-gray-600 
                    text-lg sm:text-xl md:text-4xl 
                    leading-relaxed max-w-4xl mx-auto">
        your investment is diversified and lent to creditworthy borrowers,
        vetted by CRED & Liquiloans, which earns you the high interest
      </p>

      {/* Video */}
      <div className="mt-1 flex justify-center">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          className="w-full max-w-4xl h-[580px] object-contain"
        >
          <source
            src="https://web-images.credcdn.in/_next/assets/videos/mint/chair_new_com.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Slider */}
      <div className="mt-10 max-w-3xl mx-auto">
        <input
          type="range"
          min="10"
          max="100"
          step="1"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full accent-green-600"
        />
      </div>

      {/* Numbers */}
      <div className="mt-14 flex justify-center gap-16 text-left flex-wrap">

        <div>
          <h3 className="text-6xl font-semibold text-black">
            ₹{formatCurrency(investmentAmount)}
          </h3>
          <p className="text-gray-600 mt-3 text-2xl md:text-3xl font-semibold tracking-wide">
  investment
</p>
        </div>

        <div>
          <h3 className="text-6xl font-semibold text-black">
            ₹{formatCurrency(returnsAmount)}
          </h3>
         <p className="text-gray-600 mt-3 text-2xl md:text-3xl font-semibold tracking-wide">
  returns p.a
</p>
        </div>

      </div>

    </section>
  );
}