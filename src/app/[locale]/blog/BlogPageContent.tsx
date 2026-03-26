"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { IMAGES } from "@/lib/images";

const posts = [
  {
    slug: "mexican-coffee-origins",
    titleKey: "The Origins of Mexican Specialty Coffee",
    date: "2025-03-15",
    excerpt:
      "From the highlands of Chiapas to the mountains of Oaxaca, discover the regions that make Mexican coffee extraordinary.",
    image: IMAGES.beansBag,
  },
  {
    slug: "perfect-pour-over",
    titleKey: "How to Brew the Perfect Pour-Over at Home",
    date: "2025-02-28",
    excerpt:
      "Our baristas share their secrets for a clean, bright cup using the V60 method.",
    image: IMAGES.kalitaOrange,
  },
  {
    slug: "sma-coffee-culture",
    titleKey: "Coffee Culture in San Miguel de Allende",
    date: "2025-02-10",
    excerpt: "San Miguel's coffee scene is thriving.",
    image: IMAGES.parroquiaEvening,
  },
  {
    slug: "organic-farming-partners",
    titleKey: "Meet Our Farming Partners",
    date: "2025-01-20",
    excerpt: "The people behind the beans.",
    image: IMAGES.beansBurlap,
  },
];

export const BlogPageContent = () => {
  const t = useTranslations("blog_page");

  return (
    <>
      <section className="bg-kibok-cream pb-16 pt-32">
        <Container>
          <h1 className="font-heading text-[clamp(3rem,9vw,7rem)] font-bold uppercase leading-[0.85] tracking-tight text-kibok-ink">
            {t("heading")}
          </h1>
          <p className="mt-4 max-w-lg font-body text-lg text-kibok-warm-gray">
            {t("subheading")}
          </p>
        </Container>
      </section>
      <section className="bg-kibok-off-white py-16">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2">
            {posts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.1}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      className="object-cover photo-warm transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                  <time className="mt-4 block font-body text-xs uppercase tracking-wider text-kibok-warm-gray">
                    {new Date(post.date).toLocaleDateString(
                      "en-US",
                      {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      },
                    )}
                  </time>
                  <h2 className="mt-2 font-heading text-xl font-bold text-kibok-ink transition-colors group-hover:text-kibok-brown">
                    {post.titleKey}
                  </h2>
                  <p className="mt-2 font-body text-sm text-kibok-warm-gray">
                    {post.excerpt}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};
