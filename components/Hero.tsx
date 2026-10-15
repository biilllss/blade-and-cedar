"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { buttonVariants } from "./ui/button";
import { whatsappLink } from "@/lib/config";
import { HERO_IMAGE } from "@/lib/images";
import { cn } from "@/lib/utils";

export default function Hero() {
  const { locale, t } = useLanguage();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <Image
        src={HERO_IMAGE}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Charcoal veil so text stays readable and the mood stays dark */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-5 pb-24 pt-28 text-center md:px-8">
        <p className="flex items-center justify-center gap-4 text-xs uppercase tracking-[0.3em] text-gold">
          <span aria-hidden="true" className="hidden h-px w-10 bg-gold/60 sm:block" />
          {t.hero.eyebrow}
          <span aria-hidden="true" className="hidden h-px w-10 bg-gold/60 sm:block" />
        </p>

        <h1 className="mt-6 font-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl">
          {t.hero.title}{" "}
          <span className="text-gold italic">{t.hero.titleAccent}</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base text-cream/70 md:text-lg">
          {t.hero.subtitle}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {/* Primary — WhatsApp booking */}
          <a
            href={whatsappLink(locale)}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}
          >
            {t.hero.primaryCta}
          </a>
          {/* Secondary — scroll to services */}
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

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label={t.about.eyebrow}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cream/50 transition-colors hover:text-gold"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}
