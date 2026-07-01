"use client";

function AboutIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <path d="M2 12L5.5 4L9 12H2Z" fill="#5D87FF" />
      <path d="M5.5 12L9 4L12.5 12H5.5Z" fill="#5D87FF" opacity="0.65" />
    </svg>
  );
}

function CornerMark() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
      className="absolute right-7 top-7 text-paragon-navy transition-opacity duration-300 group-hover:opacity-0"
    >
      <path d="M8 2H12V6" stroke="currentColor" strokeWidth="1.25" />
      <path d="M2 2H12" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

const stats = [
  {
    value: "$50 Billion+",
    description:
      "Paragon principals' experience in securitized loan transactions involving defeasance",
    height: "h-[23rem] lg:h-[26rem]",
  },
  {
    value: "5,000+",
    description: "Defeasance transactions completed",
    height: "h-[19.5rem] lg:h-[21.5rem]",
  },
  {
    value: "3 Weeks",
    description: "Average closing time for defeasance transactions",
    height: "h-[16rem] lg:h-[18rem]",
  },
] as const;

export default function About() {
  return (
    <section className="relative bg-white pb-0 pt-16 lg:pt-24">
      <div className="relative z-0 mx-auto max-w-[1440px] px-6 pb-32 lg:px-12 lg:pb-44">
        <div className="mb-8 flex items-center gap-2.5 lg:mb-10">
          <AboutIcon />
          <span className="font-subheading text-sm font-medium text-paragon-blue lg:text-[0.9375rem]">
            What makes us different
          </span>
        </div>

        <h2 className="max-w-[58rem] text-[1.625rem] font-bold leading-[1.22] tracking-[-0.01em] sm:text-[2rem] lg:text-[2.5rem] lg:leading-[1.2]">
          <span className="text-paragon-muted">
            Paragon is the only independent defeasance
          </span>
          <br />
          <span className="text-paragon-navy">
            consultant recommended by two of the nation&apos;s four largest CMBS
            servicers
          </span>
        </h2>

        <div className="mt-12 flex flex-col gap-4 sm:mt-14 sm:flex-row sm:items-end sm:gap-5 lg:mt-16">
          {stats.map((stat) => (
            <article
              key={stat.value}
              className={`about-stat-card group relative flex w-full flex-col ${stat.height} p-7 sm:flex-1 lg:p-8`}
            >
              <CornerMark />
              <p className="font-heading text-[1.875rem] font-bold leading-none tracking-tight text-paragon-navy transition-colors duration-300 group-hover:text-white sm:text-[2.125rem] lg:text-[2.375rem]">
                {stat.value}
              </p>
              <p className="mt-auto pt-16 text-[0.8125rem] leading-[1.55] text-paragon-navy/70 transition-colors duration-300 group-hover:text-white/90 lg:text-sm lg:leading-[1.6]">
                {stat.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
