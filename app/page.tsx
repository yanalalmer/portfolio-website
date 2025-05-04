import Link from 'next/link';
import {
  Hero,
  AboutPara,
  ProjectsGrid,
  Container,
  PrimaryButton,
  Spacer,
  SectionTitle,
} from '@components';

export default async function Home() {
  return (
    <main>
      <Container>
        <Hero />
        <Spacer />
        <SectionTitle title="a bit about me" id="about" />
        <AboutPara />
        <Spacer />
        <SectionTitle title="creating next level projects" />
        <ProjectsGrid homePage />
        <Link href="/work" className="w-full text-center block">
          <PrimaryButton text="more work" />
        </Link>
        <Spacer />
      </Container>
    </main>
  );
}
