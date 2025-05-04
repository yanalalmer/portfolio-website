'use client';

type MobileCircleMenuIcon = {
  src: React.ReactNode;
  title: string;
  text: string;
};

export const MobileCircleMenuIcon = ({ icon }: { icon: MobileCircleMenuIcon }) => {
  const { src, title, text } = icon;
  return (
    <div className="text-left mb-8 last:mb-0">
      <div className="flex justify-start items-center">
        <div className="bg-black rounded-[50%] h-[3.125rem] w-[3.125rem] flex justify-center items-center mr-4">
          <span className="w-8 h-8">{src}</span>
        </div>
        <div className="capitalize">
          <h3>{title}</h3>
        </div>
      </div>
      <div className="ml-16">
        <p>{text}</p>
      </div>
    </div>
  );
};
