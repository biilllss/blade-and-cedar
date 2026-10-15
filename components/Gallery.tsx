"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { GALLERY_IMAGES } from "@/lib/images";
import FadeUp from "./FadeUp";

export default function Gallery() {
  const { locale, t } = useLanguage();

  return (
    <section id="gallery" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <FadeUp className="text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">
          {t.gallery.eyebrow}
        </p>
        <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
          {t.gallery.title}
        </h2>
      </FadeUp>

      <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
        {GALLERY_IMAGES.map((image, i) => (
          <FadeUp
            as="figure"
            key={image.src}
            delay={(i % 3) * 80}
            className="group overflow-hidden"
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt[locale]}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
