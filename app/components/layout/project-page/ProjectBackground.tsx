'use client';

import { Container, SectionTitle } from '@components';
import Image from 'next/image';
import { Project } from '@types';
import { motion } from 'motion/react';

export const ProjectBackground = ({
  backgroundTitle,
  backgroundPara,
  backgroundImageUrl,
}: Project) => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <SectionTitle title="Project Background" />
      </motion.div>
      <div className="flex gap-16 py-10">
        <motion.div
          className="flex flex-col gap-2 w-1/2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <motion.h1
            className="font-bold capitalize"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            {backgroundTitle}
          </motion.h1>
          <motion.p
            className="text-darkGrey"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            {backgroundPara}
          </motion.p>
        </motion.div>

        <motion.div
          className="w-1/2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <Image src={backgroundImageUrl} alt="Background" width={1000} height={1000} />
        </motion.div>
      </div>
    </Container>
  );
};
