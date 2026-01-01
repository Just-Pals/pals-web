"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("About Us");
  const router = useRouter();

  const menuData: Record<string, any[]> = {
  "About Us": [
    { icon: "🎯", label: "Mission" },
    { icon: "👥", label: "Team" },
  ],

  Offerings: [
    { icon: "🛒", label: "Purchase" },
    { icon: "💳", label: "Loan" },
    { icon: "🤲", label: "Charity" },
    { icon: "📈", label: "Invest" },
    { icon: "🏛️", label: "Waqf" },
  ],

  Features: [
    { icon: "🌀", label: "Pool" },
    { icon: "🚨", label: "Pal SOS" },
    { icon: "🏅", label: "Gold Vault" },
    { icon: "👛", label: "Wallet" },
    { icon: "🚀", label: "Space" },
  ],

  "Curated Pools": [
    { icon: "❤️", label: "Health" },
    { icon: "🕋", label: "Umrah" },
    { icon: "💍", label: "Marriage" },
  ],

  Settings: [
    { icon: "📝", label: "Blog", link: "/blog" },
    { icon: "💰", label: "Club", link: "/club" },
    { icon: "⭐", label: "Pal Score", link: "/pal-score" },
    { icon: "👨‍👩‍👧‍👦", label: "Team", link: "/team" },
    { icon: "✍️", label: "Register", link: "/register" },
  ],
};

  const menuItems = Object.keys(menuData);

  return (
    <>
      {/* TOP NAV */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 py-3 xs:py-4 sm:py-5 md:py-6 z-50 mt-2 xs:mt-3 sm:mt-4 md:mt-6 lg:mt-8">
        {/* LOGO - Left Side (navigate home) */}
        <motion.div
          className="min-w-0"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 120 }}
        >
          <Link
            href="/"
            className="flex items-center gap-2 xs:gap-2.5 sm:gap-3 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              whileHover={{ rotate: 360, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="transition-transform duration-500 flex-shrink-0"
            >
              <Image
                src="/common/logo.png"
                width={45}
                height={45}
                alt="pals home"
                priority
                className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-[45px] lg:h-[45px]"
              />
            </motion.div>
            <motion.span
              className="text-base xs:text-lg sm:text-xl md:text-2xl font-semibold text-white whitespace-nowrap truncate"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              pals
            </motion.span>
          </Link>
        </motion.div>

        {/* REGISTER BUTTON & MENU BUTTON */}
        <div className="flex items-center gap-2 sm:gap-3">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/register"
              className="border border-white/40 rounded-xl px-3 sm:px-4 md:px-5 py-2 md:py-2.5 bg-white text-black hover:bg-white/90 transition-all text-xs sm:text-sm font-medium block"
              onClick={(e) => {
                e.preventDefault();
                router.push("/register");
              }}
            >
              Register
            </Link>
          </motion.div>

          <motion.button
            onClick={() => setMenuOpen(true)}
            className="border border-white/40 rounded-xl px-3 sm:px-4 md:px-6 py-2 md:py-3 flex items-center gap-2 sm:gap-4 md:gap-6 bg-black/20 backdrop-blur-md hover:bg-white/10 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
           <span className="tracking-widest text-[10px] sm:text-xs text-white/70 hidden sm:inline">
              {/* CRED INDUSIND BANK <br /> RUPAY CREDIT CARD */}
              Faith-Powered
            </span>

            {/* Hamburger Icon with Animation */}
            <AnimatePresence mode="wait">
              {!menuOpen && (
                <motion.div
                  key="hamburger"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-[5px] xs:gap-[6px]"
                >
                  <motion.span
                    className="w-5 xs:w-6 h-[2px] bg-white"
                    initial={{ width: 0 }}
                    animate={{ width: 20 }}
                    transition={{ delay: 0.1 }}
                  />
                  <motion.span
                    className="w-5 xs:w-6 h-[2px] bg-white"
                    initial={{ width: 0 }}
                    animate={{ width: 20 }}
                    transition={{ delay: 0.2 }}
                  />
                  <motion.span
                    className="w-5 xs:w-6 h-[2px] bg-white"
                    initial={{ width: 0 }}
                    animate={{ width: 20 }}
                    transition={{ delay: 0.3 }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* MENU OVERLAY */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
               className=
               " fixed inset-0 bg-black z-[999] pt-2 xs:pt-2 sm:pt-3 md:pt-4 lg:pt-6 xl:pt-8 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 pb-3 xs:pb-4 sm:pb-6 md:pb-8 lg:pb-12 xl:pb-15 overflow-y-auto "
         >
            {/* TOP ROW INSIDE MENU */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex justify-between items-center mb-8 xs:mb-12 sm:mb-16 md:mb-20 mt-2 xs:mt-3 sm:mt-4"
            >
              {/* Logo with Animation */}
              <motion.div
                className="flex items-center gap-2 xs:gap-2.5 sm:gap-3 cursor-pointer"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                onClick={() => {
                  setMenuOpen(false);
                  window.location.href = "/";
                }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: 0.3,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  className="flex-shrink-0"
                >
                  <Image 
                    src="/common/logo.png" 
                    width={40} 
                    height={40} 
                    alt="pals home" 
                    className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-[40px] md:h-[40px]"
                  />
                </motion.div>
                <motion.span
                  className="text-xl xs:text-2xl sm:text-2xl md:text-3xl font-semibold text-white"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  pals
                </motion.span>
              </motion.div>

              {/* CROSS BUTTON with Animation */}
              <motion.button
                onClick={() => setMenuOpen(false)}
                className="text-3xl xs:text-4xl text-white/80 hover:text-white active:text-white/70 transition-colors relative w-10 h-10 xs:w-12 xs:h-12 flex items-center justify-center touch-manipulation"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                aria-label="Close menu"
              >
                <motion.span
                  className="absolute"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                >
                  ✕
                </motion.span>
              </motion.button>
            </motion.div>

            {/* MENU BODY */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20"
            >
              {/* LEFT SIDE MENU LIST */}
              <div className="space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 text-gray-400 text-sm xs:text-base sm:text-lg md:text-xl border-r-0 lg:border-r border-white/20 pr-0 lg:pr-6 xl:pr-8 2xl:pr-16 pb-4 xs:pb-5 sm:pb-6 lg:pb-0 border-b lg:border-b-0 border-white/20 lg:border-b-0">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item}
                    onClick={() => setActiveMenu(item)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className={`cursor-pointer tracking-wide py-2.5 xs:py-3 sm:py-3.5 md:py-4 transition-all touch-manipulation
                      ${
                        activeMenu === item
                          ? "text-white bg-white/10 rounded-lg px-3 xs:px-4"
                          : "hover:text-white active:text-white/80"
                      }`}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>

              {/* RIGHT SIDE CONTENT — Dynamic */}
              <div className="col-span-1 lg:col-span-2 space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8 lg:space-y-10">
                {/* OPTIONS GRID */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMenu}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-10"
                  >
                    {menuData[activeMenu].map((item, i) => (
                      <motion.div
  key={i}
  onClick={() => item.link && (window.location.href = item.link)}
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: i * 0.05 }}
  whileHover={{ scale: 1.05, y: -5 }}
  whileTap={{ scale: 0.98 }}
  className="flex flex-col items-center text-center cursor-pointer touch-manipulation p-2 xs:p-3 sm:p-4"
>

                        {item.icon && (
                          <motion.span
                            className="text-3xl xs:text-4xl sm:text-5xl mb-1.5 xs:mb-2 sm:mb-2.5"
                            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            {item.icon}
                          </motion.span>
                        )}
                        {item.img && (
                          <Image
                            src={item.img}
                            width={200}
                            height={200}
                            alt={item.label}
                            className="rounded-xl w-full h-auto max-w-[150px] xs:max-w-[180px] sm:max-w-[200px]"
                          />
                        )}
                        <span className="text-sm xs:text-base sm:text-lg md:text-xl tracking-wide mt-2 xs:mt-2.5 sm:mt-3 text-gray-300 hover:text-white active:text-white/80 transition-colors">
                          {item.label}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}