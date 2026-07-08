"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import SectionLabelIcon from "@/components/SectionLabelIcon";

function CornerMark() {
  return (
    <Image
      src="/icons/Vector (2).svg"
      alt=""
      width={24}
      height={34}
      aria-hidden
      className="absolute right-8 top-8 h-[34px] w-[24px] transition-opacity duration-300 group-hover:opacity-0 max-lg:right-[26.99px] max-lg:top-[26.99px]"
    />
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
    descriptionClass:
      "lg:box-border lg:h-[106px] lg:w-[271px] lg:overflow-hidden group-hover:text-[#FFFFFF]",
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
    description: (
      <>
        <span className="block whitespace-nowrap">
          Average closing time for defeasance
        </span>
        <span className="block">transactions</span>
      </>
    ),
    height: "lg:h-[248px]",
    variant: "about-stat-card--stacked",
    valueWrap: "whitespace-nowrap",
    valueClass: "lg:h-auto",
    descriptionMt: "mt-auto",
    descriptionClass:
      "lg:box-border lg:h-[53px] lg:w-[364px] lg:overflow-hidden opacity-100",
  },
];

export default function About() {
  return (
    <section className="full-bleed relative bg-[#F0F3FC] max-lg:z-[2]">
      <div className="relative z-0 mx-auto flex w-full max-w-[1440px] flex-col px-10 pb-[calc(var(--section-edge-height)+2.5rem)] pt-[54px] max-lg:max-w-[402px] max-lg:px-5 max-lg:pb-[calc(var(--section-edge-height)+4rem)] max-lg:pt-12">
        <div className="shrink-0 lg:pl-2">
          <div className="mb-6 flex items-center gap-2.5 lg:mb-8">
            <SectionLabelIcon variant="light" />
            <span className="font-subheading text-sm font-medium text-paragon-blue lg:text-[0.9375rem]">
              About Paragon
            </span>
          </div>

          <p className="font-heading w-full max-w-[1081px] text-[48px] font-medium leading-[68px] tracking-[-2px] lg:min-h-[204px] max-lg:h-[210px] max-lg:max-w-[362px] max-lg:text-[28px] max-lg:leading-[42px] max-lg:tracking-[-1.5px]">
            <span className="text-paragon-muted">
              Paragon is the only independent defeasance
            </span>{" "}
            <span className="text-paragon-navy">
              consultant recommended by two of the nation&apos;s four largest CMBS
              servicers
            </span>
          </p>
        </div>

        <div className="about-stats-row relative z-[1] mt-10 flex w-full max-w-[1362px] min-h-[487px] flex-row items-end gap-[39px] pb-4 max-lg:mt-[79px] max-lg:min-h-0 max-lg:flex-col max-lg:items-stretch max-lg:gap-[34px] max-lg:pb-0 max-lg:pr-6">
          {stats.map((stat) => (
            <article
              key={stat.value}
              className={`about-stat-card group relative box-border flex w-[428px] max-w-[428px] min-w-[153.6px] shrink-0 flex-col overflow-visible p-8 ${stat.height} ${stat.variant} max-lg:h-[290px] max-lg:w-full max-lg:max-w-[361px] max-lg:min-w-[129.56px] max-lg:justify-between max-lg:gap-[60px] max-lg:p-[26.99px]`}
            >
              <CornerMark />
              <p
                className={`relative z-[1] shrink-0 font-heading text-[63px] font-medium leading-[61.6px] tracking-[-2px] text-paragon-navy transition-colors duration-300 group-hover:text-white lg:w-[183px] ${stat.valueClass || "lg:h-[123px]"} ${stat.valueWrap} max-lg:text-[1.875rem] max-lg:leading-none max-lg:tracking-[-1px]`}
              >
                {stat.value}
              </p>
              <p
                className={`font-neue-montreal relative z-[1] min-w-0 shrink text-[22px] font-normal leading-[26.4px] tracking-[0] break-words text-paragon-navy/80 opacity-100 transition-colors duration-300 group-hover:text-white/90 ${stat.descriptionMt} ${stat.descriptionClass || "lg:pt-10"} max-lg:mt-0 max-lg:pt-0 max-lg:h-auto max-lg:w-auto max-lg:text-base max-lg:leading-[1.2]`}
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
