"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function RewardsInstant() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between bg-black text-white px-10 md:px-20 py-32 gap-10">

      {/* TEXT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2"
      >
        <h2 className="text-[70px] md:text-[90px] text-[#00FFA3] font-serif italic leading-none">
          earn <br /> assured <br /> rewards
        </h2>

        <p className="text-white/70 mt-6 text-lg max-w-md">
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
        className="md:w-1/2 flex justify-center"
      >
        <Image
          src="/phone-rewards.png"
          alt="Rewards UI"
          width={350}
          height={700}
          className="object-contain"
        />
      </motion.div>

    </section>
  );
}
