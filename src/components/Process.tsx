import Link from "next/link";
import ArrowIcon from "@/components/ArrowIcon";
import { CalculatorContent } from "@/components/Calculator";
import SectionEdge from "@/components/SectionEdge";
import SectionLabelIcon from "@/components/SectionLabelIcon";

function ProcessGraphic() {
  return (
    <div className="process-cube">
      <img
        src="/icons/process-graphic.svg"
        alt=""
        width={439}
        height={439}
        className="process-cube-mobile mx-auto h-auto w-full max-w-[20rem] object-contain opacity-100 max-md:block md:hidden"
        aria-hidden
      />
      <img
        src="/icons/process-graphic.svg"
        alt=""
        width={439}
        height={439}
        className="process-cube-tablet mx-auto h-auto w-full max-w-full object-contain opacity-100 max-md:hidden min-[768px]:max-[1195px]:block min-[1195px]:hidden"
        aria-hidden
      />
      <div className="process-cube-desktop hidden min-[1195px]:block">
        <div className="process-cube__frame" aria-hidden />
        <img
          src="/icons/process-art.svg"
          alt=""
          width={439}
          height={439}
          className="process-cube__art"
          aria-hidden
        />
      </div>
    </div>
  );
}

export default function Process() {
  return (
    <section className="full-bleed relative z-10 section-edge-overlap overflow-x-hidden bg-[#000C22] pb-0">
      <SectionEdge variant="difference-top" className="z-20" />

      <div className="process-shell relative z-[2] isolate mx-auto w-full max-w-[1440px] px-12 pb-24 pt-20 max-md:max-w-[402px] max-md:px-5 max-md:pb-6 max-md:pt-[var(--section-edge-height)]">
        <div className="process-block grid min-w-0 items-center gap-8 max-md:grid-cols-1 min-[768px]:max-[1195px]:grid-cols-2 min-[768px]:max-[1195px]:gap-6 min-[1195px]:grid-cols-2 min-[1195px]:gap-10">
          <div className="process-cube-wrap relative z-[1] max-md:mx-auto min-[768px]:max-[1195px]:order-1 min-[768px]:max-[1195px]:col-start-1 min-[1195px]:justify-self-start">
            <ProcessGraphic />
          </div>

          <div className="process-copy-wrap relative z-[3] min-w-0 max-md:pt-4 min-[768px]:max-[1195px]:order-2 min-[768px]:max-[1195px]:col-start-2 min-[1195px]:pt-6">
            <div className="mb-6 flex items-center gap-2.5 min-[1195px]:mb-8">
              <SectionLabelIcon variant="dark" />
              <span className="font-subheading text-sm font-medium text-white/80 min-[1195px]:text-[0.9375rem]">
                Our Process
              </span>
            </div>

            <h2 className="process-copy__title font-heading w-full font-medium text-white max-md:max-w-[362px] max-md:text-[36px] max-md:leading-[47px] max-md:tracking-[-1.5px]">
              A process built backward from your closing date
            </h2>

            <div className="process-copy__stack mt-5 flex flex-col gap-4 max-md:mt-5 max-md:max-w-[367px] max-md:min-h-[156px] min-[1195px]:mt-5 min-[1195px]:gap-4">
              <p className="process-copy__body font-sans font-medium tracking-[-0.25px] text-white/70 max-md:text-[16px] max-md:leading-[26px] max-md:text-[#FFFFFFCC] min-[1353px]:text-[18px] min-[1353px]:leading-[30px]">
                Every defeasance follows a sequence. The challenge is that the
                timing is driven by a transaction with its own closing deadline.
              </p>
              <p className="process-copy__body font-sans font-medium tracking-[-0.25px] text-white/70 max-md:text-[16px] max-md:leading-[26px] max-md:text-[#FFFFFFCC] min-[1353px]:text-[18px] min-[1353px]:leading-[30px]">
                Paragon works backward from that date. Servicer requirements,
                securities structuring, documentation, and approvals are
                addressed before they become urgent. By the time a request
                arrives, the work behind it is already done.
              </p>
            </div>

            <Link
              href="/process"
              className="process-cta btn-hero group mt-8 inline-flex h-[54px] w-[203px] items-center justify-center gap-3 whitespace-nowrap bg-[#31EE97] px-[25px] text-sm font-medium text-paragon-navy opacity-100 transition-[transform,box-shadow,filter] duration-300 hover:scale-[1.02] hover:brightness-105 hover:shadow-[0_8px_30px_rgba(49,238,151,0.25)] max-md:mt-8 min-[1195px]:mt-10 min-[1195px]:text-base"
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
