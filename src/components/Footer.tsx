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
    <footer className="relative z-10 section-edge-overlap overflow-x-hidden bg-paragon-navy pb-0">
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
        <div className="grid gap-10 border-b border-white/10 pb-14 lg:grid-cols-2 lg:items-end lg:gap-16 lg:pb-20">
          <div>
            <div className="mb-6 flex items-center gap-2.5 lg:mb-8">
              <SectionLabelIcon variant="dark" />
              <span className="font-subheading text-sm font-medium text-paragon-blue lg:text-[0.9375rem]">
                Getting Started
              </span>
            </div>

            <h2 className="max-w-xl text-[1.75rem] font-normal leading-[1.15] text-white sm:text-[2.25rem] lg:text-[2.75rem] lg:leading-[1.12]">
              Your deal has a timeline. Let&apos;s get ahead of it.
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-md text-[0.9375rem] leading-[1.65] text-white/70 lg:text-base lg:leading-[1.7]">
              Speak with Paragon about your loan, your closing date, and the
              variables that will affect your defeasance.
            </p>
            <Link
              href="/contact"
              className="btn-hero group mt-8 inline-flex items-center justify-center gap-2 bg-paragon-green px-6 py-3.5 text-sm font-medium text-paragon-navy transition-[transform,box-shadow,filter] duration-300 hover:scale-[1.02] hover:brightness-105 hover:shadow-[0_8px_30px_rgba(62,232,197,0.25)] sm:mt-10 sm:text-base"
            >
              Talk to Paragon
              <ArrowIcon />
            </Link>
          </div>
        </div>

        <div className="grid gap-12 py-14 lg:grid-cols-12 lg:gap-10 lg:py-20">
          <div className="lg:col-span-5">
            <h3 className="text-lg font-normal text-white sm:text-xl">
              Stay Informed
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60 lg:text-[0.9375rem] lg:leading-[1.65]">
              Sign up to receive market insights and defeasance updates. We
              respect your privacy and send updates sparingly.
            </p>
            <form className="mt-8 max-w-sm" action="#" method="post">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email address"
                className="min-h-11 w-full border-b border-white/25 bg-transparent py-2 pb-3 text-base text-white placeholder:text-white/40 outline-none transition-colors focus:border-white/50 sm:text-sm"
              />
              <button
                type="submit"
                className="clip-chamfer-bl group mt-6 inline-flex items-center justify-center gap-2 bg-white px-6 py-3 text-sm font-medium text-paragon-navy transition-[transform,opacity] duration-300 hover:scale-[1.02] hover:opacity-90"
              >
                Subscribe
                <ArrowIcon />
              </button>
            </form>
          </div>

          <div className="lg:col-span-3">
            <p className="font-subheading text-[0.6875rem] font-semibold tracking-[0.2em] text-white/45 sm:text-xs">
              LINKS
            </p>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`inline-flex min-h-11 items-center py-1 text-base font-medium transition-opacity hover:opacity-80 ${
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

          <div className="lg:col-span-4">
            <p className="font-subheading text-[0.6875rem] font-semibold tracking-[0.2em] text-white/45 sm:text-xs">
              CONTACT
            </p>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="tel:+18009402551"
                  className="inline-flex min-h-11 items-center py-1 text-base font-medium text-white transition-opacity hover:opacity-80"
                >
                  (800) 940-2551
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@paragonla.com"
                  className="inline-flex min-h-11 items-center py-1 text-base font-medium text-white underline decoration-white/40 underline-offset-4 transition-opacity hover:opacity-80"
                >
                  info@paragonla.com
                </a>
              </li>
            </ul>
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
