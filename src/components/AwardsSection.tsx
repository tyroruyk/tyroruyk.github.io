import { Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { awards } from '../data/awards';
import Reveal from './Reveal';

const AwardsSection = () => (
  <section className="border-b border-border-subtle py-20">
    <div className="max-w-4xl mx-auto px-6">
      <Reveal>
        <div className="mb-10">
          <p className="text-sm text-accent uppercase tracking-wider mb-2">Honors</p>
          <h2 className="text-3xl font-bold text-text-primary">Awards & Recognition</h2>
        </div>
      </Reveal>
      <div className="space-y-8">
        {awards.map((award, idx) => (
          <motion.div
            key={idx}
            className="flex items-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
          >
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-1">
              <Trophy size={20} className="text-accent" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-text-primary">{award.title}</h3>
              <p className="text-sm text-zinc-400">{award.organization}</p>
              <p className="text-xs text-zinc-600 mt-1">{award.date}</p>
              <p className="text-sm text-zinc-500 mt-2 leading-relaxed">{award.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AwardsSection;
