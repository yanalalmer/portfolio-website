export const Mouse = ({ className }: { className?: string }) => {
  return (
    <a
      className={`inline-block text-[13px] leading-[18px] font-normal text-black font-lexend tracking-[2px] mt-[10%] no-underline overflow-hidden ${className}`}
      href="#about"
    >
      <span className="relative block w-[32px] h-[50px] mx-auto mb-2 box-border border-2 border-black rounded-[23px]">
        <span className="absolute block top-[29%] left-1/2 w-2 h-2 -mt-1 -ml-1 bg-black rounded-full animate-scroll-ani"></span>
      </span>
      <span className="float-left ml-[7px] p-0 animate-scroll-ani">scroll</span>
    </a>
  );
};
