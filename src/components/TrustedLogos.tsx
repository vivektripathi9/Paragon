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
  {
    src: "/logos/trusted-10.svg",
    alt: "Newmark",
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
    <div className="reputation-logos flex items-center justify-center">
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
            className={`reputation-logo__img object-contain opacity-[0.67] ${
              activeLogo === logo.src ? "reputation-logo-pop" : ""
            }`}
          />
        </button>
      ))}
    </div>
  );
}
