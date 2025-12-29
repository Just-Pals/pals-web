"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "../common/Container";

export default function QRSection() {
  return (
    <section className="w-full bg-black text-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-14 sm:py-16 md:py-24 lg:py-32">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <h2 className="text-[36px] sm:text-[48px] md:text-[70px] lg:text-[90px] text-[#00FFA3] font-serif italic leading-none">
            {/* scan <br /> any QR */}
            create <br/> your pool
          </h2>

          <p className="text-white/70 mt-4 sm:mt-6 text-[14px] sm:text-[16px] md:text-lg max-w-md">
            {/* all codes are welcome. simply open pals and swipe left to scan. */}
            start a shared space where money has meaning.
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
            src="/pay/new-pool.png"
            alt="PALS QR Scan"
            width={960}
            height={1132}
            className=""
          />

          {/* <Image
            src="/common/qr-code.png"
            alt="QR Code"
            width={170}
            height={170}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] sm:w-[130px] md:w-[150px] lg:w-[170px]"
          /> */}
        </motion.div>
        </div>
      </Container>
    </section>
  );
}