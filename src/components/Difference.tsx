import Image from "next/image";
import Link from "next/link";
import ArrowIcon from "@/components/ArrowIcon";
import SectionEdge from "@/components/SectionEdge";
import SectionLabelIcon from "@/components/SectionLabelIcon";

const features = [
  {
    icon: "/icons/difference-1.svg",
    iconWidth: 102,
    iconHeight: 94,
    title: "We know what servicers need before they ask for it.",
    description:
      "Our team has worked inside major CMBS servicer organizations. We know what each servicer requires, what they\u2019ll question, and what \u201ccomplete\u201d means to the team approving the file.",
    layout:
      "md:max-[1194px]:col-span-4 md:max-[1194px]:col-start-1 md:max-[1194px]:row-start-1 md:max-[1194px]:pt-0 min-[1195px]:col-span-4 min-[1195px]:col-start-1 min-[1195px]:row-start-1 min-[1195px]:pt-0",
  },
  {
    icon: "/icons/difference-2.svg",
    iconWidth: 99,
    iconHeight: 77,
    title: "Every deal is built to preempt problems, not react to them.",
    description:
      "We map the servicer's requirements against your closing date before the process begins. The result is fewer last-minute requests and surprises when timing matters most.",
    layout:
      "md:max-[1194px]:col-span-4 md:max-[1194px]:col-start-5 md:max-[1194px]:row-start-1 md:max-[1194px]:-ml-28 md:max-[1194px]:pt-[348px] min-[1195px]:col-span-4 min-[1195px]:col-start-5 min-[1195px]:row-start-1 min-[1195px]:-ml-10 min-[1195px]:pt-[348px]",
  },
  {
    icon: "/icons/difference-3.svg",
    iconWidth: 82,
    iconHeight: 73,
    title: "Senior-led execution on every transaction.",
    description:
      "You work directly with experienced professionals who have personally closed defeasance transactions, not with associates relaying messages.",
    layout:
      "md:max-[1194px]:col-span-4 md:max-[1194px]:col-start-9 md:max-[1194px]:row-start-1 md:max-[1194px]:-ml-80 md:max-[1194px]:pt-[696px] min-[1195px]:col-span-4 min-[1195px]:col-start-9 min-[1195px]:row-start-1 min-[1195px]:-ml-32 min-[1195px]:pt-[696px]",
    cta: true,
  },
] as const;

export default function Difference() {
  return (
    <section className="full-bleed relative z-10 section-edge-overlap overflow-hidden bg-[#000C22] pb-0">
      <div
        className="pointer-events-none absolute bottom-[-24px] left-[-8px] z-[1] max-md:block md:hidden"
        aria-hidden
      >
        <Image
          src="/icons/Group 14.svg"
          alt=""
          width={516}
          height={1393}
          className="h-[518px] w-[127px] max-w-none opacity-100"
        />
      </div>
      <div
        className="pointer-events-none absolute right-[-36px] top-[-150px] z-[1] max-md:block md:hidden"
        aria-hidden
      >
        <Image
          src="/icons/Group 13.svg"
          alt=""
          width={516}
          height={1393}
          className="h-[518px] w-[206px] max-w-none opacity-100"
        />
      </div>

      <div className="difference-decor-tr pointer-events-none max-md:hidden min-[1195px]:hidden" aria-hidden>
        <img
          src="/icons/Group 13.svg"
          alt=""
          className="difference-decor-tr__img"
        />
      </div>

      <div className="difference-decor-bl pointer-events-none max-md:hidden min-[1195px]:hidden" aria-hidden>
        <img
          src="/icons/Group 14.svg"
          alt=""
          className="difference-decor-bl__img"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1] mx-auto hidden max-w-[1440px] min-[1195px]:block"
        aria-hidden
      >
        <Image
          src="/icons/Group 13.svg"
          alt=""
          width={516}
          height={1393}
          className="absolute left-[940px] top-[-518px] h-[1393px] w-[516px] max-w-none opacity-100"
        />
        <Image
          src="/icons/Group 14.svg"
          alt=""
          width={516}
          height={1393}
          className="absolute bottom-[-500px] left-[-16px] h-[1393px] w-[516px] max-w-none opacity-100"
        />
      </div>

      <SectionEdge variant="difference-top" className="z-20" />

      <div className="relative z-[3] mx-auto flex w-full max-w-[1440px] flex-col px-12 pb-16 pt-[var(--difference-pt)] max-md:min-h-[1122px] max-md:max-w-[402px] max-md:px-5 max-md:pb-12 max-md:pt-[var(--section-edge-height)] md:max-[1194px]:max-w-[1194px] md:max-[1194px]:min-h-[1200px] md:max-[1194px]:px-[33px] md:max-[1194px]:pb-16 md:max-[1194px]:pt-[var(--section-edge-height)]">
        <header className="w-full">
          <div className="mb-6 flex items-center gap-2.5 md:max-[1194px]:mb-6 min-[1195px]:mb-7">
            <SectionLabelIcon variant="dark" />
            <span className="font-subheading text-sm font-medium text-[#8a9bb5] min-[1195px]:text-[0.9375rem]">
              What makes us different
            </span>
          </div>
          <h2 className="font-heading w-full max-w-[680px] text-[54px] font-medium leading-[70px] tracking-[-2px] text-white max-md:h-[94px] max-md:max-w-[367px] max-md:text-[36px] max-md:leading-[47px] max-md:tracking-[-1.5px] md:max-[1194px]:h-auto md:max-[1194px]:max-w-[520px] md:max-[1194px]:text-[42px] md:max-[1194px]:leading-[52px] md:max-[1194px]:tracking-[-1.75px] min-[1195px]:h-[70px]">
            The Paragon difference
          </h2>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-10 max-md:gap-10 md:max-[1194px]:mt-6 md:max-[1194px]:grid-cols-12 md:max-[1194px]:grid-rows-1 md:max-[1194px]:items-start md:max-[1194px]:gap-y-0 min-[1195px]:mt-6 min-[1195px]:grid-cols-12 min-[1195px]:grid-rows-1 min-[1195px]:items-start min-[1195px]:gap-y-0">
          {features.map((feature) => (
            <article
              key={feature.title}
              className={`w-full md:max-[1194px]:w-[592px] md:max-[1194px]:max-w-none min-[1195px]:w-[592px] min-[1195px]:max-w-none ${feature.layout}`}
            >
              <div className="flex items-start gap-[29px] opacity-100 max-md:gap-[8.54px] md:max-[1194px]:h-[220px] md:max-[1194px]:w-[592px] min-[1195px]:h-[220px] min-[1195px]:w-[592px]">
                <img
                  src={feature.icon}
                  alt=""
                  width={feature.iconWidth}
                  height={feature.iconHeight}
                  className="h-[82.08px] w-[98.95px] shrink-0 object-contain object-left opacity-100 max-md:h-[60.02px] max-md:w-[65.13px] md:max-[1194px]:h-[82.08px] md:max-[1194px]:w-[98.95px] min-[1195px]:h-[82.08px] min-[1195px]:w-[98.95px]"
                />
                <div className="flex min-w-0 flex-1 flex-col gap-5 text-left max-md:w-[277px] max-md:gap-0 md:max-[1194px]:h-[220px] md:max-[1194px]:w-[461px] md:max-[1194px]:gap-5 min-[1195px]:h-[220px] min-[1195px]:w-[461px]">
                  <h3 className="font-heading text-[32px] font-medium leading-[42px] tracking-[-1.5px] text-white max-md:h-[84px] max-md:w-[277px] max-md:text-[24px] max-md:leading-[28px] max-md:tracking-[-0.96px] md:max-[1194px]:h-[84px] md:max-[1194px]:w-[461px] md:max-[1194px]:text-[28px] md:max-[1194px]:font-medium md:max-[1194px]:leading-[42px] md:max-[1194px]:tracking-[-1.5px] min-[1195px]:h-[84px] min-[1195px]:w-[461px]">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-[18px] font-normal leading-[29px] tracking-[-0.25px] text-[#FFFFFFB2] max-md:h-[110px] max-md:w-[277px] max-md:text-[14px] max-md:leading-[22px] max-md:tracking-[-0.16px] md:max-[1194px]:h-[116px] md:max-[1194px]:w-[461px] md:max-[1194px]:text-[17px] md:max-[1194px]:font-normal md:max-[1194px]:leading-[29px] md:max-[1194px]:tracking-[-0.25px] min-[1195px]:h-[116px] min-[1195px]:w-[461px]">
                    {feature.description}
                  </p>
                </div>
              </div>
              {"cta" in feature && feature.cta && (
                <div className="mt-6 md:max-[1194px]:mt-8 md:max-[1194px]:pl-[128px] min-[1195px]:mt-8 min-[1195px]:pl-[128px]">
                  <Link
                    href="/calculator"
                    className="btn-hero group inline-flex h-[54px] w-full items-center justify-center gap-3 whitespace-nowrap bg-[#31EE97] px-[25px] text-[16px] font-semibold leading-[14px] tracking-[-0.5px] text-[#0A1330] opacity-100 transition-[transform,box-shadow,filter] duration-300 hover:scale-[1.02] hover:brightness-105 hover:shadow-[0_8px_30px_rgba(49,238,151,0.25)] md:max-[1194px]:w-[317px] min-[1195px]:w-[317px]"
                  >
                    <span className="inline-flex h-[14px] w-[236px] items-center">
                      Discover the Paragon Difference
                    </span>
                    <ArrowIcon />
                  </Link>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>

      <SectionEdge variant="hero-bottom" className="z-20" />
    </section>
  );
}
