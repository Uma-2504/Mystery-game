# AI Mystery Room — Implementation Plan

## Implementation approach

Build a single-page React + TypeScript + Vite web experience with client-side routing and a stateful investigation store. The first release is a complete playable vertical slice: cinematic landing page, difficulty selection, dashboard, active investigation with Story / Investigate / Suspects tabs, clue collection, AI-style suspect interrogation surface, notebook, hints, accusations, resolution, and case archive. Persist the player profile, active case state, timer, clues, notes, conversations, hints, accusation attempts, and completed cases in local storage so the demo remains usable without requiring external credentials; keep the service layer shaped for later replacement with server-backed Manus/managed database calls.

Use reusable components for glass panels, buttons, tabs, stat cards, evidence chips, suspect cards, modal inspection panels, chat bubbles, notebook sections, and result summaries. Use a small deterministic case seed so the mystery is logically solvable and conversations remain consistent. The interrogation layer will be written as a case-aware adapter with suspect-specific responses, evidence triggers, loading/error states, and a documented seam for a real server-side LLM integration.

## Design direction

Three visual directions considered: **Gothic glass reliquary** (0.07), **Moonlit court dossier** (0.06), and **Ashen cathedral noir** (0.05). Chosen: **Gothic glass reliquary**.

- **Design Movement:** Gothic glass reliquary — medieval silhouettes and relic-like UI surfaces, refracted through premium glassmorphism.
- **Core Principles:** cinematic depth; restrained antique-metal palette; discovery through layered surfaces; readable investigative hierarchy.
- **Color Philosophy:** near-black and charcoal create nocturnal tension; steel and parchment lift text from the scene; antique gold signals agency and earned insight; crimson marks danger and contradiction.
- **Layout Paradigm:** an offset, editorial investigation desk: content is staged in asymmetrical panes over a persistent atmospheric world rather than a generic centered dashboard grid.
- **Signature Elements:** a fractured moon / sigil mark; hairline gold dividers like sword edges; smoky vignettes and rain-lit gothic architecture behind every major surface.
- **Interaction Philosophy:** every click should feel like handling evidence; hovering reveals a quiet gleam, selecting an object opens a reliquary inspection, and progress is shown as recovered fragments rather than loud badges.
- **Animation:** slow fog drift, grain, and rain on the world layer; 180–260ms hover/focus transitions; modal surfaces lift with a dimmed backdrop; clue collection uses a brief gold pulse; respect reduced motion.
- **Typography System:** Cinzel Decorative for wordmark and section headings; Inter for interface text; letter-spaced uppercase eyebrow labels; large serif title paired with compact sans metadata.
- **Brand Essence:** a cinematic AI murder-mystery room for players who want to solve through atmosphere, evidence, and conversation — not menus. Personality: secretive, exacting, atmospheric.
- **Brand Voice:** headlines are poetic but concrete; CTAs are invitations into danger. Example lines: “The bell tolled once. Then the silence learned your name.” / “Search the room. Trust nothing that gleams.”
- **Wordmark & Logo:** a split-arch reliquary enclosing a four-point star and a hairline blade, paired with the AI MYSTERY ROOM wordmark.
- **Signature Brand Color:** Tarnished Gold `#C6A15B`.

## Project structure

- `src/main.tsx` — app bootstrap and global styling imports.
- `src/App.tsx` — route shell and page state transitions.
- `src/types.ts` — domain types for cases, clues, suspects, messages, notes, and progress.
- `src/data/case.ts` — deterministic starter case content and generated-case adapter.
- `src/lib/storage.ts` — local persistence helpers and seed/reset behavior.
- `src/components/ui.tsx` — glassmorphic primitives and shared interaction components.
- `src/components/Atmosphere.tsx` — background layers, fog, vignette, grain, and world imagery.
- `src/pages/Landing.tsx` — cinematic title screen and entry actions.
- `src/pages/Dashboard.tsx` — actual local profile stats, active case, archive, and settings.
- `src/pages/Investigation.tsx` — case header, tabs, scene, evidence inspection, suspect interviews, notebook, hints, and accusations.
- `src/pages/Resolution.tsx` — cinematic answer reveal and rating.
- `public/assets/` — generated hero, crime-scene, and portrait assets.
- `public/manus-routes.json` — route manifest for `/`, `/dashboard`, `/investigation`, and `/resolution`.

## Data and backend seam

The UX is fully playable offline with local persistence for this first slice. The adapter boundary is deliberately explicit: `generateMystery`, `askSuspect`, `getHint`, `evaluateAccusation`, and `saveSession` are async functions with stable domain types. A later backend pass can replace these implementations with managed server endpoints, Manus LLM calls, authentication, and MySQL/managed database persistence without rewriting the visual or gameplay surfaces.
