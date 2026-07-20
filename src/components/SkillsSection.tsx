import { skills } from '../data/skills';
import Reveal from './Reveal';

const SkillsSection = () => (
  <section className="border-b border-border-subtle py-20">
    <div className="max-w-5xl mx-auto px-6">
      <Reveal>
        <div className="mb-10">
          <p className="text-sm text-accent uppercase tracking-wider mb-2">Skills & Tools</p>
          <h2 className="text-3xl font-bold text-text-primary">Technical Capabilities</h2>
        </div>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((s, ci) => (
          <Reveal key={s.category} delay={ci * 0.1}>
            <div>
              <h3 className="text-xs uppercase tracking-wider text-zinc-500 mb-3">{s.category}</h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className="cursor-pointer px-3 py-1.5 text-xs rounded-md bg-card-bg border border-border-subtle text-zinc-400 hover:border-accent hover:text-accent transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
