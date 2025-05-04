import { Container, SectionTitle, ProjectsGrid, Spacer, CTA } from '@components';

export default async function Work() {
  return (
    <main className="tablet:mt-48 mt-32">
      <Container>
        <div>
          <h2 className="mb-8">Diverse Projects, Diverse Clients!</h2>
          <p className="mb-8">
            In my world of digital innovation, I thrive on diversity. My portfolio is a
            testament to a rich tapestry of projects and an array of clients who share a
            common thread — a passion for unique style, seamless functionality, and
            high-performing websites.
          </p>
          <p>
            My mission is to catapult businesses forward, regardless of their niche. From
            the dynamic world of eCommerce to the precision of efficient landing pages,
            the depth of amazing 3D renders, the vibrancy of stunning dynamic websites,
            and the complexity of platforms like online schools, appointment systems,
            hotel bookings, rentals, subscriptions, or multilingual sites — my portfolio
            boasts a spectrum of successful ventures.
          </p>
        </div>
        <Spacer />
        <SectionTitle title="next level digital products" />
        <ProjectsGrid />
        <div className="flex justify-center">
          <CTA text="get an offer" className="mb-16 mx-auto text-[20px]" />
        </div>
      </Container>
    </main>
  );
}
