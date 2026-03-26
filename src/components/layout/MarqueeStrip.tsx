"use client";

import { useTranslations } from "next-intl";

interface MarqueeStripProps {
  items?: string[];
  bgColor?: string;
  textColor?: string;
  speed?: number;
  reversed?: boolean;
}

export const MarqueeStrip = ({
  items,
  bgColor = "bg-kibok-brown",
  textColor = "text-kibok-cream",
  speed = 30,
  reversed = false,
}: MarqueeStripProps) => {
  const t = useTranslations("marquee");
  const marqueeItems = items || (t.raw("items") as string[]);

  // Build content with alternating arrows and tiny bean icons
  const content = marqueeItems
    .map((item, i) => `${item} ${i % 2 === 0 ? "→" : "●"}`)
    .join("  ");
  const repeated = `${content}  ${content}  ${content}  ${content}`;

  return (
    <div className={`${bgColor} overflow-hidden py-4 select-none`}>
      <div
        className="flex whitespace-nowrap will-change-transform"
        style={{
          animation: `marquee${reversed ? "-reverse" : ""} ${speed}s linear infinite`,
        }}
      >
        <span
          className={`${textColor} font-heading text-xs font-bold uppercase tracking-[0.2em] md:text-sm`}
        >
          {repeated}
        </span>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};
