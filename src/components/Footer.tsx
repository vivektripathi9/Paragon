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
    <footer className="footer-section relative z-10 w-full section-edge-overlap overflow-hidden bg-paragon-navy pb-0 max-[768px]:min-h-[1480px]">
      <div className="footer-bg max-[768px]:hidden min-[769px]:block" aria-hidden>
        <img
          src="/footer-background.svg"
          alt=""
          width={1441}
          height={897}
          className="footer-bg__img max-w-none"
        />
      </div>
      <div className="footer-bg-mobile max-[768px]:block min-[769px]:hidden" aria-hidden>
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

      <div className="footer-shell relative z-[2] mx-auto w-full min-w-0 max-w-[1440px] overflow-x-hidden max-[768px]:max-w-[402px] max-[768px]:px-5 max-[768px]:pb-16">
        <div className="footer-cta flex min-w-0 flex-col border-b border-white/10">
          <div className="footer-cta__left min-w-0">
            <div className="footer-label mb-6 flex items-center gap-2.5">
              <SectionLabelIcon variant="dark" />
              <span className="footer-label__text font-subheading text-sm font-medium text-paragon-blue">
                Getting Started
              </span>
            </div>

            <h2 className="footer-cta__title font-heading font-medium text-white">
              <span className="footer-cta__title-line block">
                Your deal has a timeline.
              </span>
              <span className="footer-cta__title-line block">
                Let&apos;s get ahead of it.
              </span>
            </h2>
          </div>

          <div className="footer-cta__right flex min-w-0 flex-col">
            <p className="footer-cta__body font-sans font-medium tracking-[-0.25px] text-white/70">
              Speak with Paragon about your loan, your closing date, and the
              variables that will affect your defeasance.
            </p>
            <Link
              href="/contact"
              className="footer-cta__button btn-hero group inline-flex h-[54px] shrink-0 items-center justify-center gap-3 self-start whitespace-nowrap bg-[#31EE97] px-[25px] py-5 text-sm font-medium text-paragon-navy opacity-100 transition-[transform,box-shadow,filter] duration-300 hover:scale-[1.02] hover:brightness-105 hover:shadow-[0_8px_30px_rgba(49,238,151,0.25)]"
            >
              Talk to Paragon
              <ArrowIcon />
            </Link>
          </div>
        </div>

        <div className="footer-middle grid min-w-0">
          <div className="footer-newsletter min-w-0">
            <div className="footer-newsletter__inner flex flex-col">
              <div className="flex flex-col gap-2">
                <h3 className="footer-newsletter__title font-heading font-medium text-white">
                  Stay Informed
                </h3>
                <p className="footer-newsletter__copy font-sans font-medium tracking-[-0.25px] text-white/60">
                  Sign up to receive market insights and defeasance updates. We
                  respect your privacy and send updates sparingly.
                </p>
              </div>
              <form
                className="footer-newsletter__form flex w-full min-w-0"
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
                  className="footer-newsletter__input box-border min-w-0 flex-1 border-0 bg-transparent font-sans font-normal tracking-[-0.5px] text-white opacity-100 outline-none transition-colors placeholder:text-white/40"
                />
                <button
                  type="submit"
                  className="footer-newsletter__submit clip-chamfer-dual group inline-flex h-[54px] shrink-0 items-center justify-center gap-3 whitespace-nowrap bg-white px-[25px] py-5 text-sm font-medium text-paragon-navy opacity-100 transition-[transform,opacity] duration-300 hover:scale-[1.02] hover:opacity-90"
                >
                  Subscribe
                  <ArrowIcon />
                </button>
              </form>
            </div>
          </div>

          <div className="footer-nav flex min-w-0">
            <div className="footer-links flex flex-col text-left">
              <span className="footer-nav__label font-subheading block font-bold uppercase text-[#FFFFFF99]">
                Links
              </span>
              <ul className="flex flex-col">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`footer-link inline-flex items-center rounded-[5px] font-sans font-medium transition-opacity hover:opacity-80 ${
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

            <div className="footer-contact flex flex-col text-left">
              <span className="footer-nav__label font-subheading block font-bold uppercase text-[#FFFFFF99]">
                Contact
              </span>
              <ul className="flex flex-col">
                <li>
                  <a
                    href="tel:+18009402551"
                    className="footer-contact__item inline-flex items-center font-sans font-medium not-italic tracking-[-0.25px] text-[#B0CCFF] transition-opacity hover:opacity-80"
                  >
                    (800) 940-2551
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@paragonla.com"
                    className="footer-contact__item inline-flex items-center font-sans font-medium not-italic tracking-[-0.25px] text-[#B0CCFF] underline decoration-[#B0CCFF]/40 underline-offset-4 transition-opacity hover:opacity-80 hover:decoration-[#B0CCFF]/60"
                  >
                    info@paragonla.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-legal flex min-w-0 flex-col border-t border-white/10">
          <p className="footer-legal__copy text-white/50">© 2026 Paragon</p>
          <ul className="footer-legal__links flex flex-wrap">
            {legalLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="footer-legal__link inline-flex items-center text-white/50 transition-opacity hover:text-white/70"
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
