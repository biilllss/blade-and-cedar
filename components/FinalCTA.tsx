"use client";

import { useLanguage } from "./LanguageProvider";
import { buttonVariants } from "./ui/button";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { whatsappLink } from "@/lib/config";
import { cn } from "@/lib/utils";

/* Big type, start-anchored, one honest note under the button. */
export default function FinalCTA() {
  const { locale, t } = useLanguage();

  return (
    <section className="border-t border-cream/10">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-36">
        <h2 className="max-w-4xl font-display text-6xl leading-[0.95] md:text-8xl">
          {t.cta.title}
        </h2>
        <p className="mt-8 max-w-md text-lg text-cream/70">{t.cta.subtitle}</p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href={whatsappLink(locale)}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}
          >
            <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
            {t.cta.button}
          </a>
          <p className="text-sm italic text-cream/50">{t.cta.note}</p>
        </div>
      </div>
    </section>
  );
}
