type SectionLabelIconProps = {
  /** `light` = white/light sections (blue icon). `dark` = blue/dark sections (light icon). */
  variant: "light" | "dark";
  className?: string;
};

const fills = {
  light: "#4585FF",
  dark: "#B0C5FF",
} as const;

export default function SectionLabelIcon({
  variant,
  className = "",
}: SectionLabelIconProps) {
  return (
    <svg
      width="14"
      height="18"
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={`section-label-icon shrink-0 ${className}`.trim()}
    >
      <path
        d="M8.81831 7.01394V17.3662L6.27798 16.3631V8.71363L0 6.23359V3.53082L8.81831 7.01394Z"
        fill={fills[variant]}
      />
      <path
        d="M13.17 4.08931V14.4415L10.6314 13.4385V5.78901L2.81445 2.70109V0L13.17 4.08931Z"
        fill={fills[variant]}
      />
    </svg>
  );
}
