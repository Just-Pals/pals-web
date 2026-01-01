"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import MethodSelectionStep from "./steps/MethodSelectionStep";
import EmailVerificationStep from "./steps/EmailVerificationStep";
import MobileVerificationStep from "./steps/MobileVerificationStep";
import PersonalDetailsStep from "./steps/PersonalDetailsStep";
import DocumentUploadStep from "./steps/DocumentUploadStep";
import CompletionStep from "./steps/CompletionStep";

export interface RegistrationData {
  method: "email" | "mobile" | null;
  email: string;
  phone: string;
  countryCode: string;
  otp: string;
  name: string;
  dateOfBirth: string;
  profilePicture: File | null;
  documents: {
    idFront: File | null;
    idBack: File | null;
    selfie: File | null;
    proofOfAddress: File | null;
  };
  documentsSkipped: boolean;
}

const STEPS = {
  METHOD_SELECTION: 0,
  VERIFICATION: 1,
  PERSONAL_DETAILS: 2,
  DOCUMENT_UPLOAD: 3,
  COMPLETION: 4,
} as const;

interface RegistrationFlowProps {
  onClose: () => void;
}

export default function RegistrationFlow({ onClose }: RegistrationFlowProps) {
  const [currentStep, setCurrentStep] = useState<number>(STEPS.METHOD_SELECTION);
  const [isLoading, setIsLoading] = useState(false);
  const [registrationData, setRegistrationData] = useState<RegistrationData>({
    method: null,
    email: "",
    phone: "",
    countryCode: "+91",
    otp: "",
    name: "",
    dateOfBirth: "",
    profilePicture: null,
    documents: {
      idFront: null,
      idBack: null,
      selfie: null,
      proofOfAddress: null,
    },
    documentsSkipped: false,
  });

  const updateRegistrationData = (updates: Partial<RegistrationData>) => {
    setRegistrationData((prev) => ({ ...prev, ...updates }));
  };

  const goToNextStep = () => {
    if (currentStep < STEPS.COMPLETION) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > STEPS.METHOD_SELECTION) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleStepComplete = async (data?: Partial<RegistrationData>) => {
    if (data) {
      updateRegistrationData(data);
    }

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsLoading(false);

    goToNextStep();
  };

  const handleSkipDocuments = () => {
    updateRegistrationData({ documentsSkipped: true });
    goToNextStep();
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case STEPS.METHOD_SELECTION:
        return "Get Started";
      case STEPS.VERIFICATION:
        return registrationData.method === "email" ? "Verify Email" : "Verify Mobile";
      case STEPS.PERSONAL_DETAILS:
        return "Personal Details";
      case STEPS.DOCUMENT_UPLOAD:
        return "Identity Verification";
      case STEPS.COMPLETION:
        return "Welcome!";
      default:
        return "";
    }
  };

  const getStepNumber = () => {
    return currentStep + 1;
  };

  const getTotalSteps = () => {
    // Don't count completion as a step in the progress
    return 4;
  };

  return (
    <div className="flex flex-col h-full max-h-[90vh] bg-black text-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Image
            src="/common/logo.png"
            width={28}
            height={28}
            alt="Pals"
            className="w-7 h-7"
          />
          <span className="text-base font-semibold text-white">Pals</span>
        </div>
        {currentStep !== STEPS.METHOD_SELECTION && currentStep !== STEPS.COMPLETION && (
          <button
            onClick={goToPreviousStep}
            className="text-white/60 hover:text-white transition-colors p-2 -mr-2"
            aria-label="Go back"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 15l-5-5 5-5" />
            </svg>
          </button>
        )}
      </div>

      {/* Progress Bar */}
      {currentStep < STEPS.COMPLETION && (
        <div className="px-4 sm:px-6 py-3 border-b border-white/10">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-white/60">
              Step {getStepNumber()} of {getTotalSteps()}
            </span>
            <span className="text-xs text-white/60">{Math.round((getStepNumber() / getTotalSteps()) * 100)}%</span>
          </div>
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(getStepNumber() / getTotalSteps()) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      )}

      {/* Step Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-4 sm:px-6 py-6 sm:py-8">
          <AnimatePresence mode="wait">
            {currentStep === STEPS.METHOD_SELECTION && (
              <motion.div
                key="method-selection"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <MethodSelectionStep
                  data={registrationData}
                  onUpdate={updateRegistrationData}
                  onNext={handleStepComplete}
                />
              </motion.div>
            )}

            {currentStep === STEPS.VERIFICATION && registrationData.method === "email" && (
              <motion.div
                key="email-verification"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <EmailVerificationStep
                  data={registrationData}
                  onUpdate={updateRegistrationData}
                  onNext={handleStepComplete}
                  onBack={goToPreviousStep}
                  isLoading={isLoading}
                />
              </motion.div>
            )}

            {currentStep === STEPS.VERIFICATION && registrationData.method === "mobile" && (
              <motion.div
                key="mobile-verification"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <MobileVerificationStep
                  data={registrationData}
                  onUpdate={updateRegistrationData}
                  onNext={handleStepComplete}
                  onBack={goToPreviousStep}
                  isLoading={isLoading}
                />
              </motion.div>
            )}

            {currentStep === STEPS.PERSONAL_DETAILS && (
              <motion.div
                key="personal-details"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <PersonalDetailsStep
                  data={registrationData}
                  onUpdate={updateRegistrationData}
                  onNext={handleStepComplete}
                  onBack={goToPreviousStep}
                  isLoading={isLoading}
                />
              </motion.div>
            )}

            {currentStep === STEPS.DOCUMENT_UPLOAD && (
              <motion.div
                key="document-upload"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <DocumentUploadStep
                  data={registrationData}
                  onUpdate={updateRegistrationData}
                  onNext={handleStepComplete}
                  onSkip={handleSkipDocuments}
                  onBack={goToPreviousStep}
                  isLoading={isLoading}
                />
              </motion.div>
            )}

            {currentStep === STEPS.COMPLETION && (
              <motion.div
                key="completion"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <CompletionStep
                  data={registrationData}
                  onClose={onClose}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

