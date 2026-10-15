"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { ABOUT_IMAGE } from "@/lib/images";
import FadeUp from "./FadeUp";

export default function About() {
  const { locale, t } = useLanguage();

  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        {/* Image — square crop, subtle gold frame offset */}
        <FadeUp className="relative">
          <div
            aria-hidden="true"
            className="absolute -start-4 -top-4 h-full w-full border border-gold/30"
          />
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={ABOUT_IMAGE.src}
              alt={ABOUT_IMAGE.alt[locale]}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </FadeUp>

        {/* Story */}
        <FadeUp delay={120}>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            {t.about.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            {t.about.title}
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-cream/70">
            {t.about.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
