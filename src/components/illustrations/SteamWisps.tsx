interface Props {
  className?: string;
  color?: string;
}

export const SteamWisps = ({ className = "", color = "currentColor" }: Props) => (
  <svg
    viewBox="0 0 40 60"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    className={className}
  >
    <path d="M10 55 C10 45, 16 42, 12 32 C8 22, 14 15, 14 8" opacity="0.4" />
    <path d="M20 58 C20 48, 26 44, 22 34 C18 24, 24 18, 24 10" opacity="0.6" />
    <path d="M30 55 C30 45, 36 42, 32 32 C28 22, 34 15, 34 8" opacity="0.3" />
  </svg>
);
