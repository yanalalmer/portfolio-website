'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { contactSections } from '@data';

type Link = {
  id: number;
  href?: string;
  link: string;
};

export const ContactDetails = () => {
  return (
    <div className="tablet:w-2/5 w-full relative pl-0 mobile:pl-8 desktop:pl-32">
      {contactSections.map((section, sectionIndex) => (
        <motion.div
          key={section.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{
            duration: 0.8,
            delay: 0.3 + sectionIndex * 0.1,
            ease: 'easeOut',
          }}
        >
          <small className="text-darkGrey uppercase">{section.title}</small>
          <ul className="mt-4 pb-10 w-full flex flex-col justify-start">
            {section.links.map((link: Link, linkIndex) => (
              <motion.li
                key={link.id}
                className="h-8 block"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: '-100px' }}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + sectionIndex * 0.1 + linkIndex * 0.05,
                  ease: 'easeOut',
                }}
              >
                {link.href ? (
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='relative after:content-[""] after:w-0 after:h-0.5 after:absolute after:left-0 after:-bottom-1 after:block after:main-transition after:bg-black hover:after:w-full'
                  >
                    {link.link}
                  </Link>
                ) : (
                  link.link
                )}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
};
