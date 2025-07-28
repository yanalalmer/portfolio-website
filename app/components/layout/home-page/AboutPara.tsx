'use client';

import { RoundedButton } from '@components';
import Link from 'next/link';
import { motion } from 'motion/react';

export const AboutPara = () => {
  return (
    <div className="relative tablet:mt-12">
      <div className="flex flex-col tablet:flex-row">
        <motion.h3
          className="tablet:w-[70%] w-full tablet:pr-16 pr-0 block mb-4 tablet:mb-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Trusted by teams to turn complex ideas into polished, high-performing web apps.
          With over a decade of experience in frontend development, I help businesses ship
          faster without compromising on quality.
        </motion.h3>
        <motion.div
          className="tablet:w-[30%] w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <p className="mb-8">
            I've worked with startups, agencies, and e-commerce brands across Europe to
            deliver scalable, maintainable applications built for growth. From technical
            architecture to seamless UI, I bring both precision and pragmatism to every
            project. Whether you're starting from scratch or need a frontend expert to
            level up your stack, I can help.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          >
            <Link href="/about" className="hidden laptop:block">
              <RoundedButton text="About Me" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
