"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { SocialIcons } from "@/components/shared/SocialIcons";

export const Navbar = () => {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-kibok-cream/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="relative block">
            <Image
              src={IMAGES.logo}
              alt="Ki'bok Coffee SMA"
              width={260}
              height={44}
              className={`h-8 w-auto transition-all duration-500 ${
                scrolled ? "" : "invert"
              }`}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative font-heading text-sm font-medium uppercase tracking-wider transition-colors hover:opacity-70 ${
                  scrolled ? "text-kibok-ink" : "text-kibok-cream"
                }`}
              >
                {t(link.key)}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-kibok-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <SocialIcons variant={scrolled ? "dark" : "light"} size={16} />
            <LanguageSwitcher variant={scrolled ? "dark" : "light"} />
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden ${
              mobileOpen ? "text-kibok-ink" : scrolled ? "text-kibok-ink" : "text-kibok-cream"
            }`}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 flex flex-col items-center justify-center bg-kibok-cream"
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-heading text-3xl font-bold uppercase tracking-wider text-kibok-ink"
                  >
                    {t(link.key)}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12"
            >
              <LanguageSwitcher variant="dark" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
