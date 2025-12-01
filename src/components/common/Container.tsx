import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "7xl" | "full";
}

const maxWidthClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "7xl": "max-w-7xl",
  full: "max-w-full",
};

export default function Container({
  children,
  className = "",
  maxWidth = "7xl",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 ${maxWidthClasses[maxWidth]} ${className}`}
    >
      {children}
    </div>
  );
}

