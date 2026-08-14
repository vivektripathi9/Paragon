"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ArrowIcon from "@/components/ArrowIcon";
import SectionLabelIcon from "@/components/SectionLabelIcon";

type CostRowProps = {
  label: string;
  value: string;
  variant?: "primary" | "secondary" | "total";
};

function formatMdY(date: Date) {
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const yyyy = String(date.getFullYear());
  return `${mm}/${dd}/${yyyy}`;
}

function addDays(from: Date, days: number) {
  const date = new Date(from);
  date.setHours(12, 0, 0, 0);
  date.setDate(date.getDate() + days);
  return date;
}

function useEstimateDates() {
  const [dates, setDates] = useState({
    closing: "",
    ratesAsOf: "",
  });

  useEffect(() => {
    const today = new Date();
    setDates({
      closing: formatMdY(addDays(today, 30)),
      ratesAsOf: formatMdY(addDays(today, 21)),
    });
  }, []);

  return dates;
}

function CostRow({ label, value, variant = "secondary" }: CostRowProps) {
  return (
    <div className={`calculator-cube__row calculator-cube__row--${variant}`}>
      <span className="calculator-cube__label">{label}</span>
      <span className="calculator-cube__value">{value}</span>
    </div>
  );
}

function CalculatorCard() {
  const { closing, ratesAsOf } = useEstimateDates();

  return (
    <div className="calculator-cube">
      <div className="calculator-cube__frame" aria-hidden />
      <div
        className="calculator-cube__card"
        role="img"
        aria-label="Sample defeasance estimate report showing securities cost, fees, and total cost"
      >
        <div className="calculator-cube__body">
          <div className="calculator-cube__group">
            <CostRow
              label="Securities Cost"
              value="$22,751,526"
              variant="primary"
            />
            <CostRow label="Loan Balance at Defeasance" value="$22,564,320" />
            <CostRow label="Defeasance Penalty" value="$187,206" />
          </div>

          <div className="calculator-cube__group">
            <CostRow
              label="Third-Party Fees"
              value="$46,700"
              variant="primary"
            />
            <CostRow
              label="Closing Date"
              value={closing || "\u00a0"}
            />
            <CostRow
              label="Rates As Of"
              value={ratesAsOf || "\u00a0"}
            />
          </div>
        </div>

        <div className="calculator-cube__footer">
          <CostRow label="Total Cost" value="$22,808,226" variant="total" />
        </div>
      </div>
    </div>
  );
}

export function CalculatorContent() {
  return (
    <div className="calculator-shell relative z-[2] isolate mx-auto w-full max-w-[1440px] px-12 pb-[calc(7rem+var(--section-edge-height))] pt-12 max-md:max-w-[402px] max-md:px-5 max-md:pb-[calc(6rem+var(--section-edge-height))] max-md:pt-6">
      <div className="calculator-block grid min-w-0 items-center gap-10 max-md:grid-cols-1 max-md:gap-6 min-[768px]:max-[1199px]:grid-cols-2 min-[768px]:max-[1199px]:gap-6 min-[1200px]:grid-cols-2 min-[1200px]:gap-10">
        <div className="calculator-copy-wrap relative z-[3] min-w-0 max-md:order-2 min-[768px]:max-[1199px]:order-1 min-[768px]:max-[1199px]:col-start-1 min-[1200px]:order-1">
          <div className="mb-6 flex items-center gap-2.5 min-[1200px]:mb-8">
            <SectionLabelIcon variant="dark" />
            <span className="font-subheading text-sm font-semibold text-[#B0CCFF] min-[1200px]:text-[0.9375rem]">
              Calculator
            </span>
          </div>

          <h2 className="calculator-copy__title font-heading w-full font-medium text-white max-[768px]:max-w-[362px] max-[768px]:text-[34px] max-[768px]:leading-[45px] max-[768px]:!tracking-[-1.5px]">
            Estimate defeasance cost
          </h2>

          <div className="calculator-copy__stack mt-5 flex w-full flex-col gap-6 min-[1200px]:mt-6 min-[1200px]:gap-6">
            <p className="calculator-copy__body font-sans font-medium tracking-[-0.25px] text-white/70 min-[1353px]:text-[18px] min-[1353px]:leading-[30px]">
              Paragon&apos;s calculator pulls your loan data from Trepp&apos;s
              market-leading commercial real estate loan database so you can
              weigh the cost of defeasance or prepayment against the economics
              of your sale, refinance, or recapitalization.
            </p>
            <p className="calculator-copy__body font-sans font-medium tracking-[-0.25px] text-white/70 min-[1353px]:text-[18px] min-[1353px]:leading-[30px]">
              Save your estimate, compare scenarios, and share results with your
              counsel or deal team through the Paragon portal.
            </p>
          </div>

          <Link
            href="/calculator"
            className="calculator-cta btn-hero group mt-8 inline-flex h-[54px] w-[216px] items-center justify-center gap-3 whitespace-nowrap bg-[#31EE97] px-[25px] text-sm font-semibold text-paragon-navy opacity-100 transition-[transform,box-shadow,filter] duration-300 hover:scale-[1.02] hover:brightness-105 hover:shadow-[0_8px_30px_rgba(49,238,151,0.25)] max-md:mt-8 min-[1200px]:mt-10 min-[1200px]:text-base"
          >
            Run the Calculator
            <ArrowIcon />
          </Link>
        </div>

        <div className="calculator-cube-wrap relative z-[1] flex w-full min-w-0 justify-center max-md:order-1 min-[768px]:max-[1199px]:order-2 min-[768px]:max-[1199px]:col-start-2 min-[1200px]:order-2 min-[1200px]:justify-end">
          <CalculatorCard />
        </div>
      </div>
    </div>
  );
}
