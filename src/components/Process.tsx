import Link from "next/link";
import ArrowIcon from "@/components/ArrowIcon";
import { CalculatorContent } from "@/components/Calculator";
import SectionEdge from "@/components/SectionEdge";
import SectionLabelIcon from "@/components/SectionLabelIcon";

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

      <div className="relative z-[2] isolate mx-auto w-full max-w-[1440px] px-12 pb-24 pt-20 max-md:max-w-[402px] max-md:px-5 max-md:pb-6 max-md:pt-[var(--section-edge-height)] md:max-[1194px]:px-8 md:max-[1194px]:pb-12 md:max-[1194px]:pt-12">
        <div className="grid min-w-0 items-center gap-8 max-md:grid-cols-1 md:max-[1194px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:max-[1194px]:gap-6 min-[1195px]:grid-cols-2 min-[1195px]:gap-10">
          <div className="process-cube-wrap relative z-[1] max-md:mx-auto min-[1195px]:justify-self-start">
            <ProcessGraphic />
          </div>

          <div className="relative z-[3] min-w-0 pt-4 md:max-[1194px]:w-full md:max-[1194px]:max-w-full md:max-[1194px]:pt-0 min-[1195px]:pt-6">
            <div className="mb-6 flex items-center gap-2.5 md:max-[1194px]:mb-4 min-[1195px]:mb-8">
              <SectionLabelIcon variant="dark" />
              <span className="font-subheading text-sm font-medium text-white/80 min-[1195px]:text-[0.9375rem]">
                Our Process
              </span>
            </div>

            <h2 className="font-heading h-[140px] w-full max-w-[680px] text-[54px] font-medium leading-[70px] tracking-[-2px] text-white max-md:h-auto max-md:max-w-[362px] max-md:text-[36px] max-md:leading-[47px] max-md:tracking-[-1.5px] md:max-[1194px]:h-auto md:max-[1194px]:w-full md:max-[1194px]:max-w-full md:max-[1194px]:text-[32px] md:max-[1194px]:font-medium md:max-[1194px]:leading-[44px] md:max-[1194px]:tracking-[-1.25px]">
              A process built backward from your closing date
            </h2>

            <div className="mt-5 flex flex-col gap-4 max-md:mt-5 max-md:max-w-[367px] max-md:min-h-[156px] md:max-[1194px]:mt-4 md:max-[1194px]:w-full md:max-[1194px]:max-w-full md:max-[1194px]:min-h-0 md:max-[1194px]:gap-3">
              <p className="font-sans text-[18px] font-medium leading-[30px] tracking-[-0.25px] text-white/70 max-md:text-[16px] max-md:leading-[26px] max-md:text-[#FFFFFFCC] md:max-[1194px]:text-[14px] md:max-[1194px]:font-medium md:max-[1194px]:leading-[21px] md:max-[1194px]:tracking-[-0.18px] md:max-[1194px]:text-[#FFFFFFCC]">
                Every defeasance follows a sequence. The challenge is that the
                timing is driven by a transaction with its own closing deadline.
              </p>
              <p className="font-sans text-[18px] font-medium leading-[30px] tracking-[-0.25px] text-white/70 max-md:text-[16px] max-md:leading-[26px] max-md:text-[#FFFFFFCC] md:max-[1194px]:text-[14px] md:max-[1194px]:font-medium md:max-[1194px]:leading-[21px] md:max-[1194px]:tracking-[-0.18px] md:max-[1194px]:text-[#FFFFFFCC]">
                Paragon works backward from that date. Servicer requirements,
                securities structuring, documentation, and approvals are
                addressed before they become urgent. By the time a request
                arrives, the work behind it is already done.
              </p>
            </div>

            <Link
              href="/process"
              className="btn-hero group mt-8 inline-flex h-[54px] w-[203px] items-center justify-center gap-3 whitespace-nowrap bg-[#31EE97] px-[25px] text-sm font-medium text-paragon-navy opacity-100 transition-[transform,box-shadow,filter] duration-300 hover:scale-[1.02] hover:brightness-105 hover:shadow-[0_8px_30px_rgba(49,238,151,0.25)] md:max-[1194px]:mt-6 min-[1195px]:mt-10 min-[1195px]:text-base"
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
