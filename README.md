# Fred D. — Portfolio

Personal portfolio for Fred, an AI &amp; automation systems builder (n8n, Make, Zapier, GoHighLevel + custom code).

A single-page React site with a "blueprint / systems" visual identity — a live node-network background, blueprint grid, and an orchestrated staggered load.

## Stack

- React 19 + TypeScript
- Vite 6
- Tailwind (utility classes) with a CSS-variable design system (light / dark)
- GSAP (custom cursor) + a lightweight canvas node-network background
- Fonts: Sora (display), Hanken Grotesk (body), JetBrains Mono (labels)

## Run locally

**Prerequisites:** Node.js

```bash
npm install
npm run dev
```

## Build

```bash
npm run build     # outputs to dist/
npm run preview   # preview the production build
```

## Structure

- `App.tsx` — page composition and section order
- `components/` — one file per section (Hero, Services, Work, Process, About, Integrations, Reviews, CTA, Footer) plus shared pieces (Navbar, HeroBackground, ScrollReveal, CustomCursor, Preloader)
- `index.html` — design tokens, Tailwind config, fonts
