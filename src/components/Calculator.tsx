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

function CostRow({
  label,
  value,
  primary = false,
}: {
  label: string;
  value: string;
  primary?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between gap-2">
      <span
        className={
          primary
            ? "min-w-0 flex-1 pr-2 text-[0.625rem] font-semibold leading-snug text-white sm:text-[0.6875rem] lg:text-xs"
            : "min-w-0 flex-1 pr-2 text-[0.5625rem] leading-snug text-white/55 sm:text-[0.625rem] lg:text-[0.6875rem]"
        }
      >
        {label}
      </span>
      <span
        className={`shrink-0 text-right tabular-nums ${
          primary
            ? "text-[0.5625rem] font-semibold text-white sm:text-[0.625rem] lg:text-xs"
            : "text-[0.5625rem] text-white sm:text-[0.625rem] lg:text-[0.6875rem]"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

function CalculatorCard() {
  return (
    <div className="calculator-cube">
      <div className="calculator-cube__frame" aria-hidden />
      <div className="calculator-cube__card">
        <div className="space-y-2 sm:space-y-2.5">
          <div className="space-y-1 sm:space-y-1.5">
            <CostRow
              label="Securities Cost"
              value="$22,751,526"
              primary
            />
            <CostRow
              label="Loan Balance at Defeasance"
              value="$22,564,320"
            />
            <CostRow label="Defeasance Penalty" value="$187,206" />
          </div>
          <div className="space-y-1 sm:space-y-1.5">
            <CostRow label="Third-Party Fees" value="$46,700" primary />
            <CostRow label="Closing Date:" value="07/08/2026" />
            <CostRow label="Rates As Of" value="06/16/2026" />
          </div>
        </div>
        <div className="mt-3 border-t border-white/20 pt-2.5 sm:mt-3.5 sm:pt-3">
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-xs font-semibold text-white sm:text-sm lg:text-[0.9375rem]">
              Total Cost
            </span>
            <span className="text-xs font-semibold tabular-nums text-white sm:text-sm lg:text-[0.9375rem]">
              $22,808,226
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CalculatorContent() {
  return (
    <div className="relative z-[2] mx-auto w-full max-w-[1440px] px-5 pb-16 pt-8 sm:px-6 lg:px-12 lg:pb-32 lg:pt-12">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-10">
          <div className="lg:order-1">
            <div className="mb-6 flex items-center gap-2.5 lg:mb-8">
              <SectionLabelIcon variant="dark" />
              <span className="font-subheading text-sm font-medium text-white/80 lg:text-[0.9375rem]">
                Calculator
              </span>
            </div>

            <h2 className="text-[1.75rem] font-normal leading-[1.15] text-white sm:text-[2.25rem] lg:text-[2.75rem] lg:leading-[1.12]">
              Estimate defeasance cost
            </h2>

            <p className="mt-5 text-[0.9375rem] leading-[1.65] text-white/70 lg:mt-6 lg:text-base lg:leading-[1.7]">
              Paragon&apos;s calculator pulls your loan data from Trepp&apos;s
              market-leading commercial real estate loan database so you can
              weigh the cost of defeasance or prepayment against the economics
              of your sale, refinance, or recapitalization.
            </p>
            <p className="mt-4 text-[0.9375rem] leading-[1.65] text-white/70 lg:text-base lg:leading-[1.7]">
              Save your estimate, compare scenarios, and share results with your
              counsel or deal team through the Paragon portal.
            </p>

            <Link
              href="/calculator"
              className="btn-hero group mt-8 inline-flex items-center justify-center gap-2 bg-paragon-green px-6 py-3.5 text-sm font-medium text-paragon-navy transition-[transform,box-shadow,filter] duration-300 hover:scale-[1.02] hover:brightness-105 hover:shadow-[0_8px_30px_rgba(62,232,197,0.25)] sm:mt-10 sm:text-base"
            >
              Run the Calculator
              <ArrowIcon />
            </Link>
          </div>

          <div className="calculator-cube-wrap flex w-full justify-center lg:order-2 lg:justify-end">
            <CalculatorCard />
          </div>
        </div>
    </div>
  );
}
