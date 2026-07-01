"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
] as const;

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-transparent">
      <nav
        className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 lg:px-12"
        aria-label="Main navigation"
      >
        <Link href="/" className="relative shrink-0">
          <Image
            src="/logo.png"
            alt="Paragon"
            width={160}
            height={36}
            className="h-8 w-auto lg:h-9"
            priority
          />
        </Link>

        <div className="flex items-center gap-8 lg:gap-10">
          <ul className="hidden items-center gap-8 md:flex lg:gap-10">
            {navLinks.map(({ href, label }) => {
              const isActive =
                href === "/" ? pathname === "/" : pathname.startsWith(href);

              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`font-subheading relative pb-1 text-sm font-medium text-white transition-opacity hover:opacity-80 lg:text-base ${
                      isActive
                        ? "after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-paragon-accent"
                        : ""
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/calculator"
            className="bg-calculator-btn shrink-0 bg-white px-5 py-2.5 text-sm font-medium text-black transition-opacity hover:opacity-90 lg:px-6 lg:text-base"
          >
            Calculator
          </Link>
        </div>
      </nav>
    </header>
  );
}
