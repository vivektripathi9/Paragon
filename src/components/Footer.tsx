import Link from "next/link";
import ArrowIcon from "@/components/ArrowIcon";
import SectionEdge from "@/components/SectionEdge";
import SectionLabelIcon from "@/components/SectionLabelIcon";

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
    <footer className="relative z-10 w-full section-edge-overlap overflow-hidden bg-paragon-navy pb-0 max-lg:min-h-[1480px] max-lg:bg-[linear-gradient(180deg,#04143c_0%,#0A2168_38%,#000C22_58%,#000C22_100%)]">
      <div className="footer-bg max-lg:hidden" aria-hidden>
        <img
          src="/footer-background.svg"
          alt=""
          width={1441}
          height={897}
          className="footer-bg__img max-w-none"
        />
      </div>
      <div className="footer-bg-mobile max-lg:block lg:hidden" aria-hidden>
        <div className="footer-bg-mobile__layer">
          <img
            src="/footer-decor-mobile.png"
            alt=""
            width={209}
            height={581}
            className="h-[581px] w-[209px] max-w-none"
          />
        </div>
      </div>
      <div className="hero-bg-grain" aria-hidden />
      <SectionEdge variant="reputation-top" className="z-20" />

      <div className="relative z-[2] mx-auto w-full min-w-0 max-w-[1440px] overflow-x-hidden px-12 pb-0 pt-24 max-lg:min-h-[1480px] max-lg:max-w-[402px] max-lg:px-5 max-lg:pb-16 max-lg:pt-[var(--section-edge-height)]">
        <div className="flex min-w-0 flex-col gap-10 border-b border-white/10 pb-14 lg:flex-row lg:items-end lg:justify-between lg:gap-0 lg:pb-20">
          <div className="-ml-1 min-w-0 max-lg:ml-0 lg:max-w-[661px] lg:shrink">
            <div className="mb-6 flex items-center gap-2.5 lg:mb-8">
              <SectionLabelIcon variant="dark" />
              <span className="font-subheading text-sm font-medium text-paragon-blue lg:text-[0.9375rem]">
                Getting Started
              </span>
            </div>

            <h2 className="font-heading flex h-[146px] w-full max-w-[661px] min-w-0 flex-col justify-between overflow-hidden text-[62px] font-medium tracking-[-3px] text-white max-lg:h-[141px] max-lg:max-w-[367px] max-lg:text-[36px] max-lg:leading-[47px] max-lg:tracking-[-1.5px]">
              <span className="block leading-[73px] max-lg:leading-[47px] lg:whitespace-nowrap">
                Your deal has a timeline.
              </span>
              <span className="block leading-[73px] max-lg:leading-[47px]">
                Let&apos;s get ahead of it.
              </span>
            </h2>
          </div>

          <div className="flex min-w-0 w-full max-w-[551px] shrink flex-col justify-between max-lg:pl-0 lg:h-[146px] lg:pl-6">
            <p className="h-[60px] w-full max-w-[551px] font-sans text-[18px] font-medium leading-[30px] tracking-[-0.25px] text-white/70 max-lg:h-[78px] max-lg:max-w-[367px] max-lg:text-[16px] max-lg:leading-[26px]">
              Speak with Paragon about your loan, your closing date, and the
              variables that will affect your defeasance.
            </p>
            <Link
              href="/contact"
              className="btn-hero group mt-8 inline-flex h-[54px] w-[194px] shrink-0 items-center justify-center gap-3 self-start whitespace-nowrap bg-[#31EE97] px-[25px] py-5 text-sm font-medium text-paragon-navy opacity-100 transition-[transform,box-shadow,filter] duration-300 hover:scale-[1.02] hover:brightness-105 hover:shadow-[0_8px_30px_rgba(49,238,151,0.25)] max-lg:mt-8 max-lg:h-[54px] max-lg:w-full max-lg:max-w-full max-lg:gap-3 max-lg:px-[25px] max-lg:py-5 lg:mt-0 lg:text-base"
            >
              Talk to Paragon
              <ArrowIcon />
            </Link>
          </div>
        </div>

        <div className="grid gap-10 pt-20 pb-20 lg:grid-cols-12 max-lg:gap-12 max-lg:py-14">
          <div className="-mt-6 lg:col-span-5 max-lg:mt-0">
            <div className="flex h-[233px] w-[462px] flex-col gap-8 opacity-100 max-lg:h-auto max-lg:w-full max-lg:max-w-[367px]">
              <div className="flex flex-col gap-2">
                <h3 className="font-heading h-[36px] w-full max-w-[223px] text-[36px] font-medium leading-[36px] tracking-[-1.5px] text-white max-lg:text-[28px] max-lg:leading-[36px] max-lg:tracking-[-1px]">
                  Stay Informed
                </h3>
                <p className="max-w-sm font-sans text-[0.9375rem] font-medium leading-[1.65] tracking-[-0.25px] text-white/60 max-lg:text-[16px] max-lg:leading-[26px] lg:leading-[1.65]">
                  Sign up to receive market insights and defeasance updates. We
                  respect your privacy and send updates sparingly.
                </p>
              </div>
              <form
                className="flex w-full flex-col items-start gap-4 max-lg:max-w-[367px] lg:h-[62px] lg:flex-row lg:items-end lg:border-b lg:border-[#D9D9D9]/65 lg:pb-2 lg:focus-within:border-[#D9D9D9]/65"
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
                  className="box-border h-[54px] w-full min-w-0 flex-1 border-0 bg-transparent font-sans text-base font-normal leading-[18.2px] tracking-[-0.5px] text-white opacity-100 outline-none transition-colors placeholder:text-white/40 max-lg:border-b max-lg:border-[#D9D9D9]/65 max-lg:focus:border-[#D9D9D9]/65 sm:text-sm lg:w-[306px] lg:max-w-[306px] lg:py-[17.9px] lg:text-[20px]"
                />
                <button
                  type="submit"
                  className="clip-chamfer-dual group inline-flex h-[54px] w-[156px] shrink-0 items-center justify-center gap-3 whitespace-nowrap bg-white px-[25px] py-5 text-sm font-medium text-paragon-navy opacity-100 transition-[transform,opacity] duration-300 hover:scale-[1.02] hover:opacity-90 max-lg:h-[54px] max-lg:w-full max-lg:max-w-full max-lg:gap-3 max-lg:px-[25px] max-lg:py-5"
                >
                  Subscribe
                  <ArrowIcon />
                </button>
              </form>
            </div>
          </div>

          <div className="-mt-6 flex flex-row gap-24 lg:col-span-7 lg:col-start-6 lg:justify-end max-lg:mt-0 max-lg:flex-col max-lg:gap-12">
            <div className="-ml-2 flex h-[172px] w-[104px] flex-col gap-2 text-left opacity-100 max-lg:ml-0 max-lg:h-auto max-lg:w-auto max-lg:gap-8">
              <span className="font-subheading block text-base font-bold uppercase leading-6 text-[#FFFFFF99] ![letter-spacing:3px]">
                Links
              </span>
              <ul className="flex flex-col gap-0 max-lg:gap-6">
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

            <div className="flex h-[172px] w-auto flex-col gap-2 text-left opacity-100 max-lg:h-auto max-lg:w-auto max-lg:gap-8">
              <span className="font-subheading block text-base font-bold uppercase leading-6 text-[#FFFFFF99] ![letter-spacing:3px]">
                Contact
              </span>
              <ul className="flex flex-col gap-0 max-lg:gap-6">
                <li>
                  <a
                    href="tel:+18009402551"
                    className="inline-flex min-h-[26px] items-center py-[5px] font-sans text-[20px] font-[500] not-italic leading-[26px] tracking-[-0.25px] text-white transition-colors hover:text-paragon-blue active:text-paragon-blue"
                  >
                    (800) 940-2551
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@paragonla.com"
                    className="inline-flex min-h-[26px] items-center py-[5px] font-sans text-[20px] font-[500] not-italic leading-[26px] tracking-[-0.25px] text-white underline decoration-white/40 underline-offset-4 transition-colors hover:text-paragon-blue hover:decoration-paragon-blue/60 active:text-paragon-blue active:decoration-paragon-blue/60"
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
