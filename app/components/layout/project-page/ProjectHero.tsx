import { Project } from '@types';

export const ProjectHero = (project: Project) => {
  const { title, year, roleService, country, projectImage, context } = project;
  return (
    <div
      className="bg-cover bg-top bg-no-repeat h-[70dvh] flex items-center justify-center relative"
      style={{ backgroundImage: `url(${projectImage})` }}
    >
      <div className="absolute top-0 left-0 w-full h-[70dvh] bg-black opacity-55" />
      <div className="text-white text-center z-10">
        <h1 className="text-[128px] font-bold capitalize">{title}</h1>
        <h3>{country}</h3>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <div className="text-white max-w-[80%] mx-auto flex justify-between items-center pb-10 capitalize font-bold">
          <p className="text-[14px]">
            <span className="text-[#37a5eb]">role:</span> {roleService}
          </p>
          <p className="text-[14px]">
            <span className="text-[#37a5eb]">context:</span> {context}
          </p>
          <p className="text-[14px]">
            <span className="text-[#37a5eb]">year:</span> {year}
          </p>
        </div>
      </div>
    </div>
  );
};
