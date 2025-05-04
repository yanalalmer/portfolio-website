import Image from 'next/image';
import { HeaderMenu, MobileHeaderMenu } from '@components';

interface HeaderProps {
  textColor?: 'black' | 'white';
}

export const Header = ({ textColor = 'black' }: HeaderProps) => {
  return (
    <nav className="flex justify-between items-center py-8 desktop:max-w-[1170px] laptop:max-w-[1000px] w-[95%] mx-auto absolute top-0 left-0 right-0 z-50">
      {/* logo */}
      <a href="/">
        <div className="relative w-12 h-12 mobile:h-14 mobile:w-14 tablet:w-16 tablet:h-16 z-30">
          <Image
            src={`/images/logo_${textColor}.png`}
            width={100}
            height={100}
            alt="logo"
            className="z-20"
          />
        </div>
      </a>
      <HeaderMenu textColor={textColor} />
      <MobileHeaderMenu textColor={textColor} />
    </nav>
  );
};
