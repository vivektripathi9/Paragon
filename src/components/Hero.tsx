import Image from "next/image";
import Link from "next/link";
import SectionEdge from "@/components/SectionEdge";
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

function HeroBottomEdge() {
  return <SectionEdge variant="hero-bottom" className="z-20" />;
}

export default function Hero() {
  return (
    <section className="full-bleed relative h-[894px] overflow-hidden bg-[#04143c]">
      <Image
        src="/hero-background.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="z-0 object-cover object-center"
      />
      <div className="hero-bg-grain" aria-hidden />

      <div className="relative z-10 mx-auto h-full w-full max-w-[1440px] px-5 pt-20 sm:px-6 sm:pt-24 lg:px-0 lg:pt-0">
        <div className="lg:pl-12 lg:pt-36">
          <div className="font-subheading mb-6 flex items-center gap-2.5 text-sm font-medium text-white/80 lg:mb-8 lg:text-base">
            <SectionLabelIcon variant="dark" />
            <span>Paragon Loan Advisors</span>
          </div>

          <h1 className="font-heading w-full max-w-[737px] text-[1.75rem] font-medium leading-[1.18] tracking-[-1px] text-white sm:text-[2.25rem] sm:leading-[1.15] sm:tracking-[-2px] lg:h-[210px] lg:w-[737px] lg:text-[62px] lg:leading-[73px] lg:tracking-[-3px]">
            <span className="lg:whitespace-nowrap">Defeasance is not the deal.</span>
            <br />
            It&apos;s the step that makes the deal{" "}
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-[1]">possible.</span>
              <span
                className="absolute bottom-0.5 left-0 z-0 h-2 w-full bg-[#31EE97]"
                aria-hidden
              />
            </span>
          </h1>
        </div>

        <div className="mt-8 flex flex-col gap-6 sm:mt-10 lg:absolute lg:left-12 lg:top-[579px] lg:mt-0 lg:h-[120px] lg:w-[1352px] lg:flex-row lg:items-center lg:justify-between">
          <p className="w-full max-w-[709px] shrink-0 font-sans text-[0.9375rem] font-medium leading-[30px] tracking-[-0.25px] text-[#FFFFFFCC] lg:h-[120px] lg:w-[709px] lg:text-[18px]">
            When you are closing a sale, executing a refinance, or repositioning
            a portfolio, defeasance is often the final requirement standing
            between you and the transaction you actually care about. Paragon
            manages those moving parts so you can stay focused on the
            transaction itself.
          </p>

          <div className="flex shrink-0 flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/calculator"
              className="btn-hero group inline-flex items-center justify-center gap-2 bg-[#31EE97] px-6 py-3.5 text-sm font-medium text-paragon-navy transition-[transform,box-shadow,filter] duration-300 hover:scale-[1.02] hover:brightness-105 hover:shadow-[0_8px_30px_rgba(49,238,151,0.25)] sm:text-base"
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
