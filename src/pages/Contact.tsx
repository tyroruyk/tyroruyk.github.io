import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Mail, MapPin, MessageCircle, ExternalLink, Github, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import { socialLinks } from '../data/social';
import { profile } from '../data/profile';
import Reveal from '../components/Reveal';

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number }>> = {
  Github, Linkedin, Twitter, Instagram, Facebook,
};

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const iconItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const Contact = () => (
  <div className="pt-16">
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-sm text-accent uppercase tracking-wider mb-2">Get in Touch</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">Let's Connect</h1>
            <p className="text-zinc-400 max-w-lg mx-auto">
              Whether it's a project, research collaboration, or just a conversation — I'd love to hear from you.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-sm text-accent">
              <MapPin size={14} />
              <span>{profile.location}</span>
            </div>
          </div>
          <div className="bg-card-bg border border-border-subtle rounded-xl p-8 mb-16 text-center space-y-6">
            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Primary</p>
              <a
                href={`mailto:${profile.email}`}
                className="cursor-pointer inline-flex items-center justify-center gap-3 text-lg sm:text-2xl font-bold text-accent hover:text-accent-hover transition-colors break-all max-w-full px-4"
              >
                <Mail size={24} className="shrink-0" />
                <span className="break-all">{profile.email}</span>
              </a>
            </div>
            <div className="border-t border-border-subtle pt-6">
              <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Academic</p>
              <a
                href={`mailto:${profile.academicEmail}`}
                className="cursor-pointer inline-flex items-center justify-center gap-3 text-base sm:text-lg text-zinc-400 hover:text-accent transition-colors break-all max-w-full px-4"
              >
                <Mail size={20} className="shrink-0" />
                <span className="break-all">{profile.academicEmail}</span>
              </a>
            </div>
            <div className="border-t border-border-subtle pt-6">
              <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">WhatsApp</p>
              <a
                href={`https://wa.me/${profile.phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer inline-flex items-center justify-center gap-3 text-base sm:text-lg text-zinc-400 hover:text-accent transition-colors px-4"
              >
                <MessageCircle size={20} className="shrink-0" />
                <span>{profile.phone}</span>
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="text-sm text-zinc-500 uppercase tracking-wider text-center mb-10">All Socials</p>
        </Reveal>

        <motion.div
          className="flex items-center justify-center gap-10 flex-wrap"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {socialLinks.map(({ href, label, key }) => {
            const Icon = iconMap[key] ?? ExternalLink;
            return (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                variants={iconItem}
                className="flex flex-col items-center gap-2 group cursor-pointer"
              >
                <Icon size={36} className="text-zinc-600 group-hover:text-accent transition-colors duration-300" />
                <span className="text-xs text-zinc-600 group-hover:text-zinc-400 transition-colors duration-300">{label}</span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  </div>
);

export default Contact;
