'use client';

import { PrimaryButton, SecondaryButton, Mouse } from '@components';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full h-[calc(100dvh-128px)] flex items-center justify-center">
      <div className="flex mobile:flex-row flex-col-reverse justify-center items-center">
        <div className="tablet:w-1/2 w-full mobile:mt-16 tablet:mt-0">
          <motion.div
            className="text-center mobile:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            exit={{ opacity: 0, y: -20 }}
          >
            <h1 className="mb-4 capitalize">Frontend Development That Drives Results</h1>
            <p className="mb-4 hidden tablet:block">
              I build custom web applications from scratch for small and medium
              enterprises, agencies, and growing businesses. Fast, scalable, and designed
              to deliver real business results.
            </p>
            <motion.div
              className="mobile:py-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-100px' }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Link href="/contact">
                <PrimaryButton text="get in touch" className="mr-4" />
              </Link>
              <Link href="/about">
                <SecondaryButton text="about me" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="flex items-center justify-center mobile:w-1/2 w-full mobile:pl-8 pl-0 mb-4 mt-4 mobile:mt-0 mobile:mb-0">
          <div className="flex justify-center items-center">
            <motion.div
              style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
              className="desktop:w-[40vmin] desktop:h-[40vmin] laptop:h-[40vmin] laptop:w-[40vmin] mobile:w-[30vmin] mobile:h-[30vmin] w-[50vmin] h-[50vmin] gradient absolute rotate-[60deg]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: [60, 420],
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: false, margin: '-100px' }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                opacity: { duration: 0.8, delay: 0.3 },
                scale: { duration: 0.8, delay: 0.3 },
                rotate: {
                  duration: 30,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: 0.3,
                },
              }}
            />
            <motion.div
              style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
              className="desktop:w-[40vmin] desktop:h-[40vmin] laptop:w-[40vmin] laptop:h-[40vmin] mobile:w-[30vmin] mobile:h-[30vmin] w-[50vmin] h-[50vmin] dark-gradient rotate-[30deg]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: [30, -330],
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: false, margin: '-100px' }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                opacity: { duration: 0.8, delay: 0.5 },
                scale: { duration: 0.8, delay: 0.5 },
                rotate: {
                  duration: 25,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: 0.5,
                },
              }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{ once: false, margin: '-100px' }}
              exit={{ opacity: 0, scale: 0.8, y: 30 }}
              transition={{
                duration: 1.2,
                delay: 0.7,
                ease: 'easeOut',
              }}
              className="absolute"
            >
              <Image
                src="/images/profile.jpg"
                alt="Profile"
                style={{
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                }}
                width={400}
                height={400}
                className="desktop:w-[40vmin] desktop:h-[40vmin] laptop:w-[40vmin] laptop:h-[40vmin] mobile:w-[30vmin] mobile:h-[30vmin] w-[50vmin] h-[50vmin]"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <Mouse className="absolute bottom-5 left-[50%] translate-x-[-50%] hidden tablet:block" />
    </div>
  );
};
