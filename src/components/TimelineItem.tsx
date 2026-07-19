import { motion } from 'framer-motion';
import type { ExperienceEntry } from '../data/experience';

const TimelineItem = ({ entry, isLast, index = 0 }: { entry: ExperienceEntry; isLast?: boolean; index?: number }) => (
  <motion.div
    className={`timeline-line pl-10 ${isLast ? '' : 'pb-10'}`}
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-30px' }}
    transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.15 }}
  >
    <div className="absolute left-0 top-1 timeline-dot" />
    <div>
      <p className="text-xs text-accent font-medium mb-1">{entry.start}{entry.end ? ` — ${entry.end}` : ''}</p>
      <h3 className="text-base font-semibold text-text-primary mb-0.5">{entry.title}</h3>
      <p className="text-sm text-zinc-500 mb-3">{entry.institution}</p>
      {entry.description && <p className="text-sm text-zinc-400 leading-relaxed mb-2">{entry.description}</p>}
      {entry.bullets && (
        <ul className="space-y-1">
          {entry.bullets.map((b, i) => (
            <li key={i} className="text-sm text-zinc-400 flex items-start gap-2">
              <span className="text-accent mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  </motion.div>
);

export default TimelineItem;
