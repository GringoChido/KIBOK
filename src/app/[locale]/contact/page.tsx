import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ContactPageContent } from "./ContactPageContent";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("contact_page");
  return { title: `${t("heading")} — Ki'bok Coffee SMA` };
}

export default function ContactPage() {
  return <ContactPageContent />;
}
