import { PrimaryButton } from '@components';
import { Project } from '@types';

export const ProjectCard = ({ project }: { project: Project }) => {
  const isOdd = project.id % 2 === 0;

  return (
    <li className={`tablet:mb-[100px] mb-10`}>
      <a
        href={`/work/${project.slug}`}
        className={`bg-cover bg-center h-[480px] w-[90%] mx-auto block relative tablet:shadow-3xl group ${
          isOdd ? 'tablet:translate-x-10' : 'tablet:-translate-x-10'
        }`}
        style={{
          backgroundImage: `url(${project.projectImage})`,
        }}
      >
        <div className="bg-black absolute inset-0 top-0 left-0 w-full h-full opacity-50" />
        <div className="bg-purple absolute inset-0 top-0 left-0 w-0 h-full opacity-90 group-hover:w-full transition-all duration-300 hidden tablet:block" />
        <h1
          className={`text-white/50 group-hover:text-white hidden tablet:flex opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 transition-all duration-300 text-[200px] font-bold w-[265px] h-[198px] items-center justify-center absolute ${
            isOdd ? '-left-10' : '-right-10'
          } -top-10`}
        >
          0{project.id}
        </h1>
        <div
          className={`absolute group-hover:scale-[1.1] transition-all duration-300 ease-in-out delay-300 ${
            isOdd ? 'right-[10%] text-right' : 'left-[10%]'
          } bottom-[20%] text-white`}
        >
          <h2 className="mb-1 capitalize">{project.title}</h2>
          <h4 className="mb-2">{project.year}</h4>
          <PrimaryButton text="View Project" />
        </div>
      </a>
    </li>
  );
};
