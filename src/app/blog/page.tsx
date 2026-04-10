import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { BlogGrid } from "./BlogGrid";

export const metadata: Metadata = {
  title: "Blog — Ki'bok Coffee SMA",
  description: "Stories, guides, and updates from Ki'bok Coffee San Miguel de Allende.",
};

const posts = [
  {
    slug: "mexican-coffee-origins",
    title: "The Origins of Mexican Specialty Coffee",
    date: "2025-03-15",
    excerpt: "From the highlands of Chiapas to the mountains of Oaxaca, discover the regions that make Mexican coffee extraordinary.",
    gradient: "from-kibok-brown to-kibok-brown-dark",
  },
  {
    slug: "perfect-pour-over",
    title: "How to Brew the Perfect Pour-Over at Home",
    date: "2025-02-28",
    excerpt: "Our baristas share their secrets for a clean, bright cup using the V60 method.",
    gradient: "from-kibok-terracotta to-kibok-brown",
  },
  {
    slug: "sma-coffee-culture",
    title: "Coffee Culture in San Miguel de Allende",
    date: "2025-02-10",
    excerpt: "San Miguel's coffee scene is thriving. Here's why this colonial town has become a destination for specialty coffee lovers.",
    gradient: "from-kibok-sage to-kibok-charcoal",
  },
  {
    slug: "organic-farming-partners",
    title: "Meet Our Farming Partners",
    date: "2025-01-20",
    excerpt: "The people behind the beans — a look at the organic producers we work with across Mexico.",
    gradient: "from-kibok-brown-dark to-kibok-ink",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-kibok-cream pb-16 pt-32">
        <Container>
          <h1 className="font-heading text-[clamp(3rem,8vw,6rem)] font-bold uppercase leading-[0.9] tracking-tight text-kibok-ink">
            Blog
          </h1>
          <p className="mt-4 max-w-lg font-body text-lg text-kibok-warm-gray">
            Stories from the roastery, guides for home brewing, and dispatches
            from San Miguel de Allende.
          </p>
        </Container>
      </section>

      <section className="bg-kibok-off-white py-16">
        <Container>
          <BlogGrid posts={posts} />
        </Container>
      </section>
    </>
  );
}
