import { FC } from 'react'
import { useViewContext } from '@context';

export const HeaderSettings: FC = () => {
  const context = useViewContext();

  return (
    <div className="fi gap-6 z-30">
      <p>RU</p>
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
