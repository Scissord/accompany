import { FC } from 'react'
import { useViewContext } from '@context';

const Settings: FC = () => {
  const context = useViewContext();

  return (
    <div className="fi gap-6 z-30">
      <p>RU</p>
      <img
        src="icons/sun.svg"
        alt="sun"
        className='w-5 cursor-pointer'
        onClick={() => context?.theme.set(context?.theme.get === 'dark' ? 'light' : 'dark')}
      />
    </div>
  );
};

export default Settings;
