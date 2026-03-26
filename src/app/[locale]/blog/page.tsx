import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { BlogPageContent } from "./BlogPageContent";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("blog_page");
  return {
    title: `${t("heading")} — Ki'bok Coffee SMA`,
    description: t("subheading"),
  };
}

export default function BlogPage() {
  return <BlogPageContent />;
}
