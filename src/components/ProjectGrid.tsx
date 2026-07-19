import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import Reveal from './Reveal';

const ProjectGrid = () => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-6">
      <Reveal>
        <div className="mb-10">
          <p className="text-sm text-accent uppercase tracking-wider mb-2">Portfolio</p>
          <h2 className="text-3xl font-bold text-text-primary">All Projects</h2>
        </div>
      </Reveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <ProjectCard key={project.name} project={project} index={idx} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectGrid;
