import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — Ki'bok Coffee SMA",
  description: "Get in touch with Ki'bok Coffee San Miguel de Allende.",
};

export default function ContactPage() {
  return (
    <section className="bg-kibok-off-white pb-24 pt-32">
      <Container className="max-w-2xl">
        <h1 className="font-heading text-[clamp(3rem,8vw,5rem)] font-bold uppercase leading-[0.9] tracking-tight text-kibok-ink">
          Get in Touch
        </h1>
        <p className="mt-4 font-body text-lg text-kibok-warm-gray">
          Questions, catering inquiries, or just want to say hello? Drop us a
          line.
        </p>

        <ContactForm />
      </Container>
    </section>
  );
}
