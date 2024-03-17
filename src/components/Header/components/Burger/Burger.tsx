type PropsT = {
  isOpen: boolean;
  onClick: () => void;
};

export const Burger = ({ isOpen, onClick }: PropsT) => {
  const baseSpanClasses = "bg-main-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm";

  return (
    <button onClick={onClick} className="flex flex-col justify-center items-center z-10">
      <span className={`${baseSpanClasses} ${isOpen ?'rotate-45 translate-y-1' : '-translate-y-0.5'}`}>
      </span>
      <span className={`${baseSpanClasses} my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
      </span>
      <span className={`${baseSpanClasses} ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}>
      </span>
    </button>
  )
}
