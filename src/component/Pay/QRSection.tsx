"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function QRSection() {
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
          scan <br /> any QR
        </h2>

        <p className="text-white/70 mt-6 text-lg max-w-md">
          all codes are welcome. simply open pals and swipe left to scan.
        </p>
      </motion.div>

      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 flex justify-center relative"
      >
        <Image
          src="/phoneUI.png"
          alt="PALS QR Scan"
          width={350}
          height={700}
          className="object-contain"
        />

        <Image
          src="/qr.png"
          alt="QR Code"
          width={170}
          height={170}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>

    </section>
  );
}