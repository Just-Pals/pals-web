"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { RegistrationData } from "../RegistrationFlow";

interface MethodSelectionStepProps {
  data: RegistrationData;
  onUpdate: (updates: Partial<RegistrationData>) => void;
  onNext: () => void;
}

export default function MethodSelectionStep({
  data,
  onUpdate,
  onNext,
}: MethodSelectionStepProps) {
  const [selectedMethod, setSelectedMethod] = useState<"email" | "mobile" | null>(
    data.method
  );

  const handleSelect = (method: "email" | "mobile") => {
    setSelectedMethod(method);
    onUpdate({ method });
  };

  const handleContinue = () => {
    if (selectedMethod) {
      onNext();
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-3 text-white">
          Welcome to Pals
        </h1>
        <p className="text-white/70 text-sm sm:text-base">
          Choose how you'd like to continue
        </p>
      </div>

      <div className="space-y-3 mb-6">
        <motion.button
          onClick={() => handleSelect("email")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
            selectedMethod === "email"
              ? "border-white bg-white/10"
              : "border-white/20 bg-white/5 hover:border-white/40"
          }`}
        >
          <div className="flex items-center gap-4">
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                selectedMethod === "email"
                  ? "border-white bg-white"
                  : "border-white/40"
              }`}
            >
              {selectedMethod === "email" && (
                <div className="w-2.5 h-2.5 rounded-full bg-black" />
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-white"
                >
                  <path d="M3 4l7 5 7-5M3 16h14V4H3z" />
                </svg>
                <span className="font-medium text-white">Continue with Email</span>
              </div>
              <p className="text-xs text-white/60">
                We'll send a verification code to your email
              </p>
            </div>
          </div>
        </motion.button>

        <motion.button
          onClick={() => handleSelect("mobile")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
            selectedMethod === "mobile"
              ? "border-white bg-white/10"
              : "border-white/20 bg-white/5 hover:border-white/40"
          }`}
        >
          <div className="flex items-center gap-4">
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                selectedMethod === "mobile"
                  ? "border-white bg-white"
                  : "border-white/40"
              }`}
            >
              {selectedMethod === "mobile" && (
                <div className="w-2.5 h-2.5 rounded-full bg-black" />
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-white"
                >
                  <path d="M15 2a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2h10zM5 4v12h10V4H5z" />
                  <path d="M8 14h4" />
                </svg>
                <span className="font-medium text-white">Continue with Mobile Number</span>
              </div>
              <p className="text-xs text-white/60">
                We'll send an OTP to your mobile number
              </p>
            </div>
          </div>
        </motion.button>
      </div>

      <button
        onClick={handleContinue}
        disabled={!selectedMethod}
        className={`w-full py-3.5 rounded-xl font-medium transition-all ${
          selectedMethod
            ? "bg-white text-black hover:bg-white/90"
            : "bg-white/20 text-white/40 cursor-not-allowed"
        }`}
      >
        Continue
      </button>
    </div>
  );
}

