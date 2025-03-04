import { FC } from 'react'
import { useTranslation } from "react-i18next";

const While: FC = () => {
  const { t } = useTranslation();

  return (
    <div className='min-h-[50vh] text-black bg-white py-6'>
      <div className='w-full h-full container mx-auto py-6 px-6 bg-gray-200'>
        <h1 className='font-bold text-xl'>{t('in_flight')}</h1>
        <p className='font-semibold mt-3'>
          {t('while_1')}
        </p>
        <p className='mt-3'>
          {t('while_2')}
        </p>
        <p className='mt-3'>
          {t('while_3')}
        </p>
        <p className='mt-3'>
          {t('while_4')}
        </p>
        <p className='mt-3'>
          {t('while_5')}
        </p>
      </div>
      <div className='bg-brand-300 h-full lg:h-[30vh] p-6 text-white container mx-auto mt-6'>
        <div className='h-full w-full flex flex-col lg:flex-row items-center justify-between gap-12'>
          <div className='flex flex-col gap-3'>
            <h1 className='font-semibold text-xl'>{t('while_6')}</h1>
            <p className='text-lg'>
              {t('while_7')}
            </p>
          </div>
            <img src="icons/exclamation.svg" className='w-32'/>
        </div>
      </div>
    </div>
  );
};

export default While;
