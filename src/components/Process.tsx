import Image from "next/image";
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
      className="process-cube mx-auto aspect-square w-full max-w-[20rem] opacity-100 sm:max-w-[18rem] lg:mx-0 lg:h-[532px] lg:w-[532px] lg:max-w-none"
      aria-hidden
    >
      <Image
        src="/icons/process-cube.png"
        alt=""
        width={532}
        height={532}
        className="h-full w-full object-contain opacity-100"
        priority
      />
    </div>
  );
}

export default function Process() {
  return (
    <section className="full-bleed relative z-10 section-edge-overlap overflow-x-hidden bg-[#000C22] pb-0">
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

            <h2 className="font-heading w-full max-w-[680px] text-[1.75rem] font-medium leading-[1.2] tracking-[-1px] text-white sm:text-[2.25rem] sm:tracking-[-1.5px] lg:h-[140px] lg:w-[680px] lg:text-[54px] lg:leading-[70px] lg:tracking-[-2px]">
              A process built backward from your closing date
            </h2>

            <p className="mt-5 font-sans text-[0.9375rem] font-medium leading-[1.65] tracking-[-0.25px] text-white/70 sm:mt-6 lg:text-[18px] lg:leading-[30px]">
              Every defeasance follows a sequence. The challenge is that the
              timing is driven by a transaction with its own closing deadline.
            </p>
            <p className="mt-4 font-sans text-[0.9375rem] font-medium leading-[1.65] tracking-[-0.25px] text-white/70 lg:text-[18px] lg:leading-[30px]">
              Paragon works backward from that date. Servicer requirements,
              securities structuring, documentation, and approvals are
              addressed before they become urgent. By the time a request
              arrives, the work behind it is already done.
            </p>

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
