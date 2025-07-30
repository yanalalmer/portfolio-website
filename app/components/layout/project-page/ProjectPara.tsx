'use client';

import { Project } from '@types';
import { PrimaryButton } from '@components';
import { motion } from 'motion/react';

export const ProjectPara = ({ para, liveSiteUrl }: Project) => {
  return (
    <div className="bg-black w-full py-20 laptop:px-20 tablet:px-10 px-5">
      <motion.div
        className="text-white laptop:w-[40%] mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1
          className="capitalize mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          the project
        </motion.h1>
        <motion.p
          className="mb-8 font-light font-frank text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          {para}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
        >
          <a href={liveSiteUrl} target="_blank" rel="noopener noreferrer">
            <PrimaryButton text="visit live site" />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};
