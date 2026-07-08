import Link from "next/link";
import ArrowIcon from "@/components/ArrowIcon";
import HeroMotionOverlay from "@/components/HeroMotionOverlay";
import SectionEdge from "@/components/SectionEdge";
import SectionLabelIcon from "@/components/SectionLabelIcon";

function HeroBottomEdge() {
  return <SectionEdge variant="hero-bottom" className="z-20" />;
}

export default function Hero() {
  return (
    <section className="hero-bg-color full-bleed relative h-[894px] overflow-hidden max-md:h-[852px] md:max-[1194px]:h-[852px]">
      <div
        className="hero-bg-drift pointer-events-none absolute left-1/2 top-0 z-0 max-md:block max-md:-translate-x-1/2 md:hidden"
        aria-hidden
      >
        <div className="hero-bg-drift__layer hero-bg-drift__layer--mobile">
          <img
            src="/hero-background-mobile.png"
            alt=""
            width={402}
            height={544}
            className="h-[544px] w-[402px] max-w-none"
          />
        </div>
      </div>
      <div
        className="hero-bg-drift pointer-events-none absolute inset-0 z-0 hidden md:max-[1194px]:block min-[1195px]:hidden"
        aria-hidden
      >
        <div className="hero-bg-drift__layer hero-bg-drift__layer--tablet">
          <img
            src="/hero-background.svg"
            alt=""
            width={1194}
            height={852}
            className="hero-bg-tablet__img max-w-none opacity-100"
          />
        </div>
      </div>
      <div className="hero-bg-drift absolute inset-0 z-0 hidden min-[1195px]:block" aria-hidden>
        <div className="hero-bg-drift__layer hero-bg-drift__layer--desktop">
          <img
            src="/hero-bg-vector.svg"
            alt=""
            width={641}
            height={894}
            className="pointer-events-none absolute right-0 top-0 h-[894px] w-[641px] max-w-none"
          />
        </div>
      </div>
      <div className="hero-bg-vignette pointer-events-none absolute inset-0 z-[1]" aria-hidden />
      <div className="hero-bg-scrim pointer-events-none absolute inset-0 z-[1] hidden min-[1195px]:block" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 z-[1] max-md:block max-md:bg-[linear-gradient(180deg,rgba(3,18,55,0.28)_0%,rgba(3,18,55,0.06)_22%,rgba(7,26,82,0.18)_46%,rgba(0,11,32,0.55)_66%,#000B20_82%,#000B20_100%)] md:max-[1194px]:block md:max-[1194px]:bg-[linear-gradient(180deg,rgba(3,18,55,0.22)_0%,rgba(3,18,55,0.04)_18%,rgba(7,26,82,0.12)_40%,rgba(0,11,32,0.42)_62%,#000B20_78%,#000B20_100%)] min-[1195px]:hidden"
        aria-hidden
      />
      <div className="hero-bg-grain hero-bg-grain--intense" aria-hidden />
      <div className="hero-bg-sandpaper" aria-hidden />
      <HeroMotionOverlay />

      <div className="relative z-10 mx-auto h-full w-full max-w-[1440px] max-md:flex max-md:max-w-[402px] max-md:flex-col max-md:justify-between max-md:px-[21px] max-md:pb-20 max-md:pt-20 md:max-[1194px]:flex md:max-[1194px]:max-w-[1194px] md:max-[1194px]:flex-col md:max-[1194px]:justify-between md:max-[1194px]:px-8 md:max-[1194px]:pb-[calc(var(--section-edge-height)+1rem)] md:max-[1194px]:pt-20 min-[1195px]:block min-[1195px]:max-w-[1440px] min-[1195px]:px-0 min-[1195px]:pt-0 min-[1195px]:pb-0">
        <div className="min-[1195px]:pl-12 min-[1195px]:pt-36">
          <div className="hero-enter hero-enter--1 font-subheading mb-6 flex items-center gap-2.5 text-sm font-medium text-white/80 md:max-[1194px]:mb-5 min-[1195px]:mb-8 min-[1195px]:text-base">
            <SectionLabelIcon variant="dark" />
            <span>Paragon Loan Advisors</span>
          </div>

          <h1 className="hero-enter hero-enter--2 font-heading h-[210px] w-full max-w-[737px] text-[62px] font-medium leading-[73px] tracking-[-3px] text-white max-md:h-[188px] max-md:max-w-[360px] max-md:text-[40px] max-md:leading-[47px] max-md:tracking-[-1.5px] md:max-[1194px]:h-auto md:max-[1194px]:max-w-[720px] md:max-[1194px]:text-[48px] md:max-[1194px]:leading-[56px] md:max-[1194px]:tracking-[-2px]">
            <span className="max-md:hidden">
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
            <span className="hidden max-md:block">
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

        <div className="absolute left-12 top-[579px] flex h-[120px] w-[1352px] flex-row items-center justify-between max-md:static max-md:h-auto max-md:w-full max-md:flex-col max-md:gap-6 md:max-[1194px]:static md:max-[1194px]:h-auto md:max-[1194px]:w-full md:max-[1194px]:flex-row md:max-[1194px]:items-center md:max-[1194px]:justify-between md:max-[1194px]:gap-6">
          <p className="hero-enter hero-enter--3 h-[120px] w-full max-w-[709px] shrink-0 font-sans text-[18px] font-medium leading-[30px] tracking-[-0.25px] text-[#FFFFFFCC] max-md:h-[182px] max-md:max-w-[362px] max-md:text-[15px] max-md:leading-[26px] md:max-[1194px]:h-auto md:max-[1194px]:max-w-[52%] md:max-[1194px]:text-[16px] md:max-[1194px]:leading-[28px]">
            When you are closing a sale, executing a refinance, or repositioning
            a portfolio, defeasance is often the final requirement standing
            between you and the transaction you actually care about. Paragon
            manages those moving parts so you can stay focused on the
            transaction itself.
          </p>

          <div className="hero-enter hero-enter--4 flex shrink-0 flex-row items-center gap-4 max-md:w-full max-md:max-w-[362px] max-md:flex-col md:max-[1194px]:w-auto md:max-[1194px]:max-w-none md:max-[1194px]:flex-row md:max-[1194px]:gap-4">
            <Link
              href="/calculator"
              className="btn-hero group inline-flex items-center justify-center gap-2 whitespace-nowrap bg-[#31EE97] px-6 py-3.5 text-sm font-medium text-paragon-navy transition-[transform,box-shadow,filter] duration-300 hover:scale-[1.02] hover:brightness-105 hover:shadow-[0_8px_30px_rgba(49,238,151,0.25)] max-md:h-[54px] max-md:w-full max-md:gap-3 max-md:px-[25px] md:max-[1194px]:h-[54px] md:max-[1194px]:shrink-0 min-[1195px]:text-base"
            >
              Estimate Your Costs
              <ArrowIcon />
            </Link>
            <Link
              href="/contact"
              className="btn-hero inline-flex items-center justify-center gap-2 bg-white px-6 py-3.5 text-sm font-medium text-paragon-navy transition-[transform,box-shadow,filter] duration-300 hover:scale-[1.02] hover:brightness-95 hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)] max-md:h-[54px] max-md:w-full max-md:gap-3 max-md:px-[25px] md:max-[1194px]:h-[54px] md:max-[1194px]:shrink-0 min-[1195px]:text-base"
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
