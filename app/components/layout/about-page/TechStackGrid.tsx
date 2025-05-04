import { techStack } from '@data';

export const TechStackGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-4 mb-8">
      {techStack.map((item, index) => (
        <div key={index} className="border-b border-gray-200 pb-4">
          <h3 className="text-lg font-bold mb-4">{item.section}:</h3>
          <div className="grid grid-cols-5 gap-4">
            {item.items.map((logo, index) => (
              <div key={index} className="flex flex-col items-center gap-2 ">
                <logo.icon className="h-12 w-12" />
                <p>{logo.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
