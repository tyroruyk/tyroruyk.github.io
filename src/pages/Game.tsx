import { useCallback, useState } from 'react';
import PongGame from '../components/Game/PongGame';
import SplashScreen from '../components/Game/SplashScreen';
import type { Difficulty, GameStats } from '../components/Game/types';

type Screen = 'splash' | 'playing' | 'gameover';

const Game = () => {
  const [screen, setScreen] = useState<Screen>('splash');
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [gameKey, setGameKey] = useState(0);
  const [gameResult, setGameResult] = useState<{ message: string; stats: GameStats } | null>(null);

  const handleStart = useCallback((d: Difficulty) => {
    setDifficulty(d);
    setGameKey((key) => key + 1);
    setScreen('playing');
    setGameResult(null);
  }, []);

  const handleGameEnd = useCallback((message: string, stats: GameStats) => {
    setGameResult({ message, stats });
    setScreen('gameover');
  }, []);

  const handlePlayAgain = useCallback(() => {
    setGameKey((key) => key + 1);
    setScreen('playing');
    setGameResult(null);
  }, []);

  const handleBackToMenu = useCallback(() => {
    setScreen('splash');
    setGameResult(null);
  }, []);

  return (
    <section className="border-b border-border-subtle py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4">
        {screen === 'splash' && (
          <SplashScreen onStart={handleStart} />
        )}

        {screen === 'playing' && (
          <PongGame
            key={`${difficulty}-${gameKey}`}
            difficulty={difficulty}
            onGameEnd={handleGameEnd}
            onBack={handleBackToMenu}
          />
        )}

        {screen === 'gameover' && gameResult && (
          <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center">
            <h2 className={`text-3xl md:text-4xl font-bold mb-2 ${
              gameResult.message === 'You Win!' ? 'text-accent' : 'text-rose-400'
            }`}>
              {gameResult.message === 'You Win!' ? '🎉 You Win!' : '😵 AI Wins!'}
            </h2>

            <div className="mt-8 w-full max-w-xs space-y-3">
              <div className="flex justify-between py-2 border-b border-border-subtle text-sm">
                <span className="text-zinc-500">Final Score</span>
                <span className="text-text-primary font-mono">
                  {gameResult.stats.playerScore} – {gameResult.stats.aiScore}
                </span>
              </div>
              <div className="flex justify-between py-2 border-b border-border-subtle text-sm">
                <span className="text-zinc-500">Level</span>
                <span className="text-text-primary font-mono">{gameResult.stats.level}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border-subtle text-sm">
                <span className="text-zinc-500">Final Speed</span>
                <span className="text-text-primary font-mono">{gameResult.stats.speedMultiplier.toFixed(1)}x</span>
              </div>
              <div className="flex justify-between py-2 text-sm">
                <span className="text-zinc-500">Difficulty</span>
                <span className="text-text-primary font-mono capitalize">{gameResult.stats.difficulty}</span>
              </div>
            </div>

            <div className="flex gap-4 mt-10">
              <button
                onClick={handlePlayAgain}
                className="cursor-pointer inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-accent text-deep-bg font-semibold hover:bg-accent-hover transition-all hover:shadow-lg hover:shadow-accent/20"
              >
                Play Again
              </button>
              <button
                onClick={handleBackToMenu}
                className="cursor-pointer px-6 py-2.5 rounded-full border border-border-subtle text-zinc-400 hover:text-text-primary hover:border-zinc-500 transition-all"
              >
                Change Difficulty
              </button>
            </div>

            <div className="mt-12 pt-6 border-t border-border-subtle w-full max-w-sm">
              <p className="text-xs text-zinc-600 mb-2">Original game by @tyroruyk</p>
              <a
                href="https://github.com/tyroruyk/pong"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-accent transition-colors"
              >
                github.com/tyroruyk/pong
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Game;
