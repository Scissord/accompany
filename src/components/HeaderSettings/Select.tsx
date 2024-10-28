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
        className="h-14 p-2 text-white cursor-pointer flex items-center justify-start"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value ? value : ''}
      </div>
      {isOpen && (
        <div className="absolute z-10 bg-brand-300 border border-white w-[80px]">
          {options.map((option: any) => (
            <div
              key={option.value}
              className="h-12 p-2 hover:bg-brand-200 cursor-pointer flex items-center justify-start"
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
