import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

const base =
  "inline-block font-heading font-bold uppercase tracking-wider text-sm px-8 py-3.5 rounded-sm transition-all duration-200 active:scale-95";

const variants = {
  primary: "bg-kibok-brown text-kibok-cream hover:bg-kibok-brown-dark",
  secondary:
    "border-2 border-kibok-cream text-kibok-cream hover:bg-kibok-cream hover:text-kibok-ink",
};

export const Button = ({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) => {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};
