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
