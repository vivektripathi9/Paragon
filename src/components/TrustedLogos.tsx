"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

const trustedLogos = [
  { src: "/logos/keybank.png", alt: "KeyBank Real Estate Capital", width: 220, height: 72 },
  { src: "/logos/grandbridge.png", alt: "Grandbridge", width: 210, height: 72 },
  { src: "/logos/berkadia.png", alt: "Berkadia", width: 200, height: 64 },
  { src: "/logos/newmark.png", alt: "Newmark", width: 200, height: 60 },
] as const;

export default function TrustedLogos() {
  const [activeLogo, setActiveLogo] = useState<string | null>(null);

  const handleLogoClick = useCallback((src: string) => {
    setActiveLogo(src);
    window.setTimeout(() => setActiveLogo(null), 500);
  }, []);

  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-10 sm:mt-12 lg:gap-x-16">
      {trustedLogos.map((logo) => (
        <button
          key={logo.src}
          type="button"
          aria-label={logo.alt}
          onClick={() => handleLogoClick(logo.src)}
          className="reputation-logo-btn rounded-sm p-2 transition-opacity hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paragon-blue"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className={`h-14 w-auto object-contain opacity-80 sm:h-16 lg:h-[4.75rem] ${
              activeLogo === logo.src ? "reputation-logo-pop" : ""
            }`}
          />
        </button>
      ))}
    </div>
  );
}
