import { SectionTitle, TechStackGrid, Spacer, CTA } from '@components';

export const Para = () => {
  return (
    <div>
      <h2 className="mb-8">
        <span>10</span> Years of Frontend Expertise, Built on Craft, Speed, and
        Scalability
      </h2>
      <p>
        As a Senior Frontend Developer with over a decade of hands-on experience building
        modern web applications from the ground up. I’ve worked with startups, agencies,
        and established businesses across industries to deliver fast, scalable, and
        user-focused products. My mission is simple: turn complex ideas into elegant,
        reliable solutions that drive real business impact.
      </p>
      <div className="flex justify-center">
        <CTA text="get an offer" className="mt-16 mx-auto text-[20px]" />
      </div>
      <Spacer />
      <SectionTitle title="A Modern, Battle-Tested Frontend Stack" />
      <p className="mb-8">
        I work with proven tools that support performance, scalability, and
        maintainability. My stack evolves with the frontend ecosystem—but I always
        prioritize stability and long-term value for your product.
      </p>
      <TechStackGrid />
      <p>
        I guarantee cutting-edge solutions that are inexpensive and tailored to your
        needs. I charge per project instead of hourly, which makes it easier for you to
        budget and plan your project.
      </p>
      <div className="flex justify-center">
        <CTA text="find out more" className="mt-16 mx-auto text-[20px]" />
      </div>
    </div>
  );
};
