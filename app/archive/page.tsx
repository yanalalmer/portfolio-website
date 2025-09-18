import Link from "next/link";
import { RightArrowIcon } from "@icons";

export default function Archive() {
  return (
    <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
          <Link
            className="inline-flex items-center font-medium leading-tight group cursor-pointer"
            aria-label="View Full Project Archive"
            href="/"
          >
            <span>
              {" "}
              <RightArrowIcon className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:-translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none rotate-180" />
              <span className="border-b border-transparent pb-px transition group-hover:border-secondary motion-reduce:transition-none">
                Yanal Almir
              </span>
            </span>
          </Link>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            All Projects
          </h1>
        </header>
      </div>
    </main>
  );
}
