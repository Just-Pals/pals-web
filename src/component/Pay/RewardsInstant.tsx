"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function RewardsInstant() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between bg-black text-white px-4 sm:px-6 md:px-10 lg:px-20 py-16 sm:py-20 md:py-32 gap-8 md:gap-10">

      {/* TEXT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 order-2 md:order-1"
      >
        <h2 className="text-[36px] sm:text-[48px] md:text-[70px] lg:text-[90px] text-[#00FFA3] font-serif italic leading-none">
          earn <br /> assured <br /> rewards
        </h2>

        <p className="text-white/70 mt-4 sm:mt-6 text-[14px] sm:text-[16px] md:text-lg max-w-md">
          the experience isn't the only reward.
          earn assured cashback, coins, and
          more on every transaction.
        </p>
      </motion.div>

      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 flex justify-center order-1 md:order-2"
      >
        <Image
          src="/phone-rewards.png"
          alt="Rewards UI"
          width={350}
          height={700}
          className="object-contain w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px]"
        />
      </motion.div>

    </section>
  );
}
