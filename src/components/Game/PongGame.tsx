import { useRef, useEffect, useState, useCallback } from 'react';
import { Pause, Play, Volume2, VolumeX } from 'lucide-react';
import { PongGame } from './gameLogic';
import type { Difficulty, GameStats } from './types';

interface PongGameProps {
  difficulty: Difficulty;
  onGameEnd: (message: string, stats: GameStats) => void;
  onBack: () => void;
}

const PongGameComponent = ({ difficulty, onGameEnd, onBack }: PongGameProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameRef = useRef<PongGame | null>(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [aiScore, setAiScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [speed, setSpeed] = useState(1.0);
  const [paused, setPaused] = useState(false);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    const game = new PongGame(canvasRef.current, difficulty, {
      onScoreUpdate: (p, a) => {
        setPlayerScore(p);
        setAiScore(a);
      },
      onLevelChange: (lvl, spd) => {
        setLevel(lvl);
        setSpeed(spd);
      },
      onGameEnd: (msg, stats) => {
        game.stop();
        onGameEnd(msg, stats);
      },
      onPause: (p) => setPaused(p),
    });

    game.start();
    gameRef.current = game;

    return () => {
      game.stop();
      gameRef.current = null;
    };
  }, [difficulty, onGameEnd]);

  const handlePause = useCallback(() => {
    gameRef.current?.togglePause();
  }, []);

  const handleMute = useCallback(() => {
    if (gameRef.current) {
      const nowMuted = gameRef.current.toggleMute();
      setMuted(nowMuted);
    }
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      {/* HUD */}
      <div className="w-full max-w-[800px] flex items-center justify-between px-4 py-2 rounded-xl border border-border-subtle bg-card-bg/80">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold text-accent tabular-nums">
            {playerScore}<span className="text-zinc-600 text-lg mx-1">:</span>{aiScore}
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs text-zinc-500">
          <span>Level <span className="text-zinc-300">{level}</span></span>
          <span>Speed <span className="text-zinc-300">{speed.toFixed(1)}x</span></span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePause}
            className="cursor-pointer p-2 rounded-lg text-zinc-400 hover:text-accent hover:bg-accent/10 transition-all"
            title={paused ? 'Resume' : 'Pause'}
          >
            {paused ? <Play size={16} /> : <Pause size={16} />}
          </button>
          <button
            onClick={handleMute}
            className="cursor-pointer p-2 rounded-lg text-zinc-400 hover:text-accent hover:bg-accent/10 transition-all"
            title={muted ? 'Unmute' : 'Mute'}
          >
            {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
          <button
            onClick={onBack}
            className="cursor-pointer px-3 py-1.5 text-xs rounded-lg text-zinc-500 hover:text-zinc-300 hover:bg-card-bg transition-all"
          >
            Menu
          </button>
        </div>
      </div>

      {/* Canvas container */}
      <div className="relative w-full max-w-[800px]">
        <canvas
          ref={canvasRef}
          className="w-full h-auto rounded-xl border border-border-subtle shadow-lg"
          style={{ background: '#0F0F11' }}
        />

      </div>

      {/* Controls hint */}
      <p className="text-xs text-zinc-600">
        Mouse / Touch to move &middot; ESC to pause &middot; WASD / Arrow keys
      </p>
    </div>
  );
};

export default PongGameComponent;
