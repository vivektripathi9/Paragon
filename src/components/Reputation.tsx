import TrustedLogos from "@/components/TrustedLogos";
import SectionLabelIcon from "@/components/SectionLabelIcon";

function QuoteIcon() {
  return (
    <div
      aria-hidden
      className="quote-mark h-16 w-14 shrink-0 opacity-100 sm:h-28 sm:w-32 lg:h-[428px] lg:w-[368px]"
    />
  );
}

export default function Reputation() {
  return (
    <section className="full-bleed relative bg-paragon-reputation lg:h-[1353.5px]">
      <div className="mx-auto flex h-full w-full max-w-[1440px] flex-col px-5 pb-20 pt-14 sm:px-6 sm:pt-16 lg:px-12 lg:pb-0 lg:pt-24">
        <header className="w-full">
          <div className="mb-6 flex items-center gap-2.5 lg:mb-8">
            <SectionLabelIcon variant="light" />
            <span className="font-subheading text-sm font-medium text-paragon-blue lg:text-[0.9375rem]">
              Reputation
            </span>
          </div>

          <h2 className="font-heading w-full max-w-[863px] text-[1.75rem] font-medium leading-[1.2] tracking-[-1px] text-paragon-navy sm:text-[2.25rem] sm:tracking-[-1.5px] lg:h-[68px] lg:w-[863px] lg:text-[54px] lg:leading-[68px] lg:tracking-[-2px]">
            Recommended by the professionals
          </h2>

          <p className="mt-4 w-full max-w-[954px] font-sans text-[0.9375rem] font-medium leading-[1.65] tracking-[-0.25px] text-[#000C22B2] sm:mt-5 lg:mt-5 lg:h-[120px] lg:w-[954px] lg:text-[24px] lg:leading-[40px]">
            The specialists responsible for reviewing defeasance transactions at
            many of the nation&apos;s largest CMBS servicer organizations
            regularly recommend Paragon because our transactions arrive complete,
            organized, and ready for review.
          </p>
        </header>

        <div className="mt-14 flex items-center gap-4 sm:mt-16 lg:mt-20">
          <div className="h-px flex-1 bg-paragon-navy/15" />
          <span className="flex h-[38px] w-[163px] shrink-0 items-center justify-center font-sans text-center text-[0.9375rem] font-medium uppercase leading-[38px] tracking-[-1px] text-[#000C22] sm:text-base lg:text-[24px]">
            Trusted by
          </span>
          <div className="h-px flex-1 bg-paragon-navy/15" />
        </div>

        <TrustedLogos />

        <figure className="mt-12 w-full sm:mt-16 lg:mt-20">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-7 lg:gap-[10px]">
            <QuoteIcon />
            <blockquote className="min-w-0 flex-1 text-left">
              <div className="w-full max-w-[904px] font-sans text-base font-semibold italic leading-[1.65] tracking-[-0.25px] text-[#000C22] opacity-100 lg:h-[342px] lg:w-[904px] lg:text-[24px] lg:leading-[38px]">
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
              <figcaption className="mt-8 flex flex-col gap-4 opacity-100 not-italic lg:mt-8">
                <p className="font-heading text-base font-semibold leading-6 tracking-[-0.5px] text-[#1E4FFF] lg:text-[24px] lg:leading-[24px]">
                  Jonathan H. Chattley
                </p>
                <p className="font-heading text-base font-normal leading-[14px] tracking-[-0.5px] text-[#000C22] lg:text-[20px]">
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
