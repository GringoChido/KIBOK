import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Blog Post — Ki'bok Coffee SMA",
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <section className="bg-kibok-off-white pb-24 pt-32">
      <Container className="max-w-3xl">
        <Link
          href="/blog"
          className="font-heading text-sm font-bold uppercase tracking-wider text-kibok-brown transition-colors hover:text-kibok-terracotta"
        >
          &larr; Back to Blog
        </Link>

        <h1 className="mt-8 font-heading text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-kibok-ink">
          {slug
            .split("-")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(" ")}
        </h1>

        <time className="mt-4 block font-body text-sm text-kibok-warm-gray">
          March 15, 2025
        </time>

        <div className="mt-12 space-y-6 font-body text-lg leading-relaxed text-kibok-warm-gray">
          <p>
            This is a placeholder blog post. Replace this content with your
            actual blog posts. You can connect a CMS like Sanity, Contentful, or
            use MDX files for content management.
          </p>
          <p>
            Ki&apos;bok Coffee&apos;s blog is a space for sharing stories about
            our coffee origins, brewing techniques, and the vibrant community of
            San Miguel de Allende.
          </p>
        </div>
      </Container>
    </section>
  );
}
