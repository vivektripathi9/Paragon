import Image from "next/image";
import Link from "next/link";
import HeroMotionOverlay from "@/components/HeroMotionOverlay";
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
    <section className="full-bleed relative h-[894px] overflow-hidden bg-[#04143c] max-lg:h-[852px]">
      <div
        className="pointer-events-none absolute left-1/2 top-0 z-0 max-lg:block max-lg:-translate-x-1/2 lg:hidden"
        aria-hidden
      >
        <Image
          src="/hero-background-mobile.png"
          alt=""
          width={402}
          height={544}
          priority
          className="h-[544px] w-[402px] max-w-none"
        />
      </div>
      <div className="absolute inset-0 z-0 hidden lg:block" aria-hidden>
        <Image
          src="/hero-background.png"
          alt=""
          fill
          priority
          sizes="(max-width: 1440px) 100vw, 1440px"
          className="object-cover object-center"
        />
      </div>
      <div className="hero-bg-shimmer pointer-events-none absolute inset-0 z-[1]" aria-hidden />
      <div className="hero-bg-orbs pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden>
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="hero-glow hero-glow-3" />
      </div>
      <div className="hero-bg-vignette pointer-events-none absolute inset-0 z-[1]" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 z-[1] max-lg:block max-lg:bg-[linear-gradient(180deg,transparent_0%,transparent_36%,rgba(0,12,34,0.45)_50%,rgba(0,12,34,0.88)_68%,#000C22_82%,#000C22_100%)] lg:hidden"
        aria-hidden
      />
      <div className="hero-bg-grain" aria-hidden />
      <HeroMotionOverlay />

      <div className="relative z-10 mx-auto h-full w-full max-w-[1440px] max-lg:flex max-lg:max-w-[402px] max-lg:flex-col max-lg:justify-between max-lg:px-[21px] max-lg:pb-20 max-lg:pt-20 lg:px-0 lg:pt-0">
        <div className="lg:pl-12 lg:pt-36">
          <div className="hero-enter hero-enter--1 font-subheading mb-6 flex items-center gap-2.5 text-sm font-medium text-white/80 lg:mb-8 lg:text-base">
            <SectionLabelIcon variant="dark" />
            <span>Paragon Loan Advisors</span>
          </div>

          <h1 className="hero-enter hero-enter--2 font-heading h-[210px] w-full max-w-[737px] text-[62px] font-medium leading-[73px] tracking-[-3px] text-white max-lg:h-[188px] max-lg:max-w-[360px] max-lg:text-[40px] max-lg:leading-[47px] max-lg:tracking-[-1.5px]">
            <span className="max-lg:hidden">
              <span className="whitespace-nowrap">Defeasance is not the deal.</span>
              <br />
              It&apos;s the step that makes the deal{" "}
              <span className="relative inline-block whitespace-nowrap">
                <span className="relative z-[1]">possible.</span>
                <span
                  className="hero-highlight absolute bottom-1.5 left-0 z-0 h-[10px] w-[243px] bg-[#31EE97] opacity-100"
                  aria-hidden
                />
              </span>
            </span>
            <span className="hidden max-lg:block">
              <span className="block">Defeasance is not</span>
              <span className="block">the deal. It&apos;s the</span>
              <span className="block">step that makes the</span>
              <span className="block">
                deal{" "}
                <span className="relative inline-block whitespace-nowrap">
                  <span className="relative z-[1]">possible.</span>
                  <span
                    className="hero-highlight absolute bottom-1.5 left-0 z-0 h-[5px] w-[161px] bg-[#31EE97] opacity-100"
                    aria-hidden
                  />
                </span>
              </span>
            </span>
          </h1>
        </div>

        <div className="absolute left-12 top-[579px] flex h-[120px] w-[1352px] flex-row items-center justify-between max-lg:static max-lg:h-auto max-lg:w-full max-lg:flex-col max-lg:gap-6">
          <p className="hero-enter hero-enter--3 h-[120px] w-full max-w-[709px] shrink-0 font-sans text-[18px] font-medium leading-[30px] tracking-[-0.25px] text-[#FFFFFFCC] max-lg:h-[182px] max-lg:max-w-[362px] max-lg:text-[15px] max-lg:leading-[26px]">
            When you are closing a sale, executing a refinance, or repositioning
            a portfolio, defeasance is often the final requirement standing
            between you and the transaction you actually care about. Paragon
            manages those moving parts so you can stay focused on the
            transaction itself.
          </p>

          <div className="hero-enter hero-enter--4 flex shrink-0 flex-row items-center gap-4 max-lg:w-full max-lg:max-w-[362px] max-lg:flex-col">
            <Link
              href="/calculator"
              className="btn-hero group inline-flex items-center justify-center gap-2 bg-[#31EE97] px-6 py-3.5 text-sm font-medium text-paragon-navy transition-[transform,box-shadow,filter] duration-300 hover:scale-[1.02] hover:brightness-105 hover:shadow-[0_8px_30px_rgba(49,238,151,0.25)] max-lg:h-[54px] max-lg:w-full max-lg:gap-3 max-lg:px-[25px] lg:text-base"
            >
              Estimate Your Costs
              <ArrowIcon />
            </Link>
            <Link
              href="/contact"
              className="btn-hero inline-flex items-center justify-center gap-2 bg-white px-6 py-3.5 text-sm font-medium text-paragon-navy transition-[transform,box-shadow,filter] duration-300 hover:scale-[1.02] hover:brightness-95 hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)] max-lg:h-[54px] max-lg:w-full max-lg:gap-3 max-lg:px-[25px] lg:text-base"
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
