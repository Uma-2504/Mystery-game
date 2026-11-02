import type { CaseFile, Difficulty } from '../types';

export const DIFFICULTY_CONFIG: Record<Difficulty, { label: string; suspects: number; clues: number; hints: number; minutes: number; accent: string }> = {
  easy: { label: 'Wayfarer', suspects: 3, clues: 5, hints: 2, minutes: 20, accent: 'Guided' },
  medium: { label: 'Inquisitor', suspects: 4, clues: 7, hints: 3, minutes: 30, accent: 'Balanced' },
  hard: { label: 'Ravenmaster', suspects: 4, clues: 7, hints: 3, minutes: 45, accent: 'No mercy' },
};

export const starterCase: CaseFile = {
  id: 'bell-tower-01',
  title: 'The Bell Tower Murder',
  subtitle: 'A crown, a clock, and one final toll',
  location: 'Veyne Castle · The Astral Library',
  difficulty: 'medium',
  victim: {
    name: 'Lord Alaric Veyne',
    role: 'Keeper of the Crown Archives',
    age: 58,
    summary: 'Found beneath the library’s bell window with a ceremonial sword wound and a black wax seal pressed into his palm.',
  },
  introduction: 'At the thirteenth toll, the castle lights failed. When they returned, Lord Alaric Veyne lay dead among the royal records — and the bell tower door was locked from within.',
  circumstances: 'The storm has sealed the mountain road. Four people had cause to enter the Astral Library that night. One of them knew the bell’s old mechanism well enough to turn an alibi into a trap.',
  background: 'Alaric had spent the last week cataloguing a forbidden succession ledger. Rumour says the ledger could unseat a noble house and expose a pact made before the kingdom had a name.',
  sceneImage: '/manus-storage/async-images/D9BnshgFftp5NkFzpKFKXF/image-2.webp',
  suspects: [
    {
      id: 'isolde', name: 'Lady Isolde Veyne', epithet: 'The archivist daughter', age: 34, occupation: 'Royal archivist', relationship: 'Victim’s daughter and keeper of the west stacks', motive: 'Alaric planned to disinherit her after discovering she had copied a sealed succession page.', alibi: 'Claims she was in the west stacks from the eleventh toll until the lights returned.', personality: 'Precise, proud, and quietly protective of the family name.', suspicion: 72, portrait: '/manus-storage/async-images/D9BnshgFftp5NkFzpKFKXF/image-3.webp', secrets: ['She copied a page from the succession ledger.', 'She knows the bell rope can be reached from the west stacks.']
    },
    {
      id: 'cedric', name: 'Sir Cedric Holt', epithet: 'The sworn shield', age: 41, occupation: 'Captain of the royal guard', relationship: 'Victim’s sworn protector', motive: 'Alaric threatened to reveal that Cedric sold patrol routes to the river guild.', alibi: 'Says he remained in the guardroom, where the rain kept the men from leaving.', personality: 'Blunt, vigilant, and ashamed of the bargains he has made.', suspicion: 54, portrait: '/manus-storage/async-images/D9BnshgFftp5NkFzpKFKXF/image-4.webp', secrets: ['He left the guardroom for three minutes.', 'His signet was used to open the library’s iron gate.']
    },
    {
      id: 'lyra', name: 'Lyra Fen', epithet: 'The apothecary', age: 27, occupation: 'Royal apothecary', relationship: 'Alaric’s physician and supplier of tinctures', motive: 'Alaric blamed her for a counterfeit sleep draught found in the royal stores.', alibi: 'Claims she was in the lower apothecary grinding valerian during the blackout.', personality: 'Dry-witted, observant, and more compassionate than she admits.', suspicion: 46, portrait: '/manus-storage/async-images/D9BnshgFftp5NkFzpKFKXF/image-5.webp', secrets: ['She prepared a harmless sedative for Alaric.', 'She noticed a bitter almond scent near the bell window.']
    },
    {
      id: 'marrow', name: 'Brother Marrow', epithet: 'The quiet confessor', age: 61, occupation: 'Keeper of the castle chapel', relationship: 'Victim’s confessor', motive: 'Alaric possessed a confession that could ruin the chapel’s standing.', alibi: 'Says he rang the chapel bell and never crossed the cloister.', personality: 'Soft-spoken, ritualistic, and unsettlingly attentive.', suspicion: 38, portrait: '/manus-storage/async-images/D9BnshgFftp5NkFzpKFKXF/image-3.webp', secrets: ['He heard a second set of footsteps above the library.', 'He recognizes the black wax as a private royal cipher.']
    },
  ],
  clues: [
    { id: 'sword', name: 'Blood-stained sword', category: 'Weapon', summary: 'Ceremonial blade with a clean wound line.', detail: 'The blade is polished except for the hilt. It belonged to the library display, but the blood is too fresh for a display piece to have been drawn by accident.', significance: 'The wound was inflicted after the victim had already taken a sedative; the sword was staged to point toward the guard.', discovered: false, objectLabel: 'Ceremonial sword' },
    { id: 'goblet', name: 'Broken goblet', category: 'Toxin', summary: 'A silver rim dusted with bitter residue.', detail: 'A thread of white powder clings to the broken rim. Lyra’s sleep draught would smell of fennel; this residue has the sharp edge of bitter almond.', significance: 'The drink carried a paralytic tincture, not a fatal poison — it made the staged sword wound possible.', discovered: false, objectLabel: 'Broken goblet' },
    { id: 'seal', name: 'Royal seal', category: 'Cipher', summary: 'Black wax pressed with a reversed crown.', detail: 'The wax seal is backwards, as though pressed by someone who knew the royal cipher only from a copied impression.', significance: 'A false royal seal was used to draw the victim to the bell window.', discovered: false, objectLabel: 'Black wax seal' },
    { id: 'letter', name: 'Torn ledger page', category: 'Motive', summary: 'A missing page from the succession ledger.', detail: 'The page names a debt owed by the Holt family and marks the bell mechanism as a private passage. The tear is fresh and carries a trace of blue sealing thread.', significance: 'The page links the captain to the hidden route but also proves someone wanted him blamed.', discovered: false, objectLabel: 'Torn ledger page' },
    { id: 'fireplace', name: 'Cold fireplace', category: 'Timeline', summary: 'Ash hides a brass gear tooth.', detail: 'The library fire was cold before the blackout. Beneath the ash is a brass tooth from the bell mechanism, wet with rainwater.', significance: 'The killer used the maintenance crawlspace behind the fireplace, then exited through the bell housing.', discovered: false, objectLabel: 'Fireplace ash' },
    { id: 'window', name: 'Bell window', category: 'Access', summary: 'Rain on the inner sill, not the outer stone.', detail: 'The inner sill is wet, while the outer ledge is dry beneath the overhang. Someone entered from inside the castle through the bell housing.', significance: 'The locked-room illusion is false; the passage is accessible from the west stacks.', discovered: false, objectLabel: 'Bell window' },
    { id: 'potion', name: 'Apothecary vial', category: 'Contradiction', summary: 'A harmless draught with a missing stopper.', detail: 'The vial contains the sedative Lyra described, but the stopper carries a smear of black wax. It was planted after she left the lower apothecary.', significance: 'Lyra’s vial was used as a red herring. Her account of the scent remains useful.', discovered: false, objectLabel: 'Apothecary vial' },
  ],
  timeline: [
    { time: '10:45', title: 'Ledger opened', description: 'Alaric enters the Astral Library and unseals the succession ledger.' },
    { time: '11:10', title: 'A false summons', description: 'A black wax seal draws Alaric toward the bell window.' },
    { time: '11:18', title: 'The sedative', description: 'A bitter tincture slows his movement; the sword is staged afterward.' },
    { time: '11:24', title: 'The blackout', description: 'The bell mechanism is shifted and the west stacks door is locked.' },
    { time: '11:31', title: 'The thirteenth toll', description: 'The body is discovered beneath the window.' },
  ],
  solution: {
    culpritId: 'isolde',
    motive: 'Isolde feared Alaric would expose her theft of the succession page and cast her out of the Veyne line. She chose the ledger over her father.',
    method: 'She used a copied royal seal to lure Alaric to the bell window, slipped a paralytic tincture into his goblet, then used the maintenance passage from the west stacks to stage the ceremonial sword wound and lock the room.',
    explanation: 'The wet inner sill, the fireplace gear tooth, and the reversed seal break the locked-room story. The sedative explains why Alaric could be moved without a struggle. The blue thread on the torn page matches Isolde’s archive binding cord.',
    redHerrings: ['Cedric’s signet opened the iron gate, but it was borrowed during a routine patrol.', 'Lyra’s vial was planted after she left the apothecary.', 'Brother Marrow heard the second footsteps but mistook the bell housing for the cloister.'],
  },
  hints: [
    'A locked room is only locked if you trust the door. Examine where the rain is — and where it is not.',
    'The cleanest weapon in the room is not the most important object. Ask who benefits from a story that points at the guard.',
    'One suspect’s alibi depends on knowing the west stacks better than they admit. Look for the thing that binds a family record together.',
  ],
};

export const difficultyLabel = (difficulty: Difficulty) => DIFFICULTY_CONFIG[difficulty].label;
