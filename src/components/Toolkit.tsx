import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
  SiPython, SiTypescript, SiNodedotjs, SiPostgresql, SiGit, SiLinux, SiFigma, SiKeras, SiLatex, SiHuggingface, SiRust
} from 'react-icons/si';
import Reveal from './Reveal';

const tools = [
  { icon: SiPython, label: 'Python' },
  { icon: SiTypescript, label: 'TypeScript' },
  { icon: SiNodedotjs, label: 'Node.js' },
  { icon: SiLatex, label: 'LaTeX' },
  { icon: SiLinux, label: 'Linux' },
  { icon: SiGit, label: 'Git' },
  { icon: SiFigma, label: 'Figma' },
  { icon: SiPostgresql, label: 'PostgreSQL' },
  { icon: SiKeras, label: 'Keras' },
  { icon: SiHuggingface, label: 'Hugging Face' },
  { icon: SiRust, label: 'Rust' },
];

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const iconItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Toolkit = () => (
  <section className="border-b border-border-subtle py-16">
    <div className="max-w-7xl mx-auto px-6">
      <Reveal>
        <p className="text-sm text-zinc-500 uppercase tracking-wider text-center mb-8">Tech Stack & Tools</p>
      </Reveal>
      <motion.div
        className="flex items-center justify-center gap-8 flex-wrap"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {tools.map(({ icon: Icon, label }) => (
          <motion.div
            key={label}
            variants={iconItem}
            className="flex flex-col items-center gap-2 group cursor-pointer"
          >
            <div className="flex h-10 w-10 items-center justify-center">
              <Icon
                size={28}
                className="text-zinc-600 group-hover:text-accent transition-colors duration-300"
              />
            </div>

            <span className="text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors duration-300">
              {label}
            </span>
          </motion.div>
        ))}
      </motion.div>
      <Reveal delay={0.3}>
        <p className="text-sm text-zinc-500 text-center mt-10">
          Collaborated with teams at <span className="text-zinc-300">North South University</span>
          {/* Collaborated with teams at <span className="text-zinc-300">North South University</span>,{' '} */}
          {/* <span className="text-zinc-300">CSE4ALL</span>, and <span className="text-zinc-300">Neune Labs</span>. */}
        </p>
      </Reveal>
    </div>
  </section>
);

export default Toolkit;
