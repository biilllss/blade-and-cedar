"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { buttonVariants } from "./ui/button";
import { whatsappLink } from "@/lib/config";
import { cn } from "@/lib/utils";

/* Section order drives both desktop and mobile nav */
const SECTION_KEYS = [
  "about",
  "services",
  "gallery",
  "barbers",
  "reviews",
  "contact",
] as const;

export default function Header() {
  const { locale, setLocale, t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cream/10 bg-charcoal">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 md:h-20 md:px-8">
        {/* Logo wordmark */}
        <a
          href="#top"
          className="font-display text-lg tracking-wide md:text-xl"
          aria-label="Blade & Cedar — home"
        >
          Blade <span className="text-gold">&amp;</span> Cedar
        </a>

        {/* Desktop links — normal case, quiet */}
        <nav aria-label={t.nav.menuLabel} className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {SECTION_KEYS.map((key) => (
              <li key={key}>
                <a
                  href={`#${key}`}
                  className="text-sm text-cream/60 transition-colors hover:text-gold"
                >
                  {t.nav[key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3 md:gap-5">
          {/* Language toggle */}
          <div
            role="group"
            aria-label={t.nav.langLabel}
            className="flex items-center text-sm"
          >
            <button
              type="button"
              onClick={() => setLocale("en")}
              aria-pressed={locale === "en"}
              className={cn(
                "px-1 py-1 transition-colors",
                locale === "en" ? "text-gold" : "text-cream/50 hover:text-cream"
              )}
            >
              EN
            </button>
            <span aria-hidden="true" className="px-0.5 text-cream/30">
              |
            </span>
            <button
              type="button"
              onClick={() => setLocale("ar")}
              aria-pressed={locale === "ar"}
              className={cn(
                "px-1 py-1 transition-colors",
                locale === "ar" ? "text-gold" : "text-cream/50 hover:text-cream"
              )}
            >
              AR
            </button>
          </div>

          {/* Book now */}
          <a
            href={whatsappLink(locale)}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "sm" }), "hidden sm:inline-flex")}
          >
            {t.nav.book}
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            className="p-2 text-cream lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown panel */}
      {open && (
        <nav
          aria-label={t.nav.menuLabel}
          className="border-t border-cream/10 bg-charcoal lg:hidden"
        >
          <ul className="mx-auto max-w-7xl px-5 py-4 md:px-8">
            {SECTION_KEYS.map((key) => (
              <li key={key} className="border-b border-cream/5 last:border-0">
                <a
                  href={`#${key}`}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base text-cream/80 hover:text-gold"
                >
                  {t.nav[key]}
                </a>
              </li>
            ))}
            <li className="pt-4 sm:hidden">
              <a
                href={whatsappLink(locale)}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ size: "sm" }), "w-full")}
              >
                {t.nav.book}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
