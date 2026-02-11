"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden text-center pt-32 pb-[520px]">

      {/* ================= DECOR ELEMENTS ================= */}
      <motion.div
        className="absolute top-[42%] left-[14%]"
        initial={{ opacity: 0, x: -40, rotate: -35 }}
        animate={{ opacity: 1, x: 0, rotate: -35 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div className="w-16 h-2.5 rounded-full bg-gradient-to-r from-[#8B6F47] to-[#A0826D]" />
      </motion.div>

      <motion.div
        className="absolute top-[22%] right-[10%]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#FF8A5B] to-[#FF6B4A]" />
      </motion.div>

      <motion.div
        className="absolute bottom-[42%] right-[10%]"
        initial={{ opacity: 0, x: 40, rotate: 15 }}
        animate={{ opacity: 1, x: 0, rotate: 15 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <div className="w-24 h-3 rounded-full bg-gray-500/70" />
      </motion.div>

      {/* ================= TEXT ================= */}
      <div className="relative z-20 flex flex-col items-center">

        <motion.h1
          className="text-[42px] sm:text-[60px] md:text-[90px] lg:text-[130px] xl:text-[180px] font-black leading-none tracking-tight text-[#CFFF00]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          PALS
        </motion.h1>

        <motion.div
          className="w-full max-w-5xl h-[2px] my-6"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, delay: 0.5 }}
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, #CFFF00 15%, #CFFF00 85%, transparent 100%)",
            transformOrigin: "center",
          }}
        />

        <motion.h2
          className="text-[36px] sm:text-[48px] md:text-[70px] lg:text-[100px] xl:text-[150px] font-serif italic leading-none text-[#CFFF00]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          over banks
        </motion.h2>
      </div>

      {/* ================= BOTTOM GLOW ================= */}
      <div
        className="absolute bottom-0 left-0 w-full h-[50%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center bottom, rgba(255,107,74,0.25) 0%, rgba(245,166,35,0.2) 20%, rgba(139,111,71,0.15) 40%, transparent 70%)",
        }}
      />

      {/* ================= PHONE + ORBIT ================= */}
      {/* PHONE + ORBIT */}
<motion.div
  className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 z-30 w-full flex justify-center"
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, delay: 0.3 }}
>
  {/* SHARED ORBIT CONTAINER */}
  <div className="relative w-[620px] h-[620px] flex items-center justify-center">

    {/* CIRCLE */}
    <div className="absolute inset-0 flex items-center justify-center">
      <Image
        src="/home/circle.svg"
        alt="Orbit"
        width={620}
        height={620}
        className="opacity-60"
      />
    </div>

    {/* PHONE */}
    <div className="relative z-20 translate-y-[20px]">
      <Image
        src="/home/mobile.png"
        alt="Hero Phone"
        width={320}
        height={640}
        priority
      />
    </div>

    {/* FLOATING CARD — TOP RIGHT */}
    <div className="absolute top-[80px] right-[40px] z-30 hidden lg:block">
      <Image
        src="/home/card-top-right.svg"
        alt="Card"
        width={150}
        height={110}
      />
    </div>

    {/* FLOATING CARD — BOTTOM RIGHT */}
    <div className="absolute bottom-[90px] right-[30px] z-30 hidden lg:block">
      <Image
        src="/home/card-bottom-right.svg"
        alt="Card"
        width={140}
        height={100}
      />
    </div>

    {/* FLOATING CARD — LEFT */}
    <div className="absolute bottom-[110px] left-[30px] z-30 hidden lg:block">
      <Image
        src="/home/card-left.svg"
        alt="Card"
        width={160}
        height={95}
      />
    </div>

  </div>
</motion.div>

    </section>
  );
}
