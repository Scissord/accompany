import { FC } from 'react'
import { useViewContext } from '@context';
import Select from './Select';

const options = [
  { value: "1", label: "RU" },
  { value: "2", label: "KZ" },
  { value: "2", label: "EN" },
];

export const HeaderSettings: FC = () => {
  const context = useViewContext();

  return (
    <div className="flex items-center justify-center gap-6 z-30 h-full w-[15%]">
      <Select
        value={context?.language.get}
        onChange={(val) => context?.language.set(val)}
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
