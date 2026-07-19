import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { experience } from '../data/experience';
import TimelineItem from './TimelineItem';
import Reveal from './Reveal';

const recent = experience.filter((e) => e.featured);

const RecentExperience = () => (
  <section className="border-b border-border-subtle py-20">
    <div className="max-w-4xl mx-auto px-6">
      <Reveal>
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-sm text-accent uppercase tracking-wider mb-2">Experience</p>
            <h2 className="text-3xl font-bold text-text-primary">Recent Roles</h2>
          </div>
          <Link
            to="/experience"
            className="cursor-pointer hidden sm:flex items-center gap-2 text-sm text-zinc-400 hover:text-accent transition-colors"
          >
            Full Timeline <ArrowRight size={16} />
          </Link>
        </div>
      </Reveal>
      <div className="relative pl-1">
        {recent.map((entry, idx) => (
          <TimelineItem key={`${entry.institution}-${entry.title}`} entry={entry} isLast={idx === recent.length - 1} index={idx} />
        ))}
      </div>
      <Reveal delay={0.4}>
        <div className="mt-8 text-center sm:hidden">
          <Link
            to="/experience"
            className="cursor-pointer inline-flex items-center gap-2 text-sm text-accent hover:text-accent-hover transition-colors"
          >
            Full Timeline <ArrowRight size={16} />
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);

export default RecentExperience;
