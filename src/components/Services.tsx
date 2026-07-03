import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import SectionLabelIcon from "@/components/SectionLabelIcon";

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className="transition-transform group-hover:translate-x-0.5"
    >
      <path
        d="M3 8H13M13 8L9 4M13 8L9 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const services: {
  icon: string;
  title: string;
  description: ReactNode;
}[] = [
  {
    icon: "/icons/service-1.png",
    title: "1. Defeasance Advisory",
    description:
      "Complimentary review of your loan documents, timing constraints, and transaction objectives before you commit to a course of action.",
  },
  {
    icon: "/icons/service-2.png",
    title: "2. Defeasance Execution",
    description: (
      <>
        Active transaction management, including structuring the securities
        portfolio, coordinating across multiple stakeholders, and managing{" "}
        <span className="whitespace-nowrap">
          the process from servicer review through closing.
        </span>
      </>
    ),
  },
  {
    icon: "/icons/service-3.png",
    title: "3. Legal Coordination",
    description:
      "When borrower-side defeasance counsel is needed, we connect you with attorneys who specialize in this work.",
  },
];

export default function Services() {
  return (
    <section className="full-bleed relative h-[899px] bg-white max-lg:h-auto max-lg:min-h-[1218px]">
      <div className="mx-auto flex h-full w-full max-w-[1440px] flex-col px-12 pb-0 pt-24 max-lg:min-h-[1218px] max-lg:max-w-[402px] max-lg:px-5 max-lg:pb-12 max-lg:pt-14">
        <header className="w-full">
          <div className="mb-6 flex items-center gap-2.5 lg:mb-8">
            <SectionLabelIcon variant="light" />
            <span className="font-subheading text-sm font-medium text-paragon-blue lg:text-[0.9375rem]">
              Our Services
            </span>
          </div>

          <h2 className="font-heading h-[68px] w-full max-w-[1360px] text-[54px] font-medium leading-[68px] tracking-[-2px] text-paragon-navy max-lg:h-[84px] max-lg:max-w-[362px] max-lg:text-[36px] max-lg:leading-[42px] max-lg:tracking-[-1.5px]">
            Services for every stage
          </h2>

          <p className="mt-4 w-full max-w-[776px] font-sans text-[0.9375rem] font-medium leading-[1.4] tracking-[-0.25px] text-[#000C22B2] sm:mt-5 lg:mt-5 lg:h-[28px] lg:w-[776px] lg:text-[20px] lg:leading-[28px]">
            Paragon&apos;s services are tailored to the needs borrowers face
            during defeasance
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:mt-12 lg:mt-20 lg:grid-cols-3 lg:gap-10">
          {services.map((service) => (
            <article key={service.title} className="flex flex-col">
              <Image
                src={service.icon}
                alt=""
                width={120}
                height={103}
                className="h-[103px] w-[120px] object-contain object-left opacity-100 max-lg:h-[69.06px] max-lg:w-[80.39px]"
              />
              <h3 className="font-heading mt-6 h-[42px] w-full max-w-[427px] text-[28px] font-medium leading-[42px] tracking-[-1.5px] text-[#000C22] max-lg:h-[32px] max-lg:max-w-[263px] max-lg:text-[24px] max-lg:leading-[32px] max-lg:tracking-[-1px]">
                {service.title}
              </h3>
              <p className="mt-3 font-sans text-[0.875rem] font-normal leading-[1.65] tracking-[-0.25px] text-[#000C22B2] sm:text-base lg:mt-3 lg:text-[18px] lg:leading-[29px]">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <Link
          href="/services"
          className="btn-hero group mt-8 inline-flex h-[54px] w-[234px] items-center justify-center gap-3 bg-[#31EE97] px-[25px] text-sm font-medium text-paragon-navy opacity-100 transition-[transform,box-shadow,filter] duration-300 hover:scale-[1.02] hover:brightness-105 hover:shadow-[0_8px_30px_rgba(49,238,151,0.25)] sm:mt-10 sm:text-base lg:mt-10"
        >
          Explore Our Services
          <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}
