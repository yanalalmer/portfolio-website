import { Container, SectionTitle, ContactForm, Spacer } from '@components';
import Link from 'next/link';
import { contactSections } from '@data';

type Link = {
  id: number;
  href?: string;
  link: string;
};

export default async function Contact() {
  return (
    <main className="tablet:mt-48 mt-32">
      <Container>
        <h2 className="mb-8">Lets work together</h2>
        <Spacer />
        <SectionTitle title="Get in touch" />
        <div className="flex flex-wrap flex-col-reverse tablet:flex-row relative">
          <div className="tablet:w-3/5 w-full relative">
            <ContactForm />
          </div>
          <div className="tablet:w-2/5 w-full relative pl-0 mobile:pl-8 desktop:pl-32">
            {contactSections.map((section) => (
              <div key={section.id}>
                <small className="text-darkGrey uppercase">{section.title}</small>
                <ul className="mt-4 pb-10 w-full flex flex-col justify-start">
                  {section.links.map((link: Link) => (
                    <li key={link.id} className="h-8 block">
                      {link.href ? (
                        <Link
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className='relative after:content-[""] after:w-0 after:h-0.5 after:absolute after:left-0 after:-bottom-1 after:block after:main-transition after:bg-black hover:after:w-full'
                        >
                          {link.link}
                        </Link>
                      ) : (
                        link.link
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
