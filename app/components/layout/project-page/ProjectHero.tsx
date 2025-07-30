'use client';

import { Project } from '@types';
import { motion } from 'motion/react';

export const ProjectHero = (project: Project) => {
  const { title, year, roleService, country, projectImage, context } = project;
  return (
    <div
      className="bg-cover bg-top bg-no-repeat h-[70dvh] flex items-center justify-center relative"
      style={{ backgroundImage: `url(${projectImage})` }}
    >
      <div className="absolute top-0 left-0 w-full h-[70dvh] bg-black opacity-55" />
      <motion.div
        className="text-white text-center z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
      >
        <motion.h1
          className="laptop:text-[128px] tablet:text-[100px] text-[60px] font-bold capitalize"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
        >
          {title}
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
        >
          {country}
        </motion.h3>
      </motion.div>
      <motion.div
        className="absolute bottom-0 left-0 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
      >
        <div className="text-white max-w-[80%] mx-auto flex tablet:flex-row flex-col gap-2 tablet:gap-0 justify-between items-center pb-10 capitalize font-bold">
          <p className="text-[14px]">
            <span className="text-[#37a5eb]">role:</span> {roleService}
          </p>
          <p className="text-[14px]">
            <span className="text-[#37a5eb]">context:</span> {context}
          </p>
          <p className="text-[14px]">
            <span className="text-[#37a5eb]">year:</span> {year}
          </p>
        </div>
      </motion.div>
    </div>
  );
};
