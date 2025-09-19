import { ContactForm } from "@components";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-40 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Contact
        </h2>
      </div>
      <div>
        <p>
          I'm always looking for new opportunities to work on exciting projects.
          If you have any questions or want to work together, feel free to reach
          out to me.
        </p>
      </div>
      <div className="my-16">
        <h3 className="text-lg font-bold">
          Email me:{" "}
          <a
            href="mailto:info@yanalalmir.com"
            className="cursor-pointer hover:opacity-80 transition-all ease-in-out"
          >
            info@yanalalmir.com
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
