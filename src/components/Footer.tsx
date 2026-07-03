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
    <footer className="full-bleed relative z-10 section-edge-overlap overflow-x-hidden bg-paragon-navy pb-0">
      <div className="footer-bg" aria-hidden>
        <Image
          src="/footer-background.png"
          alt=""
          fill
          className="footer-bg__img"
          sizes="100vw"
        />
      </div>
      <SectionEdge variant="reputation-top" className="z-20" />

      <div className="relative z-[2] mx-auto w-full max-w-[1440px] px-5 pt-[var(--section-edge-height)] sm:px-6 lg:px-12 lg:pt-24">
        <div className="flex flex-col gap-10 border-b border-white/10 pb-14 lg:flex-row lg:items-end lg:justify-between lg:gap-0 lg:pb-20">
          <div>
            <div className="mb-6 flex items-center gap-2.5 lg:mb-8">
              <SectionLabelIcon variant="dark" />
              <span className="font-subheading text-sm font-medium text-paragon-blue lg:text-[0.9375rem]">
                Getting Started
              </span>
            </div>

            <h2 className="font-heading flex w-full max-w-[661px] flex-col text-[1.75rem] font-medium tracking-[-1px] text-white sm:text-[2.25rem] sm:tracking-[-2px] lg:h-[146px] lg:w-[661px] lg:justify-between lg:text-[62px] lg:tracking-[-3px]">
              <span className="block leading-[1.18] lg:whitespace-nowrap lg:leading-[73px]">
                Your deal has a timeline.
              </span>
              <span className="block leading-[1.18] lg:leading-[73px]">
                Let&apos;s get ahead of it.
              </span>
            </h2>
          </div>

          <div className="flex w-full max-w-[551px] flex-col justify-between lg:h-[146px]">
            <p className="font-sans text-[0.9375rem] font-medium leading-[1.65] tracking-[-0.25px] text-white/70 lg:h-[60px] lg:w-[551px] lg:text-[18px] lg:leading-[30px]">
              Speak with Paragon about your loan, your closing date, and the
              variables that will affect your defeasance.
            </p>
            <Link
              href="/contact"
              className="btn-hero group mt-8 inline-flex h-[54px] w-[194px] shrink-0 items-center justify-center gap-3 self-start bg-[#31EE97] px-[25px] text-sm font-medium text-paragon-navy opacity-100 transition-[transform,box-shadow,filter] duration-300 hover:scale-[1.02] hover:brightness-105 hover:shadow-[0_8px_30px_rgba(49,238,151,0.25)] lg:mt-0 sm:mt-10 sm:text-base"
            >
              Talk to Paragon
              <ArrowIcon />
            </Link>
          </div>
        </div>

        <div className="grid gap-12 py-14 lg:grid-cols-12 lg:gap-10 lg:py-20">
          <div className="lg:col-span-5">
            <h3 className="font-heading w-full max-w-[223px] text-lg font-medium leading-tight tracking-[-1px] text-white sm:text-xl lg:h-[36px] lg:w-[223px] lg:text-[36px] lg:leading-[36px] lg:tracking-[-1.5px]">
              Stay Informed
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60 lg:text-[0.9375rem] lg:leading-[1.65]">
              Sign up to receive market insights and defeasance updates. We
              respect your privacy and send updates sparingly.
            </p>
            <form
              className="mt-8 flex w-full max-w-sm items-center gap-4"
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
                className="clip-chamfer-bl group inline-flex h-[54px] w-[156px] shrink-0 items-center justify-center gap-3 bg-white px-[25px] text-sm font-medium text-paragon-navy opacity-100 transition-[transform,opacity] duration-300 hover:scale-[1.02] hover:opacity-90"
              >
                Subscribe
                <ArrowIcon />
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-12 sm:flex-row sm:gap-16 lg:col-span-7 lg:col-start-6 lg:justify-end">
            <div className="flex flex-col gap-6 text-left lg:h-[172px] lg:gap-6">
              <p className="font-heading h-5 text-[0.6875rem] font-bold uppercase leading-5 tracking-[3px] text-[#FFFFFF99] sm:text-xs lg:text-base lg:leading-5">
                Links
              </p>
              <ul className="flex flex-col gap-6">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`inline-flex min-h-[26px] items-center rounded-[5px] py-[5px] text-base font-medium transition-opacity hover:opacity-80 ${
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

            <div className="text-left">
              <p className="font-heading h-5 text-[0.6875rem] font-bold uppercase leading-5 tracking-[3px] text-[#FFFFFF99] sm:text-xs lg:text-base lg:leading-5">
                Contact
              </p>
              <ul className="mt-6 flex flex-col gap-6">
                <li>
                  <a
                    href="tel:+18009402551"
                    className="font-sans text-base font-medium leading-[26px] tracking-[-0.25px] text-white transition-opacity hover:opacity-80 lg:text-[20px]"
                  >
                    (800) 940-2551
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@paragonla.com"
                    className="font-sans text-base font-medium leading-[26px] tracking-[-0.25px] text-white underline decoration-white/40 underline-offset-4 transition-opacity hover:opacity-80 lg:text-[20px]"
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
