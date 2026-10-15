"use client";

import { useLanguage } from "./LanguageProvider";

/**
 * A quiet price ticker between the hero and the story — static text,
 * no marquee animation. Gives the eye a rest between big sections.
 */
export default function ServiceStrip() {
  const { t } = useLanguage();

  return (
    <div aria-label={t.services.title} className="border-y border-cream/10 bg-charcoal-light">
      <p className="mx-auto flex max-w-7xl flex-wrap gap-x-6 gap-y-1 px-5 py-3 text-sm text-cream/60 md:px-8">
        {t.services.items.map((item) => (
          <span key={item.name}>
            {item.name} <span className="text-gold">{item.price}</span>
          </span>
        ))}
      </p>
    </div>
  );
}
