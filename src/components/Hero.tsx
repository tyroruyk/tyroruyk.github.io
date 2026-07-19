import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Gamepad2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { profile } from '../data/profile';

const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero-gradient min-h-[90vh] flex items-center justify-center pt-16">
      <div className="max-w-3xl mx-auto px-6 text-center py-20">
        <motion.div variants={container} initial="hidden" animate="visible">
          {/* <motion.div variants={item} className="flex justify-center mb-8">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-border-subtle bg-card-bg">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div> */}

          <motion.p variants={item} className="text-sm text-accent font-medium mb-3">
            Hi, I'm
          </motion.p>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-text-primary leading-tight mb-4"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg sm:text-xl text-zinc-300 font-medium mb-6"
          >
            {profile.title}
          </motion.p>

          <motion.p
            variants={item}
            className="text-base text-zinc-400 leading-relaxed max-w-xl mx-auto mb-10"
          >
            Building practical, impactful systems at the intersection of AI, NLP, and distributed architectures.
          </motion.p>

          <motion.div variants={item} className="flex items-center justify-center gap-4 flex-wrap">
            <button
              onClick={() => navigate('/projects')}
              className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-deep-bg font-semibold text-sm hover:bg-accent-hover transition-colors"
            >
              View My Work <ArrowRight size={18} />
            </button>
            <a
              href={`mailto:${profile.email}`}
              className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border-subtle text-text-primary font-semibold text-sm hover:border-accent hover:text-accent transition-colors"
            >
              Let's Chat <MessageSquare size={18} />
            </a>
          </motion.div>

          <motion.div variants={item}>
            <button
              onClick={() => navigate('/game')}
              className="cursor-pointer mt-6 inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-accent transition-colors"
            >
              <Gamepad2 size={18} />
              Play Pong with Avishek <span className="text-xs">→</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
