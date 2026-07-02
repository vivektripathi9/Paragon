function HeroDecor() {
  return (
    <div
      className="hero-ambient pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      aria-hidden
    >
      <div className="hero-ambient__base absolute inset-0" />
      <div className="hero-ambient__mesh" />
      <div className="hero-ambient__shimmer absolute inset-0" />
      <div className="hero-ambient__orb hero-ambient__orb--a" />
      <div className="hero-ambient__orb hero-ambient__orb--b" />
      <div className="hero-ambient__grain absolute inset-0" />
    </div>
  );
}

export default HeroDecor;
