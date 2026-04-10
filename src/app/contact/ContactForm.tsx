"use client";

import { useState } from "react";
import Image from "next/image";
import { SITE } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import { StampBadge } from "@/components/shared/StampBadge";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="relative mt-12">
      {submitted ? (
        <ScrollReveal>
          <div className="rounded-sm bg-kibok-cream p-12 text-center">
            <h2 className="font-heading text-2xl font-bold text-kibok-ink">
              Thanks for reaching out!
            </h2>
            <p className="mt-2 font-body text-kibok-warm-gray">
              We&apos;ll get back to you soon.
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
            <div>
              <label
                htmlFor="name"
                className="font-heading text-xs font-bold uppercase tracking-widest text-kibok-warm-gray"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                className="mt-2 w-full rounded-sm border border-kibok-brown/20 bg-white px-4 py-3 font-body text-kibok-ink outline-none transition-colors focus:border-kibok-brown"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="font-heading text-xs font-bold uppercase tracking-widest text-kibok-warm-gray"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="mt-2 w-full rounded-sm border border-kibok-brown/20 bg-white px-4 py-3 font-body text-kibok-ink outline-none transition-colors focus:border-kibok-brown"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="font-heading text-xs font-bold uppercase tracking-widest text-kibok-warm-gray"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                className="mt-2 w-full rounded-sm border border-kibok-brown/20 bg-white px-4 py-3 font-body text-kibok-ink outline-none transition-colors focus:border-kibok-brown"
              />
            </div>
            <button
              type="submit"
              className="inline-block rounded-sm bg-kibok-brown px-8 py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-kibok-cream transition-colors hover:bg-kibok-brown-dark active:scale-95"
            >
              Send Message
            </button>
          </form>
        </ScrollReveal>
      )}

      {/* Social links */}
      <ScrollReveal delay={0.2}>
        <div className="mt-16 flex items-center gap-6">
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading text-sm font-bold uppercase tracking-wider text-kibok-brown transition-colors hover:text-kibok-terracotta"
          >
            Instagram
          </a>
        </div>
      </ScrollReveal>

      {/* Stamps */}
      <div className="absolute -right-4 top-0 hidden opacity-10 md:block">
        <StampBadge size={120} rotation={-20} variant="dark" />
      </div>
      <div className="absolute -left-8 bottom-0 hidden opacity-10 md:block">
        <Image
          src={IMAGES.stampTeapot}
          alt=""
          width={90}
          height={90}
          className="h-20 w-20 rotate-6 rounded-sm"
          aria-hidden
        />
      </div>
    </div>
  );
};
