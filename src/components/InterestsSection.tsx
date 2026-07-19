import { motion } from 'framer-motion';
import { GiRoundBottomFlask, GiMusicalNotes, GiPaintBrush, GiBookCover, GiPhotoCamera, GiGamepadCross } from 'react-icons/gi';
import type { IconType } from 'react-icons';
import { interest } from '../data/interests';
import Reveal from './Reveal';

const iconMap: Record<string, IconType> = {
  GiRoundBottomFlask, GiMusicalNotes, GiPaintBrush, GiBookCover, GiPhotoCamera, GiGamepadCross,
};

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const InterestsSection = () => (
  <section className="border-b border-border-subtle py-20">
    <div className="max-w-5xl mx-auto px-6">
      <Reveal>
        <div className="mb-10">
          <p className="text-sm text-accent uppercase tracking-wider mb-2">Beyond Code</p>
          <h2 className="text-3xl font-bold text-text-primary">Interests & Hobbies</h2>
        </div>
      </Reveal>
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {interest.map((it) => {
          const Icon = iconMap[it.icon];
          return (
            <motion.div
              key={it.title}
              variants={cardItem}
              className="bg-card-bg border border-border-subtle rounded-lg p-6 card-hover cursor-pointer"
            >
              {Icon && <Icon size={48} className="text-accent mb-4" />}
              <h3 className="text-base font-semibold text-text-primary mb-2">{it.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{it.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default InterestsSection;
