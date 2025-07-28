import {
  Container,
  SectionTitle,
  ProjectsGrid,
  Spacer,
  CTA,
  WorkIntro,
} from '@components';

export default async function Work() {
  return (
    <main className="tablet:mt-48 mt-32">
      <Container>
        <WorkIntro />
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
