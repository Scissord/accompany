import { FC, useState } from 'react'
import { useViewContext } from '@context';

const options = [
  { value: "1", label: "RU" },
  { value: "2", label: "KZ" },
  { value: "2", label: "EN" },
];

export const HeaderSettings: FC = () => {
  const context = useViewContext();
  const [language, setLanguage] = useState<string>('RU');

  return (
    <div className="fi gap-6 z-30">
      <Select
        value={language}
        onChange={(val) => {
          localStorage.setItem('language', val);
          setLanguage(val);
        }}
        options={options}
      />
      {context?.theme.get === 'dark' ? (
        <img
          src="icons/sun.svg"
          alt="sun"
          className='w-5 cursor-pointer'
          onClick={() => context?.theme.set(context?.theme.get === 'dark' ? 'light' : 'dark')}
        />
      ) : (
        <img
          src="icons/moon.svg"
          alt="moon"
          className='w-5 cursor-pointer'
          onClick={() => context?.theme.set(context?.theme.get === 'dark' ? 'light' : 'dark')}
        />
      )}
    </div>
  );
};

type SelectProps = {
  value: string;
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
    <div className="relative w-full">
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
