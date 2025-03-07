import { FC } from 'react'
import { useViewContext } from '@context';
import Select from './Select';

const options = [
  { value: "1", label: "RU" },
  { value: "2", label: "KZ" },
  { value: "3", label: "EN" },
  { value: "4", label: "CN" },
];

const MobileSettings: FC = () => {
  const context = useViewContext();

  return (
    <div className="flex items-center gap-3">
      <Select
        value={context?.language.get}
        onChange={(val) => context?.language.set(val)}
        options={options}
      />
      {/* {context?.theme.get === 'dark' ? (
        <div
          className='w-5 cursor-pointer'
          onClick={() => context?.theme.set(context?.theme.get === 'dark' ? 'light' : 'dark')}
        >
          <img src='icons/sun-mobile.svg' className='w-4 h-4' alt='sun'/>
        </div>
      ) : (
        <div
          className='w-5 cursor-pointer'
          onClick={() => context?.theme.set(context?.theme.get === 'dark' ? 'light' : 'dark')}
        >
          <img src='icons/moon-mobile.svg' className='w-4 h-4' alt='moon'/>
        </div>
      )} */}
    </div>
  );
};

export default MobileSettings;
