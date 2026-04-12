"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

type Atmosphere =
  | "morning_quiet"
  | "deep_focus"
  | "lunch_rush"
  | "afternoon_drift"
  | "pre_golden"
  | "golden";

const getAtmosphere = (hour: number, minute: number): Atmosphere => {
  const time = hour + minute / 60;
  if (time >= 7 && time < 9) return "morning_quiet";
  if (time >= 9 && time < 12) return "deep_focus";
  if (time >= 12 && time < 14) return "lunch_rush";
  if (time >= 14 && time < 17) return "afternoon_drift";
  if (time >= 17 && time < 18.5) return "pre_golden";
  if (time >= 18.5 && time < 19) return "golden";
  return "morning_quiet";
};

const getGoldenCountdown = (hour: number, minute: number): string | null => {
  const now = hour * 60 + minute;
  const goldenStart = 18 * 60 + 30;
  const goldenEnd = 19 * 60;

  if (now >= goldenStart && now < goldenEnd) return null;
  if (now >= goldenEnd) return null;

  const diff = goldenStart - now;
  const hrs = Math.floor(diff / 60);
  const mins = diff % 60;

  if (hrs > 0) return `${hrs}h ${mins}m`;
  return `${mins}m`;
};

const WifiIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 text-kibok-gold"
  >
    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
    <line x1="12" y1="20" x2="12.01" y2="20" />
  </svg>
);

export const VibeMeter = () => {
  const t = useTranslations("vibe_meter");
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    const update = () => {
      const now = new Date(
        new Date().toLocaleString("en-US", { timeZone: "America/Mexico_City" })
      );
      setCurrentTime(now);
    };
    update();
    const interval = setInterval(update, 60_000);
    return () => clearInterval(interval);
  }, []);

  if (!currentTime) return null;

  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const atmosphere = getAtmosphere(hour, minute);
  const countdown = getGoldenCountdown(hour, minute);
  const isGolden = atmosphere === "golden";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="rounded-sm bg-kibok-charcoal/80 px-4 py-3 backdrop-blur-md md:px-6"
    >
      <div className="flex items-center justify-between gap-4 text-sm text-kibok-cream">
        <div className="flex items-center gap-2">
          <WifiIcon />
          <span className="font-mono text-xs tracking-wide text-kibok-cream/80">
            {t("wifi_speed")}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span
            className={`h-2 w-2 rounded-full ${
              isGolden ? "bg-kibok-gold" : "bg-kibok-sage"
            }`}
          />
          <span className="font-heading text-xs font-medium uppercase tracking-wider">
            {t(atmosphere)}
          </span>
        </div>

        <div className="font-mono text-xs tracking-wide">
          {isGolden ? (
            <span className="text-kibok-gold">{t("golden_hour_now")}</span>
          ) : countdown ? (
            <span className="text-kibok-cream/70">
              {t("golden_hour_in", { time: countdown })}
            </span>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
};
