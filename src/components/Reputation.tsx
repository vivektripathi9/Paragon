import TrustedLogos from "@/components/TrustedLogos";
import SectionLabelIcon from "@/components/SectionLabelIcon";

function QuoteIcon() {
  return (
    <div className="flex h-[428px] w-[368px] shrink-0 flex-col gap-2.5 opacity-100 max-md:h-auto max-md:w-auto md:max-[1194px]:h-auto md:max-[1194px]:w-[240px] min-[1195px]:h-[428px] min-[1195px]:w-[368px]">
      <img
        src="/icons/testimonial-quote-icon.svg"
        alt=""
        width={192}
        height={185}
        aria-hidden
        className="mt-24 ml-20 h-[185px] w-[192px] shrink-0 object-contain object-left opacity-100 max-md:mt-0 max-md:ml-0 max-md:h-[154px] max-md:w-[160px] md:max-[1194px]:mt-8 md:max-[1194px]:ml-0 md:max-[1194px]:h-[140px] md:max-[1194px]:w-[145px] min-[1195px]:mt-24 min-[1195px]:ml-20 min-[1195px]:h-[185px] min-[1195px]:w-[192px]"
      />
    </div>
  );
}

export default function Reputation() {
  return (
    <section className="full-bleed relative h-[1353.5px] overflow-hidden bg-[#F0F3FC] max-md:h-auto max-md:min-h-[1512px] md:max-[1194px]:h-auto md:max-[1194px]:max-w-[1194px] md:max-[1194px]:min-h-0 min-[1195px]:h-[1353.5px]">
      <div className="mx-auto flex h-full w-full max-w-[1440px] flex-col px-12 pb-0 pt-24 max-md:min-h-[1512px] max-md:max-w-[402px] max-md:px-5 max-md:pb-20 max-md:pt-[38px] md:max-[1194px]:max-w-[1194px] md:max-[1194px]:px-[33px] md:max-[1194px]:pb-32 md:max-[1194px]:pt-14 min-[1195px]:px-12 min-[1195px]:pb-0 min-[1195px]:pt-24">
        <header className="w-full">
          <div className="mb-6 flex items-center gap-2.5 md:max-[1194px]:mb-5 min-[1195px]:mb-8">
            <SectionLabelIcon variant="light" />
            <span className="font-subheading text-sm font-medium text-paragon-blue min-[1195px]:text-[0.9375rem]">
              Reputation
            </span>
          </div>

          <h2 className="font-heading h-[68px] w-full max-w-[863px] text-[54px] font-medium leading-[68px] tracking-[-2px] text-paragon-navy max-md:h-auto max-md:text-[32px] max-md:leading-[42px] max-md:tracking-[-1.5px] md:max-[1194px]:h-auto md:max-[1194px]:max-w-full md:max-[1194px]:text-[42px] md:max-[1194px]:font-medium md:max-[1194px]:leading-[56.38px] md:max-[1194px]:tracking-[-1.5px]">
            Recommended by the professionals
          </h2>

          <p className="mt-5 w-full max-w-[954px] font-sans text-[24px] font-medium leading-[40px] tracking-[-0.25px] text-[#000C22B2] max-md:mt-4 max-md:h-[156px] max-md:max-w-[362px] max-md:text-[16px] max-md:leading-[26px] max-md:text-[#000C22CC] md:max-[1194px]:mt-4 md:max-[1194px]:h-auto md:max-[1194px]:max-w-full md:max-[1194px]:text-[17px] md:max-[1194px]:font-medium md:max-[1194px]:leading-[29px] md:max-[1194px]:tracking-[-0.25px] md:max-[1194px]:text-[#000C22B2]">
            The specialists responsible for reviewing defeasance transactions at
            many of the nation&apos;s largest CMBS servicer organizations
            regularly recommend Paragon because our transactions arrive complete,
            organized, and ready for review.
          </p>
        </header>

        <div className="mt-14 flex w-full items-center justify-between gap-2 sm:mt-16 md:max-[1194px]:mt-12 md:max-[1194px]:justify-center md:max-[1194px]:gap-3 min-[1195px]:mt-20 min-[1195px]:justify-center min-[1195px]:gap-4">
          <img
            src="/icons/line-4.svg"
            alt=""
            width={483}
            height={1}
            aria-hidden
            className="block h-[1px] min-w-[60px] max-w-[121px] flex-1 shrink opacity-100 max-md:max-w-[121px] md:max-[1194px]:min-w-[80px] md:max-[1194px]:max-w-[320px] md:max-[1194px]:flex-1 min-[1195px]:h-px min-[1195px]:w-[482.5px] min-[1195px]:max-w-none min-[1195px]:flex-none"
          />
          <span className="flex h-[38px] shrink-0 items-center justify-center px-1 font-sans text-center text-[0.9375rem] font-medium uppercase leading-[38px] tracking-[-1px] text-[#000C22] sm:text-base md:max-[1194px]:w-auto md:max-[1194px]:px-2 md:max-[1194px]:text-[20px] min-[1195px]:w-[163px] min-[1195px]:px-0 min-[1195px]:text-[24px]">
            Trusted by
          </span>
          <img
            src="/icons/line-3.svg"
            alt=""
            width={483}
            height={1}
            aria-hidden
            className="block h-[1px] min-w-[60px] max-w-[121px] flex-1 shrink opacity-100 max-md:max-w-[121px] md:max-[1194px]:min-w-[80px] md:max-[1194px]:max-w-[320px] md:max-[1194px]:flex-1 min-[1195px]:h-px min-[1195px]:w-[482.5px] min-[1195px]:max-w-none min-[1195px]:flex-none"
          />
        </div>

        <TrustedLogos />

        <figure className="mt-20 w-full max-md:mt-12 md:max-[1194px]:mt-14 min-[1195px]:mt-20">
          <div className="flex w-full max-w-[1360px] min-w-0 items-start justify-between opacity-100 max-md:flex-col max-md:items-start max-md:gap-10 md:max-[1194px]:flex-row md:max-[1194px]:gap-6 md:max-[1194px]:min-h-0 min-[1195px]:h-[428px]">
            <QuoteIcon />
            <blockquote className="flex min-w-0 flex-col gap-8 text-left opacity-100 max-md:h-auto max-md:w-full max-md:max-w-[362px] md:max-[1194px]:h-auto md:max-[1194px]:w-full md:max-[1194px]:max-w-none md:max-[1194px]:flex-1 md:max-[1194px]:gap-6 min-[1195px]:h-[428px] min-[1195px]:w-[904px]">
              <div className="w-full max-w-[904px] font-sans text-[24px] font-semibold italic leading-[38px] tracking-[-0.25px] text-[#000C22] opacity-100 max-md:h-[480px] max-md:max-w-[362px] max-md:text-[18px] max-md:leading-[30px] md:max-[1194px]:h-auto md:max-[1194px]:max-w-full md:max-[1194px]:text-[20px] md:max-[1194px]:leading-[32px]">
                <p className="font-sans text-[24px] font-semibold italic leading-[38px] tracking-[-0.25px] text-[#000C22] max-md:text-[18px] max-md:leading-[30px] md:max-[1194px]:text-[20px] md:max-[1194px]:leading-[32px]">
                  Over the past five years, RP Management has done 10 defeasance
                  transactions with Paragon. Working with Paragon was a great
                  experience from start to finish. Kevin was organized, answered
                  our questions, addressed our concerns, and kept us informed along
                  the way.
                </p>
                <p className="mt-4 font-sans text-[24px] font-semibold italic leading-[38px] tracking-[-0.25px] text-[#000C22] max-md:text-[18px] max-md:leading-[30px] md:max-[1194px]:text-[20px] md:max-[1194px]:leading-[32px]">
                  We will use Paragon for our future defeasances due to them
                  providing us with confidence for a smooth transaction and peace
                  of mind that each transaction will close as promised. I highly
                  recommend Paragon to anyone seeking a trusted defeasance
                  advisor.
                </p>
              </div>
              <figcaption className="flex flex-col gap-4 text-left opacity-100 not-italic md:max-[1194px]:gap-3">
                <p className="font-heading text-[24px] font-semibold not-italic leading-[24px] tracking-[-0.5px] text-[#1E4FFF] opacity-100 max-md:text-[20px] max-md:leading-[24px] md:max-[1194px]:text-[22px] md:max-[1194px]:leading-[24px]">
                  Jonathan H. Chattley
                </p>
                <p className="font-heading text-[20px] font-normal leading-[14px] tracking-[-0.5px] text-[#000C22] max-md:text-[16px] md:max-[1194px]:text-[18px] md:max-[1194px]:leading-[14px]">
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
