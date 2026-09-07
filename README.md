# Dustin Long — Portfolio

A single-page Next.js (App Router + TypeScript + Tailwind) portfolio: hero,
stats, about/what-I-do, skills, work experience & education timeline,
featured projects, and a simple contact section.

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
  stats, skills, work history, or projects without touching components.
- Colors/gradients are defined as Tailwind tokens in `tailwind.config.ts`.
- No photo was provided, so the hero uses an initials avatar ("DL")
  instead of a headshot — swap in `components/Hero.tsx` if you'd like to
  add a real photo later.
- The "Featured Projects" cards are built from your actual resume
  engagements (F&O integrations, invoice automation, HIPAA Azure infra,
  etc.) rather than invented demo projects, since this is consulting work
  without public repos/live links.
- No testimonials section is included — the reference site had quotes
  attributed to named clients, and there weren't any real ones to use.
  Happy to add a section for genuine client quotes once you have them.
