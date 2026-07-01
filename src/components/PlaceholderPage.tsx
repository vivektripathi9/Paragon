import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

type PlaceholderPageProps = {
  title: string;
};

export function createPlaceholderMetadata(
  title: string,
  description?: string,
): Metadata {
  const siteName = "Paragon Loan Advisors";

  return {
    title: `${title} | ${siteName}`,
    description:
      description ?? `${title} — ${siteName}`,
  };
}

export default function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <div className="relative min-h-screen bg-paragon-navy">
      <Navbar />

      <main className="mx-auto flex min-h-screen max-w-[1440px] flex-col items-center justify-center px-6 py-32 text-center lg:px-12">
        <p className="font-subheading mb-4 text-sm font-medium text-paragon-blue">
          {title}
        </p>
        <h1 className="text-[2rem] font-bold leading-tight text-white sm:text-[2.5rem]">
          Coming soon
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-white/70">
          We&apos;re preparing this page. Check back soon or return to the
          homepage to explore Paragon&apos;s defeasance services.
        </p>
        <Link
          href="/"
          className="btn-hero mt-10 inline-flex items-center justify-center bg-paragon-green px-6 py-3.5 text-sm font-medium text-paragon-navy transition-[transform,box-shadow,filter] duration-300 hover:scale-[1.02] hover:brightness-105 sm:text-base"
        >
          Back to Home
        </Link>
      </main>
    </div>
  );
}
