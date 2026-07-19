import { Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profile } from '../data/profile';
import Reveal from './Reveal';

const CTA = () => (
  <section id="contact" className="py-24">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <Reveal>
        <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
          Have an idea? Let's make it real.
        </h2>
        <p className="text-zinc-400 mb-8 max-w-md mx-auto">
          I'm always open to discussing new projects, research collaborations, or opportunities.
        </p>
        {/* Huge responsive button */}
        <Link
          to={`mailto:${profile.email}`}
          className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-deep-bg font-semibold text-sm hover:bg-accent-hover transition-colors"
        >
          <Mail size={16} /> Get in touch
        </Link>
      </Reveal>
      <Reveal delay={0.2}>
        <Link
          to="/contact"
          className="cursor-pointer inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-accent transition-colors pt-8 block"
        >
          Find me on socials <ArrowRight size={16} />
        </Link>
      </Reveal>
    </div>
  </section>
);

export default CTA;
