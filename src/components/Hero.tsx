import Link from "next/link";
import ArrowIcon from "@/components/ArrowIcon";
import SectionLabelIcon from "@/components/SectionLabelIcon";

export default function Hero() {
  return (
    <section className="hero-bg-color full-bleed relative z-[7] h-[894px] overflow-hidden max-md:h-[852px] md:max-[1195px]:!h-[clamp(620px,calc(280px+45vw),780px)]">
      <div
        className="hero-bg-drift pointer-events-none absolute inset-0 z-0 max-md:block md:hidden"
        aria-hidden
      >
        <div className="hero-bg-drift__layer hero-bg-drift__layer--mobile absolute inset-0">
          <img
            src="/Background%20(2).svg"
            alt=""
            width={402}
            height={852}
            className="absolute inset-0 h-full w-full max-w-none object-cover object-top"
          />
          <img
            src="/hero-background-mobile.png"
            alt=""
            width={402}
            height={544}
            className="relative z-[1] h-auto w-full max-w-none"
          />
        </div>
      </div>
      <div
        className="hero-bg-drift pointer-events-none absolute inset-0 z-0 hidden min-[768px]:block"
        aria-hidden
      >
        <div className="hero-bg-drift__layer hero-bg-drift__layer--desktop absolute inset-0 overflow-hidden">
          <img
            src="/icons/Background.svg"
            alt=""
            width={1440}
            height={894}
            className="hero-bg-wide__img pointer-events-none absolute inset-0 !h-full !w-full !max-w-none !translate-x-0 !object-fill"
          />
        </div>
      </div>
      <div className="hero-bg-vignette pointer-events-none absolute inset-0 z-[1]" aria-hidden />
      <div className="hero-bg-scrim pointer-events-none absolute inset-0 z-[1] hidden min-[1195px]:block" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 z-[1] max-md:block max-md:bg-[linear-gradient(180deg,rgba(1,10,31,0.42)_0%,rgba(1,10,31,0.14)_22%,rgba(0,8,24,0.28)_46%,rgba(0,8,24,0.68)_66%,#000818_82%,#000818_100%)] min-[768px]:max-[1195px]:block min-[768px]:max-[1195px]:bg-[linear-gradient(180deg,rgba(1,10,31,0.36)_0%,rgba(1,10,31,0.1)_18%,rgba(0,8,24,0.22)_40%,rgba(0,8,24,0.55)_62%,#000818_78%,#000818_100%)] min-[1195px]:hidden"
        aria-hidden
      />
      <div className="hero-bg-grain hero-bg-grain--intense" aria-hidden />
      <div className="hero-bg-sandpaper" aria-hidden />

      <div className="hero-content-shell relative z-10 mx-auto h-full w-full max-w-[1440px] max-md:flex max-md:max-w-[402px] max-md:flex-col max-md:justify-between max-md:px-[var(--hero-inline-padding)] max-md:pb-20 max-md:pt-20 md:block md:max-[1439px]:max-w-[1194px] md:max-[1195px]:!flex md:max-[1195px]:!flex-col md:max-[1195px]:!justify-center md:max-[1195px]:!gap-32 md:max-[1195px]:!px-[var(--hero-inline-padding)] md:max-[1195px]:!pt-[clamp(3.5rem,7vw,5.5rem)] md:max-[1195px]:!pb-[clamp(3rem,6vw,5rem)] md:pb-0 md:pt-0 min-[1195px]:px-12 min-[1440px]:max-w-[1440px]">
      <div className="hero-heading-wrap max-md:hidden px-[var(--hero-inline-padding)] pt-24 md:max-[1195px]:!flex md:max-[1195px]:!w-full md:max-[1195px]:!items-start md:max-[1195px]:!gap-[clamp(1.5rem,3vw,2.5rem)] md:max-[1195px]:!px-0 md:max-[1195px]:!pt-0 md:max-[1195px]:!-mt-14 min-[1195px]:px-0 min-[1195px]:pt-36">
          <div className="hero-heading-col min-w-0 md:max-[1195px]:flex-1 md:max-[1195px]:max-w-[min(680px,62%)] min-[1195px]:max-w-[709px]">
            <div className="font-subheading mb-5 flex items-center gap-2.5 text-sm font-semibold text-[#B0CCFF] min-[1440px]:mb-8 min-[1195px]:text-base">
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
          <div className="font-subheading mb-6 flex items-center gap-2.5 text-sm font-semibold text-[#B0CCFF]">
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
          <p className="hero-description min-w-0 flex-1 font-sans text-[clamp(1rem,1.45vw,1.125rem)] font-medium leading-[clamp(1.75rem,2.55vw,1.95rem)] tracking-[-0.25px] text-[#FFFFFFCC] max-md:h-[182px] max-md:max-w-[362px] max-md:flex-none max-md:text-[15px] max-md:leading-[26px] md:max-w-[min(680px,62%)] md:max-[820px]:max-w-[min(28rem,58%)] min-[1195px]:h-[120px] min-[1195px]:!max-w-[709px] min-[1195px]:text-[18px] min-[1195px]:leading-[30px]">
            <span className="md:hidden">
              When you are closing a sale, executing a refinance, or repositioning
              a portfolio, defeasance is often the final requirement standing
              between you and the transaction you actually care about. Paragon
              manages those moving parts so you can stay focused on the
              transaction itself.
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
