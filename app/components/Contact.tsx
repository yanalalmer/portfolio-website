import { ContactForm } from '@components';

export const Contact = () => {
  return (
    <section
      id="contact"
      className="h-screen scroll-mt-16 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-40 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Contact
        </h2>
      </div>
      <div>
        <p>
          I take on frontend architecture work — monorepo design, platform
          consolidation, and untangling estates that have outgrown their
          structure. Based in the Netherlands, working across the EU. If you're
          running more than one frontend and it's starting to hurt, that's the
          conversation I'm useful in.
        </p>
      </div>
      <div className="my-16">
        <h3 className="text-lg font-bold">
          Email me:{' '}
          <a
            href="mailto:contact@yanalalmir.com"
            className="cursor-pointer hover:opacity-80 transition-all ease-in-out"
          >
            contact@yanalalmir.com
          </a>
        </h3>
      </div>
      <div className="pb-32">
        <h3 className="text-lg font-bold">Or drop me a message below:</h3>
        <ContactForm />
      </div>
    </section>
  );
};
