"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

interface OriginMapProps {
  variant?: "light" | "dark";
}

interface OriginPoint {
  id: string;
  x: number;
  y: number;
}

const origins: OriginPoint[] = [
  { id: "chiapas", x: 420, y: 340 },
  { id: "oaxaca", x: 350, y: 310 },
  { id: "veracruz", x: 380, y: 240 },
];

const sma = { x: 300, y: 200 };

const MEXICO_PATH =
  "M180,120 C190,100 220,85 250,80 C280,75 310,70 340,65 C360,60 380,55 400,60 C420,65 440,80 450,95 C460,110 465,130 460,150 C455,170 445,185 440,200 C435,215 430,230 425,245 C420,260 410,270 395,280 C380,290 370,300 365,315 C360,330 365,345 375,355 C385,365 395,370 405,375 C415,380 425,375 430,365 C435,355 440,345 445,340 C450,335 455,340 450,350 C445,360 435,375 420,380 C405,385 390,380 375,375 C360,370 345,360 335,345 C325,330 320,315 310,305 C300,295 285,290 270,285 C255,280 240,278 225,275 C210,272 195,268 185,260 C175,252 170,240 168,225 C166,210 168,195 172,180 C176,165 178,145 180,130 Z";

const generateDashLine = (from: OriginPoint, to: { x: number; y: number }) =>
  `M${from.x},${from.y} L${to.x},${to.y}`;

export const OriginMap = ({ variant = "dark" }: OriginMapProps) => {
  const t = useTranslations("origin_map");
  const [activeOrigin, setActiveOrigin] = useState<string | null>(null);

  const isLight = variant === "light";
  const strokeColor = isLight ? "#1a1a18" : "#f4ede4";
  const dotColor = "#d4a853";
  const lineColor = isLight ? "#6b6560" : "#f4ede4";

  return (
    <div className="relative w-full max-w-[600px] mx-auto">
      <svg viewBox="0 0 600 400" className="w-full h-auto">
        <motion.path
          d={MEXICO_PATH}
          fill="none"
          stroke={strokeColor}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {origins.map((origin) => (
          <motion.path
            key={origin.id}
            d={generateDashLine(origin, sma)}
            fill="none"
            stroke={lineColor}
            strokeWidth={1}
            strokeDasharray="6 4"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.6 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
          />
        ))}

        {origins.map((origin) => (
          <motion.circle
            key={origin.id}
            cx={origin.x}
            cy={origin.y}
            r={6}
            fill={dotColor}
            className="cursor-pointer"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 2 }}
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 1.4 }}
            onHoverStart={() => setActiveOrigin(origin.id)}
            onHoverEnd={() => setActiveOrigin(null)}
            onTap={() =>
              setActiveOrigin((prev) =>
                prev === origin.id ? null : origin.id
              )
            }
          />
        ))}

        {/* SMA coffee cup icon */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 2.2 }}
          transform={`translate(${sma.x}, ${sma.y})`}
        >
          <circle r={10} fill={dotColor} />
          <g transform="translate(-6, -6) scale(0.5)" fill={isLight ? "#1a1a18" : "#f4ede4"}>
            <path d="M4 10h12a2 2 0 0 1-2 4H6a2 2 0 0 1-2-4zm0 0V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4m2-2h1a2 2 0 0 1 0 4h-1" />
          </g>
        </motion.g>

        <motion.text
          x={sma.x}
          y={sma.y - 18}
          textAnchor="middle"
          fill={dotColor}
          fontSize={10}
          fontFamily="var(--font-heading)"
          fontWeight={600}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.4 }}
        >
          SMA
        </motion.text>
      </svg>

      <AnimatePresence>
        {activeOrigin && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.2 }}
            className={`absolute left-1/2 bottom-4 -translate-x-1/2 rounded-sm px-4 py-3 text-center ${
              isLight
                ? "bg-kibok-charcoal text-kibok-cream"
                : "bg-kibok-cream text-kibok-ink"
            }`}
          >
            <p className="font-heading text-sm font-bold uppercase tracking-wider">
              {t(`${activeOrigin}.name`)}
            </p>
            <p className="mt-0.5 font-mono text-xs opacity-70">
              {t(`${activeOrigin}.elevation`)}
            </p>
            <p className="mt-1 font-body text-xs italic opacity-80">
              {t(`${activeOrigin}.note`)}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
