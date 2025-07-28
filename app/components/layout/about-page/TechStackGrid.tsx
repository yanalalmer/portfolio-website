'use client';

import { techStack } from '@data';
import { motion } from 'motion/react';

export const TechStackGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-4 mb-8">
      {techStack.map((item, sectionIndex) => (
        <motion.div
          key={sectionIndex}
          className="border-b border-gray-200 pb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{
            duration: 0.8,
            delay: 0.1 * sectionIndex,
            ease: 'easeOut',
          }}
        >
          <h3 className="text-lg font-bold mb-4">{item.section}:</h3>
          <div className="grid grid-cols-5 gap-4">
            {item.items.map((logo, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, margin: '-100px' }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + 0.05 * (sectionIndex * 5 + index),
                  ease: 'easeOut',
                }}
              >
                <logo.icon className="h-12 w-12" />
                <p>{logo.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
