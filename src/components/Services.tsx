import Link from "next/link";
import type { ReactNode } from "react";
import ArrowIcon from "@/components/ArrowIcon";
import SectionEdge from "@/components/SectionEdge";
import SectionLabelIcon from "@/components/SectionLabelIcon";

const services: {
  icon: string;
  iconWidth: number;
  iconHeight: number;
  title: string;
  description: ReactNode;
}[] = [
  {
    icon: "/icons/service-1.svg",
    iconWidth: 120,
    iconHeight: 103,
    title: "1. Defeasance Advisory",
    description: (
      <>
        Complimentary review of your loan documents,
        <br className="hidden md:max-[1194px]:block min-[1195px]:hidden" />{" "}
        timing constraints, and transaction
        <br className="hidden md:max-[1194px]:block min-[1195px]:hidden" />{" "}
        objectives before you
        <br className="hidden md:max-[1194px]:block min-[1195px]:hidden" />{" "}
        commit to a course of action.
      </>
    ),
  },
  {
    icon: "/icons/service-2.svg",
    iconWidth: 93,
    iconHeight: 103,
    title: "2. Defeasance Execution",
    description:
      "Active transaction management, including structuring the securities portfolio, coordinating across multiple stakeholders, and managing the process from servicer review through closing.",
  },
  {
    icon: "/icons/service-3.svg",
    iconWidth: 103,
    iconHeight: 103,
    title: "3. Legal Coordination",
    description:
      "When borrower-side defeasance counsel is needed, we connect you with attorneys who specialize in this work.",
  },
];

export default function Services() {
  return (
    <section className="services-section full-bleed relative section-edge-overlap overflow-visible bg-[#F0F3FC] max-md:h-auto max-md:min-h-0 md:h-auto min-[1195px]:min-h-[899px]">
      <SectionEdge variant="services-top" className="z-20" />

      <div className="services-shell mx-auto flex w-full min-h-0 max-w-[1440px] flex-col px-12 pb-0 pt-24 max-md:max-w-[402px] max-md:px-5 max-md:pb-[calc(var(--section-edge-height)+3.5rem)] max-md:pt-[calc(var(--section-edge-height)+1.5rem)] md:min-h-0 min-[1195px]:px-12 min-[1195px]:pb-[calc(var(--section-edge-height)+2.5rem)]">
        <header className="w-full">
          <div className="mb-6 flex items-center gap-2.5 min-[1195px]:mb-8">
            <SectionLabelIcon variant="light" />
            <span className="font-subheading text-sm font-medium text-paragon-blue min-[1195px]:text-[0.9375rem]">
              Our Services
            </span>
          </div>

          <h2 className="font-heading h-[68px] w-full max-w-[1360px] text-[54px] font-medium leading-[68px] tracking-[-2px] text-paragon-navy max-md:h-[84px] max-md:max-w-[362px] max-md:text-[36px] max-md:leading-[42px] max-md:tracking-[-1.5px] md:max-[1194px]:h-auto md:max-[1194px]:max-w-full md:max-[1194px]:text-[clamp(2rem,3.75vw,2.625rem)] md:max-[1194px]:leading-[clamp(2.75rem,4.8vw,3.5rem)] md:max-[1194px]:tracking-[-1.5px] min-[1195px]:text-[54px] min-[1195px]:leading-[68px] min-[1195px]:tracking-[-2px]">
            Services for every stage
          </h2>

          <p className="mt-4 w-full max-w-[776px] font-sans text-[0.9375rem] font-medium leading-[1.4] tracking-[-0.25px] text-[#000C22B2] max-md:mt-4 md:max-[1194px]:mt-3 md:max-[1194px]:max-w-full md:max-[1194px]:text-[clamp(0.875rem,1.5vw,0.9375rem)] md:max-[1194px]:leading-[1.45] min-[1195px]:mt-5 min-[1195px]:h-[28px] min-[1195px]:text-[20px] min-[1195px]:leading-[28px]">
            Paragon&apos;s services are tailored to the needs borrowers face
            during defeasance
          </p>
        </header>

        <div className="services-grid mt-10 grid min-w-0 max-md:grid-cols-1 max-md:gap-10 md:max-[1194px]:grid-cols-3 md:max-[1194px]:gap-[clamp(1rem,2.5vw,2.5rem)] min-[1195px]:mt-20 min-[1195px]:min-h-0 min-[1195px]:w-full min-[1195px]:max-w-none min-[1195px]:grid-cols-3 min-[1195px]:gap-10">
          {services.map((service) => (
            <article
              key={service.title}
              className="services-card flex min-w-0 flex-col md:max-[1194px]:box-border md:max-[1194px]:min-h-0 min-[1195px]:box-border min-[1195px]:min-h-0"
            >
              <img
                src={service.icon}
                alt=""
                width={service.iconWidth}
                height={service.iconHeight}
                className="services-card__icon h-[103px] w-[120px] shrink-0 object-contain object-left opacity-100 max-md:h-[69.06px] max-md:w-[80.39px] md:max-[1194px]:h-[clamp(4rem,7.2vw,5.34rem)] md:max-[1194px]:w-[clamp(4.5rem,8.3vw,6.22rem)] min-[1195px]:h-[103px] min-[1195px]:w-[120px]"
              />
              <h3 className="services-card__title font-heading mt-6 h-[42px] w-full max-w-[427px] text-[28px] font-medium leading-[42px] tracking-[-1.5px] text-[#000C22] max-md:mt-6 max-md:h-[32px] max-md:max-w-[263px] max-md:text-[24px] max-md:leading-[32px] max-md:tracking-[-1px] md:max-[1194px]:mt-0 md:max-[1194px]:h-auto md:max-[1194px]:max-w-full md:max-[1194px]:text-[clamp(1.25rem,2.25vw,1.5rem)] md:max-[1194px]:leading-[1.45] min-[1195px]:mt-6 min-[1195px]:h-[42px] min-[1195px]:max-w-[427px] min-[1195px]:text-[28px] min-[1195px]:leading-[42px] min-[1195px]:tracking-[-1.5px]">
                {service.title}
              </h3>
              <p className="services-card__copy mt-3 font-sans text-[0.875rem] font-normal leading-[1.65] tracking-[-0.25px] text-[#000C22B2] max-md:mt-3 max-md:text-base md:max-[1194px]:mt-0 md:max-[1194px]:text-[clamp(0.875rem,1.5vw,1rem)] md:max-[1194px]:leading-[1.5] min-[1195px]:mt-3 min-[1195px]:text-[18px] min-[1195px]:leading-[29px]">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <Link
          href="/services"
          className="services-cta btn-hero group mt-8 inline-flex h-[54px] w-[234px] max-w-full shrink-0 items-center justify-center gap-3 whitespace-nowrap bg-[#31EE97] px-[25px] text-sm font-medium text-paragon-navy opacity-100 transition-[transform,box-shadow,filter] duration-300 hover:scale-[1.02] hover:brightness-105 hover:shadow-[0_8px_30px_rgba(49,238,151,0.25)] max-md:mt-8 min-[1195px]:mt-10 min-[1195px]:text-base"
        >
          Explore Our Services
          <ArrowIcon />
        </Link>
      </div>

      <SectionEdge variant="about-bottom" className="z-20" />
    </section>
  );
}
