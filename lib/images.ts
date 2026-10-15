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
    src: uns("photo-1519085360753-af0119f7cbe7", 900),
    alt: { en: "Client after a fresh cut", ar: "زبون بعد قصّة جديدة" },
  },
  {
    src: uns("photo-1618049049816-43a00d5b0c3d", 900),
    alt: { en: "Men's haircut with clippers", ar: "قصّة بالماكينة" },
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
    src: uns("photo-1621605815971-fbc98d665033", 900),
    alt: { en: "The barber pole outside the shop", ar: "عمود الحلاق خارج الصالون" },
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
