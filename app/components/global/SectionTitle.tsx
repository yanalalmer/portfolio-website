export const SectionTitle = ({ title, id }: { title: string; id?: string }) => {
  return (
    <h4
      id={id}
      className="capitalize text-darkGrey w-full desktop:border-grey desktop:border-b my-8 pb-4"
    >
      {title}
    </h4>
  );
};
