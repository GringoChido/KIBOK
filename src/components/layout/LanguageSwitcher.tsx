"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

const locales = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "ja", label: "JA" },
] as const;

interface LanguageSwitcherProps {
  variant?: "light" | "dark";
  className?: string;
}

export const LanguageSwitcher = ({
  variant = "light",
  className = "",
}: LanguageSwitcherProps) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleSwitch = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  const textColor = variant === "light" ? "text-kibok-cream" : "text-kibok-ink";
  const activeColor = variant === "light" ? "text-kibok-gold" : "text-kibok-brown";

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {locales.map((l, i) => (
        <span key={l.code} className="flex items-center">
          {i > 0 && (
            <span className={`mx-1 text-xs ${textColor} opacity-30`}>/</span>
          )}
          <button
            onClick={() => handleSwitch(l.code)}
            className={`font-heading text-xs font-medium uppercase tracking-wider transition-colors ${
              locale === l.code
                ? `${activeColor} font-bold`
                : `${textColor} opacity-60 hover:opacity-100`
            }`}
          >
            {l.label}
          </button>
        </span>
      ))}
    </div>
  );
};
