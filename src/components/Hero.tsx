import Link from "next/link";
import HeroDecor from "@/components/HeroDecor";
import SectionEdge from "@/components/SectionEdge";

function ParagonIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <path d="M2 14L6 4L10 14H2Z" fill="#5D87FF" opacity="0.9" />
      <path d="M6 14L10 4L14 14H6Z" fill="#5D87FF" opacity="0.65" />
      <path d="M10 14L14 4L18 14H10Z" fill="#5D87FF" opacity="0.4" />
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

function HeroBottomEdge() {
  return <SectionEdge variant="hero-bottom" className="z-20" />;
}

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#021132]">
      <HeroDecor />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] flex-col justify-center px-6 pb-20 pt-28 lg:px-12 lg:pb-24 lg:pt-32">
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <div className="font-subheading mb-6 flex items-center gap-2 text-sm font-medium text-white/80 lg:mb-8 lg:text-base">
              <ParagonIcon />
              <span>Paragon Loan Advisors</span>
            </div>

            <h1 className="max-w-3xl text-[2rem] font-normal leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
              Defeasance is not the deal.
              <br />
              It&apos;s the step that makes the deal{" "}
              <span className="relative inline-block whitespace-nowrap">
                possible.
                <span
                  className="absolute -bottom-1 left-0 h-1 w-full bg-paragon-green"
                  aria-hidden
                />
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:mt-8 sm:text-lg lg:mt-10">
              When you are closing a sale, executing a refinance, or repositioning
              a portfolio, defeasance is often the final requirement standing
              between you and the transaction you actually care about. Paragon
              manages those moving parts so you can stay focused on the
              transaction itself.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center lg:col-span-5 lg:justify-end">
            <Link
              href="/calculator"
              className="btn-hero group inline-flex items-center justify-center gap-2 bg-paragon-green px-6 py-3.5 text-sm font-medium text-paragon-navy transition-[transform,box-shadow,filter] duration-300 hover:scale-[1.02] hover:brightness-105 hover:shadow-[0_8px_30px_rgba(62,232,197,0.25)] sm:text-base"
            >
              Estimate Your Costs
              <ArrowIcon />
            </Link>
            <Link
              href="/contact"
              className="btn-hero inline-flex items-center justify-center bg-white px-6 py-3.5 text-sm font-medium text-paragon-navy transition-[transform,box-shadow,filter] duration-300 hover:scale-[1.02] hover:brightness-95 hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)] sm:text-base"
            >
              Talk to Paragon
            </Link>
          </div>
        </div>
      </div>

      <HeroBottomEdge />
    </section>
  );
}
