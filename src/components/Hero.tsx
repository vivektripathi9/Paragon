import Link from "next/link";
import ArrowIcon from "@/components/ArrowIcon";
import SectionLabelIcon from "@/components/SectionLabelIcon";

/*
 * Geometry and type live in globals.css under "HERO — driven by the Figma
 * boards" and are generated from the Figma file. Figma stores this copy as a
 * single text run wrapping inside a fixed-width box, so there are no locked
 * line breaks here — the box width is the spec and the text wraps naturally.
 */
export default function Hero() {
  return (
    <section className="hero-bg-color full-bleed relative z-[7] overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden
      >
        {/* Desktop */}
        <img
          src="/icons/Frame-29.svg"
          alt=""
          width={1440}
          height={894}
          className="absolute left-0 top-0 h-full w-full max-w-none object-fill opacity-50 max-lg:hidden"
        />
        <img
          src="/icons/Background-3.svg"
          alt=""
          width={1440}
          height={894}
          className="absolute left-0 top-0 z-[1] h-full w-full max-w-none object-fill opacity-[0.75] max-lg:hidden"
        />
        {/* Mobile — mobilebg-2 base, mobilebg-1 overlay */}
        <img
          src="/icons/mobilebg-2.svg"
          alt=""
          width={1440}
          height={894}
          className="absolute left-0 top-0 hidden h-full w-full max-w-none object-cover max-lg:block"
        />
        <img
          src="/icons/mobilebg-1.svg"
          alt=""
          width={402}
          height={544}
          className="absolute right-0 top-0 z-[1] hidden h-[544px] w-[402px] max-w-none object-contain max-lg:block"
        />
        {/* Mobile — bottom fade to #000C22 */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] hidden h-[70%] bg-gradient-to-t from-[#000C22] from-55% via-[#000C22]/90 via-30% to-transparent max-lg:block"
          aria-hidden
        />
      </div>

      <div className="hero-content-shell">
        <div className="hero-heading-wrap">
          <div className="hero-heading-col">
            <div className="hero-label font-subheading font-semibold text-[#B0CCFF]">
              <SectionLabelIcon variant="dark" />
              <span>Paragon Loan Advisors</span>
            </div>

            <h1 className="hero-heading font-heading text-white">
              Defeasance is not the deal. It&apos;s the step that makes the deal{" "}
              <span className="relative inline-block whitespace-nowrap">
                <span className="relative z-[1]">possible.</span>
                <span
                  className="hero-highlight absolute bottom-[0.12em] left-0 z-0 h-[0.155em] w-full bg-[#31EE97] opacity-100"
                  aria-hidden
                />
              </span>
            </h1>
          </div>
        </div>

        <div className="hero-description-row">
          <p className="hero-description font-sans font-medium text-[#FFFFFFCC]">
            When you are closing a sale, executing a refinance, or repositioning
            a portfolio, defeasance is often the final requirement standing
            between you and the transaction you actually care about. Paragon
            manages those moving parts so you can stay focused on the
            transaction itself.
          </p>

          <div className="hero-cta-row">
            <Link
              href="/calculator"
              className="btn-hero group inline-flex items-center justify-center whitespace-nowrap bg-[#31EE97] font-semibold text-paragon-navy transition-[transform,box-shadow,filter] duration-300 hover:scale-[1.02] hover:brightness-105 hover:shadow-[0_8px_30px_rgba(49,238,151,0.25)]"
            >
              Estimate Your Costs
              <ArrowIcon />
            </Link>
            <Link
              href="/contact"
              className="btn-hero inline-flex items-center justify-center whitespace-nowrap bg-white font-semibold text-paragon-navy transition-[transform,box-shadow,filter] duration-300 hover:scale-[1.02] hover:brightness-95 hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)]"
            >
              Talk to Paragon
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
