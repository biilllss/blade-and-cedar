import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, Cairo } from "next/font/google";
import { HERO_IMAGE } from "@/lib/images";
import "./globals.css";

/* Fonts loaded via next/font — self-hosted, zero layout shift */
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
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
  "A premium barbershop in Mar Mikhael, Beirut. Sharp cuts, straight-razor shaves and warm Lebanese hospitality. Book on WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Blade & Cedar — Premium Barbershop in Beirut",
  description: OG_DESCRIPTION,
  openGraph: {
    title: "Blade & Cedar — Premium Barbershop in Beirut",
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
    title: "Blade & Cedar — Premium Barbershop in Beirut",
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
      className={`${playfair.variable} ${inter.variable} ${cairo.variable}`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
