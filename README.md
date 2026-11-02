# AI Mystery Room

A cinematic dark-fantasy murder mystery investigation room built with React, TypeScript, Vite, Express, Lucide, and a glassmorphic CSS system.

## Included flow

- Cinematic landing page with difficulty selection.
- Investigation Hall with autosaved active case, archive, and real local stats.
- Story, Investigate, and Suspects tabs.
- Clickable crime-scene evidence with explicit clue collection.
- Case-aware suspect interview UI with server-side `/api/interrogate` wiring to the managed Manus LLM service.
- Detective notebook with evidence ledger, timeline, notes, and theories.
- Progressive hints, timer, score, three accusation attempts, and cinematic resolution.
- Responsive desktop/tablet/mobile layout with reduced-motion support.

## Run locally in the managed sandbox

```bash
pnpm install
pnpm dev
```

The preview server listens on port `3000`. The server reads `MANUS_API_URL` and `MANUS_API_KEY` at runtime for suspect interrogation and never ships those values to the browser. The first case and profile are stored in local storage so the playable slice works without database setup; the domain adapter in `src/data/case.ts` and the Express endpoint are intentionally shaped for managed auth/database persistence later.
