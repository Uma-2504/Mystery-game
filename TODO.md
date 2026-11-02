# AI Mystery Room — Outcome Checklist

## Cinematic landing and shared visual language
- [ ] The landing page is full-screen and presents AI MYSTERY ROOM with the line “Every secret leaves a trace. Every truth has a price.”
- [ ] Landing actions include Begin Investigation, Continue Investigation, Case Archives, Difficulty Selection, Profile, and Settings.
- [ ] The application uses black and charcoal backgrounds, dark steel and silver, antique gold, muted crimson, desaturated realistic fantasy artwork, gothic architecture, fog, shadows, dramatic lighting, and glassmorphic surfaces.
- [ ] Major components use translucent dark surfaces, blur, thin borders, soft shadows, inner highlights, rounded corners, and smooth hover states while keeping the background visible and text readable.

## Investigation flow
- [ ] The player can select Easy, Medium, or Hard and sees the requested suspect, clue, hint, and timer values.
- [ ] The investigation header shows case title, difficulty, timer, score, save/exit, and settings.
- [ ] The investigation provides Story, Investigate, and Suspects navigation.
- [ ] Story shows case introduction, victim, crime circumstances, location, and background.
- [ ] Investigate provides clickable crime-scene objects and inspection panels; clue collection is explicit and clues are not all revealed automatically.
- [ ] Suspect profiles show portrait, name, age, occupation, relationship, motive, alibi, personality, suspicion level, and Interview action.
- [ ] The case remains logically solvable from consistent evidence, suspect secrets, alibis, timeline, and red herrings.

## AI suspect interrogation
- [ ] The player can type free-text questions to suspects.
- [ ] Each suspect has case-aware dialogue reflecting personality, secrets, alibi, knowledge, and relationship to the victim.
- [ ] Interrogation shows conversation history, a 10-question allowance, additional-question penalty copy, evidence-aware responses, loading/typing state, and recoverable error state.
- [ ] Interrogation is presented as a medieval character conversation rather than a generic chatbot.

## Notebook, hints, timer, accusation, resolution
- [ ] The notebook contains Evidence, Suspects, Timeline, Notes, and Investigation Theories, and saves notes automatically.
- [ ] The timer persists through refresh; expiry allows continuation with a 10% final-score reduction.
- [ ] Progressive hints are available and hint usage is tracked.
- [ ] The player receives up to three accusation attempts.
- [ ] An accusation includes culprit, motive, murder method, supporting evidence, and timeline explanation.
- [ ] Resolution shows culprit, motive, method, complete timeline, clue explanations, red herrings, suspect lies, final score, duration, hints used, and case rating.
- [ ] Resolution actions include Play Another Mystery, Review Evidence, and Return to Dashboard.

## Persistence and responsive states
- [ ] Current case, stage, timer, collected clues, suspect conversations, notebook notes, hints, accusation attempts, and current score save automatically.
- [ ] Continue Investigation resumes the active case where the player left off.
- [ ] The dashboard shows actual saved active/completed cases, best score, solved total, and recent history without fake statistics.
- [ ] The application includes loading, error, empty, success, and reduced-motion-friendly states.
- [ ] Desktop, tablet, and mobile layouts remain usable.

## Delivery hygiene
- [ ] React + TypeScript + Tailwind-style utility classes, Lucide icons, reusable components, and route manifest are present.
- [ ] TypeScript diagnostics and production build pass.
- [ ] The project is checkpointed to the managed Git remote.
