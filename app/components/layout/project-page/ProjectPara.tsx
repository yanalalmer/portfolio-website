import { Project } from '@types';
import { PrimaryButton } from '@components';

export const ProjectPara = ({ para, liveSiteUrl }: Project) => {
  return (
    <div className="bg-black w-full py-20">
      <div className="text-white w-[40%] mx-auto text-center">
        <h1 className="capitalize mb-8">the project</h1>
        <p className="mb-8 font-light font-frank text-left">{para}</p>
        <a href={liveSiteUrl} target="_blank" rel="noopener noreferrer">
          <PrimaryButton text="visit live site" />
        </a>
      </div>
    </div>
  );
};
