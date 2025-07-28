import { navbarLinks } from '@data';

interface HeaderMenuProps {
  textColor?: 'black' | 'white';
}

export const HeaderMenu = ({ textColor = 'black' }: HeaderMenuProps) => {
  return (
    <div className="mobile:flex items-center hidden">
      {navbarLinks.map((link) => (
        <a
          key={link.id}
          href={link.href}
          className={`relative after:absolute cursor-pointer ml-8 capitalize after:block after:h-[2px] after:w-0 after:bg-${textColor} after:transition-all after:duration-300 after:ease-in-out hover:after:w-full text-${textColor}`}
        >
          {link.title}
        </a>
      ))}
    </div>
  );
};
