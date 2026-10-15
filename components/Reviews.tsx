"use client";

import { useLanguage } from "./LanguageProvider";

/* Borderless quotes, no star icons — one featured, two supporting. */
export default function Reviews() {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <h2 className="font-display text-4xl leading-tight md:text-5xl">
        {t.reviews.title}
      </h2>

      <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
        {t.reviews.items.map((review, i) => (
          <figure key={review.name} className="flex flex-col">
            <span
              aria-hidden="true"
              className="select-none font-display text-6xl leading-[0.5] text-gold/70"
            >
              “
            </span>
            <blockquote
              className={
                "mt-6 leading-relaxed text-cream/85 " +
                (i === 0
                  ? "font-display text-2xl md:text-[1.7rem]"
                  : "text-base")
              }
            >
              {review.quote}
            </blockquote>
            <figcaption className="mt-6 text-sm text-cream/50">
              — {review.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
