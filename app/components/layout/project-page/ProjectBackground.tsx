import { Container, SectionTitle } from '@components';
import Image from 'next/image';
import { Project } from '@types';

export const ProjectBackground = ({
  backgroundTitle,
  backgroundPara,
  backgroundImageUrl,
}: Project) => {
  return (
    <Container>
      <SectionTitle title="Project Background" />
      <div className="flex gap-16 py-10">
        <div className="flex flex-col gap-2 w-1/2">
          <h1 className="font-bold capitalize">{backgroundTitle}</h1>
          <p className="text-darkGrey">{backgroundPara}</p>
        </div>

        <div className="w-1/2">
          <Image src={backgroundImageUrl} alt="Background" width={1000} height={1000} />
        </div>
      </div>
    </Container>
  );
};
