'use client';

import { motion } from 'motion/react';

export const WorkIntro = () => {
  return (
    <div>
      <motion.h2
        className="mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Diverse Projects, Diverse Clients!
      </motion.h2>
      <motion.p
        className="mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-100px' }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      >
        In my world of digital innovation, I thrive on diversity. My portfolio is a
        testament to a rich tapestry of projects and an array of clients who share a
        common thread — a passion for unique style, seamless functionality, and
        high-performing websites.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-100px' }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
      >
        My mission is to catapult businesses forward, regardless of their niche. From the
        dynamic world of eCommerce to the precision of efficient landing pages, the depth
        of amazing 3D renders, the vibrancy of stunning dynamic websites, and the
        complexity of platforms like online schools, appointment systems, hotel bookings,
        rentals, subscriptions, or multilingual sites — my portfolio boasts a spectrum of
        successful ventures.
      </motion.p>
    </div>
  );
};
