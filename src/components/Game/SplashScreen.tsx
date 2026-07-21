import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Play, Github } from 'lucide-react';
import type { Difficulty } from './types';

interface SplashScreenProps {
  onStart: (difficulty: Difficulty) => void;
}

const difficulties: { value: Difficulty; label: string }[] = [
  { value: 'easy', label: 'Easy' },
  { value: 'medium', label: 'Medium' },
  { value: 'hard', label: 'Hard' },
  { value: 'insane', label: 'Insane' },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const SplashScreen = ({ onStart }: SplashScreenProps) => {
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 sm:px-6 py-8 sm:py-12 text-center overflow-hidden"
    >
      {/* Decorative glow */}
      {/* <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl pointer-events-none" /> */}

      <motion.h1 variants={item} className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-3">
        Play Pong with{' '}
        <span className="text-accent">Avishek</span>
      </motion.h1>

      <motion.p variants={item} className="text-zinc-400 max-w-md mb-8 leading-relaxed">
        A fun browser Pong with power-ups, particles, and AI.
        Move with mouse/touch, collect power-ups, first to 10 wins.
      </motion.p>

      <motion.div variants={item} className="flex flex-col sm:flex-row items-center gap-3 mb-8">
        <span className="text-sm text-zinc-500">Difficulty:</span>
        <div className="flex flex-wrap justify-center gap-2">
          {difficulties.map(({ value, label }) => (
            <motion.button
              key={value}
              onClick={() => setDifficulty(value)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className={`cursor-pointer px-3 sm:px-4 py-1.5 text-xs sm:text-sm rounded-full border transition-colors ${
                difficulty === value
                  ? 'border-accent bg-accent/10 text-accent'
                  : 'border-border-subtle text-zinc-400 hover:border-zinc-500'
              }`}
            >
              {label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <motion.button
        variants={item}
        onClick={() => onStart(difficulty)}
        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(52,211,153,0.3)' }}
        whileTap={{ scale: 0.97 }}
        className="cursor-pointer inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-accent text-deep-bg font-semibold text-base sm:text-lg hover:bg-accent-hover transition-colors"
      >
        <Play size={20} fill="currentColor" />
        Start Game
      </motion.button>

      <motion.div
        variants={item}
        className="mt-12 pt-8 border-t border-border-subtle w-full max-w-sm"
      >
        <p className="text-xs text-zinc-600 mb-2">Original game by @tyroruyk</p>
        <a
          href="https://github.com/tyroruyk/pong"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-accent transition-colors"
        >
          <Github size={14} />
          github.com/tyroruyk/pong
        </a>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
