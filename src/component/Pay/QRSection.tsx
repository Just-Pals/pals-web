"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function QRSection() {
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
          scan <br /> any QR
        </h2>

        <p className="text-white/70 mt-4 sm:mt-6 text-[14px] sm:text-[16px] md:text-lg max-w-md">
          all codes are welcome. simply open pals and swipe left to scan.
        </p>
      </motion.div>

      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 flex justify-center relative order-1 md:order-2"
      >
        <Image
          src="/phoneUI.png"
          alt="PALS QR Scan"
          width={350}
          height={700}
          className="object-contain w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px]"
        />

        <Image
          src="/qr.png"
          alt="QR Code"
          width={170}
          height={170}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] sm:w-[130px] md:w-[150px] lg:w-[170px]"
        />
      </motion.div>

    </section>
  );
}