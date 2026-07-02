import TrustedLogos from "@/components/TrustedLogos";
import SectionLabelIcon from "@/components/SectionLabelIcon";

function QuoteIcon() {
  return (
    <div
      aria-hidden
      className="quote-mark h-16 w-14 shrink-0 sm:h-28 sm:w-32 lg:h-36 lg:w-[9.5rem]"
    />
  );
}

export default function Reputation() {
  return (
    <section className="relative bg-paragon-reputation">
      <div className="mx-auto max-w-[1440px] px-5 pb-20 pt-14 sm:px-6 sm:pt-16 lg:px-12 lg:pb-36 lg:pt-24">
        <header className="max-w-3xl">
          <div className="mb-6 flex items-center gap-2.5 lg:mb-8">
            <SectionLabelIcon variant="light" />
            <span className="font-subheading text-sm font-medium text-paragon-blue lg:text-[0.9375rem]">
              Reputation
            </span>
          </div>

          <h2 className="text-[1.75rem] font-normal leading-[1.15] text-paragon-navy sm:text-[2.25rem] lg:text-[2.75rem] lg:leading-[1.12]">
            Recommended by the professionals
          </h2>

          <p className="mt-4 max-w-2xl text-[0.9375rem] leading-[1.65] text-paragon-navy/70 lg:mt-5 lg:text-base lg:leading-[1.7]">
            The specialists responsible for reviewing defeasance transactions at
            many of the nation&apos;s largest CMBS servicer organizations
            regularly recommend Paragon because our transactions arrive complete,
            organized, and ready for review.
          </p>
        </header>

        <div className="mt-14 flex items-center gap-4 sm:mt-16 lg:mt-20">
          <div className="h-px flex-1 bg-paragon-navy/15" />
          <span className="font-subheading text-[0.6875rem] font-semibold tracking-[0.2em] text-paragon-navy/45 sm:text-xs">
            TRUSTED BY
          </span>
          <div className="h-px flex-1 bg-paragon-navy/15" />
        </div>

        <TrustedLogos />

        <figure className="mx-auto mt-12 max-w-3xl sm:mt-16 lg:mt-20 lg:max-w-4xl">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7 lg:gap-10">
            <QuoteIcon />
            <blockquote className="min-w-0 flex-1 text-left">
              <p className="text-base font-bold italic leading-[1.65] text-paragon-navy lg:text-[1.0625rem] lg:leading-[1.7]">
                Over the past five years, RP Management has done 10 defeasance
                transactions with Paragon. Working with Paragon was a great
                experience from start to finish. Kevin was organized, answered
                our questions, addressed our concerns, and kept us informed along
                the way.
              </p>
              <p className="mt-4 text-base font-bold italic leading-[1.65] text-paragon-navy lg:text-[1.0625rem] lg:leading-[1.7]">
                We will use Paragon for our future defeasances due to them
                providing us with confidence for a smooth transaction and peace
                of mind that each transaction will close as promised. I highly
                recommend Paragon to anyone seeking a trusted defeasance
                advisor.
              </p>
              <figcaption className="mt-8 not-italic">
                <p className="font-subheading text-base font-bold text-paragon-blue lg:text-lg">
                  Jonathan H. Chattley
                </p>
                <p className="mt-1 text-sm font-normal text-paragon-navy/55">
                  CPA, CFO, RP Management, Inc
                </p>
              </figcaption>
            </blockquote>
          </div>
        </figure>
      </div>
    </section>
  );
}
