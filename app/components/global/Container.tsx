interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={`desktop:max-w-[1170px] laptop:max-w-[1000px] w-[95%] mx-auto ${className}`}
    >
      {children}
    </div>
  );
};
