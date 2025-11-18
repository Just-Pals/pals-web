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
        className="relative z-20 text-center mb-16 sm:mb-20 md:mb-32 px-4"
      >
        <p className="text-white/40 tracking-[0.3em] text-[10px] sm:text-xs md:text-sm uppercase mb-3 sm:mb-4">
          BEHOLD
        </p>
        <h1 className="text-[48px] sm:text-[64px] md:text-[100px] lg:text-[140px] xl:text-[180px] font-serif italic leading-none text-[#4169E1]">
          flairs
        </h1>
      </motion.div>

      {/* PHONE WITH FLAIRS */}
      <div className="relative z-20 flex justify-center items-center mb-20 sm:mb-28 md:mb-40 px-4">
        
        {/* Orange glow circle behind phone */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-full"
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
          className="relative w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] h-[480px] sm:h-[560px] md:h-[640px] lg:h-[720px]"
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
          { src: "/flair1.png", x: -280, y: -80, delay: 0.2, mobileX: -120, mobileY: -40 },
          { src: "/flair2.png", x: 280, y: -80, delay: 0.4, mobileX: 120, mobileY: -40 },
          { src: "/flair3.png", x: -300, y: 200, delay: 0.6, mobileX: -130, mobileY: 100 },
          { src: "/flair4.png", x: 300, y: 200, delay: 0.8, mobileX: 130, mobileY: 100 },
          { src: "/flair5.png", x: 0, y: 380, delay: 1.0, mobileX: 0, mobileY: 200 },
        ].map((flair, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: flair.delay }}
            className="absolute hidden sm:block"
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
              className="object-contain w-[80px] sm:w-[100px] md:w-[120px] lg:w-[140px]"
            />
          </motion.div>
        ))}
      </div>

      {/* FLAIR PACK POSTER */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 flex justify-center px-4 sm:px-6 mb-16 sm:mb-24 md:mb-32"
      >
        <div className="relative max-w-4xl w-full">
          <Image
            src="/flair-pack.png"
            alt="CRED Pay Flair Pack"
            width={1000}
            height={1000}
            className="rounded-xl sm:rounded-2xl shadow-2xl w-full h-auto"
          />
        </div>
      </motion.div>

      {/* BOTTOM TEXT SECTION */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 sm:gap-12 md:gap-20">
          
          {/* Left - Heading */}
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[32px] sm:text-[42px] md:text-[60px] lg:text-[80px] xl:text-[90px] font-serif italic text-[#4169E1] leading-[0.9]"
          >
            designed to<br />be shown off
          </motion.h2>

          {/* Right - Description */}
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white/60 text-[14px] sm:text-[16px] md:text-lg lg:text-xl leading-relaxed max-w-md mt-4 md:mt-8"
          >
            redeem coins to collect flairs. pin them to your scanner.
            flaunt your good taste. each flair is crafted for maximum envy.
          </motion.p>
        </div>
      </div>
    </section>
  );
}