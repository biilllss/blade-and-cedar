"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { buttonVariants } from "./ui/button";
import { whatsappLink } from "@/lib/config";
import { HERO_IMAGE } from "@/lib/images";
import { cn } from "@/lib/utils";

/* Bottom-aligned, start-anchored — an editorial opening, not a poster.
   No scroll-reveal anywhere on this page: content is simply there. */
export default function Hero() {
  const { locale, t } = useLanguage();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden"
    >
      <Image
        src={HERO_IMAGE}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Direction-agnostic veils: flat darkening + bottom fade */}
      <div aria-hidden="true" className="absolute inset-0 bg-charcoal/40" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-40 md:px-8 md:pb-24">
        <p className="text-sm text-cream/70">{t.hero.meta}</p>

        <h1 className="mt-4 max-w-3xl font-display text-6xl leading-[0.95] sm:text-7xl lg:text-8xl">
          {t.hero.title}
        </h1>

        <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/75">
          {t.hero.subtitle}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappLink(locale)}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}
          >
            {t.hero.primaryCta}
          </a>
          <a
            href="#services"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "w-full sm:w-auto"
            )}
          >
            {t.hero.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}
