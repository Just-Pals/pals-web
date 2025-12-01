"use client";

import { motion } from "framer-motion";
import Container from "../common/Container";

interface FooterProps {
  variant?: "default" | "pay";
  showMarquee?: boolean;
}

export default function Footer({ variant = "default", showMarquee = false }: FooterProps) {
  if (variant === "pay" || showMarquee) {
    return (
      <footer className="bg-black text-white">
        {/* Scrolling Marquee */}
        {showMarquee && (
          <div className="relative overflow-hidden bg-[#CFFF00] py-4">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{
                x: [0, -1000],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {[...Array(100)].map((_, i) => (
                <div key={i} className="flex items-center">
                  <span className="text-black font-bold text-sm md:text-base uppercase tracking-wider px-4">
                    DOWNLOAD PALS
                  </span>
                  <span className="text-black">•</span>
                </div>
              ))}
            </motion.div>
          </div>
        )}

        {/* Main Footer Content */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-24 lg:py-32">
          <Container>
            {/* Top Section - Main Message */}
            <div className="max-w-6xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif italic leading-tight">
                <span className="text-purple-200">PALS is a members-only circle.</span>
                <br />
                <span className="text-teal-200">where your pals become your power.</span>
                <br />
                <span className="text-yellow-300">gold-backed.</span>{" "}
                <span className="text-purple-100">0% interest.</span>
              </h2>
            </div>

            {/* Bottom Section - Links and Logo */}
            <div className="mt-16 sm:mt-24 md:mt-32 lg:mt-40 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-12">
              {/* Left Side - Links and Copyright */}
              <div className="flex flex-col gap-4 sm:gap-6">
                {/* Links */}
                <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm md:text-base text-white/70">
                  <a href="/privacy" className="hover:text-white transition-colors">
                    privacy policy
                  </a>
                  <span className="text-white/40">|</span>
                  <a href="/terms" className="hover:text-white transition-colors">
                    terms and conditions
                  </a>
                  <span className="text-white/40">|</span>
                  <a href="/security" className="hover:text-white transition-colors">
                    security
                  </a>
                </div>

                {/* Copyright */}
                <p className="text-xs sm:text-sm text-white/50">
                  copyright © 2020-24 Dreamplug Technologies Pvt Ltd.
                </p>
              </div>

              {/* Right Side - Logo */}
              <div className="flex flex-col items-start md:items-end">
                <div className="flex flex-col items-center gap-2">
                  {/* Shield Icon */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 border-2 border-white rounded-lg flex items-center justify-center">
                    <svg
                      width="24"
                      height="28"
                      viewBox="0 0 24 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-6 sm:w-6 sm:h-7 md:w-7 md:h-8"
                    >
                      <path
                        d="M12 0L0 4.8V12C0 19.2 5.04 25.92 12 28C18.96 25.92 24 19.2 24 12V4.8L12 0Z"
                        fill="white"
                      />
                      <path
                        d="M12 3L3 6.4V12C3 17.52 6.72 22.56 12 24.4C17.28 22.56 21 17.52 21 12V6.4L12 3Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  {/* PALS Text */}
                  <span className="text-white font-bold text-sm sm:text-base md:text-lg tracking-wider">PALS</span>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </footer>
    );
  }

  // Default variant
  return (
    <footer className="w-full bg-black text-white border-t border-white/10 pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-14 md:pb-16">
      <Container>
        <div className="text-[24px] sm:text-[28px] md:text-[34px] font-semibold tracking-tight mb-6 sm:mb-8 md:mb-10">
          pals
        </div>

        <div className="flex flex-wrap gap-x-6 sm:gap-x-8 md:gap-x-10 gap-y-3 sm:gap-y-4 text-[12px] sm:text-[13px] md:text-[14px] mb-6 sm:mb-8 md:mb-10">
          <a href="#" className="hover:text-white/80 transition-colors">Help Center</a>
          <a href="#" className="hover:text-white/80 transition-colors">Trust & Safety</a>
          <a href="#" className="hover:text-white/80 transition-colors">Our Fees</a>
          <a href="#" className="hover:text-white/80 transition-colors">Why PALS</a>
          <a href="#" className="hover:text-white/80 transition-colors">Contact Us</a>
        </div>

        <div className="border-t border-white/10 my-6 sm:my-8 md:my-10"></div>

        <p className="text-[11px] sm:text-[12px] md:text-[13px] leading-relaxed max-w-4xl">
          PALS is a financial experience platform. All features are subject to eligibility and approval.
          Rewards, memberships, privileges and offers may vary by user tier.
        </p>

        <p className="text-[11px] sm:text-[12px] md:text-[13px] mt-3 sm:mt-4 leading-relaxed max-w-4xl">
          This platform does not provide financial, investment, legal or tax advice. Consult your advisors before making decisions.
          All trademarks belong to their respective owners.
        </p>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-8 sm:mt-10 md:mt-12 text-[11px] sm:text-[12px] md:text-[13px] gap-3">
          <span>© {new Date().getFullYear()} PALS, Inc.</span>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white/80 transition-colors">Accessibility</a>
            <a href="#" className="hover:text-white/80 transition-colors">Terms</a>
            <a href="#" className="hover:text-white/80 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/80 transition-colors">Cookies</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

