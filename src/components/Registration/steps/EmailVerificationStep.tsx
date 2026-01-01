"use client";

import { useState, useRef, useEffect } from "react";
import { RegistrationData } from "../RegistrationFlow";

interface EmailVerificationStepProps {
  data: RegistrationData;
  onUpdate: (updates: Partial<RegistrationData>) => void;
  onNext: (data?: Partial<RegistrationData>) => void;
  onBack: () => void;
  isLoading: boolean;
}

export default function EmailVerificationStep({
  data,
  onUpdate,
  onNext,
  onBack,
  isLoading,
}: EmailVerificationStepProps) {
  const [email, setEmail] = useState(data.email);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [step, setStep] = useState<"email" | "otp">(data.email ? "otp" : "email");
  const [error, setError] = useState("");
  const [resendTimer, setResendTimer] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRequestOTP = () => {
    if (!email.trim()) {
      setError("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");
    onUpdate({ email });
    setStep("otp");
    setResendTimer(60);
    // In production, call API to send OTP
  };

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);
    setError("");

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newOtp.every((digit) => digit !== "")) {
      const otpString = newOtp.join("");
      handleVerifyOTP(otpString);
    }
  };

  const handleVerifyOTP = async (otpValue?: string) => {
    const otpToVerify = otpValue || otp.join("");
    if (otpToVerify.length !== 6) {
      setError("Please enter the complete OTP");
      return;
    }

    setError("");
    onUpdate({ otp: otpToVerify });
    onNext({ otp: otpToVerify });
  };

  const handleResend = () => {
    if (resendTimer > 0) return;
    setOtp(["", "", "", "", "", ""]);
    setResendTimer(60);
    // In production, call API to resend OTP
  };

  const maskEmail = (email: string) => {
    const [localPart, domain] = email.split("@");
    if (localPart.length <= 2) return email;
    const masked = localPart.slice(0, 2) + "*".repeat(Math.min(localPart.length - 2, 4)) + "@" + domain;
    return masked;
  };

  if (step === "email") {
    return (
      <div className="w-full max-w-sm mx-auto">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-3 text-white">
          Enter your email
        </h1>
        <p className="text-white/60 text-sm mb-6">
          We'll send a verification code to your email address
        </p>

        <div className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              placeholder="someone@example.com"
              className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleRequestOTP();
                }
              }}
            />
            {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
          </div>

          <button
            onClick={handleRequestOTP}
            className="w-full py-3.5 bg-white text-black rounded-xl font-medium hover:bg-white/90 transition-all"
          >
            Send Verification Code
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm mx-auto">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-3 text-white">
        Verify your email
      </h1>
      <p className="text-white/60 text-sm mb-6">
        We sent a 6-digit code to {maskEmail(email)}
      </p>

      <div className="space-y-6">
        <div className="flex gap-2 justify-center">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Backspace" && !otp[index] && index > 0) {
                  inputRefs.current[index - 1]?.focus();
                }
              }}
              className="w-12 h-14 sm:w-14 sm:h-16 text-center text-xl font-semibold bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all"
            />
          ))}
        </div>

        {error && <p className="text-sm text-red-400 text-center">{error}</p>}

        <div className="text-center">
          <button
            onClick={handleResend}
            disabled={resendTimer > 0}
            className={`text-sm ${
              resendTimer > 0
                ? "text-white/40 cursor-not-allowed"
                : "text-white/80 hover:text-white underline"
            }`}
          >
            {resendTimer > 0
              ? `Resend code in ${resendTimer}s`
              : "Resend code"}
          </button>
        </div>

        <button
          onClick={() => handleVerifyOTP()}
          disabled={isLoading || otp.some((d) => !d)}
          className={`w-full py-3.5 rounded-xl font-medium transition-all ${
            isLoading || otp.some((d) => !d)
              ? "bg-white/20 text-white/40 cursor-not-allowed"
              : "bg-white text-black hover:bg-white/90"
          }`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Verifying...
            </span>
          ) : (
            "Verify"
          )}
        </button>
      </div>
    </div>
  );
}

