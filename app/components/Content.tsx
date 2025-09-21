import { About, Experience, Projects, Contact } from "@components";

export const Content = () => {
  return (
    <main className="pt-24 lg:w-[52%] lg:py-24">
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
};
