import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
  once?: boolean;
}

const Reveal = ({ children, className, delay = 0, direction = 'up', once = true }: RevealProps) => {
  const directionOffset = { up: { y: 40 }, left: { x: -40 }, right: { x: 40 } };
  const initial = { opacity: 0, ...directionOffset[direction] };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
