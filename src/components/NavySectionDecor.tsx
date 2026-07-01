function NavySectionDecor() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      aria-hidden
    >
      <div className="navy-section-gradient absolute inset-0" />
      <div className="navy-shape navy-shape-1" />
      <div className="navy-shape navy-shape-2" />
      <svg
        className="navy-line-art absolute -right-6 top-[6%] h-[38%] w-[42%]"
        viewBox="0 0 600 500"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M120 40 L560 40 L560 460 L80 420 Z"
          stroke="rgba(69, 133, 255, 0.18)"
          strokeWidth="1.5"
        />
        <path
          d="M180 100 L500 100 L500 400 L140 370 Z"
          stroke="rgba(69, 133, 255, 0.1)"
          strokeWidth="1"
        />
      </svg>
      <svg
        className="navy-line-art absolute -left-8 bottom-[10%] h-[34%] w-[38%]"
        viewBox="0 0 560 460"
        fill="none"
        preserveAspectRatio="none"
        style={{ animationDelay: "1.5s" }}
      >
        <path
          d="M40 40 L520 80 L480 420 L0 380 Z"
          stroke="rgba(69, 133, 255, 0.14)"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}

export default NavySectionDecor;
