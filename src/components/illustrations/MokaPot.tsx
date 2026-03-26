interface Props {
  className?: string;
  color?: string;
}

export const MokaPot = ({ className = "", color = "currentColor" }: Props) => (
  <svg
    viewBox="0 0 60 80"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Top knob */}
    <circle cx="30" cy="8" r="4" />
    {/* Top section */}
    <path d="M20 12 L18 30 L42 30 L40 12" />
    {/* Waist band */}
    <rect x="16" y="30" width="28" height="4" rx="1" />
    {/* Bottom section */}
    <path d="M16 34 L14 62 C14 66 20 68 30 68 C40 68 46 66 46 62 L44 34" />
    {/* Handle */}
    <path d="M46 38 C54 38, 56 52, 46 56" />
    {/* Spout */}
    <path d="M18 18 L8 14 L6 20" />
    {/* Steam */}
    <path d="M26 4 C26 0, 28 -2, 28 -4" opacity="0.4" />
    <path d="M34 4 C34 0, 36 -2, 36 -4" opacity="0.4" />
  </svg>
);
