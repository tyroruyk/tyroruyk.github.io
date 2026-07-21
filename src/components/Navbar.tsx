import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data/profile';

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/certifications', label: 'Credentials' },
  { to: '/game', label: 'Game' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinkClass = (path: string) =>
    `cursor-pointer text-sm font-medium transition-colors ${
      isActive(path) ? 'text-accent' : 'text-zinc-400 hover:text-accent'
    }`;

  const close = () => setOpen(false);

  return (
    <nav className="glass-nav fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" onClick={close} className="cursor-pointer text-lg font-bold text-text-primary hover:text-accent transition-colors">
          {profile.name.split(' ')[0]}<span className="text-accent">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <Link key={to} to={to} className={navLinkClass(to)}>{label}</Link>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex md:hidden items-center justify-center cursor-pointer text-zinc-400 hover:text-accent transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden border-t border-border-subtle bg-deep-bg/95 backdrop-blur-xl"
          >
            <div className="px-6 py-4 flex flex-col gap-3">
              {links.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={close}
                  className={`cursor-pointer text-sm font-medium transition-colors ${
                    isActive(to) ? 'text-accent' : 'text-zinc-400 hover:text-accent'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
