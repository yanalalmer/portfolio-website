'use client';

import { Container, SectionTitle } from '@components';
import { Project } from '@types';
import { motion } from 'motion/react';

export const ProjectBranding = ({ brandingColors }: Project) => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <SectionTitle title="Branding" />
      </motion.div>
      <div className="tablet:flex grid grid-cols-2 gap-2 justify-around items-center my-10">
        {brandingColors.map((color, index) => (
          <motion.div
            className="flex flex-col items-center gap-4 cursor-pointer"
            key={color}
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{
              duration: 0.8,
              delay: 0.2 + index * 0.1,
              ease: 'easeOut',
            }}
          >
            <motion.div
              className="desktop:w-40 desktop:h-40 laptop:w-32 laptop:h-32 tablet:w-24 tablet:h-24 w-20 h-20 rounded-full shadow-xl"
              style={{ backgroundColor: color }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
            />
            <div>{color}</div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};
