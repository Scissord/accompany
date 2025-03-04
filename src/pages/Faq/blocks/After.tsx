import { FC } from 'react'
import { useTranslation } from "react-i18next";

const After: FC = () => {
  const { t } = useTranslation();

  return (
    <div className='min-h-[50vh] text-black bg-white py-6'>
      <div className='w-full h-full container mx-auto py-6 px-6 bg-gray-200'>
        <h1 className='font-bold text-xl'>{t('after_flight')}</h1>
        <p className='font-semibold mt-3 flex flex-col gap-3 text-brand-300'>
          <p>{t('after_1')}</p>
          <p>{t('after_2')}</p>
          <p>{t('after_3')}</p>
          <p>{t('after_4')}</p>
          <p>{t('after_5')}</p>
          <p>{t('after_6')}</p>
        </p>
        <p className='mt-3'>
          {t('after_7')}
        </p>
      </div>
    </div>
  );
};

export default After;
