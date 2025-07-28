'use client';

import { SectionTitle, CTA, TechStackGrid } from '@components';
import { motion } from 'motion/react';

export const TechStack = () => {
  return (
    <div className="mb-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <SectionTitle title="Tech Stack" />
      </motion.div>
      <motion.p
        className="mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-100px' }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      >
        I work with proven tools that support performance, scalability, and
        maintainability. My stack evolves with the frontend ecosystem—but I always
        prioritize stability and long-term value for your product.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-100px' }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
      >
        <TechStackGrid />
      </motion.div>
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-100px' }}
        transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
      >
        <CTA text="find out more" className="mt-16 mx-auto text-[20px]" />
      </motion.div>
    </div>
  );
};
