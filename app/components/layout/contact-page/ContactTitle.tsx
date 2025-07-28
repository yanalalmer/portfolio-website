'use client';

import { motion } from 'motion/react';
import { SectionTitle } from '@components';

export const ContactTitle = () => {
  return (
    <>
      <motion.h2
        className="mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Lets work together
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-100px' }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      >
        <SectionTitle title="Get in touch" />
      </motion.div>
    </>
  );
};
