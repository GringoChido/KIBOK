"use client";

import { motion } from "framer-motion";

interface StampBadgeProps {
  size?: number;
  rotation?: number;
  variant?: "light" | "dark";
  className?: string;
}

export const StampBadge = ({
  size = 160,
  rotation = -12,
  variant = "light",
  className = "",
}: StampBadgeProps) => {
  const color = variant === "light" ? "#f4ede4" : "#1a1a18";

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      initial={{ rotate: rotation, scale: 0.8, opacity: 0 }}
      whileInView={{ rotate: rotation, scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Wobbly outer circle */}
      <path
        d="M100,10 C140,8 175,25 188,60 C200,95 195,140 170,168 C145,196 105,200 70,190 C35,180 10,150 5,115 C0,80 15,40 45,22 C65,10 85,11 100,10Z"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        opacity="0.9"
      />
      {/* Inner circle */}
      <circle
        cx="100"
        cy="100"
        r="60"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        opacity="0.5"
        strokeDasharray="4 3"
      />
      {/* Curved top text path */}
      <defs>
        <path
          id="topArc"
          d="M 35,100 a 65,65 0 1,1 130,0"
          fill="none"
        />
        <path
          id="bottomArc"
          d="M 165,100 a 65,65 0 1,1 -130,0"
          fill="none"
        />
      </defs>
      <text
        fill={color}
        fontSize="14"
        fontFamily="var(--font-heading)"
        fontWeight="700"
        letterSpacing="3"
      >
        <textPath href="#topArc" startOffset="50%" textAnchor="middle">
          KI&apos;BOK COFFEE
        </textPath>
      </text>
      <text
        fill={color}
        fontSize="11"
        fontFamily="var(--font-heading)"
        fontWeight="600"
        letterSpacing="2"
      >
        <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
          ROASTERS
        </textPath>
      </text>
      {/* Center text */}
      <text
        x="100"
        y="105"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={color}
        fontSize="28"
        fontFamily="var(--font-heading)"
        fontWeight="700"
        letterSpacing="4"
      >
        SMA
      </text>
    </motion.svg>
  );
};
