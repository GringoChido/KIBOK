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
      className="rounded-sm bg-kibok-cream/10 px-5 py-4 backdrop-blur-sm"
    >
      <div className="flex flex-col gap-3 text-sm text-kibok-cream sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        {/* WiFi message */}
        <div className="flex items-center gap-2">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-3.5 w-3.5 text-kibok-sage"
          >
            <path d="M5 12.55a11 11 0 0114.08 0" />
            <path d="M8.53 16.11a6 6 0 016.95 0" />
            <circle cx="12" cy="20" r="0.5" fill="currentColor" />
          </svg>
          <span className="font-body text-xs text-kibok-cream/70">
            {t("wifi_message")} ✓
          </span>
        </div>

        {/* Current vibe */}
        <div className="flex items-center gap-2">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              isGolden ? "bg-kibok-gold" : "bg-kibok-sage"
            }`}
          />
          <span className="font-body text-xs text-kibok-cream/80">
            {t(atmosphere)}
          </span>
        </div>

        {/* Golden hour countdown */}
        <div className="font-body text-xs">
          {isGolden ? (
            <span className="text-kibok-gold">{t("golden_hour_now")}</span>
          ) : countdown ? (
            <span className="text-kibok-cream/60">
              {t("golden_hour_in", { time: countdown })}
            </span>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
};
