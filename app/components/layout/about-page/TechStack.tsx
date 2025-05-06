import { SectionTitle, CTA, TechStackGrid } from '@components';

export const TechStack = () => {
  return (
    <div className="mb-8">
      <SectionTitle title="Tech Stack" />
      <p className="mb-8">
        I work with proven tools that support performance, scalability, and
        maintainability. My stack evolves with the frontend ecosystem—but I always
        prioritize stability and long-term value for your product.
      </p>
      <TechStackGrid />
      <div className="flex justify-center">
        <CTA text="find out more" className="mt-16 mx-auto text-[20px]" />
      </div>
    </div>
  );
};
