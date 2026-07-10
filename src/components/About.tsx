"use client";

import Image from "next/image";
import SectionLabelIcon from "@/components/SectionLabelIcon";

function CornerMark() {
  return (
    <Image
      src="/icons/Vector (2).svg"
      alt=""
      width={24}
      height={34}
      aria-hidden
      className="about-stat-corner absolute right-8 top-8 h-[34px] w-[24px] transition-opacity duration-300 group-hover:opacity-0 group-active:opacity-0 max-md:right-[26.99px] max-md:top-[26.99px] md:max-[1439px]:right-[clamp(1.5rem,2vw,2rem)] md:max-[1439px]:top-[clamp(1.5rem,2vw,2rem)]"
    />
  );
}

const stats = [
  {
    value: "$50 Billion+",
    description:
      "Paragon principals' experience in securitized loan transactions involving defeasance",
    height: "min-[1440px]:h-[487px]",
    variant: "about-stat-card--first",
    valueWrap: "md:max-[1439px]:whitespace-normal md:max-[1439px]:break-words",
    descriptionClass:
      "min-[1440px]:box-border min-[1440px]:h-[106px] min-[1440px]:w-[271px] min-[1440px]:overflow-hidden",
    valueClass:
      "md:max-[1439px]:!shrink md:max-[1439px]:min-w-0 md:max-[1439px]:w-full md:max-[1439px]:max-w-[calc(100%-2.75rem)] md:max-[1439px]:box-border",
    descriptionMt: "mt-auto",
  },
  {
    value: "5,000+",
    description: "Defeasance transactions completed",
    height: "min-[1440px]:h-[360px]",
    variant: "about-stat-card--stacked",
    valueWrap: "",
    descriptionClass: "",
    valueClass: "",
    descriptionMt: "mt-auto",
  },
  {
    value: "3 Weeks",
    description: (
      <>
        <span className="block whitespace-nowrap">
          Average closing time for defeasance
        </span>
        <span className="block">transactions</span>
      </>
    ),
    height: "min-[1440px]:h-[248px]",
    variant: "about-stat-card--stacked",
    valueWrap: "max-md:whitespace-normal md:whitespace-nowrap",
    valueClass: "min-[1440px]:h-auto",
    descriptionMt: "mt-auto",
    descriptionClass:
      "max-md:!text-[clamp(0.75rem,3.4vw,1rem)] min-[1440px]:box-border min-[1440px]:h-[53px] min-[1440px]:w-[364px] min-[1440px]:overflow-hidden opacity-100",
  },
];

export default function About() {
  return (
    <section className="full-bleed relative bg-[#F0F3FC] max-md:z-[2]">
      <div className="about-content-shell relative z-0 mx-auto flex w-full max-w-[1440px] flex-col px-[var(--about-inline-padding)] pb-[calc(var(--section-edge-height)+2.5rem)] pt-[54px] max-md:max-w-[402px] max-md:pb-[calc(var(--section-edge-height)+4rem)] max-md:pt-12 md:max-[1439px]:max-w-[min(100%,75rem)] min-[1440px]:px-10">
        <div className="shrink-0 min-[1440px]:pl-2">
          <div className="mb-6 flex items-center gap-2.5 min-[1440px]:mb-8">
            <SectionLabelIcon variant="light" />
            <span className="font-subheading text-sm font-medium text-paragon-blue min-[1440px]:text-[0.9375rem]">
              About Paragon
            </span>
          </div>

          <p className="font-heading w-full max-w-[1081px] text-[48px] font-medium leading-[68px] tracking-[-2px] max-md:h-[210px] max-md:max-w-[362px] max-md:text-[28px] max-md:leading-[42px] max-md:tracking-[-1.5px] md:max-[1439px]:h-auto md:max-[1439px]:max-w-[min(56rem,100%)] md:max-[1439px]:text-[clamp(2rem,3.75vw,3rem)] md:max-[1439px]:leading-[clamp(2.75rem,5.2vw,3.5rem)] md:max-[1439px]:tracking-[-1.75px] min-[1440px]:min-h-[204px]">
            <span className="text-paragon-muted">
              Paragon is the only independent defeasance
            </span>{" "}
            <span className="text-paragon-navy">
              consultant recommended by two of the nation&apos;s four largest CMBS
              servicers
            </span>
          </p>
        </div>

        <div className="about-stats-row relative z-[1] mt-10 flex w-full max-w-[1362px] min-h-[487px] flex-row items-end gap-[39px] pb-4 max-md:mt-[79px] max-md:min-h-0 max-md:flex-col max-md:items-stretch max-md:gap-[34px] max-md:pb-0 max-md:pr-6 md:max-[1439px]:mt-10 md:max-[1439px]:w-full md:max-[1439px]:max-w-full md:max-[1439px]:min-h-0 md:max-[1439px]:flex-row md:max-[1439px]:items-end md:max-[1439px]:pb-4 md:max-[1439px]:pr-0">
          {stats.map((stat) => (
            <article
              key={stat.value}
              className={`about-stat-card group relative box-border flex w-[428px] max-w-[428px] min-w-[153.6px] touch-manipulation flex-col justify-between max-md:overflow-hidden p-8 opacity-100 min-[1440px]:shrink-0 min-[1440px]:overflow-visible ${stat.height} ${stat.variant} max-md:min-h-[290px] max-md:h-auto max-md:w-full max-md:max-w-[361px] max-md:min-w-0 max-md:gap-[60px] max-md:p-[26.99px] md:max-[1439px]:h-auto md:max-[1439px]:w-auto md:max-[1439px]:min-w-0 md:max-[1439px]:max-w-none md:max-[1439px]:flex-1 md:max-[1439px]:basis-0 md:max-[1439px]:shrink md:max-[1439px]:justify-between md:max-[1439px]:overflow-visible md:max-[1439px]:p-[clamp(1.5rem,2vw,2rem)]`}
            >
              <CornerMark />
              <p
                className={`about-stat-value relative z-[1] shrink-0 font-heading text-[63px] font-medium leading-[61.6px] tracking-[-2px] text-paragon-navy transition-colors duration-300 group-hover:text-white group-active:text-white min-[1440px]:w-[183px] ${stat.valueClass || "min-[1440px]:h-[123px]"} ${stat.valueWrap} max-md:text-[1.875rem] max-md:leading-none max-md:tracking-[-1px] md:max-[1439px]:text-[clamp(2.5rem,4vw,3.9375rem)] md:max-[1439px]:leading-none md:max-[1439px]:tracking-[-1px]`}
              >
                {stat.value}
              </p>
              <p
                className={`about-stat-description font-neue-montreal relative z-[1] min-w-0 shrink break-words text-[22px] font-normal leading-[26.4px] tracking-[0] text-paragon-navy/80 opacity-100 transition-colors duration-300 group-hover:text-white/90 group-active:text-white/90 ${stat.descriptionMt} ${stat.descriptionClass || "min-[1440px]:pt-10"} max-md:mt-0 max-md:h-auto max-md:w-auto max-md:pt-0 max-md:text-base max-md:leading-[1.2] md:max-[1439px]:mt-0 md:max-[1439px]:h-auto md:max-[1439px]:w-auto md:max-[1439px]:pt-0 md:max-[1439px]:text-[clamp(1rem,1.5vw,1.375rem)] md:max-[1439px]:leading-[1.2]`}
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
