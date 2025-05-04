import { Container, Para, Services, Spacer, CircleMenu, CTA } from '@components';

export default async function About() {
  return (
    <main className="tablet:mt-48 mt-32">
      <Container>
        <Para />
        <Spacer />
        <Services />
        <Spacer />
        <Spacer />
        <CircleMenu />
        <div className="flex justify-center">
          <CTA text="get an offer" className="mb-16 mx-auto text-[20px]" />
        </div>
      </Container>
    </main>
  );
}
