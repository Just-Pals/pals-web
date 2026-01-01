"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import RegistrationModal from "@/components/Registration/RegistrationModal";

export default function RegisterPage() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    router.push("/");
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <RegistrationModal isOpen={isOpen} onClose={handleClose} />
    </main>
  );
}
