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

const footerLinks = [
  { href: "/calculator", label: "Calculator", accent: true },
  { href: "/services", label: "Services" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
] as const;

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/data-policy", label: "Data Policy" },
] as const;

export default function Footer() {
  return (
    <footer className="full-bleed relative z-10 section-edge-overlap overflow-x-hidden bg-paragon-navy pb-0 max-lg:min-h-[1480px] max-lg:bg-[linear-gradient(180deg,#04143c_0%,#0A2168_38%,#000C22_58%,#000C22_100%)]">
      <div className="footer-bg" aria-hidden>
        <img
          src="/footer-background.svg"
          alt=""
          width={1440}
          height={884}
          className="footer-bg__img"
        />
      </div>
      <div className="hero-bg-grain" aria-hidden />
      <SectionEdge variant="reputation-top" className="z-20" />

      <div className="relative z-[2] mx-auto w-full max-w-[1440px] px-12 pb-0 pt-24 max-lg:min-h-[1480px] max-lg:max-w-[402px] max-lg:px-5 max-lg:pb-16 max-lg:pt-[var(--section-edge-height)]">
        <div className="flex flex-col gap-10 border-b border-white/10 pb-14 lg:flex-row lg:items-end lg:justify-between lg:gap-0 lg:pb-20">
          <div>
            <div className="mb-6 flex items-center gap-2.5 lg:mb-8">
              <SectionLabelIcon variant="dark" />
              <span className="font-subheading text-sm font-medium text-paragon-blue lg:text-[0.9375rem]">
                Getting Started
              </span>
            </div>

            <h2 className="font-heading flex h-[146px] w-full max-w-[661px] flex-col justify-between text-[62px] font-medium tracking-[-3px] text-white max-lg:h-[141px] max-lg:max-w-[367px] max-lg:text-[36px] max-lg:leading-[47px] max-lg:tracking-[-1.5px]">
              <span className="block leading-[73px] max-lg:leading-[47px] lg:whitespace-nowrap">
                Your deal has a timeline.
              </span>
              <span className="block leading-[73px] max-lg:leading-[47px]">
                Let&apos;s get ahead of it.
              </span>
            </h2>
          </div>

          <div className="flex w-full max-w-[551px] flex-col justify-between lg:h-[146px]">
            <p className="h-[60px] w-full max-w-[551px] font-sans text-[18px] font-medium leading-[30px] tracking-[-0.25px] text-white/70 max-lg:h-[78px] max-lg:max-w-[367px] max-lg:text-[16px] max-lg:leading-[26px]">
              Speak with Paragon about your loan, your closing date, and the
              variables that will affect your defeasance.
            </p>
            <Link
              href="/contact"
              className="btn-hero group mt-8 inline-flex h-[54px] w-[194px] shrink-0 items-center justify-center gap-3 self-start bg-[#31EE97] px-[25px] py-5 text-sm font-medium text-paragon-navy opacity-100 transition-[transform,box-shadow,filter] duration-300 hover:scale-[1.02] hover:brightness-105 hover:shadow-[0_8px_30px_rgba(49,238,151,0.25)] max-lg:mt-8 max-lg:h-[54px] max-lg:w-[362px] max-lg:gap-3 max-lg:px-[25px] max-lg:py-5 lg:mt-0 lg:text-base"
            >
              Talk to Paragon
              <ArrowIcon />
            </Link>
          </div>
        </div>

        <div className="grid gap-12 py-14 lg:grid-cols-12 lg:gap-10 lg:py-20">
          <div className="lg:col-span-5">
            <h3 className="font-heading h-[36px] w-full max-w-[223px] text-[36px] font-medium leading-[36px] tracking-[-1.5px] text-white max-lg:text-[28px] max-lg:leading-[36px] max-lg:tracking-[-1px]">
              Stay Informed
            </h3>
            <p className="mt-3 max-w-sm font-sans text-[0.9375rem] font-medium leading-[1.65] tracking-[-0.25px] text-white/60 max-lg:text-[16px] max-lg:leading-[26px] lg:leading-[1.65]">
              Sign up to receive market insights and defeasance updates. We
              respect your privacy and send updates sparingly.
            </p>
            <form
              className="mt-8 flex w-full max-w-sm flex-col items-start gap-4 max-lg:max-w-[367px] lg:flex-row lg:items-center"
              action="#"
              method="post"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email address"
                className="box-border h-[54px] w-full min-w-0 flex-1 border-b border-white/25 bg-transparent font-sans text-base font-normal leading-[18.2px] tracking-[-0.5px] text-white opacity-100 outline-none transition-colors placeholder:text-white/40 focus:border-white/50 sm:text-sm lg:w-[306px] lg:max-w-[306px] lg:py-[17.9px] lg:text-[20px]"
              />
              <button
                type="submit"
                className="clip-chamfer-dual group inline-flex h-[54px] w-[156px] shrink-0 items-center justify-center gap-3 bg-white px-[25px] py-5 text-sm font-medium text-paragon-navy opacity-100 transition-[transform,opacity] duration-300 hover:scale-[1.02] hover:opacity-90 max-lg:mr-5 max-lg:h-[54px] max-lg:w-[342px] max-lg:gap-3 max-lg:px-[25px] max-lg:py-5"
              >
                Subscribe
                <ArrowIcon />
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-12 sm:flex-row sm:gap-16 lg:col-span-7 lg:col-start-6 lg:justify-end">
            <div className="flex flex-col gap-8 text-left lg:h-[172px] lg:gap-8">
              <span className="font-subheading block text-base font-bold uppercase leading-6 text-[#FFFFFF99] ![letter-spacing:3px]">
                Links
              </span>
              <ul className="flex flex-col gap-6">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`inline-flex min-h-[26px] items-center rounded-[5px] py-[5px] font-sans text-base font-medium transition-opacity hover:opacity-80 max-lg:text-[16px] max-lg:leading-[26px] max-lg:tracking-[-0.25px] ${
                        "accent" in link && link.accent
                          ? "text-paragon-green"
                          : "text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-8 text-left">
              <span className="font-subheading block text-base font-bold uppercase leading-6 text-[#FFFFFF99] ![letter-spacing:3px]">
                Contact
              </span>
              <ul className="flex flex-col gap-6">
                <li>
                  <a
                    href="tel:+18009402551"
                    className="font-sans text-[20px] font-medium leading-[26px] tracking-[-0.25px] text-white transition-colors hover:text-paragon-blue active:text-paragon-blue"
                  >
                    (800) 940-2551
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@paragonla.com"
                    className="font-sans text-[20px] font-medium leading-[26px] tracking-[-0.25px] text-white underline decoration-white/40 underline-offset-4 transition-colors hover:text-paragon-blue hover:decoration-paragon-blue/60 active:text-paragon-blue active:decoration-paragon-blue/60"
                  >
                    info@paragonla.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between lg:py-8">
          <p className="text-sm text-white/50">© 2026 Paragon</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="inline-flex min-h-11 items-center py-1 text-sm text-white/50 transition-opacity hover:text-white/70"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
