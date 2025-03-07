import { FC } from 'react'
import { useViewContext } from '@context';
import Select from './Select';
import './HeaderSettings.css';

const options = [
  { value: "1", label: "RU" },
  { value: "2", label: "KZ" },
  { value: "3", label: "EN" },
  { value: "4", label: "CN" },
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
      {/* {context?.theme.get === 'dark' ? (
        <div
          className='iconDarkWrapper w-5 cursor-pointer'
          onClick={() => context?.theme.set(context?.theme.get === 'dark' ? 'light' : 'dark')}
        >
          <svg id="_Слой_2" data-name="Слой 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.88 22.88">
            <g id="_Слой_1-2" data-name="Слой 1">
              <g>
                <circle className="cls-1" cx="11.44" cy="11.44" r="4.06"/>
                <line className="cls-1" x1="11.44" y1=".5" x2="11.44" y2="4.19"/>
                <line className="cls-1" x1="11.44" y1="18.68" x2="11.44" y2="22.38"/>
                <line className="cls-1" x1="19.17" y1="3.7" x2="16.56" y2="6.32"/>
                <line className="cls-1" x1="6.32" y1="16.56" x2="3.7" y2="19.17"/>
                <line className="cls-1" x1="22.38" y1="11.44" x2="18.68" y2="11.44"/>
                <line className="cls-1" x1="4.19" y1="11.44" x2=".5" y2="11.44"/>
                <line className="cls-1" x1="19.17" y1="19.17" x2="16.56" y2="16.56"/>
                <line className="cls-1" x1="6.32" y1="6.32" x2="3.7" y2="3.7"/>
              </g>
            </g>
          </svg>
        </div>
      ) : (
        <div
          className='iconLightWrapper w-5 cursor-pointer'
          onClick={() => context?.theme.set(context?.theme.get === 'dark' ? 'light' : 'dark')}
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className='moonPath' d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z" stroke={'#fff'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      )} */}
    </div>
  );
};
