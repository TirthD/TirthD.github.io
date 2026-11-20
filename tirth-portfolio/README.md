# Tirth Dave — portfolio

Personal site, live at [tirth-dave.vercel.app](https://tirth-dave.vercel.app). Built with Next.js (App Router), TypeScript and plain CSS Modules.

## Setup

Requires **Node 22** (exact version in `.nvmrc`). With nvm:

```bash
nvm use
npm install
```

Then:

```bash
npm run dev     # local dev server at http://localhost:3000
npm run build   # production build
npm run lint    # ESLint
```

## Editing

- **Copy:** all text, links and project data live in `src/content.ts`.
- **Colors, type scale, spacing:** `src/app/tokens.css`.
- **Font:** Fraunces, loaded via `next/font` in `src/app/layout.tsx`.
- **Project screenshots:** put them in `public/images/` and set `image: { src: "/images/…", alt: "…" }` on the project in `src/content.ts`.
- **Résumé:** `public/Tirth_Dave_Resume.pdf`.

## Scripts

- `node scripts/make-grain.mjs` regenerates `public/grain.png` (the film-grain tile). Tuning constants are at the top of the file.
- `node scripts/fetch-og-fonts.mjs` re-downloads the static Fraunces files used by the Open Graph image (`src/app/og-fonts/`).
