'use client';

import { mockedProjects } from '@data';
import { ProjectCard } from '@components';
import { motion } from 'motion/react';

export const ProjectsGrid = ({ homePage }: { homePage?: boolean }) => {
  const projects = homePage ? mockedProjects.slice(0, 5) : mockedProjects;

  return (
    <motion.ul
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, margin: '-100px' }}
      transition={{ duration: 0.5 }}
    >
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{
            duration: 0.7,
            delay: index * 0.1, // Stagger effect based on index
            ease: 'easeOut',
          }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </motion.ul>
  );
};
