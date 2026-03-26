"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SITE, LOCATION, NAV_LINKS } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { StampGraphic } from "@/components/shared/StampGraphic";
import { SocialIcons } from "@/components/shared/SocialIcons";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Footer = () => {
  const t = useTranslations();

  return (
    <footer className="relative overflow-hidden bg-kibok-charcoal text-kibok-cream">
      {/* Scattered stamps at very low opacity */}
      <div className="absolute left-[10%] top-12 hidden md:block">
        <StampGraphic src={IMAGES.stampCactus} size={70} rotation={-20} opacity={0.06} blendMode="screen" animate={false} />
      </div>
      <div className="absolute right-[15%] top-24 hidden md:block">
        <StampGraphic src={IMAGES.stampBeans} size={60} rotation={15} opacity={0.05} blendMode="screen" animate={false} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Image src={IMAGES.logo} alt="Ki'bok Coffee" width={140} height={28} className="h-6 w-auto" />
            <p className="mt-3 font-heading text-sm uppercase tracking-widest text-kibok-warm-gray">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-kibok-warm-gray">
              {t("footer.navigate")}
            </h4>
            <nav className="mt-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm text-kibok-cream/80 transition-colors hover:text-kibok-gold"
                >
                  {t(`nav.${link.key}`)}
                </Link>
              ))}
            </nav>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-kibok-warm-gray">
              {t("footer.visit_us")}
            </h4>
            <address className="mt-4 not-italic">
              <p className="font-body text-sm text-kibok-cream/80">{LOCATION.address}</p>
              <p className="font-body text-sm text-kibok-cream/80">{LOCATION.area}</p>
              <p className="font-body text-sm text-kibok-cream/80">{LOCATION.city}</p>
              <p className="mt-3 font-body text-sm text-kibok-gold">{t("location.hours")}</p>
            </address>
            <SocialIcons variant="light" size={18} className="mt-4" />
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-kibok-warm-gray">
              {t("footer.newsletter_prompt")}
            </h4>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex gap-2"
            >
              <input
                type="email"
                placeholder={t("footer.newsletter_placeholder")}
                className="w-full border-b border-kibok-cream/20 bg-transparent py-2 font-body text-sm text-kibok-cream outline-none transition-colors focus:border-kibok-gold placeholder:text-kibok-cream/30"
              />
              <button
                type="submit"
                className="shrink-0 font-heading text-xs font-bold uppercase tracking-wider text-kibok-gold transition-colors hover:text-kibok-cream"
              >
                {t("footer.subscribe")}
              </button>
            </form>
            <div className="mt-6">
              <LanguageSwitcher variant="light" />
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-kibok-cream/10 pt-8 text-center">
          <p className="font-body text-xs text-kibok-warm-gray">
            &copy; {new Date().getFullYear()} {t("footer.copyright")}
          </p>
          <p className="mt-2 font-body text-xs text-kibok-warm-gray/60">
            {t("footer.built_by")}{" "}
            <a
              href="https://untold.works"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-kibok-warm-gray"
            >
              Untold.works
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
