import Image from "next/image";
import Link from "next/link";
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

const services = [
  {
    icon: "/icons/service-1.png",
    title: "1. Defeasance Advisory",
    description:
      "Complimentary review of your loan documents, timing constraints, and transaction objectives before you commit to a course of action.",
  },
  {
    icon: "/icons/service-2.png",
    title: "2. Defeasance Execution",
    description:
      "Active transaction management, including structuring the securities portfolio, coordinating across multiple stakeholders, and managing the process from servicer review through closing.",
  },
  {
    icon: "/icons/service-3.png",
    title: "3. Legal Coordination",
    description:
      "When borrower-side defeasance counsel is needed, we connect you with attorneys who specialize in this work.",
  },
] as const;

export default function Services() {
  return (
    <section className="relative bg-white pb-0">
      <div className="mx-auto max-w-[1440px] px-5 pb-20 pt-14 sm:px-6 sm:pt-16 lg:px-12 lg:pb-44 lg:pt-24">
        <header className="max-w-3xl">
          <div className="mb-6 flex items-center gap-2.5 lg:mb-8">
            <SectionLabelIcon variant="light" />
            <span className="font-subheading text-sm font-medium text-paragon-blue lg:text-[0.9375rem]">
              Our Services
            </span>
          </div>

          <h2 className="text-[1.75rem] font-normal leading-[1.15] text-paragon-navy sm:text-[2.25rem] lg:text-[2.75rem] lg:leading-[1.12]">
            Services for every stage
          </h2>

          <p className="mt-4 max-w-2xl text-[0.9375rem] leading-[1.6] text-paragon-navy/70 lg:mt-5 lg:text-base lg:leading-[1.65]">
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
                height={120}
                className="h-[5.5rem] w-[5.5rem] object-contain object-left sm:h-24 sm:w-24"
              />
              <h3 className="mt-6 text-lg font-normal leading-snug text-paragon-navy sm:mt-7 sm:text-xl">
                {service.title}
              </h3>
              <p className="mt-3 text-[0.875rem] leading-[1.65] text-paragon-navy/70 lg:text-[0.9375rem] lg:leading-[1.7]">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <Link
          href="/services"
          className="btn-hero group mt-12 inline-flex items-center justify-center gap-2 bg-paragon-green px-6 py-3.5 text-sm font-medium text-paragon-navy transition-[transform,box-shadow,filter] duration-300 hover:scale-[1.02] hover:brightness-105 hover:shadow-[0_8px_30px_rgba(62,232,197,0.25)] sm:mt-14 sm:text-base lg:mt-16"
        >
          Explore Our Services
          <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}
