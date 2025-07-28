'use client';
import { useParams } from 'next/navigation';
import { mockedProjects } from '@data';
import {
  ProjectBranding,
  ProjectHero,
  ProjectPara,
  ProjectDesigns,
  ProjectBackground,
} from '@components';

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;

  const project = mockedProjects.find((p) => p.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main>
      <ProjectHero {...project} />
      <ProjectPara {...project} />
      <ProjectBackground {...project} />
      <ProjectBranding {...project} />
      <ProjectDesigns {...project} />
    </main>
  );
}
