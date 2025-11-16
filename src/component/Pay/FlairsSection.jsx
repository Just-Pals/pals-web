"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FlairsSection() {
  return (
    <section className="relative w-full min-h-screen bg-black text-white overflow-hidden py-32">
      
      {/* PLANET BACKGROUND - positioned higher and larger */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1800px] h-[1800px] opacity-60 pointer-events-none z-0">
        <Image
          src="/stellar-bg.png"
          alt="planet background"
          fill
          className="object-contain"
        />
      </div>

      {/* Dark vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none z-10" />

      {/* TITLE SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-center mb-32"
      >
        <p className="text-white/40 tracking-[0.3em] text-sm uppercase mb-4">
          BEHOLD
        </p>
        <h1 className="text-[100px] md:text-[140px] lg:text-[180px] font-serif italic leading-none text-[#4169E1]">
          flairs
        </h1>
      </motion.div>

      {/* PHONE WITH FLAIRS */}
      <div className="relative z-20 flex justify-center items-center mb-40">
        
        {/* Orange glow circle behind phone */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,140,0,0.4) 0%, rgba(255,100,0,0.2) 40%, transparent 70%)",
            filter: "blur(60px)"
          }}
        />

        {/* Phone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-[360px] h-[720px]"
        >
          {/* Phone frame with golden border */}
          <div className="absolute inset-0 rounded-[50px] border-[3px] border-[#D4AF37] overflow-hidden bg-black">
            {/* Phone screen content - scanner UI */}
            <div className="w-full h-full flex flex-col items-center justify-center relative">
              {/* Orange circle/sun at top */}
              <div className="absolute top-[15%] w-32 h-32 rounded-full bg-gradient-to-b from-[#FFD700] to-[#FF6B35]" />
              
              {/* Scanner box outline */}
              <div className="w-[60%] h-[45%] border-2 border-white/30 rounded-lg relative">
                {/* Corner markers */}
                <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[#FFD700]" />
                <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[#FFD700]" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[#FFD700]" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[#FFD700]" />
              </div>

              {/* Bottom flair selector circles */}
              <div className="absolute bottom-[15%] flex gap-6">
                <div className="w-16 h-16 rounded-full border-2 border-white/50 bg-black/50" />
                <div className="w-20 h-20 rounded-full border-2 border-[#00FF88] bg-gradient-to-b from-[#FFD700] to-[#FF6B35] flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#FFD700] to-[#FF6B35]" />
                </div>
                <div className="w-16 h-16 rounded-full border-2 border-white/50 bg-black/50" />
              </div>

              {/* STELLAR text and subtitle */}
              <div className="absolute bottom-[6%] text-center">
                <p className="text-white text-xl font-bold tracking-[0.3em]">STELLAR</p>
                <p className="text-[#00FF88] text-xs tracking-wider mt-1">TAP TO CHANGE ENVIRONMENT</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FLOATING FLAIRS around phone */}
        {[
          { src: "/flair1.png", x: -280, y: -80, delay: 0.2 },
          { src: "/flair2.png", x: 280, y: -80, delay: 0.4 },
          { src: "/flair3.png", x: -300, y: 200, delay: 0.6 },
          { src: "/flair4.png", x: 300, y: 200, delay: 0.8 },
          { src: "/flair5.png", x: 0, y: 380, delay: 1.0 },
        ].map((flair, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: flair.delay }}
            className="absolute"
            style={{ 
              transform: `translate(${flair.x}px, ${flair.y}px)`,
              filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.5))"
            }}
          >
            <Image
              src={flair.src}
              alt={`flair ${i + 1}`}
              width={140}
              height={140}
              className="object-contain"
            />
          </motion.div>
        ))}
      </div>

      {/* FLAIR PACK POSTER */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 flex justify-center px-6 mb-32"
      >
        <div className="relative max-w-4xl">
          <Image
            src="/flair-pack.png"
            alt="CRED Pay Flair Pack"
            width={1000}
            height={1000}
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </motion.div>

      {/* BOTTOM TEXT SECTION */}
      <div className="relative z-20 max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 md:gap-20">
          
          {/* Left - Heading */}
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[60px] md:text-[80px] lg:text-[90px] font-serif italic text-[#4169E1] leading-[0.9]"
          >
            designed to<br />be shown off
          </motion.h2>

          {/* Right - Description */}
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white/60 text-lg md:text-xl leading-relaxed max-w-md mt-4 md:mt-8"
          >
            redeem coins to collect flairs. pin them to your scanner.
            flaunt your good taste. each flair is crafted for maximum envy.
          </motion.p>
        </div>
      </div>
    </section>
  );
}