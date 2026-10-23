/* ─────────────────────────────────────────────────────────────
   ALL IMAGE PATHS LIVE HERE — every URL below has been verified to
   resolve. Swap these for real photos of the shop later; nothing
   else in the codebase needs to change.
   ───────────────────────────────────────────────────────────── */

export interface SiteImage {
  src: string;
  alt: { en: string; ar: string };
}

const uns = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

/** Hero background — dark barbershop interior */
export const HERO_IMAGE = uns("photo-1585747860715-2ba37e788b70", 1920);

/** About section — the shop mid-afternoon */
export const ABOUT_IMAGE: SiteImage = {
  src: uns("photo-1759134248487-e8baaf31e33e", 1200),
  alt: {
    en: "Inside Blade & Cedar — clients receiving haircuts",
    ar: "داخل بليد آند سيدر — زبائن أثناء الحلاقة",
  },
};

/** Gallery grid — 6 shots, mixed mosaic layout */
export const GALLERY_IMAGES: SiteImage[] = [
  {
    src: uns("photo-1503951914875-452162b0f3f1", 1200),
    alt: { en: "Classic haircut in progress", ar: "قصّة كلاسيكية أثناء العمل" },
  },
  {
    src: uns("photo-1622286342621-4bd786c2447c", 900),
    alt: { en: "Beard work in the chair", ar: "شغل لحية عالكرسي" },
  },
  {
    src: uns("photo-1599351431202-1e0f0137899a", 900),
    alt: { en: "Barber at work on a cut", ar: "الحلّاق عم يشتغل عالقصّة" },
  },
  {
    src: uns("photo-1654097800183-574ba7368f74", 900),
    alt: { en: "Fade work on a client", ar: "شغل فايد على أحد الزبائن" },
  },
  {
    src: uns("photo-1552058544-f2b08422138a", 900),
    alt: { en: "Styled finish after a cut", ar: "تصفيف نهائي بعد القصّة" },
  },
  {
    src: uns("photo-1621607512214-68297480165e", 900),
    alt: { en: "Hot towel before the razor", ar: "منشفة سخنة قبل الموّس" },
  },
];

/** Barber portraits — index-aligned with the barbers list in lib/i18n.ts */
export const BARBER_IMAGES: SiteImage[] = [
  {
    src: uns("photo-1507003211169-0a1dd7228f2d", 800),
    alt: { en: "Karim Haddad, master barber", ar: "كرم حدّاد، حلّاق أوّل" },
  },
  {
    src: uns("photo-1500648767791-00dcc994a43e", 800),
    alt: { en: "Elie Nassar, fade specialist", ar: "إليّ نصّار، مختص بالقصّات التدريجية" },
  },
  {
    src: uns("photo-1506794778202-cad84cf45f1d", 800),
    alt: { en: "Sami Khoury, beard and shave specialist", ar: "سامي خوري، مختص باللحية والحلاقة" },
  },
];
