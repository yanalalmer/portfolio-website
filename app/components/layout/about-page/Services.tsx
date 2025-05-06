import { SectionTitle } from '@components';
import { services } from '@data';

export const Services = () => {
  return (
    <>
      <div className="mb-2">
        <SectionTitle title="Specializing in" />
      </div>
      <div className="w-full flex flex-wrap relative mobile:gap-16 gap-12">
        {services.map((service) => (
          <div key={service.number} className="block flex-1">
            <div className="w-full flex items-start">
              <p className="font-bold ml-2">{service.title}</p>
            </div>
            <p className="mobile:pt-8 pt-4">{service.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
};
