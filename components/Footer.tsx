"use client";

import { Instagram, Facebook } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

const SOCIALS = [
  { name: "Instagram", href: "https://instagram.com/bladeandcedar", Icon: Instagram },
  { name: "Facebook", href: "https://facebook.com/bladeandcedar", Icon: Facebook },
];

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-cream/10 bg-charcoal">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-start">
          {/* Wordmark + tagline */}
          <div>
            <p className="font-display text-xl">
              Blade <span className="text-gold">&amp;</span> Cedar
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-cream/50">
              {t.footer.tagline}
            </p>
          </div>

          {/* Socials — each icon button is labelled for screen readers */}
          <div className="flex items-center gap-5">
            <span className="text-xs uppercase tracking-[0.2em] text-cream/50">
              {t.footer.follow}
            </span>
            {SOCIALS.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="text-cream/60 transition-colors hover:text-gold"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-12 flex flex-col items-center gap-2 border-t border-cream/10 pt-6 text-xs text-cream/40 md:flex-row md:justify-between">
          <p>{t.footer.rights}</p>
          <p className="text-gold/60">{t.footer.concept}</p>
        </div>
      </div>
    </footer>
  );
}
