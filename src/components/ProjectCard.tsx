import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Project } from '../data/projects';

const hasLink = (url: string) => url && url !== '#';

const ProjectCard = ({ project, index = 0 }: { project: Project; index?: number }) => {
  const linkable = hasLink(project.url);

  const inner = (
    <>
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent transition-colors">
          {project.name}
        </h3>
        {linkable && <ExternalLink size={16} className="text-zinc-500 group-hover:text-accent shrink-0 mt-1 transition-colors" />}
      </div>
      <p className="text-sm text-zinc-400 leading-relaxed">{project.desc}</p>
    </>
  );

  if (linkable) {
    return (
      <motion.a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-card-bg border border-border-subtle rounded-lg p-6 card-hover group cursor-pointer"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-30px' }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.div
      className="block bg-card-bg border border-border-subtle rounded-lg p-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
    >
      {inner}
    </motion.div>
  );
};

export default ProjectCard;
