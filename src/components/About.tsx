"use client";

import SectionLabelIcon from "@/components/SectionLabelIcon";

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
    size: "w-full min-h-[12rem] lg:h-[360px] lg:min-w-[153.6px] lg:w-[428px] lg:shrink-0",
    compact: false,
  },
  {
    value: "5,000+",
    description: "Defeasance transactions completed",
    size: "w-full min-h-[11rem] lg:h-[248px] lg:min-w-[153.6px] lg:w-[428px] lg:shrink-0",
    compact: false,
  },
  {
    value: "3 Weeks",
    description: "Average closing time for defeasance transactions",
    size: "w-full min-h-[8rem] lg:h-[106px] lg:w-[364px] lg:shrink-0",
    compact: true,
  },
] as const;

export default function About() {
  return (
    <section className="relative bg-white pb-0 pt-8 lg:pt-12">
      <div className="relative z-0 mx-auto max-w-[1440px] px-5 pb-20 pt-4 sm:px-6 sm:pt-6 lg:px-12 lg:pb-44 lg:pt-8">
        <div className="mb-6 flex items-center gap-2.5 lg:mb-8">
          <SectionLabelIcon variant="light" />
          <span className="font-subheading text-sm font-medium text-paragon-blue lg:text-[0.9375rem]">
            About Paragon
          </span>
        </div>

        <h2 className="max-w-[58rem] text-[1.75rem] font-normal leading-[2.5rem] tracking-[-2px] text-paragon-navy sm:text-[2.25rem] sm:leading-[3.125rem] lg:text-[3rem] lg:leading-[4.25rem]">
          What makes us different
        </h2>

        <p className="mt-5 max-w-[58rem] text-lg font-normal leading-[1.35] sm:mt-6 sm:text-[1.625rem] sm:leading-[1.22] lg:mt-8 lg:text-[2.5rem] lg:leading-[1.2]">
          <span className="text-paragon-muted">
            Paragon is the only independent defeasance
          </span>{" "}
          <span className="text-paragon-navy">
            consultant recommended by two of the nation&apos;s four largest CMBS
            servicers
          </span>
        </p>

        <div className="about-stats-row mt-10 flex w-full max-w-[1298px] flex-col gap-4 sm:mt-12 lg:mt-16 lg:flex-row lg:items-end lg:gap-[39px]">
          {stats.map((stat) => (
            <article
              key={stat.value}
              className={`about-stat-card group relative flex flex-col ${stat.size} ${
                stat.compact
                  ? "p-6 sm:p-7 lg:justify-between lg:p-5"
                  : "p-6 sm:p-7 lg:p-8"
              }`}
            >
              <CornerMark />
              <p
                className={`font-heading font-bold leading-none text-paragon-navy transition-colors duration-300 group-hover:text-white ${
                  stat.compact
                    ? "text-[1.875rem] sm:text-[2.125rem] lg:text-[2rem]"
                    : "text-[1.875rem] sm:text-[2.125rem] lg:text-[2.375rem]"
                }`}
              >
                {stat.value}
              </p>
              <p
                className={`text-[0.8125rem] leading-[1.55] text-paragon-navy/70 transition-colors duration-300 group-hover:text-white/90 lg:text-sm lg:leading-[1.6] ${
                  stat.compact
                    ? "mt-3 lg:mt-0"
                    : "mt-auto pt-6 sm:pt-10 lg:pt-16"
                }`}
              >
                {stat.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
