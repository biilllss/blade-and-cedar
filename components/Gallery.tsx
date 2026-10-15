"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { GALLERY_IMAGES } from "@/lib/images";

/* Mosaic: one large tile, two stacked beside it, a strip of three below —
   not six identical squares. */
const SPANS = [
  "col-span-2 aspect-[4/3] md:col-span-3 md:row-span-2 md:aspect-auto",
  "aspect-square md:col-span-3 md:aspect-auto",
  "aspect-square md:col-span-3 md:aspect-auto",
  "aspect-square md:col-span-2 md:aspect-auto",
  "aspect-square md:col-span-2 md:aspect-auto",
  "aspect-square md:col-span-2 md:aspect-auto",
];

export default function Gallery() {
  const { locale, t } = useLanguage();

  return (
    <section id="gallery" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-cream/15 pb-6">
        <h2 className="font-display text-5xl md:text-6xl">{t.gallery.title}</h2>
        <p className="text-sm italic text-cream/50">{t.gallery.note}</p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 md:auto-rows-[13rem] md:grid-cols-6 md:gap-4">
        {GALLERY_IMAGES.map((image, i) => (
          <figure
            key={image.src}
            className={`group relative overflow-hidden ${SPANS[i]}`}
          >
            <Image
              src={image.src}
              alt={image.alt[locale]}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
