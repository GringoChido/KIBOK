interface PullQuoteProps {
  children: string;
}

export const PullQuote = ({ children }: PullQuoteProps) => (
  <blockquote className="relative my-16 py-8">
    <span className="absolute -left-4 -top-4 font-heading text-[6rem] leading-none text-kibok-gold/30 select-none" aria-hidden>
      &ldquo;
    </span>
    <p className="relative z-10 max-w-2xl font-heading text-2xl italic leading-relaxed text-kibok-ink/80 md:text-3xl">
      {children}
    </p>
  </blockquote>
);
