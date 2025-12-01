import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  backgroundColor?: "black" | "white" | "transparent";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  id?: string;
}

const backgroundColorClasses = {
  black: "bg-black",
  white: "bg-white",
  transparent: "bg-transparent",
};

const paddingClasses = {
  none: "",
  sm: "py-8 sm:py-12",
  md: "py-12 sm:py-16 md:py-20",
  lg: "py-16 sm:py-20 md:py-24 lg:py-32",
  xl: "py-20 sm:py-24 md:py-32 lg:py-40",
};

export default function Section({
  children,
  className = "",
  backgroundColor = "black",
  padding = "md",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`w-full ${backgroundColorClasses[backgroundColor]} ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </section>
  );
}

