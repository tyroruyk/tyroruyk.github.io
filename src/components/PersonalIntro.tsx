import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, MapPin, Mail, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { profile } from '../data/profile';
import Reveal from './Reveal';

const socials = [
  { icon: Github, href: 'https://github.com/tyroruyk', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/duttavishek', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/ADuttaDG', label: 'Twitter' },
];

const PersonalIntro = () => (
  <section className="border-b border-border-subtle py-20">
    <div className="max-w-5xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <Reveal direction="left">
          <div className="bg-card-bg border border-border-subtle rounded-xl overflow-hidden card-hover">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-full h-auto"
            />
          </div>
        </Reveal>
        <Reveal direction="right" delay={0.2}>
          <p className="text-sm text-accent uppercase tracking-wider mb-2">About Me</p>
          <h2 className="text-3xl font-bold text-text-primary mb-1">{profile.name}</h2>
          <p className="text-sm text-zinc-400 mb-6">{profile.title}</p>
          <div className="w-12 h-0.5 bg-accent/50 rounded-full mb-6" />
          <p className="text-zinc-400 leading-relaxed mb-6">{profile.bio}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 mb-8">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-zinc-600" />
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-zinc-600" />
              <a href={`mailto:${profile.email}`} className="hover:text-accent transition-colors">{profile.email}</a>
            </div>
          </div>
          <div className="flex items-center gap-4 flex-wrap mb-6">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card-bg border border-border-subtle text-sm text-zinc-400 hover:border-accent hover:text-accent hover:bg-accent/5 transition-colors card-hover"
              >
                <Icon size={18} />
                {label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-sm text-deep-bg hover:bg-accent/90 transition-colors card-hover"
            >
              Explore Projects
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card-bg border border-border-subtle text-sm text-zinc-400 hover:border-accent hover:text-accent hover:bg-accent/5 transition-colors card-hover"
            >
              Contact Me
              <MessageCircle size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default PersonalIntro;
