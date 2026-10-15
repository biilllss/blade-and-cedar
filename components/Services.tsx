"use client";

import { useLanguage } from "./LanguageProvider";
import FadeUp from "./FadeUp";

/**
 * Menu-style price list — reads like a restaurant menu rather than
 * SaaS pricing cards, which suits a barbershop far better.
 */
export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="border-y border-cream/10 bg-charcoal-light">
      <div className="mx-auto max-w-5xl px-5 py-24 md:px-8 md:py-32">
        <FadeUp className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            {t.services.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            {t.services.title}
          </h2>
        </FadeUp>

        <FadeUp delay={100}>
          <ul className="mt-14 border-y border-cream/10">
            {t.services.items.map((item, i) => (
              <FadeUp
                as="li"
                key={item.name}
                delay={i * 60}
                className="border-b border-cream/10 last:border-b-0"
              >
                <div className="group flex items-baseline justify-between gap-6 py-5 md:py-6">
                  <div>
                    <h3 className="font-display text-lg transition-colors group-hover:text-gold md:text-xl">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm text-cream/50">{item.desc}</p>
                  </div>
                  {/* dir="ltr" keeps "$12" from reordering in RTL flow */}
                  <span
                    dir="ltr"
                    className="whitespace-nowrap font-display text-lg text-gold md:text-xl"
                  >
                    {item.price}
                  </span>
                </div>
              </FadeUp>
            ))}
          </ul>
        </FadeUp>

        <FadeUp delay={150}>
          <p className="mt-6 text-center text-xs uppercase tracking-[0.18em] text-cream/40">
            {t.services.note}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
