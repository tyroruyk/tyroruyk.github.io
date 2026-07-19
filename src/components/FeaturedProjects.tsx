import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import Reveal from './Reveal';

const featured = projects.filter((p) => p.featured);

const FeaturedProjects = () => (
  <section className="border-b border-border-subtle py-20">
    <div className="max-w-7xl mx-auto px-6">
      <Reveal>
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-sm text-accent uppercase tracking-wider mb-2">Featured Work</p>
            <h2 className="text-3xl font-bold text-text-primary">Selected Projects</h2>
          </div>
          <Link
            to="/projects"
            className="cursor-pointer hidden sm:flex items-center gap-2 text-sm text-zinc-400 hover:text-accent transition-colors"
          >
            View All <ArrowRight size={16} />
          </Link>
        </div>
      </Reveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((project, idx) => (
          <ProjectCard key={project.name} project={project} index={idx} />
        ))}
      </div>
      <Reveal delay={0.4}>
        <div className="mt-8 text-center sm:hidden">
          <Link
            to="/projects"
            className="cursor-pointer inline-flex items-center gap-2 text-sm text-accent hover:text-accent-hover transition-colors"
          >
            View All Projects <ArrowRight size={16} />
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);

export default FeaturedProjects;
