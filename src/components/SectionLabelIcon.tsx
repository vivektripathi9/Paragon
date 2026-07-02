import Image from "next/image";

type SectionLabelIconProps = {
  /** `light` = white/light sections (blue icon). `dark` = blue/dark sections (light icon). */
  variant: "light" | "dark";
  className?: string;
};

const icons = {
  light: {
    src: "/icons/section-label-light.png",
    width: 14,
    height: 18,
  },
  dark: {
    src: "/icons/section-label-dark.png",
    width: 21,
    height: 22,
  },
} as const;

export default function SectionLabelIcon({
  variant,
  className = "",
}: SectionLabelIconProps) {
  const icon = icons[variant];

  return (
    <Image
      src={icon.src}
      alt=""
      width={icon.width}
      height={icon.height}
      aria-hidden
      className={`section-label-icon shrink-0 ${className}`.trim()}
    />
  );
}
