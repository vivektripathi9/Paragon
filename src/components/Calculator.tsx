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

function CalculatorCard() {
  return (
    <div className="calculator-cube">
      <div className="calculator-cube__frame" aria-hidden />
      <div className="calculator-cube__card">
        <Image
          src="/report-defeasance-estimate.png"
          alt="Sample defeasance estimate report showing securities cost, fees, and total cost"
          width={478}
          height={405}
          className="h-full w-full object-cover opacity-100"
          priority
        />
      </div>
    </div>
  );
}

export function CalculatorContent() {
  return (
    <div className="relative z-[2] mx-auto w-full max-w-[1440px] px-12 pb-32 pt-12 max-lg:max-w-[402px] max-lg:px-5 max-lg:pb-28 max-lg:pt-6">
      <div className="grid items-center gap-10 max-lg:grid-cols-1 max-lg:gap-6 lg:grid-cols-2 lg:gap-10">
        <div className="max-lg:order-2 lg:order-1">
          <div className="mb-6 flex items-center gap-2.5 lg:mb-8">
            <SectionLabelIcon variant="dark" />
            <span className="font-subheading text-sm font-medium text-white/80 lg:text-[0.9375rem]">
              Calculator
            </span>
          </div>

          <h2 className="font-heading w-full max-w-[680px] text-[1.75rem] font-medium leading-[1.2] tracking-[-1px] text-white sm:text-[2.25rem] sm:tracking-[-1.5px] lg:h-[70px] lg:w-[680px] lg:text-[54px] lg:leading-[70px] lg:tracking-[-2px]">
            Estimate defeasance cost
          </h2>

          <div className="mt-5 flex w-full max-w-[680px] flex-col gap-6 sm:mt-6 lg:h-[204px] lg:w-[680px] lg:gap-6">
            <p className="font-sans text-[0.9375rem] font-medium leading-[1.65] tracking-[-0.25px] text-white/70 lg:text-[18px] lg:leading-[30px]">
              Paragon&apos;s calculator pulls your loan data from Trepp&apos;s
              market-leading commercial real estate loan database so you can
              weigh the cost of defeasance or prepayment against the economics
              of your sale, refinance, or recapitalization.
            </p>
            <p className="font-sans text-[0.9375rem] font-medium leading-[1.65] tracking-[-0.25px] text-white/70 lg:text-[18px] lg:leading-[30px]">
              Save your estimate, compare scenarios, and share results with your
              counsel or deal team through the Paragon portal.
            </p>
          </div>

          <Link
            href="/calculator"
            className="btn-hero group mt-8 inline-flex h-[54px] w-[216px] items-center justify-center gap-3 bg-[#31EE97] px-[25px] text-sm font-medium text-paragon-navy opacity-100 transition-[transform,box-shadow,filter] duration-300 hover:scale-[1.02] hover:brightness-105 hover:shadow-[0_8px_30px_rgba(49,238,151,0.25)] sm:mt-10 sm:text-base"
          >
            Run the Calculator
            <ArrowIcon />
          </Link>
        </div>

        <div className="calculator-cube-wrap flex w-full justify-center max-lg:order-1 lg:order-2 lg:justify-end">
          <CalculatorCard />
        </div>
      </div>
    </div>
  );
}
