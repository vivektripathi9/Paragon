import Link from "next/link";

function SectionLabelIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <path d="M2 12L5.5 4L9 12H2Z" fill="#5D87FF" />
      <path d="M5.5 12L9 4L12.5 12H5.5Z" fill="#5D87FF" opacity="0.65" />
    </svg>
  );
}

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
    <div className="flex items-baseline justify-between gap-4">
      <span
        className={
          primary
            ? "text-sm font-semibold text-white sm:text-[0.9375rem]"
            : "text-xs text-white/55 sm:text-sm"
        }
      >
        {label}
      </span>
      <span
        className={`shrink-0 tabular-nums ${
          primary
            ? "text-sm font-semibold text-white sm:text-[0.9375rem]"
            : "text-xs text-white sm:text-sm"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

function CalculatorCard() {
  return (
    <div className="calculator-cube relative ml-auto w-full max-w-[17rem] sm:max-w-[18rem] lg:max-w-[20rem]">
      <div className="absolute -left-4 bottom-0 right-[10%] top-[8%] translate-y-16 border-[clamp(12px,2.8vw,18px)] border-[#eef1f6] sm:-left-5 sm:translate-y-[4.5rem]" />
      <div className="relative ml-[10%] w-[90%] bg-gradient-to-br from-[#0a1931] via-[#123a7a] to-[#3b6eff] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.45)] sm:p-6">
        <div className="space-y-4">
          <div className="space-y-2">
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
          <div className="space-y-2">
            <CostRow label="Third-Party Fees" value="$46,700" primary />
            <CostRow label="Closing Date:" value="07/08/2026" />
            <CostRow label="Rates As Of" value="06/16/2026" />
          </div>
        </div>
        <div className="mt-5 border-t border-white/20 pt-4">
          <div className="flex items-baseline justify-between gap-4">
            <span className="text-base font-semibold text-white sm:text-lg">
              Total Cost
            </span>
            <span className="text-base font-semibold tabular-nums text-white sm:text-lg">
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
    <div className="relative z-[2] mx-auto w-full max-w-[1440px] px-6 pb-24 pt-8 lg:px-12 lg:pb-32 lg:pt-12">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="lg:order-1">
            <div className="mb-6 flex items-center gap-2.5 lg:mb-8">
              <SectionLabelIcon />
              <span className="font-subheading text-sm font-medium text-white/80 lg:text-[0.9375rem]">
                Calculator
              </span>
            </div>

            <h2 className="text-[1.75rem] font-bold leading-[1.15] tracking-tight text-white sm:text-[2.25rem] lg:text-[2.75rem] lg:leading-[1.12]">
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

          <div className="flex justify-end lg:order-2">
            <CalculatorCard />
          </div>
        </div>
    </div>
  );
}
