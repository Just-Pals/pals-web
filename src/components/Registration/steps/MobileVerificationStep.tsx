"use client";

import { useState, useRef, useEffect } from "react";
import { RegistrationData } from "../RegistrationFlow";

interface MobileVerificationStepProps {
  data: RegistrationData;
  onUpdate: (updates: Partial<RegistrationData>) => void;
  onNext: (data?: Partial<RegistrationData>) => void;
  onBack: () => void;
  isLoading: boolean;
}

const COUNTRY_CODES = [
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+1", country: "USA", flag: "🇺🇸" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+971", country: "UAE", flag: "🇦🇪" },
];

export default function MobileVerificationStep({
  data,
  onUpdate,
  onNext,
  onBack,
  isLoading,
}: MobileVerificationStepProps) {
  const [phone, setPhone] = useState(data.phone);
  const [countryCode, setCountryCode] = useState(data.countryCode);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [step, setStep] = useState<"phone" | "otp">(data.phone ? "otp" : "phone");
  const [showCountrySelector, setShowCountrySelector] = useState(false);
  const [error, setError] = useState("");
  const [resendTimer, setResendTimer] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone.replace(/\s/g, ""));
  };

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length <= 5) {
      return cleaned;
    } else if (cleaned.length <= 10) {
      return `${cleaned.slice(0, 5)} ${cleaned.slice(5)}`;
    }
    return `${cleaned.slice(0, 5)} ${cleaned.slice(5, 10)}`;
  };

  const handleRequestOTP = () => {
    const cleanedPhone = phone.replace(/\s/g, "");
    if (!cleanedPhone) {
      setError("Please enter your phone number");
      return;
    }

    if (!validatePhone(cleanedPhone)) {
      setError("Please enter a valid 10-digit phone number");
      return;
    }

    setError("");
    onUpdate({ phone: cleanedPhone, countryCode });
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

  if (step === "phone") {
    return (
      <div className="w-full max-w-sm mx-auto">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-3 text-white">
          Enter your mobile number
        </h1>
        <p className="text-white/60 text-sm mb-6">
          We'll send a verification code via SMS
        </p>

        <div className="space-y-4">
          <div>
            <div className="flex gap-2">
              <div className="relative">
                <button
                  onClick={() => setShowCountrySelector(!showCountrySelector)}
                  className="px-4 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white flex items-center gap-2 hover:bg-white/15 transition-all min-w-[80px]"
                >
                  <span>{countryCode}</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 4.5L6 7.5L9 4.5" />
                  </svg>
                </button>

                {showCountrySelector && (
                  <div className="absolute top-full mt-2 bg-black border border-white/20 rounded-xl overflow-hidden z-10 min-w-[200px] shadow-xl">
                    {COUNTRY_CODES.map((country) => (
                      <button
                        key={country.code}
                        onClick={() => {
                          setCountryCode(country.code);
                          setShowCountrySelector(false);
                        }}
                        className="w-full px-4 py-3 text-left hover:bg-white/10 flex items-center gap-2 text-white"
                      >
                        <span>{country.flag}</span>
                        <span>{country.code}</span>
                        <span className="text-white/60 text-sm ml-auto">
                          {country.country}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <input
                type="tel"
                value={phone}
                onChange={(e) => {
                  const formatted = formatPhoneNumber(e.target.value);
                  setPhone(formatted);
                  setError("");
                }}
                placeholder="12345 67890"
                maxLength={11}
                className="flex-1 px-4 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleRequestOTP();
                  }
                }}
              />
            </div>
            {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
          </div>

          <button
            onClick={handleRequestOTP}
            className="w-full py-3.5 bg-white text-black rounded-xl font-medium hover:bg-white/90 transition-all"
          >
            Send OTP
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm mx-auto">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-3 text-white">
        Verify your mobile
      </h1>
      <p className="text-white/60 text-sm mb-6">
        We sent a 6-digit code to {countryCode} {phone.replace(/(\d{5})(\d{5})/, "$1 $2")}
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
              ? `Resend OTP in ${resendTimer}s`
              : "Resend OTP"}
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

