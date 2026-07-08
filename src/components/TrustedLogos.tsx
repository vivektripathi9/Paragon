"use client";

import { useCallback, useState } from "react";

const trustedLogos = [
  {
    src: "/logos/trusted-7.svg",
    alt: "KeyBank Real Estate Capital",
    width: 189,
    height: 79,
  },
  {
    src: "/logos/trusted-10.svg",
    alt: "Newmark",
    width: 189,
    height: 79,
  },
  {
    src: "/logos/trusted-8.svg",
    alt: "Grandbridge",
    width: 189,
    height: 79,
  },
  {
    src: "/logos/trusted-9.svg",
    alt: "Berkadia",
    width: 189,
    height: 79,
  },
] as const;

export default function TrustedLogos() {
  const [activeLogo, setActiveLogo] = useState<string | null>(null);

  const handleLogoClick = useCallback((src: string) => {
    setActiveLogo(src);
    window.setTimeout(() => setActiveLogo(null), 500);
  }, []);

  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-x-28 gap-y-10 sm:mt-12 max-lg:gap-x-6 max-lg:gap-y-8 sm:max-lg:gap-x-10">
      {trustedLogos.map((logo) => (
        <button
          key={logo.src}
          type="button"
          aria-label={logo.alt}
          onClick={() => handleLogoClick(logo.src)}
          className="reputation-logo-btn rounded-sm p-3 transition-opacity hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paragon-blue"
        >
          <img
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className={`h-[79px] w-[189px] object-contain opacity-[0.67] max-lg:h-14 max-lg:w-auto max-lg:opacity-65 sm:max-lg:h-16 ${
              activeLogo === logo.src ? "reputation-logo-pop" : ""
            }`}
          />
        </button>
      ))}
    </div>
  );
}
