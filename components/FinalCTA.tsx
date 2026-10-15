"use client";

import { useLanguage } from "./LanguageProvider";
import { buttonVariants } from "./ui/button";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { whatsappLink } from "@/lib/config";
import { cn } from "@/lib/utils";
import FadeUp from "./FadeUp";

export default function FinalCTA() {
  const { locale, t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-28 text-center md:py-40">
      {/* hairline gold dividers top and bottom */}
      <div aria-hidden="true" className="absolute inset-x-0 top-0 mx-auto h-px w-24 bg-gold/60" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 mx-auto h-px w-24 bg-gold/60" />

      <FadeUp className="mx-auto max-w-3xl px-5 md:px-8">
        <h2 className="font-display text-5xl leading-tight md:text-7xl">
          {t.cta.title}
        </h2>
        <p className="mx-auto mt-6 max-w-md text-base text-cream/70">
          {t.cta.subtitle}
        </p>
        <a
          href={whatsappLink(locale)}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ size: "lg" }), "mt-10")}
        >
          <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
          {t.cta.button}
        </a>
      </FadeUp>
    </section>
  );
}
