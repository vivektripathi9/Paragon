"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";

const MAX_SHIFT_X = 52;
const MAX_SHIFT_Y = 38;
const SCALE = 1.14;
const LERP = 0.12;

type HeroSectionProps = {
  children: ReactNode;
};

export default function HeroSection({ children }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const frame = useRef<number | undefined>(undefined);

  useEffect(() => {
    const container = sectionRef.current;
    if (!container) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 1024px)");

    const isActive = () => desktop.matches && !reducedMotion.matches;

    const onMove = (event: MouseEvent) => {
      if (!isActive()) {
        return;
      }

      const rect = container.getBoundingClientRect();
      const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
      const relativeY = (event.clientY - rect.top) / rect.height - 0.5;

      target.current = {
        x: relativeX * MAX_SHIFT_X * 2,
        y: relativeY * MAX_SHIFT_Y * 2,
      };
    };

    const onLeave = () => {
      target.current = { x: 0, y: 0 };
    };

    const tick = () => {
      current.current = {
        x: current.current.x + (target.current.x - current.current.x) * LERP,
        y: current.current.y + (target.current.y - current.current.y) * LERP,
      };
      setOffset({ x: current.current.x, y: current.current.y });
      frame.current = requestAnimationFrame(tick);
    };

    const onDesktopChange = () => {
      if (!isActive()) {
        target.current = { x: 0, y: 0 };
      }
    };

    container.addEventListener("mousemove", onMove, { passive: true });
    container.addEventListener("mouseleave", onLeave);
    desktop.addEventListener("change", onDesktopChange);
    reducedMotion.addEventListener("change", onDesktopChange);
    frame.current = requestAnimationFrame(tick);

    return () => {
      container.removeEventListener("mousemove", onMove);
      container.removeEventListener("mouseleave", onLeave);
      desktop.removeEventListener("change", onDesktopChange);
      reducedMotion.removeEventListener("change", onDesktopChange);
      if (frame.current !== undefined) {
        cancelAnimationFrame(frame.current);
      }
    };
  }, []);

  const transform = `translate3d(${offset.x}px, ${offset.y}px, 0) scale(${SCALE})`;

  return (
    <section
      ref={sectionRef}
      className="full-bleed relative h-[894px] overflow-hidden bg-[#04143c] max-lg:h-[852px]"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 z-0 max-lg:block max-lg:-translate-x-1/2 lg:hidden"
        aria-hidden
      >
        <Image
          src="/hero-background-mobile.png"
          alt=""
          width={402}
          height={544}
          priority
          className="h-[544px] w-[402px] max-w-none"
        />
      </div>
      <div className="absolute inset-0 z-0 hidden overflow-hidden lg:block" aria-hidden>
        <div className="absolute inset-[-6%] will-change-transform" style={{ transform }}>
          <Image
            src="/hero-background.png"
            alt=""
            fill
            priority
            sizes="(max-width: 1440px) 100vw, 1440px"
            className="object-cover object-center"
          />
        </div>
      </div>
      {children}
    </section>
  );
}
