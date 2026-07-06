const linePaths = {
  primary: "M 318 72 L 318 420 L 892 900",
  secondary: "M 248 140 L 248 468 L 768 900",
  tertiary: "M 1080 0 L 1080 520 L 1320 900",
  quaternary: "M 640 0 L 640 320 L 1040 680 L 1280 900",
};

const particles = [
  { top: "10%", left: "62%", size: 4, x: 24, y: -32, duration: 13, delay: 0, green: false },
  { top: "14%", left: "78%", size: 3, x: -16, y: 22, duration: 11, delay: -1, green: true },
  { top: "22%", left: "88%", size: 3, x: -14, y: 26, duration: 12, delay: -4, green: true },
  { top: "28%", left: "72%", size: 3, x: -18, y: 28, duration: 16, delay: -3, green: false },
  { top: "34%", left: "94%", size: 2, x: 12, y: -20, duration: 10, delay: -2, green: false },
  { top: "38%", left: "58%", size: 3, x: -22, y: -18, duration: 14, delay: -2, green: false },
  { top: "44%", left: "82%", size: 4, x: 20, y: 30, duration: 17, delay: -8, green: false },
  { top: "48%", left: "66%", size: 2, x: -10, y: 18, duration: 9, delay: -5, green: true },
  { top: "52%", left: "76%", size: 5, x: 20, y: -24, duration: 11, delay: -5, green: true },
  { top: "58%", left: "90%", size: 3, x: 18, y: -14, duration: 13, delay: -6, green: false },
  { top: "62%", left: "88%", size: 4, x: 16, y: 22, duration: 18, delay: -7, green: false },
  { top: "66%", left: "70%", size: 3, x: -24, y: 16, duration: 14, delay: -9, green: false },
  { top: "72%", left: "64%", size: 3, x: 28, y: -16, duration: 15, delay: -6, green: false },
  { top: "76%", left: "84%", size: 2, x: 14, y: -22, duration: 12, delay: -3, green: true },
  { top: "18%", left: "52%", size: 2, x: -20, y: 14, duration: 15, delay: -10, green: false },
  { top: "56%", left: "48%", size: 3, x: 16, y: -20, duration: 16, delay: -11, green: false },
] as const;

const beams = [
  { top: "8%", left: "80%", height: 140, duration: 9, delay: 0 },
  { top: "30%", left: "66%", height: 100, duration: 11, delay: -3 },
  { top: "55%", left: "92%", height: 120, duration: 13, delay: -6 },
] as const;

function HeroMotionOverlay() {
  return (
    <div
      className="hero-motion-overlay pointer-events-none absolute inset-0 z-[2] overflow-hidden"
      aria-hidden
    >
      <svg
        className="hero-line-art hero-line-art-primary"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          className="hero-line-path"
          d={linePaths.primary}
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
          d={linePaths.secondary}
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <svg
        className="hero-line-art hero-line-art-tertiary max-lg:opacity-60"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          className="hero-line-path hero-line-path-faint"
          d={linePaths.tertiary}
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <svg
        className="hero-line-art hero-line-art-quaternary max-lg:opacity-50"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          className="hero-line-path hero-line-path-faint"
          d={linePaths.quaternary}
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="hero-motion-beams">
        {beams.map((beam, index) => (
          <span
            key={index}
            className="hero-motion-beam"
            style={
              {
                top: beam.top,
                left: beam.left,
                height: beam.height,
                "--beam-duration": `${beam.duration}s`,
                "--beam-delay": `${beam.delay}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="hero-particles">
        {particles.map((particle, index) => (
          <span
            key={index}
            className={
              particle.green ? "hero-particle hero-particle--green" : "hero-particle"
            }
            style={
              {
                top: particle.top,
                left: particle.left,
                width: particle.size,
                height: particle.size,
                "--particle-x": `${particle.x}px`,
                "--particle-y": `${particle.y}px`,
                "--particle-duration": `${particle.duration}s`,
                "--particle-delay": `${particle.delay}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
}

export default HeroMotionOverlay;
