# Blade & Cedar — بليد آند سيدر

A premium one-page barbershop concept site for Beirut. Bilingual
(English / Arabic, fully RTL-mirrored), mobile-first, and built to
convert Instagram traffic into WhatsApp bookings.

**Concept design by Mawqe3 Studio.** Blade & Cedar is fictional.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS + shadcn/ui conventions
- next/font (Playfair Display, Inter, Cairo)
- lucide-react (icons only — no UI bloat)

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel: "New Project" → import the repo → framework auto-detects Next.js.
3. Deploy. No environment variables required.

## Customize

| What            | Where                                  |
| --------------- | -------------------------------------- |
| WhatsApp number | `lib/config.ts` → `WHATSAPP_NUMBER`    |
| All copy (EN/AR)| `lib/i18n.ts`                          |
| All images      | `lib/images.ts` (Unsplash placeholders)|
| Colors / fonts  | `tailwind.config.ts`                   |
| SEO / OG tags   | `app/layout.tsx`                      |

## Structure

```
app/            layout (fonts, SEO), page (composition), globals.css
components/     one file per section + shared primitives
components/ui/  shadcn-style Button
lib/            config (WhatsApp), i18n (translations), images, utils
```

## Accessibility notes

- `prefers-reduced-motion` disables all transitions & scroll animation.
- All interactive elements have visible gold focus rings.
- Icon-only links carry `aria-label`s; decorative icons are `aria-hidden`.
