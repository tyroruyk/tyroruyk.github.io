import { ArrowUp, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profile } from '../data/profile';
import { socialLinks } from '../data/social';

const minorIcons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number }>> = {
  Instagram, Facebook,
};

const Footer = () => {
  const minorLinks = socialLinks.filter((s) => !s.major);

  return (
    <footer className="border-t border-border-subtle py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-zinc-500 text-sm">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        {/* <div className="flex items-center gap-4">
          {minorLinks.map(({ href, label, key }) => {
            const Icon = minorIcons[key];
            if (!Icon) return null;
            return (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="icon-btn cursor-pointer">
                <Icon size={20} />
              </a>
            );
          })}
          <Link to="/contact" className="text-xs text-zinc-600 hover:text-accent transition-colors cursor-pointer">
            All socials &rarr;
          </Link>
        </div> */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer flex items-center gap-2 text-sm text-zinc-500 hover:text-accent transition-colors"
        >
          Back to top <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
