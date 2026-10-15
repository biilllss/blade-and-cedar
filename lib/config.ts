import type { Locale } from "./i18n";

/** ── EDIT HERE: barbershop WhatsApp number, international format, no "+" ── */
export const WHATSAPP_NUMBER = "961XXXXXXXX";

/** Pre-filled first message per language (kept natural, not literal) */
const WHATSAPP_MESSAGES: Record<Locale, string> = {
  en: "Hi Blade & Cedar, I'd like to book an appointment",
  ar: "مرحباً بليد أند سيدر، أودّ حجز موعد",
};

/** Builds the wa.me deep link with a URL-encoded pre-filled message. */
export function whatsappLink(locale: Locale): string {
  const message = encodeURIComponent(WHATSAPP_MESSAGES[locale]);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}
