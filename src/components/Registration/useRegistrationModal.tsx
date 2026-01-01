"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import RegistrationModal from "./RegistrationModal";

interface RegistrationModalContextType {
  openModal: () => void;
  closeModal: () => void;
  isOpen: boolean;
}

const RegistrationModalContext = createContext<RegistrationModalContextType | undefined>(undefined);

export function RegistrationModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <RegistrationModalContext.Provider value={{ openModal, closeModal, isOpen }}>
      {children}
      <RegistrationModal isOpen={isOpen} onClose={closeModal} />
    </RegistrationModalContext.Provider>
  );
}

export function useRegistrationModal() {
  const context = useContext(RegistrationModalContext);
  if (context === undefined) {
    throw new Error("useRegistrationModal must be used within RegistrationModalProvider");
  }
  return context;
}

