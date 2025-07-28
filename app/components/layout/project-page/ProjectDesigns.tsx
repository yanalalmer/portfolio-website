'use client';

import { Container, SectionTitle } from '@components';
import Image from 'next/image';
import { Project } from '@types';
import { motion } from 'motion/react';

export const ProjectDesigns = ({ designImage }: Project) => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <SectionTitle title="Designs" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, margin: '-100px' }}
        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
      >
        <Image
          src={designImage}
          alt="Design"
          width={1170}
          height={658}
          className="my-10 mx-auto"
        />
      </motion.div>
    </Container>
  );
};
