import { Download } from 'lucide-react';
import Reveal from '../components/Reveal';
import { profile } from '../data/profile';

const CV = () => (
  <div className="pt-16">
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-sm text-accent uppercase tracking-wider mb-2">Curriculum Vitae</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">Avishek Dutta</h1>
            <p className="text-zinc-400 max-w-lg mx-auto">
              {profile.title}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex justify-center mb-8">
            <a
              href="/Avishek%20Dutta%20-%20CV.pdf"
              download
              className="cursor-pointer inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-accent text-deep-bg font-semibold hover:bg-accent-hover transition-colors"
            >
              <Download size={20} />
              Download PDF
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="bg-card-bg border border-border-subtle rounded-xl overflow-hidden">
            <iframe
              src="/Avishek%20Dutta%20-%20CV.pdf"
              className="w-full h-[85vh]"
              title="Avishek Dutta - CV"
            />
          </div>
        </Reveal>
      </div>
    </section>
  </div>
);

export default CV;
