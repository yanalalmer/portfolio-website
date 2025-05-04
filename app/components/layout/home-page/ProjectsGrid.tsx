import { mockedProjects } from '@data';
import { ProjectCard } from '@components';

export const ProjectsGrid = ({ homePage }: { homePage?: boolean }) => {
  const projects = homePage ? mockedProjects.slice(0, 5) : mockedProjects;

  return (
    <ul>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </ul>
  );
};
