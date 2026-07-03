import Image from "next/image";
import Link from "next/link";
import SectionEdge from "@/components/SectionEdge";
import SectionLabelIcon from "@/components/SectionLabelIcon";

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className="transition-transform group-hover:translate-x-0.5"
    >
      <path
        d="M3 8H13M13 8L9 4M13 8L9 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const features = [
  {
    icon: "/icons/difference-1.png",
    title: "We know what servicers need before they ask for it.",
    description:
      "Our team has worked inside major CMBS servicer organizations. We know what each servicer requires, what they'll question, and what 'complete' means to the team approving the file.",
    layout: "lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:pt-0",
  },
  {
    icon: "/icons/difference-2.png",
    title: "Every deal is built to preempt problems, not react to them.",
    description:
      "We map the servicer's requirements against your closing date before the process begins. The result is fewer last-minute requests and surprises when timing matters most.",
    layout: "lg:col-span-4 lg:col-start-5 lg:row-start-1 lg:-ml-10 lg:pt-[348px]",
  },
  {
    icon: "/icons/difference-3.png",
    title: "Senior-led execution on every transaction.",
    description:
      "You work directly with experienced professionals who have personally closed defeasance transactions, not with associates relaying messages.",
    layout:
      "lg:col-span-4 lg:col-start-9 lg:row-start-1 lg:-ml-32 lg:pt-[696px]",
    cta: true,
  },
] as const;

export default function Difference() {
  return (
    <section className="full-bleed relative z-10 section-edge-overlap overflow-hidden bg-[#000C22] pb-0">
      <div
        className="pointer-events-none absolute bottom-[-24px] left-[-8px] z-[1] max-lg:block lg:hidden"
        aria-hidden
      >
        <Image
          src="/difference-decor-mobile-bl.png"
          alt=""
          width={127}
          height={518}
          className="h-[518px] w-[127px] max-w-none opacity-100"
        />
      </div>
      <div
        className="pointer-events-none absolute right-[-36px] top-[-150px] z-[1] max-lg:block lg:hidden"
        aria-hidden
      >
        <Image
          src="/difference-decor-mobile.png"
          alt=""
          width={206}
          height={518}
          className="h-[518px] w-[206px] max-w-none opacity-100"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 z-[1] mx-auto hidden max-w-[1440px] lg:block"
        aria-hidden
      >
        <Image
          src="/difference-decor.png"
          alt=""
          width={516}
          height={1393}
          className="absolute left-[940px] top-[-518px] h-[1393px] w-[516px] max-w-none opacity-100"
        />
        <Image
          src="/difference-decor-bl.png"
          alt=""
          width={516}
          height={1393}
          className="absolute bottom-[-500px] left-[-16px] h-[1393px] w-[516px] max-w-none opacity-100"
        />
      </div>

      <SectionEdge variant="difference-top" className="z-20" />

      <div className="relative z-[3] mx-auto flex w-full max-w-[1440px] flex-col px-12 pb-16 pt-[var(--difference-pt)] max-lg:min-h-[1122px] max-lg:max-w-[402px] max-lg:px-5 max-lg:pb-12 max-lg:pt-[var(--section-edge-height)]">
        <header className="w-full">
          <div className="mb-6 flex items-center gap-2.5 lg:mb-7">
            <SectionLabelIcon variant="dark" />
            <span className="font-subheading text-sm font-medium text-[#8a9bb5] lg:text-[0.9375rem]">
              What makes us different
            </span>
          </div>
          <h2 className="font-heading h-[70px] w-full max-w-[680px] text-[54px] font-medium leading-[70px] tracking-[-2px] text-white max-lg:h-[94px] max-lg:max-w-[367px] max-lg:text-[36px] max-lg:leading-[47px] max-lg:tracking-[-1.5px]">
            The Paragon difference
          </h2>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-6 lg:grid-cols-12 lg:grid-rows-1 lg:items-start lg:gap-y-0">
          {features.map((feature) => (
            <article
              key={feature.title}
              className={`w-full lg:w-[592px] lg:max-w-none ${feature.layout}`}
            >
              <div className="flex items-start gap-[29px] opacity-100 lg:h-[220px] lg:w-[592px] max-lg:gap-[8.54px]">
                <Image
                  src={feature.icon}
                  alt=""
                  width={99}
                  height={82}
                  className="h-[82.08px] w-[98.95px] shrink-0 object-contain object-left opacity-100 max-lg:h-[60.02px] max-lg:w-[65.13px]"
                />
                <div className="flex min-w-0 flex-1 flex-col gap-5 text-left lg:h-[220px] lg:w-[461px] max-lg:w-[277px] max-lg:gap-0">
                  <h3 className="font-heading h-[84px] w-[461px] text-[32px] font-medium leading-[42px] tracking-[-1.5px] text-white max-lg:h-[84px] max-lg:w-[277px] max-lg:text-[24px] max-lg:leading-[28px] max-lg:tracking-[-0.96px]">
                    {feature.title}
                  </h3>
                  <p className="font-sans h-[116px] w-[461px] text-[18px] font-normal leading-[29px] tracking-[-0.25px] text-[#FFFFFFB2] max-lg:h-[110px] max-lg:w-[277px] max-lg:text-[14px] max-lg:leading-[22px] max-lg:tracking-[-0.16px]">
                    {feature.description}
                  </p>
                </div>
              </div>
              {"cta" in feature && feature.cta && (
                <div className="mt-6 lg:mt-8 lg:pl-[128px]">
                  <Link
                    href="/calculator"
                    className="btn-hero group inline-flex h-[54px] w-full items-center justify-center gap-3 bg-[#31EE97] px-[25px] text-sm font-medium text-[#000C22] opacity-100 transition-[transform,box-shadow,filter] duration-300 hover:scale-[1.02] hover:brightness-105 hover:shadow-[0_8px_30px_rgba(49,238,151,0.25)] sm:text-base lg:w-[317px]"
                  >
                    Estimate Your Costs
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
