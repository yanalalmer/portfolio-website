'use client';
import React from 'react';

type CircleMenuIcon = {
  x: string;
  y: string;
  src: React.ReactNode;
  title: string;
  text: string;
};

export const CircleMenuIcon = ({ icon }: { icon: CircleMenuIcon }) => {
  const [isActive, setIsActive] = React.useState<CircleMenuIcon | null>(null);
  const onHover = (item: CircleMenuIcon) => {
    setIsActive(item);
  };
  const handleMouseLeave = () => {
    setIsActive(null);
  };
  const { x, y, src, title, text } = icon;
  return (
    <>
      <div
        onMouseEnter={() => onHover(icon)}
        onMouseLeave={handleMouseLeave}
        style={{ transform: `translate(${x}, ${y})` }}
        className="h-20 w-20 flex justify-center items-center m-auto rounded-[50%] bg-black cursor-pointer absolute left-0 right-0 bottom-0 z-10 shadow-2xl main-transition hover:gradient hover:shadow-lg"
      >
        <span className="w-10 h-10">{src}</span>
      </div>
      <div
        style={{ opacity: isActive ? '1' : '0' }}
        className="h-full w-3/4 flex justify-center items-center flex-col absolute top-0 left-0 right-0 bottom-0 m-auto p-0 main-transition capitalize text-center"
      >
        <h3 className="mb-3">{title}</h3>
        <p>{text}</p>
      </div>
    </>
  );
};
