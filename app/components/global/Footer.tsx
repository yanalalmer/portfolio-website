import { footerLinks } from '@data';
import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-[8%] bg-black w-full text-white">
      <div className="w-[95%] tablet:w-full pb-4 m-auto">
        <Link href="/" className="flex relative m-auto">
          <Image
            src="/images/logo_white.png"
            width={512}
            height={512}
            alt="logo"
            className="mobile:w-16 mobile:h-16 h-8 w-8 m-auto"
          />
        </Link>
        <div className="w-full text-center relative mt-8">
          <ul className="py-4 flex mobile:flex-row flex-col justify-center items-center text-center">
            {footerLinks.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <li
                  className={`font-bold ${
                    link === footerLinks[footerLinks.length - 1] ? 'mr-0' : 'mobile:mr-16'
                  } relative after:content-[''] after:w-0 after:bg-white after:h-[2px] after:absolute after:left-0 after:-bottom-1 after:transition-all after:duration-500 after:ease-in-out hover:after:w-full`}
                >
                  {link.title}
                </li>
              </Link>
            ))}
          </ul>
          <p className="text-center text-sm">
            ©{currentYear} Yanal Almir - &nbsp;
            <a href="mailto:info@yanal.nl">Contact</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
