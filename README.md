# Dustin Long — Portfolio

A single-page Next.js (App Router + TypeScript + Tailwind) portfolio: hero,
stats, about/what-I-do, skills, work experience & education timeline,
featured projects, client testimonials, and a simple contact section.

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

- Uses system fonts only (no external font fetch), so builds work offline
  and behind restrictive networks/firewalls.
- All content lives in `lib/data.ts` — edit that file to update copy,
  stats, skills, work history, projects, or testimonials without touching
  components.
- All images live in `public/images/` and are referenced by path from
  `lib/data.ts`.
- Colors/gradients are defined as Tailwind tokens in `tailwind.config.ts`.
- Contact section links to LinkedIn only (no public email address shown).
