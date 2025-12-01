import { ReactNode, ElementType } from "react";

interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const sizeClasses = {
  1: "text-[36px] sm:text-[48px] md:text-[64px] lg:text-[108px]",
  2: "text-[32px] sm:text-[40px] md:text-[48px] lg:text-[72px]",
  3: "text-[28px] sm:text-[36px] md:text-[42px] lg:text-[56px]",
  4: "text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px]",
  5: "text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px]",
  6: "text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px]",
};

export default function Heading({
  children,
  level = 1,
  className = "",
  as,
}: HeadingProps) {
  const Tag = (as || `h${level}`) as ElementType;
  const baseClasses = "font-semibold leading-tight tracking-tight";

  return (
    <Tag className={`${sizeClasses[level]} ${baseClasses} ${className}`}>
      {children}
    </Tag>
  );
}

