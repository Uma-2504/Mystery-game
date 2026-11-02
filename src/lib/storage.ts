import type { ProfileState, InvestigationProgress, Difficulty } from '../types';

const KEY = 'ai-mystery-room-profile-v1';

const emptyProfile: ProfileState = { active: null, completed: [], bestScore: 0, totalSolved: 0 };

export function loadProfile(): ProfileState {
  try {
    const stored = localStorage.getItem(KEY);
    return stored ? { ...emptyProfile, ...JSON.parse(stored) } : emptyProfile;
  } catch {
    return emptyProfile;
  }
}

export function saveProfile(profile: ProfileState) {
  localStorage.setItem(KEY, JSON.stringify(profile));
}

export function createProgress(caseId: string, difficulty: Difficulty): InvestigationProgress {
  return {
    caseId, difficulty, startedAt: Date.now(), elapsedSeconds: 0, tab: 'story', discoveredClueIds: [], messages: {}, questionCounts: {}, notebook: { notes: '', theories: '' }, hintsUsed: 0, accusations: 0, score: 100, expired: false, resolved: false, lastSavedAt: Date.now(),
  };
}

export function formatDuration(seconds: number) {
  const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
  const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${mins}:${secs}`;
}

export function ratingForScore(score: number) {
  if (score >= 90) return 'Master Investigator';
  if (score >= 75) return 'Crown’s Hound';
  if (score >= 55) return 'Observant Witness';
  return 'Survivor of the Night';
}
