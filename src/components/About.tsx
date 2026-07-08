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
      className="absolute right-8 top-8 h-[34px] w-[24px] transition-opacity duration-300 group-hover:opacity-0 max-md:right-[26.99px] max-md:top-[26.99px] md:max-[1194px]:right-[26.51px] md:max-[1194px]:top-[26.51px]"
    />
  );
}

const stats = [
  {
    value: "$50 Billion+",
    description:
      "Paragon principals' experience in securitized loan transactions involving defeasance",
    height: "h-[487px]",
    tabletHeight: "md:max-[1194px]:h-[403.47px]",
    variant: "about-stat-card--first",
    valueWrap: "",
    descriptionClass:
      "min-[1195px]:box-border min-[1195px]:h-[106px] min-[1195px]:w-[271px] min-[1195px]:overflow-hidden group-hover:text-[#FFFFFF]",
    valueClass: "",
    descriptionMt: "mt-auto",
  },
  {
    value: "5,000+",
    description: "Defeasance transactions completed",
    height: "h-[360px]",
    tabletHeight: "md:max-[1194px]:h-[298.25px]",
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
    height: "h-[248px]",
    tabletHeight: "md:max-[1194px]:min-h-[205.46px] md:max-[1194px]:h-auto",
    variant: "about-stat-card--stacked",
    valueWrap: "whitespace-nowrap",
    valueClass: "min-[1195px]:h-auto",
    descriptionMt: "mt-auto",
    descriptionClass:
      "min-[1195px]:box-border min-[1195px]:h-[53px] min-[1195px]:w-[364px] min-[1195px]:overflow-hidden opacity-100 md:max-[1194px]:[&_span:first-child]:whitespace-normal",
  },
];

export default function About() {
  return (
    <section className="full-bleed relative bg-[#F0F3FC] max-md:z-[2]">
      <div className="relative z-0 mx-auto flex w-full max-w-[1440px] flex-col px-10 pb-[calc(var(--section-edge-height)+2.5rem)] pt-[54px] max-md:max-w-[402px] max-md:px-5 max-md:pb-[calc(var(--section-edge-height)+4rem)] max-md:pt-12 md:max-[1194px]:max-w-[1194px] md:max-[1194px]:px-8">
        <div className="shrink-0 min-[1195px]:pl-2">
          <div className="mb-6 flex items-center gap-2.5 min-[1195px]:mb-8">
            <SectionLabelIcon variant="light" />
            <span className="font-subheading text-sm font-medium text-paragon-blue min-[1195px]:text-[0.9375rem]">
              About Paragon
            </span>
          </div>

          <p className="font-heading w-full max-w-[1081px] text-[48px] font-medium leading-[68px] tracking-[-2px] min-[1195px]:min-h-[204px] max-md:h-[210px] max-md:max-w-[362px] max-md:text-[28px] max-md:leading-[42px] max-md:tracking-[-1.5px] md:max-[1194px]:h-auto md:max-[1194px]:max-w-[900px] md:max-[1194px]:min-h-0 md:max-[1194px]:text-[36px] md:max-[1194px]:leading-[50px] md:max-[1194px]:tracking-[-1.75px]">
            <span className="text-paragon-muted">
              Paragon is the only independent defeasance
            </span>{" "}
            <span className="text-paragon-navy">
              consultant recommended by two of the nation&apos;s four largest CMBS
              servicers
            </span>
          </p>
        </div>

        <div className="about-stats-row relative z-[1] mt-10 flex w-full max-w-[1362px] min-h-[487px] flex-row items-end gap-[39px] pb-4 max-md:mt-[79px] max-md:min-h-0 max-md:flex-col max-md:items-stretch max-md:gap-[34px] max-md:pb-0 max-md:pr-6 md:max-[1194px]:mt-10 md:max-[1194px]:w-full md:max-[1194px]:max-w-full md:max-[1194px]:min-h-[403.47px] md:max-[1194px]:flex-row md:max-[1194px]:items-end md:max-[1194px]:justify-between md:max-[1194px]:gap-8 md:max-[1194px]:pb-4 md:max-[1194px]:pr-0">
          {stats.map((stat) => (
            <article
              key={stat.value}
              className={`about-stat-card group relative box-border flex w-[428px] max-w-[428px] min-w-[153.6px] flex-col justify-between overflow-visible p-8 opacity-100 min-[1195px]:shrink-0 ${stat.height} ${stat.tabletHeight} ${stat.variant} max-md:h-[290px] max-md:w-full max-md:max-w-[361px] max-md:min-w-[129.56px] max-md:gap-[60px] max-md:p-[26.99px] md:max-[1194px]:w-[354.59px] md:max-[1194px]:max-w-[min(354.59px,calc((100%-4rem)/3))] md:max-[1194px]:min-w-[127.25px] md:max-[1194px]:flex-1 md:max-[1194px]:basis-0 md:max-[1194px]:shrink md:max-[1194px]:justify-between md:max-[1194px]:p-[26.51px]`}
            >
              <CornerMark />
              <p
                className={`relative z-[1] shrink-0 font-heading text-[63px] font-medium leading-[61.6px] tracking-[-2px] text-paragon-navy transition-colors duration-300 group-hover:text-white min-[1195px]:w-[183px] ${stat.valueClass || "min-[1195px]:h-[123px]"} ${stat.valueWrap} max-md:text-[1.875rem] max-md:leading-none max-md:tracking-[-1px] md:max-[1194px]:text-[2.5rem] md:max-[1194px]:leading-none md:max-[1194px]:tracking-[-1px]`}
              >
                {stat.value}
              </p>
              <p
                className={`font-neue-montreal relative z-[1] min-w-0 shrink text-[22px] font-normal leading-[26.4px] tracking-[0] break-words text-paragon-navy/80 opacity-100 transition-colors duration-300 group-hover:text-white/90 ${stat.descriptionMt} ${stat.descriptionClass || "min-[1195px]:pt-10"} max-md:mt-0 max-md:pt-0 max-md:h-auto max-md:w-auto max-md:text-base max-md:leading-[1.2] md:max-[1194px]:mt-0 md:max-[1194px]:h-auto md:max-[1194px]:w-auto md:max-[1194px]:pt-0 md:max-[1194px]:text-base md:max-[1194px]:leading-[1.2]`}
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
