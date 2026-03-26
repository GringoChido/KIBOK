interface Props {
  className?: string;
  color?: string;
}

export const CoffeeCup = ({ className = "", color = "currentColor" }: Props) => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Steam */}
    <path d="M30 20 C30 14, 34 12, 32 6" opacity="0.5" />
    <path d="M40 18 C40 12, 44 10, 42 4" opacity="0.5" />
    <path d="M50 20 C50 14, 54 12, 52 6" opacity="0.5" />
    {/* Cup body */}
    <path d="M18 28 L22 62 C22 66 26 68 40 68 C54 68 58 66 58 62 L62 28" />
    {/* Cup rim */}
    <ellipse cx="40" cy="28" rx="22" ry="4" />
    {/* Handle */}
    <path d="M62 34 C72 34, 74 46, 62 48" />
    {/* Saucer */}
    <ellipse cx="40" cy="72" rx="28" ry="4" />
  </svg>
);
