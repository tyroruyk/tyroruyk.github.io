import { experience } from '../data/experience';
import TimelineItem from './TimelineItem';
import Reveal from './Reveal';

const ExperienceTimeline = () => (
  <section className="py-20">
    <div className="max-w-4xl mx-auto px-6">
      <Reveal>
        <div className="mb-10">
          <p className="text-sm text-accent uppercase tracking-wider mb-2">Career</p>
          <h2 className="text-3xl font-bold text-text-primary">Full Experience</h2>
        </div>
      </Reveal>
      <div className="relative pl-1">
        {experience.map((entry, idx) => (
          <TimelineItem
            key={`${entry.institution}-${entry.title}`}
            entry={entry}
            isLast={idx === experience.length - 1}
            index={idx}
          />
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceTimeline;
