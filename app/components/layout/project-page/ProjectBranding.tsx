import { Container, SectionTitle } from '@components';
import { Project } from '@types';

export const ProjectBranding = ({ brandingColors }: Project) => {
  return (
    <Container>
      <SectionTitle title="Branding" />
      <div className="flex justify-around items-center my-10">
        {brandingColors.map((color) => (
          <div className="flex flex-col items-center gap-4 cursor-pointer" key={color}>
            <div
              className="w-40 h-40 rounded-full shadow-xl"
              style={{ backgroundColor: color }}
            />
            <div>{color}</div>
          </div>
        ))}
      </div>
    </Container>
  );
};
