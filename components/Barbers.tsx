"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { BARBER_IMAGES } from "@/lib/images";
import FadeUp from "./FadeUp";

export default function Barbers() {
  const { locale, t } = useLanguage();

  return (
    <section id="barbers" className="border-y border-cream/10 bg-charcoal-light">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <FadeUp className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            {t.barbers.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            {t.barbers.title}
          </h2>
        </FadeUp>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 md:gap-10">
          {t.barbers.items.map((barber, i) => (
            <FadeUp
              as="article"
              key={barber.name}
              delay={i * 100}
              className="group text-center"
            >
              <div className="relative mx-auto aspect-[3/4] max-w-xs overflow-hidden">
                <Image
                  src={BARBER_IMAGES[i].src}
                  alt={BARBER_IMAGES[i].alt[locale]}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  /* Photos sit slightly desaturated, warming up on hover */
                  className="object-cover saturate-50 transition-all duration-700 group-hover:scale-[1.03] group-hover:saturate-100"
                />
              </div>
              <h3 className="mt-6 font-display text-2xl">{barber.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gold">
                {barber.role}
              </p>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-cream/60">
                {barber.bio}
              </p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
