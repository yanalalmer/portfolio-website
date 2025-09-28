import { UpArrowIcon } from "@icons";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@data";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-40 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Projects
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {projects.slice(0, 5).map((project, idx) => (
            <li className="mb-12" key={idx}>
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 cursor-pointer">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-bgOffset"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <Link
                      className="inline-flex items-baseline font-medium leading-tight group/link"
                      href={project.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={project.title + " (opens in a new tab)"}
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        {project.title}
                        <span className="inline-block">
                          <UpArrowIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                        </span>
                      </span>
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-normal">
                    {project.description}
                  </p>
                </div>
                <Image
                  alt={project.title + " marketing card"}
                  src={project.image}
                  className="z-20 rounded transition sm:order-1 sm:col-span-2 sm:translate-y-1"
                  width={280}
                  height={200}
                />
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <Link
            className="inline-flex items-center font-medium leading-tight group cursor-pointer"
            aria-label="View Full Project Archive"
            href="/archive"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-secondary motion-reduce:transition-none">
                View Full Project{" "}
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px transition group-hover:border-secondary motion-reduce:transition-none">
                  Archive
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};
