'use client';

import { CTA } from '@components';
import { motion } from 'motion/react';

export const Para = () => {
  return (
    <div>
      <motion.h2
        className="mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <span>10</span> Years of Frontend Expertise, Built on Craft, Speed, and
        Scalability
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-100px' }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      >
        As a Senior Frontend Developer with over a decade of hands-on experience building
        modern web applications from the ground up. I've worked with startups, agencies,
        and established businesses across industries to deliver fast, scalable, and
        user-focused web applications. My mission is simple: turn complex ideas into
        elegant, reliable solutions that drive real business impact.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-100px' }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
      >
        I provide comprehensive solutions, from initial design to final deployment,
        ensuring a seamless and efficient process for your project. All you have to do is
        tell me your deadline.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-100px' }}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
      >
        I charge per project instead of hourly, which makes it easier for you to budget
        and plan your project, and make my services more efficient.
      </motion.p>
      <br />
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-100px' }}
        transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
      >
        Do you have a project in mind? Let's talk about it.
      </motion.p>
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-100px' }}
        transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
      >
        <CTA text="get an offer" className="mt-16 mx-auto text-[20px]" />
      </motion.div>
    </div>
  );
};
