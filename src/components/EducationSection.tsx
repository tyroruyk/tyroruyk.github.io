import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { education } from '../data/education';
import Reveal from './Reveal';

const EducationSection = () => (
  <section className="border-b border-border-subtle py-20">
    <div className="max-w-4xl mx-auto px-6">
      <Reveal>
        <div className="mb-10">
          <p className="text-sm text-accent uppercase tracking-wider mb-2">Education</p>
          <h2 className="text-3xl font-bold text-text-primary">Academic Background</h2>
        </div>
      </Reveal>
      <div className="space-y-8">
        {education.map((ed, idx) => (
          <motion.div
            key={idx}
            className="flex items-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
          >
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-1">
              <GraduationCap size={20} className="text-accent" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-text-primary">{ed.degree}</h3>
              <p className="text-sm text-zinc-400">{ed.institution}</p>
              {ed.department && <p className="text-xs text-zinc-500">{ed.department}</p>}
              <p className="text-xs text-zinc-600 mt-1">{ed.range}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
