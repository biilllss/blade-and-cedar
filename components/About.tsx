"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { ABOUT_IMAGE } from "@/lib/images";

/* Asymmetric 7/5 split with a small caption — not a centered feature card. */
export default function About() {
  const { locale, t } = useLanguage();

  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <figure className="md:col-span-7">
          <div className="relative aspect-[4/5] overflow-hidden md:aspect-[4/3]">
            <Image
              src={ABOUT_IMAGE.src}
              alt={ABOUT_IMAGE.alt[locale]}
              fill
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 text-sm italic text-cream/50">
            {t.about.imageCaption}
          </figcaption>
        </figure>

        <div className="md:col-span-5 md:pt-20">
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            {t.about.title}
          </h2>
          <div className="mt-7 space-y-5 text-base leading-relaxed text-cream/70">
            {t.about.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
