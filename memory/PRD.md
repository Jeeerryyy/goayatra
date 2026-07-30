# Goa Yatra — TTG Travels · Website PRD (living)

**Started:** 30 July 2026
**Stack:** React 19 + Tailwind + framer-motion + Lenis · No custom backend logic (template FastAPI is idle)
**Preview:** https://goa-yatra-cars.preview.emergentagent.com

## Original problem statement
5-page static lead-generation website for Goa Yatra — TTG Travels, a chauffeur & self-drive car rental in Porvorim, Goa. Sole conversion goal: push visitor to Call (+91 7249216623) or WhatsApp. No booking engine, no forms, no login. Digital brochure that reproduces PRD-supplied pricing verbatim and builds trust fast. User asked for an award-worthy (Awwwards Site-of-the-Day level) execution with kinetic hero, masked line-by-line reveal, numbered manifesto chapters, one slow editorial marquee, framer-motion micro-interactions, Lenis smooth scroll and subtle parallax.

## User choices (verbatim)
- Logo: text-based wordmark ("GOA YATRA / TTG TRAVELS") in brand maroon serif style — no image asset.
- Vehicle photos: tasteful Goa-themed Unsplash imagery for hero/ambient only; vehicles rendered as maroon line-art icons.
- Tech: React (template).
- Owner: **Yuvraj Banothkar** · Hours: **24/7** · Instagram: https://www.instagram.com/goa.yatra.ttg · Google profile: to be set up later.
- Google Map: keyless iframe embed pinned to Chogam Road, Porvorim.

## Personas
- Tourist / weekend visitor booking a chauffeur car (mobile heavy).
- Self-drive customer arriving at Goa airport, needs delivery.
- Group organiser (wedding, corporate, family reunion) needing Tempo Traveller / Urbania.

## Architecture
- 5 client-side routes served by React Router:
  `/` Home · `/cars-with-driver` · `/self-drive` · `/group-travel` · `/about`
- Global chrome: `Header`, `Footer`, `MobileStickyBar` (Call + WhatsApp), Lenis smooth scroll.
- Motion policy: opacity + Y transforms only. No scale/tilt/shadow-pop.
- Brand-locked palette (from PRD §2.2): #FAF7F2 bg, #1B1B1B text, #5C1A1A maroon, #490F0D bordeaux, #B08D57 gold (sparing), #25D366 WhatsApp, #E4DED3 hairline.

## Implemented (30 July 2026)
- Fonts: Playfair Display (display/H1) + Inter (body) via Google Fonts.
- Tailwind config extended with brand colors, custom marquee keyframes, radii 4–8px.
- Global CSS tokens, custom `.btn`, `.goa-table`, `.hover-underline`, `.overline`, marquee track, mask-line reveals.
- Framer-motion `Reveal` wrapper + `maskLine`, `fadeUp` variants; Lenis initialised in `App.js`.
- **Home** — kinetic hero (masked line reveal + spotlight image w/ hairline gold rule + micro parallax), single-line horizontal marquee, 3-card service overview with vehicle line-art icons, numbered manifesto (01–04), trust strip, closing CTA band.
- **Cars with Driver** — 5 pricing tables (Sedan / Ertiga+Innova / Innova / Crysta / Hycross) reproduced verbatim + Driver Night table.
- **Self-Drive** — 13-row pricing table + 11 booking notes in numbered two-column list.
- **Group Travel** — Tempo Traveller & Urbania cards + 2 pricing tables + Driver Night.
- **About & Contact** — editorial bio, contact rows (address/phone/email/hours/instagram), map iframe, 6-item FAQ accordion (shadcn), final CTA band.
- Header: text wordmark left, 5 nav links w/ maroon hover-underline + active state, persistent Call + WhatsApp buttons, mobile hamburger + full-screen mobile nav.
- Mobile sticky bottom bar (Call maroon + WhatsApp green) — appears after 320px scroll.
- Footer: brand block, contact block, sitemap, Instagram link, Bordeaux copyright bar.
- SEO: page title, description, LocalBusiness JSON-LD schema in `index.html`.
- **Testing:** 57/57 assertions passed on iteration_1 (all routes, all hrefs, all pricing values, FAQ, mobile bar, no console errors).

## Backlog / Not yet done
- P1: Add remaining Google Business profile URL (once client provides).
- P1: Real vehicle photography — currently line-art icons per user choice; upgrade path exists in service cards + group vehicle callouts.
- P2: `/build` production bundle + static host README.
- P2: Individual vehicle deep-pages (each with cabin photos, spec list, per-vehicle enquiry).
- P2: Bilingual toggle (English ↔ Konkani/Hindi) for local market.
- P2: Small "how to reach us" driving-directions strip on About page.
- P2: Testimonials editorial section (Google reviews pull).
- P3: 404 page — currently catch-all falls back to Home.

## Notes
- Test credentials: none needed (no auth in this project).
- Emergent LLM key: not used.
- Backend (FastAPI) is untouched — still serves the template `/api/` hello world; no MongoDB writes.
