export interface GameCallbacks {
  onScoreUpdate: (player: number, ai: number) => void;
  onLevelChange: (level: number, speed: number) => void;
  onGameEnd: (message: string, stats: GameStats) => void;
  onPause: (paused: boolean) => void;
}

export interface GameStats {
  playerScore: number;
  aiScore: number;
  level: number;
  speedMultiplier: number;
  difficulty: Difficulty;
}

export type Difficulty = 'easy' | 'medium' | 'hard' | 'insane';

export const ACCENT = '#34D399';
export const ACCENT_GLOW = 'rgba(52, 211, 153, 0.5)';
export const BG_DARK = '#0F0F11';
export const BG_LIGHT = 'rgba(15, 15, 17, 0.3)';
