import { Container, SectionTitle } from '@components';
import Image from 'next/image';
import { Project } from '@types';
export const ProjectDesigns = ({ designImage }: Project) => {
  return (
    <Container>
      <SectionTitle title="Designs" />
      <Image
        src={designImage}
        alt="Design"
        width={1170}
        height={658}
        className="my-10 mx-auto"
      />
    </Container>
  );
};
