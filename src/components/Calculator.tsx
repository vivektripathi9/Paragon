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
    <div className="calculator-shell relative z-[2] isolate mx-auto w-full max-w-[1440px] px-12 pb-[calc(7rem+var(--section-edge-height))] pt-12 max-md:max-w-[402px] max-md:px-5 max-md:pb-[calc(6rem+var(--section-edge-height))] max-md:pt-6">
      <div className="calculator-block grid min-w-0 items-center gap-10 max-md:grid-cols-1 max-md:gap-6 min-[1195px]:grid-cols-2 min-[1195px]:gap-10">
        <div className="relative z-[3] min-w-0 max-md:order-2 min-[1195px]:order-1">
          <div className="mb-6 flex items-center gap-2.5 min-[1195px]:mb-8">
            <SectionLabelIcon variant="dark" />
            <span className="font-subheading text-sm font-medium text-white/80 min-[1195px]:text-[0.9375rem]">
              Calculator
            </span>
          </div>

          <h2 className="calculator-copy__title font-heading w-full font-medium text-white">
            Estimate defeasance cost
          </h2>

          <div className="calculator-copy__stack mt-5 flex w-full flex-col gap-6 min-[1195px]:mt-6 min-[1195px]:gap-6">
            <p className="calculator-copy__body font-sans font-medium tracking-[-0.25px] text-white/70 min-[1195px]:text-[18px] min-[1195px]:leading-[30px]">
              Paragon&apos;s calculator pulls your loan data from Trepp&apos;s
              market-leading commercial real estate loan database so you can
              weigh the cost of defeasance or prepayment against the economics
              of your sale, refinance, or recapitalization.
            </p>
            <p className="calculator-copy__body font-sans font-medium tracking-[-0.25px] text-white/70 min-[1195px]:text-[18px] min-[1195px]:leading-[30px]">
              Save your estimate, compare scenarios, and share results with your
              counsel or deal team through the Paragon portal.
            </p>
          </div>

          <Link
            href="/calculator"
            className="calculator-cta btn-hero group mt-8 inline-flex h-[54px] w-[216px] items-center justify-center gap-3 whitespace-nowrap bg-[#31EE97] px-[25px] text-sm font-medium text-paragon-navy opacity-100 transition-[transform,box-shadow,filter] duration-300 hover:scale-[1.02] hover:brightness-105 hover:shadow-[0_8px_30px_rgba(49,238,151,0.25)] max-md:mt-8 min-[1195px]:mt-10 min-[1195px]:text-base"
          >
            Run the Calculator
            <ArrowIcon />
          </Link>
        </div>

        <div className="calculator-cube-wrap relative z-[1] flex w-full min-w-0 justify-center max-md:order-1 min-[1195px]:order-2 min-[1195px]:justify-end">
          <CalculatorCard />
        </div>
      </div>
    </div>
  );
}
