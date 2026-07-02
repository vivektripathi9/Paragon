import Image from "next/image";
import Link from "next/link";
import { CalculatorContent } from "@/components/Calculator";
import AnimatedSectionDecor from "@/components/AnimatedSectionDecor";
import SectionEdge from "@/components/SectionEdge";
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

function ProcessGraphic() {
  return (
    <div className="process-cube" aria-hidden>
      <Image
        src="/icons/process-cube.png"
        alt=""
        width={400}
        height={400}
        className="h-full w-full object-contain"
        priority
      />
    </div>
  );
}

export default function Process() {
  return (
    <section className="relative z-10 section-edge-overlap overflow-x-hidden bg-[#000C22] pb-0">
      <AnimatedSectionDecor variant="process" />
      <SectionEdge variant="difference-top" className="z-20" />

      <div className="relative z-[2] mx-auto w-full max-w-[1440px] px-5 pb-14 pt-[var(--section-edge-height)] sm:px-6 lg:px-12 lg:pb-24 lg:pt-20">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <ProcessGraphic />

          <div className="pt-4 lg:pt-6">
            <div className="mb-6 flex items-center gap-2.5 lg:mb-8">
              <SectionLabelIcon variant="dark" />
              <span className="font-subheading text-sm font-medium text-white/80 lg:text-[0.9375rem]">
                Our Process
              </span>
            </div>

            <h2 className="text-[1.75rem] font-normal leading-[1.15] text-white sm:text-[2.25rem] lg:text-[2.75rem] lg:leading-[1.12]">
              A process built backward from your closing date
            </h2>

            <p className="mt-5 text-[0.9375rem] leading-[1.65] text-white/70 lg:mt-6 lg:text-base lg:leading-[1.7]">
              Before the CMBS servicer&apos;s requirements are translated into
              documents, before the securities portfolio is structured, before
              attorneys are engaged — the critical sequence is mapped against
              your closing date.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.65] text-white/70 lg:text-base lg:leading-[1.7]">
              Paragon begins with the end state. Every deliverable, deadline,
              and dependency is sequenced so the back end of the process
              determines how the front end is managed.
            </p>

            <Link
              href="/process"
              className="btn-hero group mt-8 inline-flex items-center justify-center gap-2 bg-paragon-green px-6 py-3.5 text-sm font-medium text-paragon-navy transition-[transform,box-shadow,filter] duration-300 hover:scale-[1.02] hover:brightness-105 hover:shadow-[0_8px_30px_rgba(62,232,197,0.25)] sm:mt-10 sm:text-base"
            >
              See Our Process
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>

      <CalculatorContent />

      <SectionEdge variant="reputation-bottom" className="z-20" />
    </section>
  );
}
