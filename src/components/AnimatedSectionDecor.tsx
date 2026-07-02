type AnimatedSectionDecorVariant =
  | "hero"
  | "difference"
  | "process";

type AnimatedSectionDecorProps = {
  variant?: AnimatedSectionDecorVariant;
};

const linePaths: Record<
  AnimatedSectionDecorVariant,
  { primary: string; secondary: string; tertiary: string }
> = {
  hero: {
    primary: "M 318 72 L 318 420 L 892 900",
    secondary: "M 248 140 L 248 468 L 768 900",
    tertiary: "M 1080 0 L 1080 520 L 1320 900",
  },
  difference: {
    primary: "M 1122 96 L 1122 448 L 548 860",
    secondary: "M 1192 168 L 1192 492 L 672 860",
    tertiary: "M 360 40 L 360 480 L 120 860",
  },
  process: {
    primary: "M 1080 120 L 1080 380 L 1340 720",
    secondary: "M 960 200 L 960 520 L 1180 820",
    tertiary: "M 200 60 L 200 340 L 420 780",
  },
};

function AnimatedSectionDecor({
  variant = "hero",
}: AnimatedSectionDecorProps) {
  const paths = linePaths[variant];

  return (
    <div
      className={`section-anim section-anim--${variant} pointer-events-none absolute inset-0 z-[1] overflow-hidden`}
      aria-hidden
    >
      <div className="hero-bg-base absolute inset-0" />
      <div className="hero-bg-gradient absolute inset-0" />
      <div className="hero-bg-pulse absolute inset-0" />

      <div className="hero-glow hero-glow-1" />
      <div className="hero-glow hero-glow-2" />
      <div className="hero-glow hero-glow-3" />

      <div className="hero-mass hero-mass-primary" />
      <div className="hero-mass hero-mass-secondary" />
      <div className="hero-mass hero-mass-tertiary" />
      <div className="hero-mass hero-mass-quaternary" />

      <svg
        className="hero-line-art hero-line-art-primary"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          className="hero-line-path"
          d={paths.primary}
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <svg
        className="hero-line-art hero-line-art-secondary"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          className="hero-line-path hero-line-path-dim"
          d={paths.secondary}
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <svg
        className="hero-line-art hero-line-art-tertiary"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          className="hero-line-path hero-line-path-faint"
          d={paths.tertiary}
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="hero-noise absolute inset-0" />
    </div>
  );
}

export default AnimatedSectionDecor;
