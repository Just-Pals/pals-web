"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-black flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Logo at top */}
      <motion.div
        className="absolute top-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 border-2 border-white rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-base">C</span>
          </div>
          <span className="text-white font-semibold text-lg">CRED pay</span>
        </div>
      </motion.div>

      {/* Animated brown pencil stroke - top left */}
      <motion.div
        className="absolute top-[42%] left-[12%] md:left-[18%]"
        initial={{ opacity: 0, x: -50, rotate: -35 }}
        animate={{ opacity: 1, x: 0, rotate: -35 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="w-16 h-2.5 rounded-full" style={{
          background: "linear-gradient(135deg, #8B6F47 0%, #A0826D 100%)"
        }} />
      </motion.div>

      {/* Animated orange circle - top right */}
      <motion.div
        className="absolute top-[20%] right-[8%] md:right-[12%]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="w-20 h-20 md:w-28 md:h-28 rounded-full" style={{
          background: "linear-gradient(135deg, #FF8A5B 0%, #FF6B4A 100%)"
        }} />
      </motion.div>

      {/* Animated gray brush stroke - bottom right */}
      <motion.div
        className="absolute bottom-[38%] right-[6%] md:right-[10%]"
        initial={{ opacity: 0, x: 50, rotate: 15 }}
        animate={{ opacity: 1, x: 0, rotate: 15 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <div className="w-24 h-3 rounded-full bg-gray-500/80" />
      </motion.div>

      {/* Main text content */}
      <motion.div
        className="relative z-10 px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center justify-center">
          <h1 className="text-[70px] md:text-[120px] lg:text-[180px] font-black leading-none tracking-tighter" style={{
            color: "#CFFF00"
          }}>
            CRED{" "}
          </h1>
          <h1 className="text-[70px] md:text-[120px] lg:text-[180px] font-serif italic leading-none" style={{
            color: "#CFFF00",
            fontFamily: "Georgia, serif"
          }}>
            pay
          </h1>
        </div>
        <h2 className="text-[60px] md:text-[100px] lg:text-[150px] font-serif italic leading-none -mt-2 md:-mt-6" style={{
          color: "#CFFF00",
          fontFamily: "Georgia, serif"
        }}>
          has arrived
        </h2>
      </motion.div>

      {/* Horizontal line across middle */}
      <motion.div
        className="absolute top-1/2 left-0 w-full h-[2px]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
        style={{
          background: "linear-gradient(90deg, transparent 0%, #CFFF00 15%, #CFFF00 85%, transparent 100%)",
          transformOrigin: "center"
        }}
      />

      {/* Gradient background bottom half */}
      <div className="absolute bottom-0 left-0 w-full h-[50%] pointer-events-none" style={{
        background: "radial-gradient(ellipse at center bottom, rgba(255,107,74,0.25) 0%, rgba(245,166,35,0.2) 20%, rgba(139,111,71,0.15) 40%, transparent 70%)"
      }} />

      {/* Rainbow gradient arc at bottom */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
      >
        <svg 
          className="w-full" 
          viewBox="0 0 1440 400" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ height: "400px" }}
        >
          <defs>
            <linearGradient id="rainbowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4169E1" />
              <stop offset="15%" stopColor="#00CED1" />
              <stop offset="30%" stopColor="#90EE90" />
              <stop offset="45%" stopColor="#FFD700" />
              <stop offset="60%" stopColor="#FFA500" />
              <stop offset="75%" stopColor="#FF6347" />
              <stop offset="90%" stopColor="#FF1493" />
              <stop offset="100%" stopColor="#8A2BE2" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Arc path */}
          <path
            d="M 50 350 Q 720 50 1390 350"
            stroke="url(#rainbowGradient)"
            strokeWidth="3"
            fill="none"
            filter="url(#glow)"
            opacity="0.9"
          />
        </svg>
      </motion.div>
    </section>
  );
}