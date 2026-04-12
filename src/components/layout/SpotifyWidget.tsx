"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { SPOTIFY_PLAYLIST_ID } from "@/lib/constants";

const IFRAME_URL = `https://open.spotify.com/embed/playlist/${SPOTIFY_PLAYLIST_ID}?utm_source=generator&theme=0`;

const VinylIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={1.5} />
    <circle cx="12" cy="12" r="3" fill="currentColor" />
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth={0.5} opacity={0.4} />
  </svg>
);

const PauseIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <rect x="6" y="4" width="4" height="16" rx="1" />
    <rect x="14" y="4" width="4" height="16" rx="1" />
  </svg>
);

export const SpotifyWidget = () => {
  const t = useTranslations("spotify");
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-20 right-4 z-20 md:bottom-6 md:right-6">
      <AnimatePresence mode="wait">
        {!expanded ? (
          <motion.button
            key="collapsed"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setExpanded(true)}
            className="group flex h-12 w-12 items-center justify-center rounded-full bg-kibok-charcoal text-kibok-gold shadow-lg transition-shadow hover:shadow-xl"
            aria-label={t("label")}
          >
            <span className="transition-transform duration-700 group-hover:rotate-180">
              <VinylIcon />
            </span>
          </motion.button>
        ) : (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, scale: 0.9, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 8 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-sm bg-kibok-charcoal shadow-xl"
          >
            <div className="flex items-center justify-between gap-3 px-4 py-3">
              <div className="flex-1">
                <p className="font-heading text-xs font-bold uppercase tracking-wider text-kibok-cream">
                  {t("label")}
                </p>
                <p className="mt-0.5 text-[10px] text-kibok-cream/50">
                  {t("tagline")}
                </p>
              </div>
              <button
                onClick={() => setExpanded(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-kibok-gold/10 text-kibok-gold transition-colors hover:bg-kibok-gold/20"
              >
                <PauseIcon />
              </button>
            </div>

            <div className="px-4 pb-3">
              <iframe
                src={IFRAME_URL}
                width={300}
                height={80}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin"
                allow="encrypted-media"
                className="rounded-sm"
                title={t("label")}
              />
            </div>

            <a
              href={`https://open.spotify.com/playlist/${SPOTIFY_PLAYLIST_ID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block border-t border-kibok-cream/10 px-4 py-2.5 text-center font-heading text-[10px] font-bold uppercase tracking-widest text-kibok-gold/70 transition-colors hover:text-kibok-gold"
            >
              {t("listen_on")}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
