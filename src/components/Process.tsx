import Link from "next/link";
import ArrowIcon from "@/components/ArrowIcon";
import { CalculatorContent } from "@/components/Calculator";
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
      <div
        className="process-cube-desktop hidden min-[1195px]:block"
        aria-hidden
      />
    </div>
  );
}

export default function Process() {
  return (
    <section className="process-section full-bleed relative z-[3] section-edge-overlap overflow-hidden bg-[#000C22] pb-0">
      <div className="process-shell relative z-[2] isolate mx-auto w-full max-w-[1440px] px-12 pb-24 pt-20 max-md:max-w-[402px] max-md:px-5 max-md:pb-6 max-md:pt-[var(--section-edge-height)]">
        <div className="process-block grid min-w-0 items-center gap-8 max-md:grid-cols-1 min-[768px]:max-[1195px]:grid-cols-2 min-[768px]:max-[1195px]:gap-6 min-[1195px]:grid-cols-2 min-[1195px]:gap-10">
          <div className="process-cube-wrap relative z-[1] max-md:mx-auto min-[768px]:max-[1195px]:order-1 min-[768px]:max-[1195px]:col-start-1 min-[1195px]:justify-self-start">
            <ProcessGraphic />
          </div>

          <div className="process-copy-wrap relative z-[3] min-w-0 max-md:pt-4 min-[768px]:max-[1195px]:order-2 min-[768px]:max-[1195px]:col-start-2 min-[1195px]:pt-6">
            <div className="mb-6 flex items-center gap-2.5 min-[1195px]:mb-8">
              <SectionLabelIcon variant="dark" />
              <span className="font-subheading text-sm font-semibold text-[#B0CCFF] min-[1195px]:text-[0.9375rem]">
                Our process
              </span>
            </div>

            <h2 className="process-copy__title font-heading w-full font-medium text-white max-md:max-w-[362px] max-md:text-[34px] max-md:leading-[45px] max-md:tracking-[-1.5px]">
              <span className="max-md:hidden">
                <span className="block whitespace-nowrap">
                  A process built backward
                </span>
                <span className="block whitespace-nowrap">
                  from your closing date
                </span>
              </span>
              <span className="hidden max-md:block">
                A process built backward from your closing date
              </span>
            </h2>

            <div className="process-copy__stack mt-5 flex flex-col gap-4 max-md:mt-5 max-md:max-w-[367px] max-md:min-h-[156px] min-[1195px]:mt-5 min-[1195px]:gap-4">
              <p className="process-copy__body font-sans font-medium tracking-[-0.25px] text-white/70 max-md:text-[16px] max-md:leading-[26px] max-md:text-[#FFFFFFCC]">
                <span className="process-copy__body-locked hidden min-[1195px]:block">
                  <span className="block whitespace-nowrap">
                    Every defeasance follows a sequence. The challenge is that
                    the timing is
                  </span>
                  <span className="block whitespace-nowrap">
                    driven by a transaction with its own closing deadline.
                  </span>
                </span>
                <span className="process-copy__body-tablet hidden min-[768px]:max-[1194px]:block">
                  <span className="block whitespace-nowrap">
                    Every defeasance follows a sequence. The challenge is that
                    the timing
                  </span>
                  <span className="block whitespace-nowrap">
                    is driven by a transaction with its own closing deadline.
                  </span>
                </span>
                <span className="min-[768px]:hidden">
                  Every defeasance follows a sequence. The challenge is that the
                  timing is driven by a transaction with its own closing
                  deadline.
                </span>
              </p>
              <p className="process-copy__body font-sans font-medium tracking-[-0.25px] text-white/70 max-md:text-[16px] max-md:leading-[26px] max-md:text-[#FFFFFFCC]">
                <span className="process-copy__body-locked hidden min-[1195px]:block">
                  <span className="block whitespace-nowrap">
                    Paragon works backward from that date. Servicer
                    requirements, securities
                  </span>
                  <span className="block whitespace-nowrap">
                    structuring, documentation, and approvals are addressed
                    before they
                  </span>
                  <span className="block whitespace-nowrap">
                    become urgent. By the time a request arrives, the work
                    behind it is already
                  </span>
                  <span className="block whitespace-nowrap">done.</span>
                </span>
                <span className="process-copy__body-tablet hidden min-[768px]:max-[1194px]:block">
                  <span className="block whitespace-nowrap">
                    Paragon works backward from that date. Servicer
                    requirements,
                  </span>
                  <span className="block whitespace-nowrap">
                    securities structuring, documentation, and approvals are
                    addressed
                  </span>
                  <span className="block whitespace-nowrap">
                    before they become urgent. By the time a request arrives,
                    the work
                  </span>
                  <span className="block whitespace-nowrap">
                    behind it is already done.
                  </span>
                </span>
                <span className="min-[768px]:hidden">
                  Paragon works backward from that date. Servicer requirements,
                  securities structuring, documentation, and approvals are
                  addressed before they become urgent. By the time a request
                  arrives, the work behind it is already done.
                </span>
              </p>
            </div>

            <Link
              href="/process"
              className="process-cta btn-hero group mt-8 inline-flex h-[54px] w-[203px] items-center justify-center gap-3 whitespace-nowrap bg-[#31EE97] px-[25px] text-sm font-semibold text-paragon-navy opacity-100 transition-[transform,box-shadow,filter] duration-300 hover:scale-[1.02] hover:brightness-105 hover:shadow-[0_8px_30px_rgba(49,238,151,0.25)] max-md:mt-8 min-[1195px]:mt-10 min-[1195px]:text-base"
            >
              See Our Process
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>

      <CalculatorContent />
    </section>
  );
}
