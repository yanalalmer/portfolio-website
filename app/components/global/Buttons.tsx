import { ButtonProps } from '@types';
import { ThemeIcon } from '@icons';
import Link from 'next/link';
export const PrimaryButton = ({ text, type, className, disabled }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`text-white gradient main-transition hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-3 text-center me-2 capitalize ${className}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export const SecondaryButton = ({ text, type, className }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`group relative inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-md font-medium text-gray-900 rounded-lg gradient group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 ${className}`}
    >
      <span className="relative px-5 py-2.5 main-transition bg-white rounded-md group-hover:bg-transparent capitalize">
        {text}
      </span>
    </button>
  );
};

export const RoundedButton = ({ text, className }: ButtonProps) => {
  return (
    <div
      className={`group tablet:w-48 tablet:h-48 w-36 h-36 gradient text-white rounded-[50%] main-transition capitalize cursor-pointer ${className}`}
    >
      <span className="bg-black main-transition w-full h-full rounded-[50%] flex justify-center items-center group-hover:bg-transparent">
        {text}
      </span>
    </div>
  );
};

export const ThemeSelector = ({ className }: ButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center w-12 h-12 bg-black/20 rounded-full ${className}`}
      aria-controls="theme-menu"
      aria-expanded="false"
    >
      <span className="sr-only">toggle theme panel</span>
      <ThemeIcon />
    </button>
  );
};

export const CTA = ({ text, className }: ButtonProps) => {
  return (
    <Link href="/contact">
      <PrimaryButton text={text} className={className} />
    </Link>
  );
};
