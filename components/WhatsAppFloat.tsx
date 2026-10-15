"use client";

import { useLanguage } from "./LanguageProvider";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { whatsappLink } from "@/lib/config";

/**
 * Floating WhatsApp bubble — mobile only (desktop gets the big CTA).
 * `end-5` is a logical inset, so the button mirrors to the bottom-left
 * automatically when the document flips to dir="rtl".
 */
export default function WhatsAppFloat() {
  const { locale, t } = useLanguage();

  return (
    <a
      href={whatsappLink(locale)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsapp.aria}
      className="fixed bottom-5 end-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-black/50 transition-transform duration-300 hover:scale-105 md:hidden"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
