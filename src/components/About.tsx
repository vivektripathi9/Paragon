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
      className="absolute right-8 top-8 text-paragon-navy transition-opacity duration-300 group-hover:opacity-0"
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
    height: "lg:h-[487px]",
    variant: "about-stat-card--first",
    valueWrap: "",
    descriptionClass: "",
    valueClass: "",
    descriptionMt: "mt-auto",
  },
  {
    value: "5,000+",
    description: "Defeasance transactions completed",
    height: "lg:h-[360px]",
    variant: "about-stat-card--stacked",
    valueWrap: "",
    descriptionClass: "",
    valueClass: "",
    descriptionMt: "mt-auto",
  },
  {
    value: "3 Weeks",
    description: "Average closing time for defeasance transactions",
    height: "lg:h-[248px]",
    variant: "about-stat-card--stacked",
    valueWrap: "whitespace-nowrap",
    valueClass: "lg:h-auto",
    descriptionMt: "mt-auto",
    descriptionClass: "lg:pt-6",
  },
] as const;

export default function About() {
  return (
    <section className="full-bleed relative bg-white">
      <div className="relative z-0 mx-auto flex w-full max-w-[1440px] flex-col px-5 py-10 sm:px-6 lg:px-10 lg:pb-[calc(var(--section-edge-height)+2.5rem)] lg:pt-[54px]">
        <div className="shrink-0 lg:pl-2">
          <div className="mb-6 flex items-center gap-2.5 lg:mb-8">
            <SectionLabelIcon variant="light" />
            <span className="font-subheading text-sm font-medium text-paragon-blue lg:text-[0.9375rem]">
              About Paragon
            </span>
          </div>

          <p className="w-full max-w-[1081px] font-heading text-lg font-medium leading-[1.35] tracking-[-1px] sm:text-[1.625rem] sm:leading-[1.35] sm:tracking-[-1.5px] lg:min-h-[204px] lg:w-[1081px] lg:text-[48px] lg:leading-[68px] lg:tracking-[-2px]">
            <span className="text-paragon-muted">
              Paragon is the only independent defeasance
            </span>{" "}
            <span className="text-paragon-navy">
              consultant recommended by two of the nation&apos;s four largest CMBS
              servicers
            </span>
          </p>
        </div>

        <div className="about-stats-row relative z-[1] mt-8 flex w-full max-w-[1362px] flex-col gap-4 pb-4 sm:mt-10 lg:mt-10 lg:min-h-[487px] lg:flex-row lg:items-end lg:gap-[39px] lg:pb-4">
          {stats.map((stat) => (
            <article
              key={stat.value}
              className={`about-stat-card group relative box-border flex w-full min-w-0 flex-col overflow-visible p-6 sm:p-7 lg:min-w-[153.6px] lg:w-[428px] lg:max-w-[428px] lg:shrink-0 lg:p-8 ${stat.height} ${stat.variant}`}
            >
              <CornerMark />
              <p
                className={`relative z-[1] shrink-0 font-heading text-[1.875rem] font-medium leading-none tracking-[-1px] text-paragon-navy transition-colors duration-300 group-hover:text-white sm:text-[2.125rem] sm:tracking-[-1.5px] lg:w-[183px] lg:text-[63px] lg:leading-[61.6px] lg:tracking-[-2px] ${stat.valueClass || "lg:h-[123px]"} ${stat.valueWrap}`}
              >
                {stat.value}
              </p>
              <p
                className={`font-neue-montreal relative z-[1] shrink-0 pt-6 text-base font-normal leading-[1.2] tracking-normal text-paragon-navy/80 transition-colors duration-300 group-hover:text-white/90 lg:text-[22px] lg:leading-[26.4px] ${stat.descriptionMt} ${stat.descriptionClass || "lg:pt-10"}`}
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
