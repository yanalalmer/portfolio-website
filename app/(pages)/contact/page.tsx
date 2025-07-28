import { Container, ContactForm, ContactTitle, ContactDetails } from '@components';

export default async function Contact() {
  return (
    <main className="tablet:mt-48 mt-32">
      <Container>
        <ContactTitle />
        <div className="flex flex-wrap flex-col-reverse tablet:flex-row relative">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </main>
  );
}
