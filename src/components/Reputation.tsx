import Image from "next/image";
import TrustedLogos from "@/components/TrustedLogos";
import SectionLabelIcon from "@/components/SectionLabelIcon";

function QuoteIcon() {
  return (
    <Image
      src="/testimonial-quote-icon.png"
      alt=""
      width={192}
      height={185}
      aria-hidden
      className="mt-16 h-[185px] w-[192px] shrink-0 self-start object-contain object-left opacity-100 max-lg:mt-0"
    />
  );
}

export default function Reputation() {
  return (
    <section className="full-bleed relative h-[1353.5px] bg-paragon-reputation max-lg:h-auto max-lg:min-h-[1512px]">
      <div className="mx-auto flex h-full w-full max-w-[1440px] flex-col px-12 pb-0 pt-24 max-lg:min-h-[1512px] max-lg:max-w-[402px] max-lg:px-5 max-lg:pb-20 max-lg:pt-[38px]">
        <header className="w-full">
          <div className="mb-6 flex items-center gap-2.5 lg:mb-8">
            <SectionLabelIcon variant="light" />
            <span className="font-subheading text-sm font-medium text-paragon-blue lg:text-[0.9375rem]">
              Reputation
            </span>
          </div>

          <h2 className="font-heading h-[68px] w-full max-w-[863px] text-[54px] font-medium leading-[68px] tracking-[-2px] text-paragon-navy max-lg:h-auto max-lg:text-[32px] max-lg:leading-[42px] max-lg:tracking-[-1.5px]">
            Recommended by the professionals
          </h2>

          <p className="mt-5 w-full max-w-[954px] font-sans text-[24px] font-medium leading-[40px] tracking-[-0.25px] text-[#000C22B2] max-lg:mt-4 max-lg:h-[156px] max-lg:max-w-[362px] max-lg:text-[16px] max-lg:leading-[26px] max-lg:text-[#000C22CC]">
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

        <figure className="mt-20 w-full max-lg:mt-12">
          <div className="flex items-start gap-16 max-lg:flex-col max-lg:items-start max-lg:gap-10">
            <QuoteIcon />
            <blockquote className="min-w-0 flex-1 text-left">
              <div className="h-[342px] w-full max-w-[904px] font-sans text-[24px] font-semibold italic leading-[38px] tracking-[-0.25px] text-[#000C22] opacity-100 max-lg:h-[480px] max-lg:max-w-[362px] max-lg:text-[18px] max-lg:leading-[30px]">
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
              <figcaption className="mt-8 flex flex-col gap-4 text-left opacity-100 not-italic lg:mt-8">
                <p className="font-heading text-[24px] font-semibold leading-[24px] tracking-[-0.5px] text-[#1E4FFF] max-lg:text-[20px] max-lg:leading-[24px]">
                  Jonathan H. Chattley
                </p>
                <p className="font-heading text-[20px] font-normal leading-[14px] tracking-[-0.5px] text-[#000C22] max-lg:text-[16px]">
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
