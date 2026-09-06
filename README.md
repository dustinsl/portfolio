# Dustin Long — Portfolio

A single-page Next.js (App Router + TypeScript + Tailwind) portfolio built from
the resume content: hero, approach/summary, work history, capabilities,
credentials, and contact.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build for production

```bash
npm run build
npm start
```

## Notes

- Fonts (Space Grotesk, IBM Plex Mono) load from Google Fonts via
  `next/font/google` at build time, so an internet connection is required
  for `npm run build` / `npm run dev` to fetch them the first time.
- All content lives in `lib/data.ts` — edit that file to update copy,
  work history, skills, or certifications without touching components.
- Colors and fonts are defined as Tailwind tokens in `tailwind.config.ts`.
