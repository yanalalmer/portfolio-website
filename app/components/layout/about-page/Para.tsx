import { CTA } from '@components';

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
        user-focused web applications. My mission is simple: turn complex ideas into
        elegant, reliable solutions that drive real business impact.
      </p>
      <br />
      <p>
        I provide comprehensive solutions, from initial design to final deployment,
        ensuring a seamless and efficient process for your project. All you have to do is
        tell me your deadline.
      </p>
      <br />
      <p>
        I charge per project instead of hourly, which makes it easier for you to budget
        and plan your project, and make my services more efficient.
      </p>
      <br />
      <p>Do you have a project in mind? Let's talk about it.</p>
      <div className="flex justify-center">
        <CTA text="get an offer" className="mt-16 mx-auto text-[20px]" />
      </div>
    </div>
  );
};
