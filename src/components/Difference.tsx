import Image from "next/image";
import Link from "next/link";
import AnimatedSectionDecor from "@/components/AnimatedSectionDecor";
import SectionEdge from "@/components/SectionEdge";

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
    layout: "lg:col-span-4 lg:col-start-1 lg:row-start-1",
    align: "left",
  },
  {
    icon: "/icons/difference-2.png",
    title: "Every deal is built to preempt problems, not react to them.",
    description:
      "We map the servicer's requirements against your closing date before the process begins. The result is fewer last-minute requests and surprises when timing matters most.",
    layout: "lg:col-span-4 lg:col-start-5 lg:row-start-1 lg:mt-36",
    align: "center",
  },
  {
    icon: "/icons/difference-3.png",
    title: "Senior-led execution on every transaction.",
    description:
      "You work directly with experienced professionals who have personally closed defeasance transactions, not with associates relaying messages.",
    layout: "lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:mt-[22rem]",
    align: "left",
    blockAlign: "right",
    cta: true,
  },
] as const;

export default function Difference() {
  return (
    <section className="relative z-10 section-edge-overlap overflow-x-hidden bg-[#000C22] pb-0">
      <AnimatedSectionDecor variant="difference" />
      <SectionEdge variant="difference-top" className="z-20" />

      <div className="relative z-[2] mx-auto w-full max-w-[1440px] px-6 pb-20 pt-[var(--section-edge-height)] lg:px-12 lg:pb-28 lg:pt-[var(--difference-pt)]">
        <header>
          <p className="font-subheading mb-6 text-sm font-medium text-[#8a9bb5] lg:mb-7 lg:text-[0.9375rem]">
            <span className="mr-1.5 text-paragon-blue/90">»</span>
            What makes us different
          </p>
          <h2 className="whitespace-nowrap text-[1.75rem] font-bold leading-[1.12] tracking-tight text-white sm:text-[2.5rem] lg:text-[3rem] lg:leading-[1.08]">
            The Paragon difference
          </h2>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-14 lg:mt-16 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-0">
          {features.map((feature) => {
            const textAlign =
              feature.align === "center" ? "text-center" : "text-left";
            const articleAlign =
              "blockAlign" in feature && feature.blockAlign === "right"
                ? "lg:ml-auto"
                : feature.align === "center"
                  ? "lg:mx-auto"
                  : "";

            return (
              <article
                key={feature.title}
                className={`max-w-xl ${feature.layout} ${articleAlign}`}
              >
                <div className="flex items-start gap-4">
                  <Image
                    src={feature.icon}
                    alt=""
                    width={52}
                    height={52}
                    className="h-[3.25rem] w-[3.25rem] shrink-0"
                  />
                  <div className={`min-w-0 flex-1 ${textAlign}`}>
                    <h3 className="text-[1.25rem] font-bold leading-[1.3] text-white sm:text-[1.375rem] lg:text-2xl lg:leading-[1.25]">
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-[0.875rem] leading-[1.65] text-white/60 lg:text-[0.9375rem] lg:leading-[1.7]">
                      {feature.description}
                    </p>
                  </div>
                </div>
                {"cta" in feature && feature.cta && (
                  <Link
                    href="/calculator"
                    className="btn-hero group mt-8 inline-flex w-full items-center justify-center gap-2 bg-paragon-green px-6 py-3.5 text-sm font-medium text-[#000C22] transition-[transform,box-shadow,filter] duration-300 hover:scale-[1.02] hover:brightness-105 hover:shadow-[0_8px_30px_rgba(62,232,197,0.25)] sm:text-base"
                  >
                    Estimate Your Costs
                    <ArrowIcon />
                  </Link>
                )}
              </article>
            );
          })}
        </div>
      </div>

      <SectionEdge variant="hero-bottom" className="z-20" />
    </section>
  );
}
