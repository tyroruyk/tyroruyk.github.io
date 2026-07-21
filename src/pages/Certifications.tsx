import { Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { certifications } from '../data/certifications';
import Reveal from '../components/Reveal';

const Certifications = () => (
  <section className="border-b border-border-subtle py-20">
    <div className="max-w-4xl mx-auto px-6">
      <Reveal>
        <div className="mb-12">
          <p className="text-sm text-accent uppercase tracking-wider mb-2">Credentials</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">Licenses & Certifications</h1>
          <p className="text-zinc-400 max-w-lg">
            Professional certifications, memberships, and credentials earned.
          </p>
        </div>
      </Reveal>
      <div className="space-y-8">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            className="flex items-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
          >
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-1">
              <Award size={20} className="text-accent" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-text-primary">{cert.name}</h3>
              <p className="text-sm text-zinc-400">{cert.issuer}</p>
              <p className="text-xs text-zinc-600 mt-1">{cert.date}</p>
              {(cert.credential || cert.url) && (
                <div className="mt-2">
                  {cert.url ? (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-accent-hover transition-colors"
                    >
                      <ExternalLink size={12} />
                      View credential
                    </a>
                  ) : (
                    <span className="text-xs text-zinc-500">
                      Credential ID: {cert.credential}
                    </span>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
