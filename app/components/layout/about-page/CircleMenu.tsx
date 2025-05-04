'use client';
import React from 'react';
import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6 } from '@icons';
import { CircleMenuCircles, CircleMenuIcon, MobileCircleMenuIcon } from '@components';

const icons = [
  {
    x: '250px',
    y: '-210px',
    src: <Icon1 />,
    alt: 'product sense',
    title: 'product sense',
    text: 'I possess an innate knack for discerning the characteristics of a top-tier product, ensuring excellence in every endeavor.',
  },
  {
    x: '-250px',
    y: '-210px',
    src: <Icon2 />,
    alt: 'self starter',
    title: 'self starter',
    text: 'You share your goal, and I will effortlessly discover the optimal solution for you, eliminating all hassles.',
  },
  {
    x: '120px',
    y: '-425px',
    src: <Icon3 />,
    alt: 'experience',
    title: 'experience',
    text: 'I bring over 10 years of technical expertise to the table. My journey began in 2014 when I created my very first website.',
  },
  {
    x: '-120px',
    y: '-425px',
    src: <Icon4 />,
    alt: 'project management',
    title: 'project management',
    text: 'With a wealth of experience in project management, I excel in orchestrating tasks, resources, and timelines to ensure seamless project execution, meeting objectives with precision.',
  },
  {
    x: '120px',
    y: '0px',
    src: <Icon5 />,
    alt: 'creative',
    title: 'attention to detail',
    text: 'I firmly believe that a distinctive style and unwavering attention to detail are paramount for any successful business.',
  },
  {
    x: '-120px',
    y: '0px',
    src: <Icon6 />,
    alt: 'project management',
    title: 'responsibility',
    text: 'I pride myself on unwavering reliability, consistently meeting agreements and deadlines, ensuring your projects progress smoothly.',
  },
];
export const CircleMenu = () => {
  const [isLargeScreen, setIsLargeScreen] = React.useState(false);
  React.useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="m-auto pb-32">
      <div className="tablet:h-[31.25rem] tablet:w-[31.25rem] h-fit w-fit rounded-full m-auto relative">
        {isLargeScreen ? <CircleMenuCircles /> : ''}
        {icons.map((icon) =>
          isLargeScreen ? (
            <CircleMenuIcon icon={icon} key={icon.title} />
          ) : (
            <MobileCircleMenuIcon icon={icon} key={icon.alt} />
          ),
        )}
      </div>
    </div>
  );
};
