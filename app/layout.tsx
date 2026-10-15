import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, Cairo } from "next/font/google";
import { HERO_IMAGE } from "@/lib/images";
import "./globals.css";

/* Fonts via next/font — self-hosted, zero layout shift.
   Fraunces instead of the usual luxury-serif suspects: it has the slightly
   wonky, printed-signage character that suits a barbershop. */
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  display: "swap",
});

const SITE_URL = "https://blade-and-cedar.example.com"; // ← change when you have a domain
const OG_DESCRIPTION =
  "A barbershop in Mar Mikhael, Beirut. Three chairs, sharp fades, straight-razor shaves, coffee on, Fairuz on. Book on WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Blade & Cedar — Barbershop, Mar Mikhael, Beirut",
  description: OG_DESCRIPTION,
  openGraph: {
    title: "Blade & Cedar — Barbershop, Mar Mikhael, Beirut",
    description: OG_DESCRIPTION,
    url: SITE_URL,
    siteName: "Blade & Cedar",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 630,
        alt: "Inside the Blade & Cedar barbershop in Beirut",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blade & Cedar — Barbershop, Mar Mikhael, Beirut",
    description: OG_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#121212",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      dir="ltr" /* flipped at runtime by LanguageProvider */
      className={`${fraunces.variable} ${inter.variable} ${cairo.variable}`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
