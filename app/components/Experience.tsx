import { UpArrowIcon } from '@icons';
import Link from 'next/link';

export const Experience = () => {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-40 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Experience
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {projects.map((project, idx) => (
            <li className="mb-12 cursor-pointer" key={idx}>
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-bgOffset"></div>
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide  sm:col-span-2"
                  aria-label="2024 to Present"
                >
                  {project.date}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug">
                    <div>
                      <Link
                        className="inline-flex items-baseline font-medium leading-tight group/link"
                        href={project.companyUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${project.title} at ${project.company} (opens in a new tab)`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          {project.title} ·{' '}
                          <span className="inline-block">
                            {project.company}
                            <UpArrowIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                          </span>
                        </span>
                      </Link>
                    </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    {project.description}
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {project.technologies.map((technology, idx) => (
                      <li className="mr-1.5 mt-2" key={idx}>
                        <div className="flex items-center rounded-full bg-secondary text-white px-3 py-1 text-xs font-medium leading-5">
                          {technology}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

const projects = [
  {
    date: 'Dec 2024 — Present',
    title: 'Frontend Architect',
    company: 'Creative Clicks',
    companyUrl: 'https://creativeclicks.com/',
    description:
      'Architecting the monorepo behind an estate of international brand sites — package topology, shared contracts, and the build graph that keeps [N] surfaces shipping independently from one repository.',
    technologies: ['TypeScript', 'Next.js', 'Turborepo', 'AWS', 'Headless CMS'],
  },
  {
    date: 'May 2023 — Dec 2024',
    title: 'Senior Frontend Engineer',
    company: 'Mediahuis Nederland',
    companyUrl: 'https://www.mediahuis.nl/',
    description:
      'Led the frontend re-architecture of Dumpert.nl at roughly 1.2M daily actives, decomposing a legacy codebase into independently replaceable boundaries and sequencing the migration to avoid a cutover.',
    technologies: ['JavaScript', 'TypeScript', 'React', 'GCP', 'Next.js'],
  },
  {
    date: 'Apr 2021 — May 2023',
    title: 'Frontend Engineer',
    company: 'PressPage',
    companyUrl: 'https://www.presspage.com/',
    description:
      'Designed the multi-tenant newsroom platform behind KPN, Smart and other enterprise brands — shared codebase, brand differences isolated to configuration rather than forks.',
    technologies: ['TypeScript', 'React', 'Vue', 'Multi-tenant'],
  },
  {
    date: 'Jan 2020 — Apr 2021',
    title: 'Frontend Developer',
    company: 'CarSys',
    companyUrl: 'https://www.carsys.online/',
    description:
      'Refactored a legacy SaaS platform toward maintainable module boundaries while feature work continued.',
    technologies: ['TypeScript', 'React', 'Tailwind', 'AWS'],
  },
  {
    date: 'Aug 2019 — Aug 2020',
    title: 'Frontend Developer',
    company: 'Code Matrix Zone',
    companyUrl: 'https://codematrix.nl/',
    description:
      'Worked on the development of a number of websites for clients, including e-commerce websites, landing pages and corporate websites.',
    technologies: ['JavaScript', 'React', 'SCSS', 'Webpack'],
  },
  {
    date: 'Aug 2014 - Sep 2014',
    title: 'Frontend Developer',
    company: 'FP& McCann',
    companyUrl: 'https://mccann.com/',
    description:
      'Maintained a group of seven web applications for FP& McCann, including official group websites and mobile application.',
    technologies: ['JavaScript', 'React', 'React native', 'SCSS'],
  },
];
