interface Props {
  className?: string;
  color?: string;
}

export const CoffeeBeans = ({ className = "", color = "currentColor" }: Props) => (
  <svg
    viewBox="0 0 120 50"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    className={className}
  >
    {/* Bean 1 */}
    <ellipse cx="25" cy="25" rx="14" ry="10" transform="rotate(-20 25 25)" />
    <path d="M17 20 C22 24, 22 26, 17 30" transform="rotate(-20 25 25)" />
    {/* Bean 2 */}
    <ellipse cx="60" cy="22" rx="14" ry="10" transform="rotate(15 60 22)" />
    <path d="M52 17 C57 21, 57 23, 52 27" transform="rotate(15 60 22)" />
    {/* Bean 3 */}
    <ellipse cx="95" cy="28" rx="14" ry="10" transform="rotate(-5 95 28)" />
    <path d="M87 23 C92 27, 92 29, 87 33" transform="rotate(-5 95 28)" />
  </svg>
);
