"use client";

import { Quote, Star } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import FadeUp from "./FadeUp";

export default function Reviews() {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <FadeUp className="text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">
          {t.reviews.eyebrow}
        </p>
        <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
          {t.reviews.title}
        </h2>
      </FadeUp>

      <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
        {t.reviews.items.map((review, i) => (
          <FadeUp
            as="figure"
            key={review.name}
            delay={i * 100}
            className="flex flex-col border border-cream/10 p-8 transition-colors duration-300 hover:border-gold/40"
          >
            <Quote aria-hidden="true" className="h-6 w-6 text-gold" />
            <blockquote className="mt-5 flex-1 text-base leading-relaxed text-cream/80">
              {review.quote}
            </blockquote>
            <figcaption className="mt-8">
              {/* Five stars, purely decorative */}
              <div className="flex gap-1 text-gold" aria-hidden="true" title="5/5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <span className="mt-3 block text-xs uppercase tracking-[0.2em] text-cream/50">
                {review.name}
              </span>
            </figcaption>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
