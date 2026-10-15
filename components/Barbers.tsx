"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { BARBER_IMAGES } from "@/lib/images";

/* Photos with quiet captions — names first, roles as a small serif note. */
export default function Barbers() {
  const { locale, t } = useLanguage();

  return (
    <section id="barbers" className="border-y border-cream/10 bg-charcoal-light">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <h2 className="max-w-xl font-display text-4xl leading-tight md:text-5xl">
          {t.barbers.title}
        </h2>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {t.barbers.items.map((barber, i) => (
            <article key={barber.name} className="group">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={BARBER_IMAGES[i].src}
                  alt={BARBER_IMAGES[i].alt[locale]}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  /* Photos sit slightly desaturated, warming up on hover */
                  className="object-cover saturate-50 transition-all duration-700 group-hover:saturate-100"
                />
              </div>
              <h3 className="mt-5 font-display text-2xl">{barber.name}</h3>
              <p className="mt-1 font-display text-sm italic text-gold">
                {barber.role}
              </p>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-cream/60">
                {barber.bio}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
