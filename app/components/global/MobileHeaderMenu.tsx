'use client';
import React from 'react';
import Link from 'next/link';
import { navbarLinks } from '@data';
import { Hamburger } from '@components';

interface MobileHeaderMenuProps {
  textColor?: 'black' | 'white';
}

export const MobileHeaderMenu = ({ textColor = 'black' }: MobileHeaderMenuProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} textColor={textColor} />
      <div
        className={`z-20 mobile:hidden absolute left-0 top-0 w-full h-screen bg-white flex flex-col gap-4 items-center justify-center transition-transform duration-300 ${
          isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
        }`}
      >
        {navbarLinks.map((link) => (
          <Link
            href={link.href}
            key={link.id}
            className="text-xl capitalize my-2"
            onClick={toggleMenu}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </>
  );
};
