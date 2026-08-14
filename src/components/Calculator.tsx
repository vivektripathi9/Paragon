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

type EstimateDates = {
  closing: string;
  ratesAsOf: string;
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

/** Always relative to "now" — Closing = +30d, Rates As Of = +21d. No hardcoded dates. */
function getCalculatorEstimateDates(from: Date = new Date()): EstimateDates {
  return {
    closing: formatMdY(addDays(from, 30)),
    ratesAsOf: formatMdY(addDays(from, 21)),
  };
}

function msUntilNextLocalMidnight(from: Date = new Date()) {
  const next = new Date(from);
  next.setHours(24, 0, 0, 0);
  return Math.max(1000, next.getTime() - from.getTime());
}

function useEstimateDates() {
  const [dates, setDates] = useState<EstimateDates>({
    closing: "",
    ratesAsOf: "",
  });

  useEffect(() => {
    const refresh = () => setDates(getCalculatorEstimateDates());
    refresh();

    // Roll forward at local midnight so a long-lived tab stays current
    let midnightTimer: ReturnType<typeof setTimeout>;
    const scheduleMidnight = () => {
      midnightTimer = setTimeout(() => {
        refresh();
        scheduleMidnight();
      }, msUntilNextLocalMidnight());
    };
    scheduleMidnight();

    // Fallback if the tab slept through midnight
    const onVisible = () => {
      if (document.visibilityState === "visible") refresh();
    };
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      clearTimeout(midnightTimer);
      document.removeEventListener("visibilitychange", onVisible);
    };
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
      <div className="calculator-block grid min-w-0 items-center gap-10 max-md:grid-cols-1 max-md:gap-6 min-[768px]:max-[1195px]:grid-cols-2 min-[768px]:max-[1195px]:gap-6 min-[1195px]:grid-cols-2 min-[1195px]:gap-10">
        <div className="calculator-copy-wrap relative z-[3] min-w-0 max-md:order-2 min-[768px]:max-[1195px]:order-1 min-[768px]:max-[1195px]:col-start-1 min-[1195px]:order-1">
          <div className="mb-6 flex items-center gap-2.5 min-[1195px]:mb-8">
            <SectionLabelIcon variant="dark" />
            <span className="font-subheading text-sm font-semibold text-[#B0CCFF] min-[1195px]:text-[0.9375rem]">
              Calculator
            </span>
          </div>

          <h2 className="calculator-copy__title font-heading w-full font-medium text-white max-[768px]:max-w-[362px] max-[768px]:text-[34px] max-[768px]:leading-[45px] max-[768px]:!tracking-[-1.5px]">
            Estimate defeasance cost
          </h2>

          <div className="calculator-copy__stack mt-5 flex w-full flex-col gap-6 min-[1195px]:mt-6 min-[1195px]:gap-6">
            <p className="calculator-copy__body font-sans font-medium tracking-[-0.25px] text-white/70">
              <span className="calculator-copy__body-locked hidden min-[1195px]:block">
                <span className="block whitespace-nowrap">
                  Paragon&apos;s calculator pulls your loan data from
                  Trepp&apos;s market-leading
                </span>
                <span className="block whitespace-nowrap">
                  commercial real estate loan database so you can weigh the cost
                  of
                </span>
                <span className="block whitespace-nowrap">
                  defeasance or prepayment against the economics of your sale,
                  refinance,
                </span>
                <span className="block whitespace-nowrap">
                  or recapitalization.
                </span>
              </span>
              <span className="hidden min-[768px]:max-[1194px]:block">
                Paragon&apos;s calculator pulls your loan data from Trepp&apos;s
                market-leading commercial real estate loan database so you can
                weigh the cost of defeasance or prepayment against the economics
                of your sale, refinance, or recapitalization.
              </span>
              <span className="min-[768px]:hidden">
                Paragon&apos;s calculator pulls your loan data from Trepp&apos;s
                market-leading commercial real estate loan database so you can
                weigh the cost of defeasance or prepayment against the economics
                of your sale, refinance, or recapitalization.
              </span>
            </p>
            <p className="calculator-copy__body font-sans font-medium tracking-[-0.25px] text-white/70">
              <span className="calculator-copy__body-locked hidden min-[1195px]:block">
                <span className="block whitespace-nowrap">
                  Save your estimate, compare scenarios, and share results with
                  your counsel
                </span>
                <span className="block whitespace-nowrap">
                  or deal team through the Paragon portal.
                </span>
              </span>
              <span className="hidden min-[768px]:max-[1194px]:block">
                Save your estimate, compare scenarios, and share results with
                your counsel or deal team through the Paragon portal.
              </span>
              <span className="min-[768px]:hidden">
                Save your estimate, compare scenarios, and share results with
                your counsel or deal team through the Paragon portal.
              </span>
            </p>
          </div>

          <Link
            href="/calculator"
            className="calculator-cta btn-hero group mt-8 inline-flex h-[54px] w-[216px] items-center justify-center gap-3 whitespace-nowrap bg-[#31EE97] px-[25px] text-sm font-semibold text-paragon-navy opacity-100 transition-[transform,box-shadow,filter] duration-300 hover:scale-[1.02] hover:brightness-105 hover:shadow-[0_8px_30px_rgba(49,238,151,0.25)] max-md:mt-8 min-[1195px]:mt-10 min-[1195px]:text-base"
          >
            Run the Calculator
            <ArrowIcon />
          </Link>
        </div>

        <div className="calculator-cube-wrap relative z-[1] flex w-full min-w-0 justify-center max-md:order-1 min-[768px]:max-[1195px]:order-2 min-[768px]:max-[1195px]:col-start-2 min-[1195px]:order-2 min-[1195px]:justify-end">
          <CalculatorCard />
        </div>
      </div>
    </div>
  );
}
