import { RoundedButton } from '@components';
import Link from 'next/link';

export const AboutPara = () => {
  return (
    <div className="relative tablet:mt-12">
      <div className="flex  flex-col tablet:flex-row">
        <h3 className="tablet:w-[70%] w-full tablet:pr-16 pr-0 block mb-4 tablet:mb-0">
          Trusted by teams to turn complex ideas into polished, high-performing web apps.
          With over a decade of experience in frontend development, I help businesses ship
          faster without compromising on quality.
        </h3>
        <div className="tablet:w-[30%] w-full">
          <p className="mb-8">
            I’ve worked with startups, agencies, and e-commerce brands across Europe to
            deliver scalable, maintainable applications built for growth. From technical
            architecture to seamless UI, I bring both precision and pragmatism to every
            project. Whether you’re starting from scratch or need a frontend expert to
            level up your stack, I can help.
          </p>
          <Link href="/about" className="hidden laptop:block">
            <RoundedButton text="About Me" />
          </Link>
        </div>
      </div>
    </div>
  );
};
