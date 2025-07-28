'use client';

import { SectionTitle } from '@components';
import { services } from '@data';
import { motion } from 'motion/react';

export const Services = () => {
  return (
    <>
      <motion.div
        className="mb-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <SectionTitle title="Specializing in" />
      </motion.div>
      <div className="w-full flex flex-wrap relative mobile:gap-16 gap-12">
        {services.map((service, index) => (
          <motion.div
            key={service.number}
            className="block flex-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{
              duration: 0.8,
              delay: 0.2 + index * 0.1,
              ease: 'easeOut',
            }}
          >
            <div className="w-full flex items-start">
              <p className="font-bold ml-2">{service.title}</p>
            </div>
            <p className="mobile:pt-8 pt-4">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};
