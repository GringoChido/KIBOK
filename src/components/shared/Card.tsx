import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}

export const Card = ({ children, dark = false, className = "" }: CardProps) => (
  <div
    className={`rounded-sm p-6 ${
      dark
        ? "bg-kibok-charcoal text-kibok-cream"
        : "bg-white text-kibok-ink"
    } ${className}`}
  >
    {children}
  </div>
);
