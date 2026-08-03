import Link from "next/link";
import type { ReactNode } from "react";
import ArrowIcon from "@/components/ArrowIcon";
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
        <span className="max-md:hidden">
          Complimentary review of your loan documents, timing constraints, and
          transaction objectives before you commit to a course of action.
        </span>
        <span className="services-card__copy-mobile hidden max-md:block">
          <span className="block whitespace-nowrap">
            Complimentary review of your loan documents,
          </span>
          <span className="block whitespace-nowrap">
            timing constraints, and transaction objectives before
          </span>
          <span className="block whitespace-nowrap">
            you commit to a course of action.
          </span>
        </span>
      </>
    ),
  },
  {
    icon: "/icons/service-2.svg",
    iconWidth: 93,
    iconHeight: 103,
    title: "2. Defeasance Execution",
    description: (
      <>
        <span className="services-card__copy-locked max-md:hidden">
          <span className="block">
            Active transaction management, including
          </span>
          <span className="block">
            structuring the securities portfolio, coordinating
          </span>
          <span className="block">
            across multiple stakeholders, and managing the
          </span>
          <span className="block">
            process from servicer review through closing.
          </span>
        </span>
        <span className="services-card__copy-mobile hidden max-md:block">
          <span className="block whitespace-nowrap">
            Active transaction management, including
          </span>
          <span className="block whitespace-nowrap">
            structuring the securities portfolio, coordinating
          </span>
          <span className="block whitespace-nowrap">
            across multiple stakeholders, and managing the
          </span>
          <span className="block whitespace-nowrap">
            process from servicer review through closing.
          </span>
        </span>
      </>
    ),
  },
  {
    icon: "/icons/service-3.svg",
    iconWidth: 103,
    iconHeight: 103,
    title: "3. Legal Coordination",
    description: (
      <>
        <span className="max-md:hidden">
          When borrower-side defeasance counsel is needed, we connect you with
          attorneys who specialize in this work.
        </span>
        <span className="services-card__copy-mobile hidden max-md:block">
          <span className="block whitespace-nowrap">
            When borrower-side defeasance counsel is needed,
          </span>
          <span className="block whitespace-nowrap">
            we connect you with attorneys who specialize in this
          </span>
          <span className="block whitespace-nowrap">work.</span>
        </span>
      </>
    ),
  },
];

export default function Services() {
  return (
    <section className="services-section full-bleed relative z-[4] section-edge-overlap overflow-visible bg-[#F0F3FC] max-md:h-auto max-md:min-h-0 md:h-auto min-[1195px]:min-h-[899px]">
      <div className="services-shell mx-auto flex w-full min-h-0 max-w-[1440px] flex-col px-12 pb-0 pt-[calc(var(--section-edge-height)+1.5rem)] max-md:max-w-[402px] max-md:px-5 max-md:pb-[calc(var(--section-edge-height)+3.5rem)] max-md:pt-[calc(var(--section-edge-height)+2.5rem)] md:min-h-0 min-[1195px]:px-12 min-[1195px]:pb-[calc(var(--section-edge-height)+2.5rem)] min-[1195px]:pt-[calc(var(--section-edge-height)+2rem)]">
        <header className="w-full">
          <div className="mb-6 flex items-center gap-2.5 min-[1195px]:mb-8">
            <SectionLabelIcon variant="light" />
            <span className="font-subheading text-sm font-semibold text-[#3E6BFF] min-[1195px]:text-[0.9375rem]">
              Our Services
            </span>
          </div>

          <h2 className="font-heading h-[68px] w-full max-w-[1360px] text-[54px] !font-medium leading-[68px] tracking-[-2px] text-paragon-navy max-md:h-auto max-md:max-w-[362px] max-md:text-[36px] max-md:leading-[42px] max-md:tracking-[-1.5px] md:max-[1194px]:h-auto md:max-[1194px]:max-w-full md:max-[1194px]:text-[clamp(2rem,3.75vw,2.625rem)] md:max-[1194px]:leading-[clamp(2.75rem,4.8vw,3.5rem)] md:max-[1194px]:tracking-[-1.5px] min-[1195px]:text-[54px] min-[1195px]:leading-[68px] min-[1195px]:tracking-[-2px]">
            <span className="max-md:hidden">Services for every stage</span>
            <span className="hidden max-md:block">
              <span className="block whitespace-nowrap">Services for every</span>
              <span className="block whitespace-nowrap">stage</span>
            </span>
          </h2>

          <p className="mt-4 w-full max-w-[776px] font-sans text-[0.9375rem] font-medium leading-[1.4] tracking-[-0.25px] text-[#000C22B2] max-md:mt-4 md:max-[1194px]:mt-3 md:max-[1194px]:max-w-full md:max-[1194px]:text-[clamp(0.875rem,1.5vw,0.9375rem)] md:max-[1194px]:leading-[1.45] min-[1195px]:mt-5 min-[1195px]:h-[28px] min-[1195px]:text-[20px] min-[1195px]:leading-[28px]">
            <span className="max-md:hidden">
              Paragon&apos;s services are tailored to the needs borrowers face
              during defeasance
            </span>
            <span className="services-intro-mobile hidden max-md:block">
              <span className="block whitespace-nowrap">
                Paragon&apos;s services are tailored to the needs
              </span>
              <span className="block whitespace-nowrap">
                borrowers face during defeasance
              </span>
            </span>
          </p>
        </header>

        <div className="services-grid mt-10 grid min-w-0 max-md:grid-cols-1 max-md:gap-10 md:max-[1194px]:grid-cols-3 md:max-[1194px]:gap-[clamp(1rem,2.5vw,2.5rem)] min-[1195px]:mt-20 min-[1195px]:min-h-0 min-[1195px]:w-full min-[1195px]:max-w-none min-[1195px]:grid-cols-3 min-[1195px]:gap-10">
          {services.map((service) => (
            <article
              key={service.title}
              className="services-card flex min-w-0 flex-col md:max-[1194px]:box-border md:max-[1194px]:min-h-0 min-[1195px]:box-border min-[1195px]:min-h-0"
            >
              <div className="services-card__icon-wrap flex h-[103px] w-full shrink-0 items-end max-md:h-[69.06px] md:max-[1194px]:h-[clamp(4rem,7.2vw,5.34rem)] min-[1195px]:h-[103px]">
                <img
                  src={service.icon}
                  alt=""
                  width={service.iconWidth}
                  height={service.iconHeight}
                  className="services-card__icon h-full w-auto max-w-full shrink-0 object-contain object-left object-bottom opacity-100"
                />
              </div>
              <h3 className="services-card__title font-heading mt-6 h-[42px] w-full max-w-[427px] text-[28px] !font-medium leading-[42px] tracking-[-1.5px] text-[#000C22] max-md:mt-6 max-md:h-8 max-md:max-w-full max-md:text-[24px] max-md:leading-8 max-md:tracking-[-1px] md:max-[1194px]:mt-0 md:max-[1194px]:h-auto md:max-[1194px]:max-w-full md:max-[1194px]:text-[clamp(1.25rem,2.25vw,1.5rem)] md:max-[1194px]:leading-[1.45] min-[1195px]:mt-6 min-[1195px]:h-[42px] min-[1195px]:max-w-[427px] min-[1195px]:text-[28px] min-[1195px]:leading-[42px] min-[1195px]:tracking-[-1.5px]">
                {service.title}
              </h3>
              <p className="services-card__copy mt-3 min-w-0 overflow-visible font-sans text-[0.875rem] font-normal leading-[1.65] tracking-[-0.25px] text-[#000C22B2] max-md:mt-3 max-md:text-[14px] max-md:leading-6 md:max-[1194px]:mt-0 md:max-[1194px]:text-[clamp(0.875rem,1.5vw,1rem)] md:max-[1194px]:leading-[1.5] min-[1195px]:mt-3 min-[1195px]:text-[18px] min-[1195px]:leading-[29px]">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <Link
          href="/services"
          className="services-cta btn-hero group mt-8 inline-flex h-[54px] w-[234px] max-w-full shrink-0 items-center justify-center gap-3 whitespace-nowrap bg-[#31EE97] px-[25px] text-sm font-semibold text-paragon-navy opacity-100 transition-[transform,box-shadow,filter] duration-300 hover:scale-[1.02] hover:brightness-105 hover:shadow-[0_8px_30px_rgba(49,238,151,0.25)] max-md:mt-8 min-[1195px]:mt-10 min-[1195px]:text-base"
        >
          Explore Our Services
          <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}
