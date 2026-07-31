import TrustedLogos from "@/components/TrustedLogos";
import SectionLabelIcon from "@/components/SectionLabelIcon";

function QuoteIcon() {
  return (
    <div className="reputation-quote-icon shrink-0" aria-hidden>
      <img
        src="/icons/testimonial-quote-icon.svg"
        alt=""
        width={192}
        height={185}
        className="reputation-quote-icon__img min-[768px]:max-[1195px]:!ml-[clamp(3rem,6.7vw,5rem)] min-[768px]:max-[1195px]:!mt-[clamp(3.75rem,8vw,6rem)] min-[768px]:max-[1195px]:!h-auto"
      />
    </div>
  );
}

export default function Reputation() {
  return (
    <section className="reputation-section full-bleed relative z-[2] -mt-px section-edge-overlap overflow-visible bg-[#F0F3FC]">
      <div className="reputation-shell mx-auto flex w-full max-w-[1440px] flex-col max-md:max-w-[402px] max-md:px-5 max-md:pt-[calc(var(--section-edge-height)+1.5rem)] min-[1195px]:!h-auto min-[1195px]:!pb-[calc(var(--section-edge-height)+4.375rem)]">
        <header className="reputation-header w-full">
          <div className="reputation-label mb-6 flex items-center gap-2.5">
            <SectionLabelIcon variant="light" />
            <span className="reputation-label__text font-subheading text-sm font-semibold text-[#3E6BFF]">
              Reputation
            </span>
          </div>

          <h2 className="reputation-heading font-heading font-medium text-paragon-navy">
            Recommended by the professionals
          </h2>

          <p className="reputation-intro mt-5 font-sans font-medium tracking-[-0.25px] text-[#000C22B2]">
            The specialists responsible for reviewing defeasance transactions at
            many of the nation&apos;s largest CMBS servicer organizations
            regularly recommend Paragon because our transactions arrive complete,
            organized, and ready for review.
          </p>
        </header>

        <div className="reputation-trusted-divider flex w-full items-center gap-2">
          <span
            aria-hidden
            className="reputation-trusted-divider__line reputation-trusted-divider__line--start block h-px shrink opacity-100"
          />
          <span className="reputation-trusted-divider__label shrink-0 font-sans font-medium uppercase tracking-[-1px] text-[#000C22]">
            Trusted by
          </span>
          <span
            aria-hidden
            className="reputation-trusted-divider__line reputation-trusted-divider__line--end block h-px shrink opacity-100"
          />
        </div>

        <TrustedLogos />

        <figure className="reputation-testimonial w-full">
          <div className="reputation-testimonial__layout flex w-full min-w-0 items-start opacity-100">
            <QuoteIcon />
            <blockquote className="reputation-quote flex min-w-0 flex-col text-left opacity-100 not-italic">
              <div className="reputation-quote__text reputation-quote__text--natural font-sans font-semibold italic tracking-[-0.25px] text-[#000C22] md:max-[1195px]:hidden">
                <p>
                  Over the past five years, RP Management has done 10 defeasance
                  transactions with Paragon. Working with Paragon was a great
                  experience from start to finish. Kevin was organized, answered
                  our questions, addressed our concerns, and kept us informed along
                  the way.
                </p>
                <p className="mt-4">
                  We will use Paragon for our future defeasances due to them
                  providing us with confidence for a smooth transaction and peace
                  of mind that each transaction will close as promised. I highly
                  recommend Paragon to anyone seeking a trusted defeasance
                  advisor.
                </p>
              </div>
              <div className="reputation-quote__text reputation-quote__text--tablet hidden font-sans font-semibold italic tracking-[-0.25px] text-[#000C22] md:max-[1195px]:block">
                <p>
                  <span className="block whitespace-nowrap">
                    Over the past five years, RP Management has done 10 defeasance
                  </span>
                  <span className="block whitespace-nowrap">
                    transactions with Paragon. Working with Paragon was a great experience
                  </span>
                  <span className="block whitespace-nowrap">
                    from start to finish. Kevin was organized, answered our questions,
                  </span>
                  <span className="block whitespace-nowrap">
                    addressed our concerns, and kept us informed along the way.
                  </span>
                </p>
                <p className="mt-4">
                  <span className="block whitespace-nowrap">
                    We will use Paragon for our future defeasances due to them providing us
                  </span>
                  <span className="block whitespace-nowrap">
                    with confidence for a smooth transaction and peace of mind that each
                  </span>
                  <span className="block whitespace-nowrap">
                    transaction will close as promised. I highly recommend Paragon to anyone
                  </span>
                  <span className="block whitespace-nowrap">
                    seeking a trusted defeasance advisor.
                  </span>
                </p>
              </div>
              <figcaption className="reputation-quote__attribution flex flex-col text-left not-italic">
                <p className="reputation-quote__name font-heading !font-semibold not-italic text-[#3E6BFF]">
                  Jonathan H. Chattley
                </p>
                <p className="reputation-quote__role font-heading font-normal text-[#000C22]">
                  CPA, CFO, RP Management, Inc.
                </p>
              </figcaption>
            </blockquote>
          </div>
        </figure>
      </div>
    </section>
  );
}
