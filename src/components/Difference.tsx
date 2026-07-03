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

      <div className="relative z-[3] mx-auto flex w-full max-w-[1440px] flex-col px-5 pb-12 pt-[var(--section-edge-height)] sm:px-6 lg:px-12 lg:pb-16 lg:pt-[var(--difference-pt)]">
        <header className="w-full">
          <div className="mb-6 flex items-center gap-2.5 lg:mb-7">
            <SectionLabelIcon variant="dark" />
            <span className="font-subheading text-sm font-medium text-[#8a9bb5] lg:text-[0.9375rem]">
              What makes us different
            </span>
          </div>
          <h2 className="font-heading w-full max-w-[680px] text-[1.75rem] font-medium leading-[1.2] tracking-[-1px] text-white sm:text-[2.25rem] sm:tracking-[-1.5px] lg:h-[70px] lg:w-[680px] lg:text-[54px] lg:leading-[70px] lg:tracking-[-2px]">
            The Paragon difference
          </h2>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:gap-12 lg:mt-6 lg:grid-cols-12 lg:grid-rows-1 lg:items-start lg:gap-y-0">
          {features.map((feature) => (
            <article
              key={feature.title}
              className={`max-w-[22rem] sm:max-w-md lg:max-w-none lg:w-[592px] ${feature.layout}`}
            >
              <div className="flex items-start gap-4 opacity-100 lg:h-[220px] lg:w-[592px] lg:gap-[29px]">
                <Image
                  src={feature.icon}
                  alt=""
                  width={99}
                  height={82}
                  className="h-[4.5rem] w-[5.5rem] shrink-0 object-contain object-left opacity-100 sm:h-[5rem] sm:w-[6rem] lg:h-[82.08px] lg:w-[98.95px]"
                />
                <div className="flex min-w-0 flex-1 flex-col gap-5 text-left lg:h-[220px] lg:w-[461px]">
                  <h3 className="font-heading text-[1.25rem] font-medium leading-[1.3] tracking-[-1px] text-white sm:text-[1.375rem] sm:tracking-[-1.25px] lg:h-[84px] lg:w-[461px] lg:text-[32px] lg:leading-[42px] lg:tracking-[-1.5px]">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-[0.875rem] font-normal leading-[1.65] tracking-[-0.25px] text-[#FFFFFFB2] lg:h-[116px] lg:w-[461px] lg:text-[18px] lg:leading-[29px]">
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
