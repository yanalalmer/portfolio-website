'use client';
import { HamburgerProps } from '@types';

export const Hamburger = ({
  isOpen,
  toggleMenu,
  textColor = 'black',
}: HamburgerProps) => {
  return (
    <button
      type="button"
      onClick={toggleMenu}
      className="z-30 flex size-8 sm:size-9 cursor-pointer items-center justify-center transition-all duration-500 ease-in-out mobile:hidden"
    >
      <div
        className={`relative h-1 w-7 rounded-md transition-all duration-500 ease-in-out ${
          isOpen ? 'translate-x-[-50px] bg-transparent' : 'translate-x-0 bg-' + textColor
        }`}
      >
        <div
          className={`absolute h-1 w-7 -translate-y-2 rounded-md bg-${textColor} transition-all duration-500 ease-in-out ${
            isOpen ? 'rotate-45 translate-x-[50px] translate-y-1' : ''
          }`}
        />
        <div
          className={`absolute h-1 w-7 translate-y-2 rounded-md bg-${textColor} transition-all duration-500 ease-in-out ${
            isOpen ? '-rotate-45 translate-x-[50px] translate-y-[4px]' : ''
          }`}
        />
      </div>
    </button>
  );
};
