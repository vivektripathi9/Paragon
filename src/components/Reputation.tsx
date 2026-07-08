import TrustedLogos from "@/components/TrustedLogos";
import SectionLabelIcon from "@/components/SectionLabelIcon";

function QuoteIcon() {
  return (
    <div className="flex h-[428px] w-[368px] shrink-0 flex-col gap-2.5 opacity-100 max-lg:h-auto max-lg:w-auto">
      <img
        src="/icons/testimonial-quote-icon.svg"
        alt=""
        width={192}
        height={185}
        aria-hidden
        className="mt-24 ml-20 h-[185px] w-[192px] shrink-0 object-contain object-left opacity-100 max-lg:mt-0 max-lg:ml-0 max-lg:h-[154px] max-lg:w-[160px]"
      />
    </div>
  );
}

export default function Reputation() {
  return (
    <section className="full-bleed relative h-[1353.5px] overflow-hidden bg-[#F0F3FC] max-lg:h-auto max-lg:min-h-[1512px]">
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

        <div className="mt-14 flex w-full items-center justify-between gap-2 sm:mt-16 lg:mt-20 lg:justify-center lg:gap-4">
          <img
            src="/icons/line-4.svg"
            alt=""
            width={483}
            height={1}
            aria-hidden
            className="block h-[1px] min-w-[60px] max-w-[121px] flex-1 shrink opacity-100 lg:h-px lg:w-[482.5px] lg:max-w-none lg:flex-none"
          />
          <span className="flex h-[38px] shrink-0 items-center justify-center px-1 font-sans text-center text-[0.9375rem] font-medium uppercase leading-[38px] tracking-[-1px] text-[#000C22] sm:text-base lg:w-[163px] lg:px-0 lg:text-[24px]">
            Trusted by
          </span>
          <img
            src="/icons/line-3.svg"
            alt=""
            width={483}
            height={1}
            aria-hidden
            className="block h-[1px] min-w-[60px] max-w-[121px] flex-1 shrink opacity-100 lg:h-px lg:w-[482.5px] lg:max-w-none lg:flex-none"
          />
        </div>

        <TrustedLogos />

        <figure className="mt-20 w-full max-lg:mt-12">
          <div className="flex w-full max-w-[1360px] items-start justify-between opacity-100 lg:h-[428px] max-lg:flex-col max-lg:items-start max-lg:gap-10">
            <QuoteIcon />
            <blockquote className="flex h-[428px] w-[904px] min-w-0 flex-col gap-8 text-left opacity-100 max-lg:h-auto max-lg:w-full max-lg:max-w-[362px]">
              <div className="w-full max-w-[904px] font-sans text-[24px] font-semibold italic leading-[38px] tracking-[-0.25px] text-[#000C22] opacity-100 max-lg:h-[480px] max-lg:max-w-[362px] max-lg:text-[18px] max-lg:leading-[30px]">
                <p className="font-sans text-[24px] font-semibold italic leading-[38px] tracking-[-0.25px] text-[#000C22] max-lg:text-[18px] max-lg:leading-[30px]">
                  Over the past five years, RP Management has done 10 defeasance
                  transactions with Paragon. Working with Paragon was a great
                  experience from start to finish. Kevin was organized, answered
                  our questions, addressed our concerns, and kept us informed along
                  the way.
                </p>
                <p className="mt-4 font-sans text-[24px] font-semibold italic leading-[38px] tracking-[-0.25px] text-[#000C22] max-lg:text-[18px] max-lg:leading-[30px]">
                  We will use Paragon for our future defeasances due to them
                  providing us with confidence for a smooth transaction and peace
                  of mind that each transaction will close as promised. I highly
                  recommend Paragon to anyone seeking a trusted defeasance
                  advisor.
                </p>
              </div>
              <figcaption className="flex flex-col gap-4 text-left opacity-100 not-italic">
                <p className="font-heading text-[24px] font-semibold not-italic leading-[24px] tracking-[-0.5px] text-[#1E4FFF] opacity-100 max-lg:text-[20px] max-lg:leading-[24px]">
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
