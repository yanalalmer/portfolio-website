import { PrimaryButton, SecondaryButton, Mouse } from '@components';
import Link from 'next/link';
import Image from 'next/image';

export const Hero = () => {
  return (
    <div className="relative w-full h-[100dvh] flex items-center justify-center">
      <div className="flex mobile:flex-row flex-col-reverse justify-center items-center">
        <div className="tablet:w-1/2 w-full mobile:mt-16 tablet:mt-0">
          <div className="text-center mobile:text-left">
            <h1 className="mb-4 capitalize">Frontend Development That Drives Results</h1>
            <p className="mb-4 hidden tablet:block">
              I build custom web applications from scratch for small and medium
              enterprises, agencies, and growing businesses. Fast, scalable, and designed
              to deliver real business results.
            </p>
            <div className="mobile:py-8">
              <Link href="/contact">
                <PrimaryButton text="get in touch" className="mr-4" />
              </Link>
              <Link href="/about">
                <SecondaryButton text="about me" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mobile:w-1/2 w-full mobile:pl-8 pl-0 mb-4 mt-4 mobile:mt-0 mobile:mb-0">
          <div className="flex justify-center items-center">
            <div
              style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
              className="desktop:w-[40vmin] desktop:h-[40vmin] laptop:h-[40vmin] laptop:w-[40vmin] mobile:w-[30vmin] mobile:h-[30vmin] w-[50vmin] h-[50vmin] gradient absolute rotate-[60deg]"
            />
            <div
              style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
              className="desktop:w-[40vmin] desktop:h-[40vmin] laptop:w-[40vmin] laptop:h-[40vmin] mobile:w-[30vmin] mobile:h-[30vmin] w-[50vmin] h-[50vmin] dark-gradient rotate-[30deg]"
            />
            <Image
              src="/images/profile.jpg"
              alt="Profile"
              style={{
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
              }}
              width={400}
              height={400}
              className="desktop:w-[40vmin] desktop:h-[40vmin] laptop:w-[40vmin] laptop:h-[40vmin] mobile:w-[30vmin] mobile:h-[30vmin] w-[50vmin] h-[50vmin] absolute"
            />
          </div>
        </div>
      </div>
      <Mouse className="absolute bottom-5 left-[50%] translate-x-[-50%] hidden tablet:block" />
    </div>
  );
};
