import { UpArrowIcon } from "@icons";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  url: string;
  image: string;
  year: string;
  company: string;
  technologies: string[];
}

export const ProjectsTable = ({ projects }: { projects: Project[] }) => {
  // Sort projects by year in descending order (most recent first)
  const sortedProjects = [...projects].sort(
    (a, b) => parseInt(b.year) - parseInt(a.year)
  );

  return (
    <div>
      <table id="content" className="mt-12 w-full border-collapse text-left">
        <thead className="sticky top-0 z-10 border-b border-border bg-bg/75 px-6 py-5 backdrop-blur">
          <tr>
            <th className="py-4 pr-8 text-sm font-semibold text-text">Year</th>
            <th className="py-4 pr-8 text-sm font-semibold text-text">
              Project
            </th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-text lg:table-cell">
              Made at
            </th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-text lg:table-cell">
              Built with
            </th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-text sm:table-cell">
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedProjects.map((project, index) => (
            <tr key={index} className="border-b border-border last:border-none">
              <td className="py-4 pr-4 align-top text-sm">
                <div className="translate-y-px text-textOffset">
                  {project.year}
                </div>
              </td>
              <td className="py-4 pr-4 align-top font-semibold leading-snug text-text">
                <div>
                  <div className="block sm:hidden">
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-text hover:text-secondary focus-visible:text-secondary sm:hidden group/link text-base"
                      href={project.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${project.title} (opens in a new tab)`}
                    >
                      <span>
                        {project.title}{" "}
                        <span className="inline-block">
                          <UpArrowIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                        </span>
                      </span>
                    </a>
                  </div>
                  <div className="hidden sm:block capitalize">
                    {project.title}
                  </div>
                </div>
              </td>
              <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                <div className="translate-y-px whitespace-nowrap text-textOffset">
                  {project.company}
                </div>
              </td>
              <td className="hidden py-4 pr-4 align-top lg:table-cell">
                <ul className="flex -translate-y-1.5 flex-wrap">
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="my-1 mr-1.5">
                      <div className="flex items-center rounded-full bg-secondary text-white px-3 py-1 text-xs font-medium leading-5">
                        {tech}
                      </div>
                    </li>
                  ))}
                </ul>
              </td>
              <td className="hidden py-4 align-top sm:table-cell">
                <ul className="translate-y-1">
                  <li className="mb-1 flex items-center">
                    <Link
                      className="inline-flex items-baseline font-medium leading-tight text-textOffset hover:text-secondary focus-visible:text-secondary group/link text-sm cursor-pointer"
                      href={project.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${new URL(project.url).hostname} (opens in a new tab)`}
                    >
                      <span>
                        {" "}
                        <span className="inline-block">
                          {new URL(project.url).hostname}
                          <UpArrowIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5" />
                        </span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
