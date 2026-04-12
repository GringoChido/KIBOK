interface WaveDividerProps {
  color?: string;
  flip?: boolean;
  className?: string;
}

export const WaveDivider = ({
  color = "#f4ede4",
  flip = false,
  className = "",
}: WaveDividerProps) => (
  <div className={`${flip ? "rotate-180" : ""} ${className}`} aria-hidden>
    <svg
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      className="block h-8 w-full md:h-12"
    >
      <path
        d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,60 L0,60Z"
        fill={color}
      />
    </svg>
  </div>
);
