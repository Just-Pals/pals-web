"use client";

import { motion } from "framer-motion";
import { RegistrationData } from "../RegistrationFlow";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface CompletionStepProps {
  data: RegistrationData;
  onClose: () => void;
}

export default function CompletionStep({
  data,
  onClose,
}: CompletionStepProps) {
  const router = useRouter();

  const handleGetStarted = () => {
    onClose();
    router.push("/");
  };

  useEffect(() => {
    // Auto-redirect after 3 seconds
    const timer = setTimeout(() => {
      onClose();
      router.push("/");
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose, router]);

  return (
    <div className="w-full max-w-sm mx-auto text-center py-8">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="w-20 h-20 mx-auto mb-6 bg-green-500/20 rounded-full flex items-center justify-center"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-green-400"
        >
          <path d="M10 20l6 6 14-14" />
        </svg>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-2xl sm:text-3xl font-semibold mb-3 text-white"
      >
        Welcome to Pals, {data.name || "there"}!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-white/70 text-sm sm:text-base mb-6"
      >
        {data.documentsSkipped
          ? "Your account has been created successfully. You can complete identity verification later from your profile settings."
          : "Your account has been created and verified successfully. You're all set to start using Pals!"}
      </motion.p>

      {data.documentsSkipped && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 mb-6"
        >
          <p className="text-xs text-yellow-400">
            <strong>Note:</strong> Complete identity verification to unlock all features and increase your transaction limits.
          </p>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <button
          onClick={handleGetStarted}
          className="w-full py-3.5 bg-white text-black rounded-xl font-medium hover:bg-white/90 transition-all"
        >
          Get Started
        </button>
      </motion.div>
    </div>
  );
}

