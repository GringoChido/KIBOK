"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SPOTIFY_PLAYLIST_ID } from "@/lib/constants";

export const SpotifyBlock = () => {
  const t = useTranslations("spotify");
  const [showPlayer, setShowPlayer] = useState(false);

  const embedUrl = `https://open.spotify.com/embed/playlist/${SPOTIFY_PLAYLIST_ID}?utm_source=generator&theme=0`;
  const spotifyUrl = `https://open.spotify.com/playlist/${SPOTIFY_PLAYLIST_ID}`;

  return (
    <section className="grain-overlay relative overflow-hidden bg-kibok-ink py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <ScrollReveal>
            {/* Vinyl record icon */}
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center">
              <svg viewBox="0 0 64 64" className="h-16 w-16 text-kibok-gold/80">
                <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="32" cy="32" r="22" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
                <circle cx="32" cy="32" r="16" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
                <circle cx="32" cy="32" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
                <circle cx="32" cy="32" r="4" fill="currentColor" opacity="0.6" />
              </svg>
            </div>

            <h2 className="font-display text-3xl font-bold text-kibok-cream md:text-4xl">
              {t("label")}
            </h2>
            <p className="mt-2 font-body text-base text-kibok-cream/50">
              {t("tagline")}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-8">
              {showPlayer ? (
                <iframe
                  src={embedUrl}
                  width="100%"
                  height="152"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                  className="rounded-lg"
                  title="Ki'bok Radio Spotify Playlist"
                />
              ) : (
                <button
                  onClick={() => setShowPlayer(true)}
                  className="group inline-flex items-center gap-3 rounded-sm bg-kibok-cream/10 px-8 py-4 font-heading text-sm font-bold uppercase tracking-wider text-kibok-cream transition-all hover:bg-kibok-cream/20 active:scale-95"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-kibok-gold transition-transform group-hover:scale-110">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                  Press Play
                </button>
              )}
            </div>

            <a
              href={spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 font-body text-sm text-kibok-cream/40 transition-colors hover:text-kibok-gold"
            >
              {t("listen_on")}
              <span>&rarr;</span>
            </a>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
};
