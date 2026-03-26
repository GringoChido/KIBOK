"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { SITE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { Container } from "@/components/layout/Container";
import { StampBadge } from "@/components/shared/StampBadge";
import { StampGraphic } from "@/components/shared/StampGraphic";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export const ContactPageContent = () => {
  const t = useTranslations("contact_page");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-kibok-ink pb-24 pt-32">
      <Container className="max-w-2xl">
        <div className="mb-12 flex justify-center">
          <StampBadge size={140} rotation={0} variant="light" />
        </div>

        <h1 className="text-center font-heading text-[clamp(2.5rem,7vw,5rem)] font-bold uppercase leading-[0.9] tracking-tight text-kibok-cream">
          {t("heading")}
        </h1>
        <p className="mt-4 text-center font-body text-lg text-kibok-cream/50">
          {t("subheading")}
        </p>

        <div className="relative mt-12">
          {submitted ? (
            <ScrollReveal>
              <div className="rounded-sm bg-kibok-charcoal p-12 text-center">
                <h2 className="font-heading text-2xl font-bold text-kibok-gold">
                  {t("success_heading")}
                </h2>
                <p className="mt-2 font-body text-kibok-cream/60">
                  {t("success_body")}
                </p>
              </div>
            </ScrollReveal>
          ) : (
            <ScrollReveal>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-6"
              >
                {(["name", "email"] as const).map((field) => (
                  <div key={field}>
                    <label
                      htmlFor={field}
                      className="font-heading text-xs font-bold uppercase tracking-widest text-kibok-cream/40"
                    >
                      {t(field)}
                    </label>
                    <input
                      id={field}
                      type={
                        field === "email"
                          ? "email"
                          : "text"
                      }
                      required
                      className="mt-2 w-full border-b-2 border-kibok-cream/20 bg-transparent px-0 py-3 font-body text-kibok-cream outline-none transition-colors focus:border-kibok-gold placeholder:text-kibok-cream/20"
                    />
                  </div>
                ))}
                <div>
                  <label
                    htmlFor="message"
                    className="font-heading text-xs font-bold uppercase tracking-widest text-kibok-cream/40"
                  >
                    {t("message")}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="mt-2 w-full border-b-2 border-kibok-cream/20 bg-transparent px-0 py-3 font-body text-kibok-cream outline-none transition-colors focus:border-kibok-gold placeholder:text-kibok-cream/20"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 inline-block rounded-sm bg-kibok-brown px-8 py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-kibok-cream transition-all hover:bg-kibok-brown-light active:scale-95"
                >
                  {t("send")}
                </button>
              </form>
            </ScrollReveal>
          )}

          <ScrollReveal delay={0.2}>
            <div className="mt-16 flex items-center justify-center gap-6">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading text-sm font-bold uppercase tracking-wider text-kibok-cream/60 transition-colors hover:text-kibok-gold"
              >
                Instagram
              </a>
            </div>
          </ScrollReveal>

          <div className="absolute -right-8 top-0 hidden md:block">
            <StampGraphic
              src={IMAGES.stampTeapot}
              size={100}
              rotation={-15}
              opacity={0.1}
              blendMode="screen"
            />
          </div>
          <div className="absolute -left-8 bottom-0 hidden md:block">
            <StampGraphic
              src={IMAGES.stampCat}
              size={90}
              rotation={8}
              opacity={0.1}
              blendMode="screen"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
