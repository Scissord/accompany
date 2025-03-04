import { useTranslation } from "react-i18next";
import { FC } from 'react'

const Steps: FC = () => {
  const { t } = useTranslation();

  return (
    <div className='min-h-[50vh] text-white bg-brand-300'>
      <div className='py-12 container mx-auto flex flex-col items-center justify-center gap-6 px-6 lg:px-0'>
        <h1 className='text-3xl'>{t('passengers_steps_title')}</h1>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
          <div className='flex flex-col items-center gap-6'>
            <img src='pages/passenger/c1.png' className='rounded-full border w-40 h-40 object-cover'/>
            <p className='text-center'>
              {t('passengers_steps_text_1')}
            </p>
          </div>
          <div className='flex flex-col items-center gap-6'>
            <img src='pages/passenger/c2.jpg' className='rounded-full border w-40 h-40 object-cover'/>
            <p className='text-center'>
              {t('passengers_steps_text_2')}
            </p>
          </div>
          <div className='flex flex-col items-center gap-6'>
            <img src='pages/passenger/c1.png' className='rounded-full border w-40 h-40 object-cover'/>
            <p className='text-center'>
              {t('passengers_steps_text_3')}
            </p>
          </div>
          <div className='flex flex-col items-center gap-6'>
            <img src='pages/passenger/c2.jpg' className='rounded-full border w-40 h-40 object-cover'/>
            <p className='text-center'>
              {t('passengers_steps_text_4')}
            </p>
          </div>
        </div>
        <p className='text-gray-200 font-semibold'>
          {t('passengers_steps_text_5')}
        </p>
      </div>
    </div>
  );
};

export default Steps;
