import { ScrollReveal } from "./ScrollReveal";

interface SectionHeadingProps {
  children: string;
  light?: boolean;
  className?: string;
}

export const SectionHeading = ({
  children,
  light = false,
  className = "",
}: SectionHeadingProps) => (
  <ScrollReveal>
    <h2
      className={`font-display font-bold tracking-tight text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] ${
        light ? "text-kibok-cream" : "text-kibok-ink"
      } ${className}`}
    >
      {children}
    </h2>
  </ScrollReveal>
);
