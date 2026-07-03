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
    <section className="full-bleed relative bg-white lg:h-[899px]">
      <div className="mx-auto flex h-full w-full max-w-[1440px] flex-col px-5 pb-20 pt-14 sm:px-6 sm:pt-16 lg:px-12 lg:pb-0 lg:pt-24">
        <header className="w-full">
          <div className="mb-6 flex items-center gap-2.5 lg:mb-8">
            <SectionLabelIcon variant="light" />
            <span className="font-subheading text-sm font-medium text-paragon-blue lg:text-[0.9375rem]">
              Our Services
            </span>
          </div>

          <h2 className="font-heading w-full max-w-[1360px] text-[1.75rem] font-medium leading-[1.26] tracking-[-1px] text-paragon-navy sm:text-[2.25rem] sm:tracking-[-1.5px] lg:h-[68px] lg:w-[1360px] lg:text-[54px] lg:leading-[68px] lg:tracking-[-2px]">
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
                className="h-[4.5rem] w-[5.5rem] object-contain object-left sm:h-[5.5rem] sm:w-[7.5rem] lg:h-[103px] lg:w-[120px]"
              />
              <h3 className="font-heading mt-6 w-full max-w-[427px] text-lg font-medium leading-snug tracking-[-1px] text-[#000C22] sm:mt-7 sm:text-xl sm:tracking-[-1.25px] lg:mt-6 lg:h-[42px] lg:w-[427px] lg:text-[28px] lg:leading-[42px] lg:tracking-[-1.5px]">
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
