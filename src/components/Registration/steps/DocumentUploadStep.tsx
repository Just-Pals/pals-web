"use client";

import { useState, useRef } from "react";
import { RegistrationData } from "../RegistrationFlow";
import Image from "next/image";

type DocumentType = "idFront" | "idBack" | "selfie" | "proofOfAddress";

interface DocumentUploadStepProps {
  data: RegistrationData;
  onUpdate: (updates: Partial<RegistrationData>) => void;
  onNext: (data?: Partial<RegistrationData>) => void;
  onSkip: () => void;
  onBack: () => void;
  isLoading: boolean;
}

const documentLabels: Record<DocumentType, { label: string; description: string; required: boolean }> = {
  idFront: {
    label: "ID Front",
    description: "Upload the front side of your government-issued ID",
    required: false,
  },
  idBack: {
    label: "ID Back",
    description: "Upload the back side of your government-issued ID",
    required: false,
  },
  selfie: {
    label: "Selfie",
    description: "Take a selfie holding your ID next to your face",
    required: false,
  },
  proofOfAddress: {
    label: "Proof of Address",
    description: "Upload a utility bill or bank statement (within 3 months)",
    required: false,
  },
};

export default function DocumentUploadStep({
  data,
  onUpdate,
  onNext,
  onSkip,
  onBack,
  isLoading,
}: DocumentUploadStepProps) {
  const [documents, setDocuments] = useState(data.documents);
  const [previews, setPreviews] = useState<Record<DocumentType, string | null>>({
    idFront: null,
    idBack: null,
    selfie: null,
    proofOfAddress: null,
  });
  const [error, setError] = useState("");

  const fileInputRefs = {
    idFront: useRef<HTMLInputElement>(null),
    idBack: useRef<HTMLInputElement>(null),
    selfie: useRef<HTMLInputElement>(null),
    proofOfAddress: useRef<HTMLInputElement>(null),
  };

  const handleFileChange = (
    type: DocumentType,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setError("File size should be less than 10MB");
        return;
      }
      if (!file.type.startsWith("image/")) {
        setError("Please upload an image file");
        return;
      }

      const newDocuments = { ...documents, [type]: file };
      setDocuments(newDocuments);
      setError("");

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviews((prev) => ({
          ...prev,
          [type]: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    onUpdate({ documents });
    onNext({ documents });
  };

  const hasAnyDocument = Object.values(documents).some((doc) => doc !== null);

  return (
    <div className="w-full max-w-sm mx-auto">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-3 text-white">
        Identity Verification
      </h1>
      <p className="text-white/60 text-sm mb-6">
        Upload your documents to verify your identity. You can skip this step and complete it later.
      </p>

      <div className="space-y-4 mb-6">
        {(Object.keys(documents) as DocumentType[]).map((type) => (
          <div key={type} className="space-y-2">
            <label className="block text-sm font-medium text-white/90">
              {documentLabels[type].label}
              {!documentLabels[type].required && (
                <span className="text-white/50 text-xs ml-1">(Optional)</span>
              )}
            </label>
            <p className="text-xs text-white/60 mb-2">
              {documentLabels[type].description}
            </p>
            <div
              onClick={() => fileInputRefs[type].current?.click()}
              className="relative w-full h-32 bg-white/10 border-2 border-dashed border-white/20 rounded-xl flex items-center justify-center cursor-pointer hover:bg-white/15 transition-all overflow-hidden"
            >
              {previews[type] ? (
                <Image
                  src={previews[type]!}
                  alt={documentLabels[type].label}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center p-4">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="mx-auto text-white/60 mb-2"
                  >
                    <path d="M14 8v12M8 14h12" />
                  </svg>
                  <p className="text-xs text-white/60">Click to upload</p>
                </div>
              )}
              <input
                ref={fileInputRefs[type]}
                type="file"
                accept="image/*"
                capture={type === "selfie" ? "user" : undefined}
                onChange={(e) => handleFileChange(type, e)}
                className="hidden"
              />
            </div>
            {documents[type] && (
              <p className="text-xs text-white/50">
                {documents[type]?.name}
              </p>
            )}
          </div>
        ))}
      </div>

      {error && <p className="text-sm text-red-400 mb-4">{error}</p>}

      <div className="bg-white/5 p-4 rounded-xl mb-6">
        <p className="text-xs text-white/60 mb-2">
          <strong className="text-white/90">Accepted formats:</strong> JPG, PNG, PDF
        </p>
        <p className="text-xs text-white/60 mb-2">
          <strong className="text-white/90">Max file size:</strong> 10MB per document
        </p>
        <p className="text-xs text-white/60">
          <strong className="text-white/90">Security:</strong> All documents are encrypted and stored securely
        </p>
      </div>

      <div className="space-y-3">
        {hasAnyDocument && (
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
                Uploading...
              </span>
            ) : (
              "Upload & Continue"
            )}
          </button>
        )}

        <button
          onClick={onSkip}
          className="w-full py-3.5 rounded-xl font-medium border-2 border-white/20 bg-transparent text-white hover:bg-white/10 transition-all"
        >
          Skip for now
        </button>
      </div>
    </div>
  );
}

