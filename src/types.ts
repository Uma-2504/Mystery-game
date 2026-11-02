export type Difficulty = 'easy' | 'medium' | 'hard';
export type GameTab = 'story' | 'investigate' | 'suspects';

export interface Clue {
  id: string;
  name: string;
  category: string;
  summary: string;
  detail: string;
  significance: string;
  discovered: boolean;
  objectLabel: string;
}

export interface Suspect {
  id: string;
  name: string;
  epithet: string;
  age: number;
  occupation: string;
  relationship: string;
  motive: string;
  alibi: string;
  personality: string;
  suspicion: number;
  portrait: string;
  secrets: string[];
}

export interface TimelineEvent {
  time: string;
  title: string;
  description: string;
}

export interface CaseFile {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  difficulty: Difficulty;
  victim: { name: string; role: string; age: number; summary: string };
  introduction: string;
  circumstances: string;
  background: string;
  sceneImage: string;
  suspects: Suspect[];
  clues: Clue[];
  timeline: TimelineEvent[];
  solution: { culpritId: string; motive: string; method: string; explanation: string; redHerrings: string[] };
  hints: string[];
}

export interface ChatMessage {
  id: string;
  role: 'player' | 'suspect' | 'system';
  text: string;
  timestamp: string;
}

export interface Notebook {
  notes: string;
  theories: string;
}

export interface InvestigationProgress {
  caseId: string;
  difficulty: Difficulty;
  startedAt: number;
  elapsedSeconds: number;
  tab: GameTab;
  discoveredClueIds: string[];
  messages: Record<string, ChatMessage[]>;
  questionCounts: Record<string, number>;
  notebook: Notebook;
  hintsUsed: number;
  accusations: number;
  score: number;
  expired: boolean;
  resolved: boolean;
  lastSavedAt: number;
}

export interface CompletedCase {
  id: string;
  title: string;
  solvedAt: number;
  score: number;
  rating: string;
  difficulty: Difficulty;
  duration: number;
}

export interface ProfileState {
  active: InvestigationProgress | null;
  completed: CompletedCase[];
  bestScore: number;
  totalSolved: number;
}
