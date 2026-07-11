import Link from "next/link";
import ArrowIcon from "@/components/ArrowIcon";
import SectionEdge from "@/components/SectionEdge";
import SectionLabelIcon from "@/components/SectionLabelIcon";

const features = [
  {
    icon: "/icons/difference-1.svg",
    iconWidth: 99,
    iconHeight: 82,
    title: (
      <>
        <span className="hidden min-[766px]:block">
          <span className="block whitespace-nowrap">
            We know what servicers need before
          </span>
          <span className="block whitespace-nowrap">they ask for it.</span>
        </span>
        <span className="min-[766px]:hidden">
          We know what servicers need before they ask for it.
        </span>
      </>
    ),
    description: (
      <>
        <span className="hidden min-[766px]:block">
          <span className="block whitespace-nowrap">
            Our team has worked inside major CMBS servicer
          </span>
          <span className="block whitespace-nowrap">
            organizations. We know what each servicer requires,
          </span>
          <span className="block whitespace-nowrap">
            what they{"\u2019"}ll question, and what {"\u201c"}complete{"\u201d"}{" "}
            means
          </span>
          <span className="block whitespace-nowrap">
            to the team approving the file.
          </span>
        </span>
        <span className="min-[766px]:hidden">
          Our team has worked inside major CMBS servicer organizations. We know
          what each servicer requires, what they{"\u2019"}ll question, and what{" "}
          {"\u201c"}complete{"\u201d"} means to the team approving the file.
        </span>
      </>
    ),
    variant: "difference-feature--1",
  },
  {
    icon: "/icons/difference-2.svg",
    iconWidth: 99,
    iconHeight: 82,
    title: (
      <>
        <span className="hidden min-[766px]:block">
          <span className="block whitespace-nowrap">
            Every deal is built to preempt
          </span>
          <span className="block whitespace-nowrap">
            problems, not react to them.
          </span>
        </span>
        <span className="min-[766px]:hidden">
          Every deal is built to preempt problems, not react to them.
        </span>
      </>
    ),
    description: (
      <>
        <span className="hidden min-[766px]:block">
          <span className="block whitespace-nowrap">
            We map the servicer{"\u2019"}s requirements against your
          </span>
          <span className="block whitespace-nowrap">
            closing date before the process begins. The result is
          </span>
          <span className="block whitespace-nowrap">
            fewer last-minute requests and surprises when
          </span>
          <span className="block whitespace-nowrap">timing matters most.</span>
        </span>
        <span className="min-[766px]:hidden">
          We map the servicer{"\u2019"}s requirements against your closing date
          before the process begins. The result is fewer last-minute requests
          and surprises when timing matters most.
        </span>
      </>
    ),
    variant: "difference-feature--2",
  },
  {
    icon: "/icons/difference-3.svg",
    iconWidth: 99,
    iconHeight: 82,
    title: (
      <>
        <span className="hidden min-[766px]:block">
          <span className="block whitespace-nowrap">
            Senior-led execution on every
          </span>
          <span className="block whitespace-nowrap">transaction.</span>
        </span>
        <span className="min-[766px]:hidden">
          Senior-led execution on every transaction.
        </span>
      </>
    ),
    description: (
      <>
        <span className="hidden min-[766px]:block">
          <span className="block whitespace-nowrap">
            You work directly with experienced professionals
          </span>
          <span className="block whitespace-nowrap">
            who have personally closed defeasance
          </span>
          <span className="block whitespace-nowrap">
            transactions, not with associates relaying
          </span>
          <span className="block whitespace-nowrap">messages.</span>
        </span>
        <span className="min-[766px]:hidden">
          You work directly with experienced professionals who have personally
          closed defeasance transactions, not with associates relaying messages.
        </span>
      </>
    ),
    variant: "difference-feature--3",
    cta: true,
  },
] as const;

export default function Difference() {
  return (
    <section className="full-bleed relative z-10 section-edge-overlap overflow-hidden bg-[#000C22] pb-0">
      {/* Fluid decor — scales continuously; no breakpoint-swapped assets */}
      <div className="difference-decor-desktop" aria-hidden>
        <img
          src="/icons/Group 13-mobile.svg"
          alt=""
          className="difference-decor-desktop__tr difference-decor-desktop__tr--mobile"
        />
        <img
          src="/icons/Group 13.svg"
          alt=""
          className="difference-decor-desktop__tr difference-decor-desktop__tr--desktop"
        />
        <img
          src="/icons/Group 14.svg"
          alt=""
          className="difference-decor-desktop__bl"
        />
      </div>

      <SectionEdge variant="difference-top" className="z-20" />

      <div className="difference-shell">
        <header className="w-full">
          <div className="mb-[clamp(1rem,2vw,1.75rem)] flex items-center gap-2.5">
            <SectionLabelIcon variant="dark" />
            <span className="font-subheading text-[clamp(0.875rem,1.2vw,0.9375rem)] font-medium text-[#8a9bb5]">
              What makes us different
            </span>
          </div>
          <h2 className="font-heading w-full max-w-[min(42.5rem,100%)] text-[clamp(2.25rem,3.75vw,3.375rem)] font-medium leading-[clamp(2.95rem,4.8vw,4.375rem)] tracking-[-0.04em] text-white">
            The Paragon difference
          </h2>
        </header>

        <div className="difference-features">
          {features.map((feature) => (
            <article
              key={feature.variant}
              className={`difference-feature ${feature.variant}`}
            >
              <div className="difference-feature__row">
                <img
                  src={feature.icon}
                  alt=""
                  width={feature.iconWidth}
                  height={feature.iconHeight}
                />
                <div className="difference-feature__body">
                  <h3 className="difference-feature__title font-heading">
                    {feature.title}
                  </h3>
                  <p className="difference-feature__copy font-sans">
                    {feature.description}
                  </p>
                  {"cta" in feature && feature.cta && (
                    <div className="difference-feature__cta">
                      <Link
                        href="/calculator"
                        className="btn-hero difference-feature__cta-btn group inline-flex items-center justify-center bg-[#31EE97] font-semibold text-[#0A1330] opacity-100 transition-[transform,box-shadow,filter] duration-300 hover:scale-[1.02] hover:brightness-105 hover:shadow-[0_8px_30px_rgba(49,238,151,0.25)]"
                      >
                        <span className="difference-feature__cta-label">
                          Discover the Paragon Difference
                        </span>
                        <ArrowIcon className="difference-feature__cta-arrow" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <SectionEdge variant="hero-bottom" className="z-20" />
    </section>
  );
}
