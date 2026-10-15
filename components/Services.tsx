"use client";

import { useLanguage } from "./LanguageProvider";
import type { Locale } from "@/lib/i18n";

/* Numbered menu — reads like a price list pinned to the wall. */
const NUMBERS: Record<Locale, string[]> = {
  en: ["01", "02", "03", "04", "05", "06"],
  ar: ["٠١", "٠٢", "٠٣", "٠٤", "٠٥", "٠٦"],
};

export default function Services() {
  const { locale, t } = useLanguage();

  return (
    <section id="services" className="border-y border-cream/10 bg-charcoal-light">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-cream/15 pb-6">
          <h2 className="font-display text-5xl md:text-6xl">{t.services.title}</h2>
          <p className="max-w-xs text-sm leading-relaxed text-cream/50 md:text-end">
            {t.services.note}
          </p>
        </div>

        <ul className="mt-4 grid gap-x-16 md:grid-cols-2">
          {t.services.items.map((item, i) => (
            <li
              key={item.name}
              className="flex items-baseline gap-5 border-b border-cream/10 py-5"
            >
              <span className="font-display text-sm italic text-gold">
                {NUMBERS[locale][i]}
              </span>
              <div className="flex-1">
                <h3 className="text-lg">{item.name}</h3>
                <p className="mt-0.5 text-sm text-cream/50">{item.desc}</p>
              </div>
              {/* dir="ltr" keeps "$12" from reordering in RTL flow */}
              <span dir="ltr" className="whitespace-nowrap font-display text-xl">
                {item.price}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
