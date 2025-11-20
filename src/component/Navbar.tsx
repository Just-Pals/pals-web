"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("WHAT'S NEW");

  const menuData: Record<string, any[]> = {
    "WHAT'S NEW": [
      { icon: "🪙", label: "MONEY" },
      { icon: "🚗", label: "GARAGE" },
      { icon: "💸", label: "PAY ANYONE" },
      { icon: "✨", label: "WORK FOR CRED" },
    ],
    PAYMENTS: [
      { icon: "📡", label: "TAP TO PAY" },
      { icon: "👤", label: "PAY ANYONE" },
      { icon: "💳", label: "RUPAY CARDS ON UPI" },
      { icon: "🔲", label: "SCAN & PAY" },
    ],
    UPGRADES: [
      { icon: "🏖️", label: "TRAVEL" },
      { icon: "🏦", label: "MONEY" },
      { icon: "⚙️", label: "GARAGE" },
      { icon: "🎯", label: "MINT" },
    ],
    COMPANY: [
      { icon: "🏢", label: "ABOUT" },
      { icon: "📞", label: "CONTACT" },
      { icon: "⚖️", label: "CAREERS" },
      { icon: "✍️", label: "BLOG" },
    ],
    "INSIDER PERKS": [
      { icon: "🎁", label: "EXCLUSIVE DEALS" },
      { icon: "⭐", label: "POINTS & REWARDS" },
      { icon: "🛍️", label: "SHOP" },
    ],
  };

  const menuItems = Object.keys(menuData);

  return (
    <>
      {/* TOP NAV */}
     
        <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-4 sm:px-6 md:px-10 py-4 md:py-6 z-50 mt-4 sm:mt-6 md:mt-8">
        {/* LOGO - Left Side */}
        <motion.div
          className="flex items-center gap-3 cursor-pointer"
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 120 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
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
            whileHover={{ rotate: 360 }}
            className="transition-transform duration-500"
          >
            <Image src="/Transparent.png" width={45} height={45} alt="logo" priority className="w-8 h-8 sm:w-10 sm:h-10 md:w-[45px] md:h-[45px]" />
          </motion.div>
          <motion.span
            className="text-lg sm:text-xl md:text-2xl font-semibold text-white"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            pals
          </motion.span>
        </motion.div>

        {/* BUTTON */}
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
                className="flex flex-col gap-[6px]"
              >
                <motion.span
                  className="w-6 h-[2px] bg-white"
                  initial={{ width: 0 }}
                  animate={{ width: 24 }}
                  transition={{ delay: 0.1 }}
                />
                <motion.span
                  className="w-6 h-[2px] bg-white"
                  initial={{ width: 0 }}
                  animate={{ width: 24 }}
                  transition={{ delay: 0.2 }}
                />
                <motion.span
                  className="w-6 h-[2px] bg-white"
                  initial={{ width: 0 }}
                  animate={{ width: 24 }}
                  transition={{ delay: 0.3 }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* MENU OVERLAY */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-[999] p-4 sm:p-8 md:p-12 lg:p-20 overflow-y-auto"
          >
            {/* TOP ROW INSIDE MENU */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex justify-between items-center mb-20 mt-4"
            >
              {/* Logo with Animation */}
              <motion.div
                className="flex items-center gap-3"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
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
                >
                  <Image src="/Transparent.png" width={40} height={40} alt="logo" />
                </motion.div>
                <motion.span
                  className="text-2xl font-semibold"
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
                className="text-4xl text-white/80 hover:text-white transition-colors relative w-12 h-12 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
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
              className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-20"
            >
              {/* LEFT SIDE MENU LIST */}
              <div className="space-y-4 md:space-y-6 text-gray-400 text-base sm:text-lg md:text-xl border-r-0 md:border-r border-white/20 pr-0 md:pr-8 lg:pr-16 pb-6 md:pb-0 border-b md:border-b-0 border-white/20 md:border-b-0">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item}
                    onClick={() => setActiveMenu(item)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    whileHover={{ x: 5 }}
                    className={`cursor-pointer tracking-wide py-3 transition-all 
                      ${
                        activeMenu === item
                          ? "text-white bg-white/10 rounded-lg px-4"
                          : "hover:text-white"
                      }`}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>

              {/* RIGHT SIDE CONTENT — Dynamic */}
              <div className="col-span-1 md:col-span-2 space-y-6 md:space-y-10">
                {/* OPTIONS GRID */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMenu}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
                  >
                    {menuData[activeMenu].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="flex flex-col items-center text-center cursor-pointer"
                      >
                        {item.icon && (
                          <motion.span
                            className="text-4xl mb-2"
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
                            className="rounded-xl"
                          />
                        )}
                        <span className="text-lg tracking-wide mt-3 text-gray-300 hover:text-white transition-colors">
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