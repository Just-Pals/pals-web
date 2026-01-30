"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SafetyNetSection() {
  return (
    <section className="w-full bg-black text-white py-16 lg:py-1">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 2xl:px-24">

        {/* GOLD BACKED */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/pay/gold.png"
              alt="Gold backed"
              width={320}
              height={320}
              className="w-[220px] sm:w-[260px] md:w-[320px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-lg"
          >
            <h2 className="text-[28px] md:text-[34px] font-semibold">
              gold-backed
            </h2>
            <p className="mt-4 text-white/70 text-[16px] md:text-lg leading-relaxed">
              your pool is anchored in real gold, <br />
              steady when everything else isn’t.
            </p>
          </motion.div>
        </div>

        {/* ZERO INTEREST */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-md"
          >
            <p className="text-[28px] md:text-[34px] font-semibold">
              zero interest
            </p>
            <p className="mt-4 text-white/70 text-[16px] md:text-lg leading-relaxed">
              borrow without the burden. <br />
              no interest. no surprises. no nonsense.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/pay/zero interest.png"
              alt="Zero interest"
              width={320}
              height={320}
              className="w-[220px] sm:w-[260px] md:w-[320px]"
            />
          </motion.div>
        </div>

       {/* GOLD BACKED */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/pay/secure.png"
              alt="Gold backed"
              width={320}
              height={320}
              className="w-[220px] sm:w-[260px] md:w-[320px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-lg"
          >
            <h2 className="text-[28px] md:text-[34px] font-semibold">
              Secure
            </h2>
            <p className="mt-4 text-white/70 text-[16px] md:text-lg leading-relaxed">
              built with bank-grade protection, <br />
              without the bank-grade complica.
              
            </p>
          </motion.div>
        </div>


        {/* FOOTER TEXT */}
        <div className="mt-15 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif italic text-[#C8FFD4] text-[36px] sm:text-[48px] md:text-[64px] lg:text-[96px] leading-none"
          >
            gift collectibles, coupons.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto mt-8 text-white/70 text-[16px] md:text-lg leading-relaxed"
          >
            PALS pay is built to showcase you. your tastes. your wins.
            your collections. explore the skins your scanner can wear. it might just be
            what you need to find yourself.
            </motion.p>
        </div>

      </div>
    </section>
  );
}
