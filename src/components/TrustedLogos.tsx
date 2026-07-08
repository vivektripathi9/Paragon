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
    <div className="mt-8 flex flex-wrap items-center justify-center gap-x-28 gap-y-10 sm:mt-12 max-md:gap-x-6 max-md:gap-y-8 sm:max-md:gap-x-10 md:max-[1194px]:mt-8 md:max-[1194px]:gap-x-10 md:max-[1194px]:gap-y-8 min-[1195px]:gap-x-28 min-[1195px]:gap-y-10">
      {trustedLogos.map((logo) => (
        <button
          key={logo.src}
          type="button"
          aria-label={logo.alt}
          onClick={() => handleLogoClick(logo.src)}
          className="reputation-logo-btn rounded-sm p-3 transition-opacity hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paragon-blue md:max-[1194px]:p-2"
        >
          <img
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className={`h-[79px] w-[189px] object-contain opacity-[0.67] max-md:h-14 max-md:w-auto max-md:opacity-65 sm:max-md:h-16 md:max-[1194px]:h-[60px] md:max-[1194px]:w-[144px] md:max-[1194px]:opacity-[0.67] min-[1195px]:h-[79px] min-[1195px]:w-[189px] ${
              activeLogo === logo.src ? "reputation-logo-pop" : ""
            }`}
          />
        </button>
      ))}
    </div>
  );
}
