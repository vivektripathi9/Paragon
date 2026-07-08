import Link from "next/link";
import ArrowIcon from "@/components/ArrowIcon";
import SectionLabelIcon from "@/components/SectionLabelIcon";

function CalculatorCard() {
  return (
    <div className="calculator-cube">
      <img
        src="/calculator-mobile.svg"
        alt="Sample defeasance estimate report showing securities cost, fees, and total cost"
        width={311}
        height={277}
        className="calculator-cube-mobile mx-auto h-[277.24px] w-[311.28px] object-contain opacity-100 max-md:block md:hidden"
      />
      <img
        src="/icons/calculator-tablet.svg"
        alt="Sample defeasance estimate report showing securities cost, fees, and total cost"
        width={439}
        height={391}
        className="calculator-cube-tablet mx-auto hidden h-auto w-full max-w-full object-contain opacity-100 md:max-[1194px]:block min-[1195px]:hidden"
      />
      <div className="calculator-cube-desktop hidden min-[1195px]:block">
        <div className="calculator-cube__frame" aria-hidden />
        <div className="calculator-cube__card">
          <img
            src="/report-defeasance-estimate.svg"
            alt="Sample defeasance estimate report showing securities cost, fees, and total cost"
            width={357}
            height={299}
            className="h-full w-full object-cover opacity-100"
          />
        </div>
      </div>
    </div>
  );
}

export function CalculatorContent() {
  return (
    <div className="relative z-[2] isolate mx-auto w-full max-w-[1440px] px-12 pb-[calc(7rem+var(--section-edge-height))] pt-12 max-md:max-w-[402px] max-md:px-5 max-md:pb-[calc(6rem+var(--section-edge-height))] max-md:pt-6 md:max-[1194px]:px-8 md:max-[1194px]:pb-[calc(4rem+var(--section-edge-height))] md:max-[1194px]:pt-8">
      <div className="grid min-w-0 items-center gap-10 max-md:grid-cols-1 max-md:gap-6 md:max-[1194px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:max-[1194px]:gap-6 min-[1195px]:grid-cols-2 min-[1195px]:gap-10">
        <div className="relative z-[3] min-w-0 max-md:order-2 md:max-[1194px]:order-1 md:max-[1194px]:w-full md:max-[1194px]:max-w-full min-[1195px]:order-1">
          <div className="mb-6 flex items-center gap-2.5 md:max-[1194px]:mb-4 min-[1195px]:mb-8">
            <SectionLabelIcon variant="dark" />
            <span className="font-subheading text-sm font-medium text-white/80 min-[1195px]:text-[0.9375rem]">
              Calculator
            </span>
          </div>

          <h2 className="font-heading w-full max-w-[680px] text-[1.75rem] font-medium leading-[1.2] tracking-[-1px] text-white sm:text-[2.25rem] sm:tracking-[-1.5px] md:max-[1194px]:h-auto md:max-[1194px]:w-full md:max-[1194px]:max-w-full md:max-[1194px]:text-[32px] md:max-[1194px]:font-medium md:max-[1194px]:leading-[44px] md:max-[1194px]:tracking-[-1.25px] min-[1195px]:h-[70px] min-[1195px]:w-[680px] min-[1195px]:text-[54px] min-[1195px]:leading-[70px] min-[1195px]:tracking-[-2px]">
            Estimate defeasance cost
          </h2>

          <div className="mt-5 flex w-full max-w-[680px] flex-col gap-6 sm:mt-6 md:max-[1194px]:mt-4 md:max-[1194px]:w-full md:max-[1194px]:max-w-full md:max-[1194px]:min-h-0 md:max-[1194px]:gap-3 min-[1195px]:mt-6 min-[1195px]:h-[204px] min-[1195px]:w-[680px] min-[1195px]:gap-6">
            <p className="font-sans text-[0.9375rem] font-medium leading-[1.65] tracking-[-0.25px] text-white/70 md:max-[1194px]:text-[14px] md:max-[1194px]:font-medium md:max-[1194px]:leading-[21px] md:max-[1194px]:tracking-[-0.18px] md:max-[1194px]:text-[#FFFFFFCC] min-[1195px]:text-[18px] min-[1195px]:leading-[30px] min-[1195px]:text-white/70">
              Paragon&apos;s calculator pulls your loan data from Trepp&apos;s
              market-leading commercial real estate loan database so you can
              weigh the cost of defeasance or prepayment against the economics
              of your sale, refinance, or recapitalization.
            </p>
            <p className="font-sans text-[0.9375rem] font-medium leading-[1.65] tracking-[-0.25px] text-white/70 md:max-[1194px]:text-[14px] md:max-[1194px]:font-medium md:max-[1194px]:leading-[21px] md:max-[1194px]:tracking-[-0.18px] md:max-[1194px]:text-[#FFFFFFCC] min-[1195px]:text-[18px] min-[1195px]:leading-[30px] min-[1195px]:text-white/70">
              Save your estimate, compare scenarios, and share results with your
              counsel or deal team through the Paragon portal.
            </p>
          </div>

          <Link
            href="/calculator"
            className="btn-hero group mt-8 inline-flex h-[54px] w-[216px] items-center justify-center gap-3 whitespace-nowrap bg-[#31EE97] px-[25px] text-sm font-medium text-paragon-navy opacity-100 transition-[transform,box-shadow,filter] duration-300 hover:scale-[1.02] hover:brightness-105 hover:shadow-[0_8px_30px_rgba(49,238,151,0.25)] md:max-[1194px]:mt-6 min-[1195px]:mt-10 min-[1195px]:text-base"
          >
            Run the Calculator
            <ArrowIcon />
          </Link>
        </div>

        <div className="calculator-cube-wrap relative z-[1] flex w-full min-w-0 justify-center max-md:order-1 md:max-[1194px]:order-2 md:max-[1194px]:max-w-full min-[1195px]:order-2 min-[1195px]:justify-end">
          <CalculatorCard />
        </div>
      </div>
    </div>
  );
}
