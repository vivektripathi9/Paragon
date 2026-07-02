"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
] as const;

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex h-5 w-6 flex-col justify-between" aria-hidden>
      <span
        className={`block h-0.5 w-full rounded-full bg-current transition-transform duration-300 ${
          open ? "translate-y-[9px] rotate-45" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-full rounded-full bg-current transition-opacity duration-200 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`block h-0.5 w-full rounded-full bg-current transition-transform duration-300 ${
          open ? "-translate-y-[9px] -rotate-45" : ""
        }`}
      />
    </span>
  );
}

function NavLink({
  href,
  label,
  isActive,
  onNavigate,
  className = "",
}: {
  href: string;
  label: string;
  isActive: boolean;
  onNavigate?: () => void;
  className?: string;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={`font-subheading relative pb-1 text-sm font-medium transition-opacity hover:opacity-80 lg:text-base ${className} ${
        isActive
          ? "after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-paragon-accent"
          : ""
      }`}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-transparent pt-[env(safe-area-inset-top)]">
      <nav
        className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-6 sm:py-5 lg:px-12"
        aria-label="Main navigation"
      >
        <Link href="/" className="relative z-[60] shrink-0">
          <Image
            src="/logo.png"
            alt="Paragon"
            width={160}
            height={36}
            className="h-8 w-auto lg:h-9"
            priority
          />
        </Link>

        <div className="flex items-center gap-3 sm:gap-4 lg:gap-10">
          <ul className="hidden items-center gap-6 lg:flex lg:gap-10">
            {navLinks.map(({ href, label }) => {
              const isActive =
                href === "/" ? pathname === "/" : pathname.startsWith(href);

              return (
                <li key={href}>
                  <NavLink
                    href={href}
                    label={label}
                    isActive={isActive}
                    className="text-white"
                  />
                </li>
              );
            })}
          </ul>

          <Link
            href="/calculator"
            className="bg-calculator-btn relative z-[60] hidden shrink-0 bg-white px-7 py-2.5 text-sm font-medium text-black transition-opacity hover:opacity-90 lg:inline-flex lg:px-6 lg:text-base"
          >
            Calculator
          </Link>

          <button
            type="button"
            className="relative z-[60] inline-flex h-11 w-11 items-center justify-center text-white transition-opacity hover:opacity-80 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <HamburgerIcon open={menuOpen} />
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav-menu"
        className={`fixed inset-0 z-[55] bg-[#021132]/98 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className="absolute inset-0 cursor-default"
          aria-label="Close menu"
          tabIndex={menuOpen ? 0 : -1}
          onClick={closeMenu}
        />

        <div
          className={`relative flex min-h-full flex-col px-5 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-24 transition-transform duration-300 ease-out sm:px-6 ${
            menuOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map(({ href, label }) => {
              const isActive =
                href === "/" ? pathname === "/" : pathname.startsWith(href);

              return (
                <li key={href}>
                  <NavLink
                    href={href}
                    label={label}
                    isActive={isActive}
                    onNavigate={closeMenu}
                    className="block min-h-11 py-3 text-lg text-white"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
