import { FC, useState } from "react";

type SelectProps = {
  value: string | undefined;
  onChange: (val: string) => void;
  options: any;
};

const Select: FC<SelectProps>  = ({ value, onChange, options }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOptionClick = (option: any) => {
    onChange(option.label);
    setIsOpen(false);
  };

  return (
    <div className="relative ml-auto">
      <div
        className="h-14 p-2 text-black cursor-pointer flex items-center justify-start hover:text-hvr transition duration-300 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value ? value : ''}
      </div>
      {isOpen && (
        <div className="absolute z-10 bg-white w-[80px] flex flex-col gap-1 text-black rounded text-sm border border-black">
          {options.map((option: any) => (
            <div
              key={option.value}
              className="h-8 hover:bg-gray-300 cursor-pointer flex items-center justify-start transition duration-300 ease-in-out px-2 hover:rounded"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
