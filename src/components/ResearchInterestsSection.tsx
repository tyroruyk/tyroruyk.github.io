import { profile } from '../data/profile';
import Reveal from './Reveal';

const ResearchInterestsSection = () => (
  <section className="border-b border-border-subtle py-16">
    <div className="max-w-7xl mx-auto px-6">
      <Reveal>
        <p className="text-sm text-zinc-500 uppercase tracking-wider text-center mb-8">Research Interests</p>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          {profile.researchInterests.map((interest) => (
            <span
              key={interest}
              className="px-4 py-2 rounded-lg bg-card-bg border border-border-subtle text-sm text-zinc-400 hover:border-accent hover:text-accent hover:bg-accent/5 transition-colors card-hover cursor-pointer"
            >
              {interest}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default ResearchInterestsSection;
