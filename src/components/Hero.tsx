import Link from "next/link";
import ArrowIcon from "@/components/ArrowIcon";
import SectionLabelIcon from "@/components/SectionLabelIcon";

export default function Hero() {
  return (
    <section className="hero-bg-color full-bleed relative z-[7] h-[894px] overflow-hidden max-md:h-[852px] md:max-[1195px]:!h-[clamp(620px,calc(280px+45vw),780px)]">
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

      <div className="hero-content-shell relative z-10 mx-auto h-full w-full max-w-[1440px] max-md:flex max-md:max-w-[402px] max-md:flex-col max-md:justify-between max-md:px-[var(--hero-inline-padding)] max-md:pb-20 max-md:pt-20 md:block md:max-[1439px]:max-w-[1194px] md:max-[1195px]:!flex md:max-[1195px]:!flex-col md:max-[1195px]:!justify-center md:max-[1195px]:!gap-32 md:max-[1195px]:!px-[var(--hero-inline-padding)] md:max-[1195px]:!pt-[clamp(3.5rem,7vw,5.5rem)] md:max-[1195px]:!pb-[clamp(3rem,6vw,5rem)] md:pb-0 md:pt-0 min-[1195px]:px-12 min-[1440px]:max-w-[1440px]">
      <div className="hero-heading-wrap max-md:hidden px-[var(--hero-inline-padding)] pt-24 md:max-[1195px]:!flex md:max-[1195px]:!w-full md:max-[1195px]:!items-start md:max-[1195px]:!gap-[clamp(1.5rem,3vw,2.5rem)] md:max-[1195px]:!px-0 md:max-[1195px]:!pt-0 md:max-[1195px]:!-mt-14 min-[1195px]:px-0 min-[1195px]:pt-36">
          <div className="hero-heading-col min-w-0 md:max-[1195px]:flex-1 md:max-[1195px]:max-w-[min(680px,62%)] min-[1195px]:max-w-[709px]">
            <div className="font-subheading mb-3 flex items-center gap-2.5 text-sm font-semibold text-[#B0CCFF] min-[1440px]:mb-5 min-[1195px]:text-base">
              <SectionLabelIcon variant="dark" />
              <span>Paragon Loan Advisors</span>
            </div>

            <h1 className="hero-heading font-heading h-auto w-full text-[clamp(3.125rem,4.6vw,3.875rem)] font-medium leading-[clamp(3.6rem,5.2vw,4.5rem)] tracking-[-0.14em] text-white md:max-[1195px]:!text-[clamp(2.375rem,4vw,2.875rem)] md:max-[1195px]:!leading-[clamp(2.75rem,4.6vw,3.375rem)] md:max-[1195px]:!tracking-[-1.5px] min-[1195px]:text-[62px] min-[1195px]:leading-[73px] min-[1195px]:tracking-[-3px]">
              <span className="block whitespace-nowrap">
                Defeasance is not the deal.
              </span>
              <span className="block whitespace-nowrap">
                It&apos;s the step that makes the
              </span>
              <span className="block whitespace-nowrap">
                deal{" "}
                <span className="relative inline-block whitespace-nowrap">
                  <span className="relative z-[1]">possible.</span>
                  <span
                    className="hero-highlight absolute bottom-[0.12em] left-0 z-0 h-[0.155em] w-full bg-[#31EE97] opacity-100"
                    aria-hidden
                  />
                </span>
              </span>
            </h1>
          </div>
          {/* Spacer matches CTA cluster width so heading column aligns with description */}
          <div
            className="pointer-events-none invisible hidden shrink-0 select-none md:max-[1195px]:!flex md:max-[1195px]:!flex-row md:max-[1195px]:!items-center md:max-[1195px]:!gap-[clamp(0.75rem,1.25vw,1rem)]"
            aria-hidden
          >
            <span className="inline-flex h-[54px] items-center whitespace-nowrap px-6 text-sm font-semibold min-[1195px]:text-base">
              Estimate Your Costs
              <span className="inline-block w-5" />
            </span>
            <span className="inline-flex h-[54px] items-center whitespace-nowrap px-6 text-sm font-semibold min-[1195px]:text-base">
              Talk to Paragon
            </span>
          </div>
        </div>

        <div className="md:hidden">
          <div className="font-subheading mb-4 flex items-center gap-2.5 text-sm font-semibold text-[#B0CCFF]">
            <SectionLabelIcon variant="dark" />
            <span>Paragon Loan Advisors</span>
          </div>

          <h1 className="font-heading h-[188px] w-full max-w-[360px] text-[40px] font-medium leading-[47px] tracking-[-1.5px] text-white">
            <span className="block">Defeasance is not</span>
            <span className="block">the deal. It&apos;s the</span>
            <span className="block">step that makes the</span>
            <span className="block">
              deal{" "}
              <span className="relative inline-block whitespace-nowrap">
                <span className="relative z-[1]">possible.</span>
                <span
                  className="hero-highlight absolute bottom-[0.12em] left-0 z-0 h-[0.14em] w-full bg-[#31EE97] opacity-100"
                  aria-hidden
                />
              </span>
            </span>
          </h1>
        </div>

        <div className="hero-description-row absolute top-[clamp(26rem,62%,34rem)] flex h-auto w-full flex-row items-center justify-between gap-[clamp(1.5rem,3vw,2.5rem)] max-md:static max-md:h-auto max-md:w-full max-md:flex-col max-md:gap-8 md:left-[var(--hero-inline-padding)] md:right-[var(--hero-inline-padding)] md:w-auto md:max-[1195px]:!static md:max-[1195px]:!inset-auto md:max-[1195px]:!top-auto md:max-[1195px]:!bottom-auto md:max-[1195px]:!w-full min-[1195px]:inset-x-0 min-[1195px]:top-[579px] min-[1195px]:h-[120px] min-[1195px]:w-full min-[1195px]:justify-between min-[1195px]:gap-16 min-[1195px]:px-0">
          <p className="hero-description min-w-0 flex-1 font-sans text-[clamp(1rem,1.45vw,1.125rem)] font-medium leading-[clamp(1.75rem,2.55vw,1.95rem)] tracking-[-0.25px] text-[#FFFFFFCC] max-md:h-auto max-md:max-w-[362px] max-md:flex-none max-md:overflow-visible max-md:text-[15px] max-md:leading-[26px] md:max-w-[min(680px,62%)] md:max-[820px]:max-w-[min(28rem,58%)] min-[1195px]:h-[120px] min-[1195px]:!max-w-[709px] min-[1195px]:text-[18px] min-[1195px]:leading-[30px]">
            <span className="md:hidden">
              <span className="block whitespace-nowrap">
                When you are closing a sale, executing a
              </span>
              <span className="block whitespace-nowrap">
                refinance, or repositioning a portfolio,
              </span>
              <span className="block whitespace-nowrap">
                defeasance is often the final requirement
              </span>
              <span className="block whitespace-nowrap">
                standing between you and the transaction you
              </span>
              <span className="block whitespace-nowrap">
                actually care about. Paragon manages those
              </span>
              <span className="block whitespace-nowrap">
                moving parts so you can stay focused on the
              </span>
              <span className="block whitespace-nowrap">
                transaction itself.
              </span>
            </span>
            <span className="hero-description__tablet hidden md:max-[1195px]:!block">
              <span className="block whitespace-nowrap">
                When you are closing a sale, executing a refinance, or
                repositioning a
              </span>
              <span className="block whitespace-nowrap">
                portfolio, defeasance is often the final requirement standing
                between you
              </span>
              <span className="block whitespace-nowrap">
                and the transaction you actually care about. Paragon manages
                those
              </span>
              <span className="block whitespace-nowrap">
                moving parts so you can stay focused on the transaction itself.
              </span>
            </span>
            <span className="hero-description__desktop hidden min-[1195px]:!block">
              <span className="block whitespace-nowrap">
                When you are closing a sale, executing a refinance, or
                repositioning a portfolio,
              </span>
              <span className="block whitespace-nowrap">
                defeasance is often the final requirement standing between you
                and the
              </span>
              <span className="block whitespace-nowrap">
                transaction you actually care about. Paragon manages those
                moving parts so
              </span>
              <span className="block whitespace-nowrap">
                you can stay focused on the transaction itself.
              </span>
            </span>
          </p>

          <div className="flex shrink-0 flex-row items-center gap-[clamp(0.75rem,1.25vw,1rem)] max-md:w-full max-md:max-w-[362px] max-md:flex-col md:max-[1195px]:flex min-[1195px]:flex">
            <Link
              href="/calculator"
              className="btn-hero group inline-flex h-[54px] items-center justify-center gap-2 whitespace-nowrap bg-[#31EE97] px-6 py-3.5 text-sm font-semibold text-paragon-navy transition-[transform,box-shadow,filter] duration-300 hover:scale-[1.02] hover:brightness-105 hover:shadow-[0_8px_30px_rgba(49,238,151,0.25)] max-md:w-full max-md:gap-3 max-md:px-[25px] md:!w-auto md:!max-w-none md:!px-6 min-[1195px]:text-base"
            >
              Estimate Your Costs
              <ArrowIcon />
            </Link>
            <Link
              href="/contact"
              className="btn-hero inline-flex h-[54px] items-center justify-center gap-2 whitespace-nowrap bg-white px-6 py-3.5 text-sm font-semibold text-paragon-navy transition-[transform,box-shadow,filter] duration-300 hover:scale-[1.02] hover:brightness-95 hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)] max-md:w-full max-md:gap-3 max-md:px-[25px] md:!w-auto md:!max-w-none md:!px-6 min-[1195px]:text-base"
            >
              Talk to Paragon
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
