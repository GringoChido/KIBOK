import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout/Container";
import { getTranslations } from "next-intl/server";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug } = await params;
  const t = await getTranslations("blog_page");

  return (
    <section className="bg-kibok-off-white pb-24 pt-32">
      <Container className="max-w-3xl">
        <Link
          href="/blog"
          className="font-heading text-sm font-bold uppercase tracking-wider text-kibok-brown transition-colors hover:text-kibok-terracotta"
        >
          &larr; {t("back")}
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
            This is a placeholder blog post. Connect a CMS for full
            content management.
          </p>
        </div>
      </Container>
    </section>
  );
}
