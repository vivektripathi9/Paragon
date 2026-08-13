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
        className="reputation-quote-icon__img min-[768px]:max-[1194px]:!ml-[clamp(3rem,6.7vw,5rem)] min-[768px]:max-[1194px]:!mt-[clamp(3.75rem,8vw,6rem)] min-[768px]:max-[1194px]:!h-auto"
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
            <span className="reputation-label__text font-subheading text-[16px] font-semibold leading-[14px] tracking-[-0.5px] text-[#1E4FFF]">
              Reputation
            </span>
          </div>

          <h2 className="reputation-heading font-heading font-medium text-paragon-navy">
            <span className="reputation-heading__desktop hidden min-[1200px]:!block">
              <span className="block whitespace-nowrap">
                Recommended by the professionals
              </span>
            </span>
            <span className="reputation-heading__tablet hidden md:max-[1200px]:!block">
              <span className="block whitespace-nowrap">
                Recommended by the professionals
              </span>
            </span>
            <span className="md:hidden">Recommended by the professionals</span>
          </h2>

          <p className="reputation-intro mt-5 font-sans font-medium tracking-[-0.25px] text-[#000C22B2]">
            <span className="reputation-intro__desktop hidden min-[1200px]:!block">
              <span className="block whitespace-nowrap">
                The specialists responsible for reviewing defeasance
                transactions at many of
              </span>
              <span className="block whitespace-nowrap">
                the nation&apos;s largest CMBS servicer organizations regularly
                recommend Paragon
              </span>
              <span className="block whitespace-nowrap">
                because our transactions arrive complete, organized, and ready
                for review.
              </span>
            </span>
            <span className="reputation-intro__tablet hidden md:max-[1200px]:!block">
              <span className="block whitespace-nowrap">
                The specialists responsible for reviewing defeasance
                transactions at many of the nation&apos;s largest
              </span>
              <span className="block whitespace-nowrap">
                CMBS servicer organizations regularly recommend Paragon because
                our transactions arrive
              </span>
              <span className="block whitespace-nowrap">
                complete, organized, and ready for review.
              </span>
            </span>
            <span className="md:hidden">
              The specialists responsible for reviewing defeasance transactions
              at many of the nation&apos;s largest CMBS servicer organizations
              regularly recommend Paragon because our transactions arrive
              complete, organized, and ready for review.
            </span>
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
              <div className="reputation-quote__text reputation-quote__text--mobile font-sans text-[#000C22] md:hidden">
                <p>
                  <span className="reputation-quote__line block whitespace-nowrap">
                    Over the past five years, RP
                  </span>
                  <span className="reputation-quote__line block whitespace-nowrap">
                    Management has done 10 defeasance
                  </span>
                  <span className="reputation-quote__line block whitespace-nowrap">
                    transactions with Paragon. Working
                  </span>
                  <span className="reputation-quote__line block whitespace-nowrap">
                    with Paragon was a great experience
                  </span>
                  <span className="reputation-quote__line block whitespace-nowrap">
                    from start to finish. Kevin was
                  </span>
                  <span className="reputation-quote__line block whitespace-nowrap">
                    organized, answered our questions,
                  </span>
                  <span className="reputation-quote__line block whitespace-nowrap">
                    addressed our concerns, and kept us
                  </span>
                  <span className="reputation-quote__line block whitespace-nowrap">
                    informed along the way.
                  </span>
                </p>
                <p className="mt-4">
                  <span className="reputation-quote__line block whitespace-nowrap">
                    We will use Paragon for our future
                  </span>
                  <span className="reputation-quote__line block whitespace-nowrap">
                    defeasances due to them providing us
                  </span>
                  <span className="reputation-quote__line block whitespace-nowrap">
                    with confidence for a smooth
                  </span>
                  <span className="reputation-quote__line block whitespace-nowrap">
                    transaction and peace of mind that
                  </span>
                  <span className="reputation-quote__line block whitespace-nowrap">
                    each transaction will close as promised.
                  </span>
                  <span className="reputation-quote__line block whitespace-nowrap">
                    I highly recommend Paragon to anyone
                  </span>
                  <span className="reputation-quote__line block whitespace-nowrap">
                    seeking a trusted defeasance advisor.
                  </span>
                </p>
              </div>
              <div className="reputation-quote__text reputation-quote__text--desktop hidden font-sans font-semibold italic tracking-[-0.25px] text-[#000C22] min-[1200px]:!block">
                <p>
                  <span className="block whitespace-nowrap">
                    Over the past five years, RP Management has done 10
                    defeasance
                  </span>
                  <span className="block whitespace-nowrap">
                    transactions with Paragon. Working with Paragon was a great
                    experience
                  </span>
                  <span className="block whitespace-nowrap">
                    from start to finish. Kevin was organized, answered our
                    questions,
                  </span>
                  <span className="block whitespace-nowrap">
                    addressed our concerns, and kept us informed along the way.
                  </span>
                </p>
                <p className="mt-4">
                  <span className="block whitespace-nowrap">
                    We will use Paragon for our future defeasances due to them
                    providing us
                  </span>
                  <span className="block whitespace-nowrap">
                    with confidence for a smooth transaction and peace of mind
                    that each
                  </span>
                  <span className="block whitespace-nowrap">
                    transaction will close as promised. I highly recommend
                    Paragon to anyone
                  </span>
                  <span className="block whitespace-nowrap">
                    seeking a trusted defeasance advisor.
                  </span>
                </p>
              </div>
              <div className="reputation-quote__text reputation-quote__text--tablet hidden font-sans font-semibold italic tracking-[-0.25px] text-[#000C22] md:max-[1200px]:!block">
                <p>
                  <span className="block whitespace-nowrap">
                    Over the past five years, RP Management has done 10
                    defeasance transactions
                  </span>
                  <span className="block whitespace-nowrap">
                    with Paragon. Working with Paragon was a great experience
                    from start to finish.
                  </span>
                  <span className="block whitespace-nowrap">
                    Kevin was organized, answered our questions, addressed our
                    concerns, and kept
                  </span>
                  <span className="block whitespace-nowrap">
                    us informed along the way.
                  </span>
                </p>
                <p className="mt-4">
                  <span className="block whitespace-nowrap">
                    We will use Paragon for our future defeasances due to them
                    providing us with
                  </span>
                  <span className="block whitespace-nowrap">
                    confidence for a smooth transaction and peace of mind that
                    each transaction will
                  </span>
                  <span className="block whitespace-nowrap">
                    close as promised. I highly recommend Paragon to anyone
                    seeking a trusted
                  </span>
                  <span className="block whitespace-nowrap">
                    defeasance advisor.
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
