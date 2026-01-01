"use client";

import { useState, useRef } from "react";
import { RegistrationData } from "../RegistrationFlow";
import Image from "next/image";

interface PersonalDetailsStepProps {
  data: RegistrationData;
  onUpdate: (updates: Partial<RegistrationData>) => void;
  onNext: (data?: Partial<RegistrationData>) => void;
  onBack: () => void;
  isLoading: boolean;
}

export default function PersonalDetailsStep({
  data,
  onUpdate,
  onNext,
  onBack,
  isLoading,
}: PersonalDetailsStepProps) {
  const [name, setName] = useState(data.name);
  const [dateOfBirth, setDateOfBirth] = useState(data.dateOfBirth);
  const [profilePicture, setProfilePicture] = useState<File | null>(
    data.profilePicture
  );
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError("Image size should be less than 5MB");
        return;
      }
      if (!file.type.startsWith("image/")) {
        setError("Please upload an image file");
        return;
      }
      setProfilePicture(file);
      setError("");
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }

    if (!dateOfBirth) {
      setError("Please enter your date of birth");
      return;
    }

    // Validate date format
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!dateRegex.test(dateOfBirth)) {
      setError("Please enter date in DD/MM/YYYY format");
      return;
    }

    setError("");
    onUpdate({ name, dateOfBirth, profilePicture });
    onNext({ name, dateOfBirth, profilePicture });
  };

  const formatDate = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length <= 2) return cleaned;
    if (cleaned.length <= 4)
      return `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
    return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(4, 8)}`;
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-3 text-white">
        Personal details
      </h1>
      <p className="text-white/60 text-sm mb-6">
        Tell us a bit about yourself
      </p>

      <div className="space-y-5">
        <div className="flex justify-center">
          <div className="relative">
            <div
              onClick={() => fileInputRef.current?.click()}
              className="w-24 h-24 sm:w-28 sm:h-28 bg-white/10 border-2 border-dashed border-white/20 rounded-xl flex items-center justify-center cursor-pointer hover:bg-white/15 transition-all"
            >
              {preview ? (
                <Image
                  src={preview}
                  alt="Profile preview"
                  width={112}
                  height={112}
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : (
                <div className="text-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="mx-auto text-white/60"
                  >
                    <path d="M16 10v12M10 16h12" />
                  </svg>
                  <p className="text-xs text-white/60 mt-1">Photo</p>
                </div>
              )}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-white/70 mb-2">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError("");
            }}
            placeholder="Enter your full name"
            className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all"
          />
        </div>

        <div>
          <label className="block text-sm text-white/70 mb-2">Date of Birth</label>
          <input
            type="text"
            value={dateOfBirth}
            onChange={(e) => {
              const formatted = formatDate(e.target.value);
              setDateOfBirth(formatted);
              setError("");
            }}
            placeholder="DD/MM/YYYY"
            maxLength={10}
            className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 focus:ring-2 focus:ring-white/20 transition-all"
          />
        </div>

        {error && <p className="text-sm text-red-400">{error}</p>}

        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className={`w-full py-3.5 rounded-xl font-medium transition-all ${
            isLoading
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
              Saving...
            </span>
          ) : (
            "Continue"
          )}
        </button>
      </div>
    </div>
  );
}
