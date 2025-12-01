import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const variantClasses = {
  primary: "bg-white text-black hover:bg-white/90",
  secondary: "bg-[#CFFF00] text-black hover:bg-[#CFFF00]/90",
  outline: "border border-white/40 bg-black/20 backdrop-blur-md hover:bg-white/10",
  ghost: "bg-transparent hover:bg-white/10",
};

const sizeClasses = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-2.5 text-base",
  lg: "px-6 py-3 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`rounded-xl font-medium transition-all ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

