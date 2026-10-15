"use client";

import { Clock, MapPin } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function Location() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="border-t border-cream/10 bg-charcoal-light">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Address + hours */}
          <div>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              {t.location.title}
            </h2>

            <div className="mt-10 flex items-start gap-4">
              <MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-gold" />
              <div>
                <h3 className="text-sm text-cream/50">{t.location.addressLabel}</h3>
                <p className="mt-1 font-display text-xl md:text-2xl">
                  {t.location.address}
                </p>
                <p className="mt-2 max-w-md text-sm text-cream/50">
                  {t.location.landmark}
                </p>
              </div>
            </div>

            <div className="mt-10 flex items-start gap-4">
              <Clock aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-gold" />
              <div className="w-full">
                <h3 className="text-sm text-cream/50">{t.location.hoursLabel}</h3>
                <ul className="mt-2 w-full border-t border-cream/10">
                  {t.location.hours.map((row) => (
                    <li
                      key={row.days}
                      className="flex items-baseline justify-between gap-6 border-b border-cream/10 py-3"
                    >
                      <span className="text-sm">{row.days}</span>
                      <span className="text-sm text-cream/70">{row.time}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-cream/50">{t.location.walkIns}</p>
              </div>
            </div>
          </div>

          {/* Styled map placeholder — swap for a real embed later */}
          <div className="lg:pt-24">
            <div
              role="img"
              aria-label={t.location.mapLabel}
              className="relative flex aspect-[4/3] items-center justify-center overflow-hidden border border-cream/15 bg-charcoal"
            >
              {/* faint street-grid texture */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(#F2EDE4 1px, transparent 1px), linear-gradient(90deg, #F2EDE4 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent"
              />
              <div className="relative text-center">
                <MapPin aria-hidden="true" className="mx-auto h-8 w-8 text-gold" />
                <p className="mt-3 font-display text-lg">{t.location.address}</p>
                <a
                  href="https://maps.google.com/?q=Mar+Mikhael,+Beirut"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm text-gold underline-offset-4 hover:underline"
                >
                  {t.location.openInMaps}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
