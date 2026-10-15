/* ─────────────────────────────────────────────────────────────
   ALL IMAGE PATHS LIVE HERE — swap these Unsplash placeholders
   for real photos of the shop later. Nothing else needs to change.
   ───────────────────────────────────────────────────────────── */

export interface SiteImage {
  src: string;
  alt: { en: string; ar: string };
}

const uns = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`;

/** Hero background */
export const HERO_IMAGE = uns("photo-1585747880733-17c9c2b8d878", 1920);

/** About section */
export const ABOUT_IMAGE: SiteImage = {
  src: uns("photo-1503951914875-452162b0f3f8", 1200),
  alt: {
    en: "A barber focused on a haircut inside Blade & Cedar",
    ar: "حلّاق يعمل بتركيز داخل صالون بليد أند سيدر",
  },
};

/** Gallery grid — 6 shots */
export const GALLERY_IMAGES: SiteImage[] = [
  {
    src: uns("photo-1599351431202-42e136a16827", 900),
    alt: { en: "Skin fade in progress", ar: "قصّة تدريجية أثناء العمل" },
  },
  {
    src: uns("photo-1622286342621-4bd78442808f", 900),
    alt: { en: "Beard shaping with a trimmer", ar: "تحديد اللحية بالماكينة" },
  },
  {
    src: uns("photo-1519085360753-af0119f7cbe7", 900),
    alt: { en: "Client after a fresh cut", ar: "زبون بعد قصّة جديدة" },
  },
  {
    src: uns("photo-1519345182560-3f2917c69215", 900),
    alt: { en: "Classic haircut with scissors", ar: "قصّة كلاسيكية بالمقصّ" },
  },
  {
    src: uns("photo-1552058544-f2b08422138a", 900),
    alt: { en: "Sharp fade on a client", ar: "فايد نظيف على أحد الزبائن" },
  },
  {
    src: uns("photo-1552374196-c4e49ffc7734", 900),
    alt: { en: "Styled finish after a cut", ar: "تصفيف نهائي بعد القصّة" },
  },
];

/** Barber portraits — index-aligned with the barbers list in lib/i18n.ts */
export const BARBER_IMAGES: SiteImage[] = [
  {
    src: uns("photo-1507003211169-0a1dd7228f2d", 800),
    alt: { en: "Karim Haddad, master barber", ar: "كرم حدّاد، حلاّق أوّل" },
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
