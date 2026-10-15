"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { translations, type Locale } from "@/lib/i18n";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  /** The full copy object for the active language */
  t: (typeof translations)["en"];
  dir: "ltr" | "rtl";
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

/**
 * Owns the active locale. Flips `dir` / `lang` on <html> so the whole
 * layout mirrors in Arabic, and remembers the choice across visits.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  /* Restore the visitor's last choice once, on mount */
  useEffect(() => {
    const saved = window.localStorage.getItem("bc-locale");
    if (saved === "ar" || saved === "en") setLocale(saved);
  }, []);

  /* Apply direction + language to the document */
  useEffect(() => {
    const html = document.documentElement;
    html.lang = locale;
    html.dir = locale === "ar" ? "rtl" : "ltr";
    window.localStorage.setItem("bc-locale", locale);
  }, [locale]);

  const value: LanguageContextValue = {
    locale,
    setLocale,
    t: translations[locale],
    dir: locale === "ar" ? "rtl" : "ltr",
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
