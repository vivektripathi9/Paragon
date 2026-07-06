import Link from "next/link";
import { CalculatorContent } from "@/components/Calculator";
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
    <div
      className="process-cube mx-auto aspect-square w-full max-w-[20rem] opacity-100 max-lg:pt-10 sm:max-w-[18rem] lg:mx-0 lg:h-[532px] lg:w-[532px] lg:max-w-none lg:pt-0"
      aria-hidden
    >
      <img
        src="/icons/process-graphic.svg"
        alt=""
        width={439}
        height={439}
        className="h-full w-full object-contain opacity-100"
      />
    </div>
  );
}

export default function Process() {
  return (
    <section className="full-bleed relative z-10 section-edge-overlap overflow-x-hidden bg-[#000C22] pb-0">
      <SectionEdge variant="difference-top" className="z-20" />

      <div className="relative z-[2] mx-auto w-full max-w-[1440px] px-12 pb-24 pt-20 max-lg:max-w-[402px] max-lg:px-5 max-lg:pb-6 max-lg:pt-[var(--section-edge-height)]">
        <div className="grid items-center gap-8 max-lg:grid-cols-1 lg:grid-cols-2 lg:gap-10">
          <ProcessGraphic />

          <div className="pt-4 lg:pt-6">
            <div className="mb-6 flex items-center gap-2.5 lg:mb-8">
              <SectionLabelIcon variant="dark" />
              <span className="font-subheading text-sm font-medium text-white/80 lg:text-[0.9375rem]">
                Our Process
              </span>
            </div>

            <h2 className="font-heading h-[140px] w-full max-w-[680px] text-[54px] font-medium leading-[70px] tracking-[-2px] text-white max-lg:h-auto max-lg:max-w-[402px] max-lg:text-[36px] max-lg:leading-[47px] max-lg:tracking-[-1.5px]">
              A process built backward from your closing date
            </h2>

            <div className="mt-5 flex flex-col gap-4 max-lg:mt-5 max-lg:max-w-[367px] max-lg:min-h-[156px]">
              <p className="font-sans text-[18px] font-medium leading-[30px] tracking-[-0.25px] text-white/70 max-lg:text-[16px] max-lg:leading-[26px] max-lg:text-[#FFFFFFCC]">
                Every defeasance follows a sequence. The challenge is that the
                timing is driven by a transaction with its own closing deadline.
              </p>
              <p className="font-sans text-[18px] font-medium leading-[30px] tracking-[-0.25px] text-white/70 max-lg:text-[16px] max-lg:leading-[26px] max-lg:text-[#FFFFFFCC]">
                Paragon works backward from that date. Servicer requirements,
                securities structuring, documentation, and approvals are
                addressed before they become urgent. By the time a request
                arrives, the work behind it is already done.
              </p>
            </div>

            <Link
              href="/process"
              className="btn-hero group mt-8 inline-flex h-[54px] w-[203px] items-center justify-center gap-3 bg-[#31EE97] px-[25px] text-sm font-medium text-paragon-navy opacity-100 transition-[transform,box-shadow,filter] duration-300 hover:scale-[1.02] hover:brightness-105 hover:shadow-[0_8px_30px_rgba(49,238,151,0.25)] sm:mt-10 sm:text-base"
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
