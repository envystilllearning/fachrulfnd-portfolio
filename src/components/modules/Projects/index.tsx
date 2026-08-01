import ProjectCard from 'components/ui/ProjectCard';
import { projects } from 'data/projects';

const Projects = () => (
  <div className="container py-16" id="projects">
    <h2 className="text-3xl font-bold mb-2 text-brand-primary dark:text-white typography">
      Selected Work
    </h2>
    <p className="text-brand-secondary dark:text-gray-300 mb-10 text-lg max-w-xl">
      Building tools at the intersection of Web3 infrastructure and autonomous AI agents.
    </p>
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  </div>
);

export default Projects;
