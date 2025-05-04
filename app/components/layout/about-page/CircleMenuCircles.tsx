export const CircleMenuCircles = () => {
  const beforeStyles =
    'block absolute left-[50%] right-0 bottom-0 rounded-[50%] m-auto border-grey border-[2px] translate-x-[-50%]';
  const afterStyles =
    'block absolute left-0 right-[50%] top-0 rounded-[50%] m-auto border-grey border-[2px]';
  return (
    <div
      className={`rounded-[50%] box-content w-full h-full block m-auto before:content-[''] ${beforeStyles} after:content-[''] ${afterStyles} `}
    />
  );
};
