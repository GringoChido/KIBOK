"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { LOCATION } from "@/lib/constants";

export const MobileCTA = () => {
  const t = useTranslations("location");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 border-t border-kibok-terracotta/20 bg-kibok-terracotta/95 backdrop-blur-md transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="flex-1">
          <p className="font-heading text-[10px] font-bold uppercase tracking-wider text-kibok-cream/90">
            We&apos;re in Centro
          </p>
          <p className="font-body text-[9px] text-kibok-cream/60">
            {t("hours")}
          </p>
        </div>

        <a
          href={LOCATION.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-sm bg-kibok-cream px-4 py-2.5 font-heading text-xs font-bold uppercase tracking-wider text-kibok-terracotta transition-colors active:bg-kibok-cream/80"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          {t("directions")}
        </a>
      </div>
    </div>
  );
};
