import { FC } from 'react'
import { useTranslation } from "react-i18next";

const Before: FC = () => {
  const { t } = useTranslation();

  return (
    <div className='min-h-[50vh] text-black bg-white py-6'>
      <div className='w-full h-full container mx-auto py-6 px-6 bg-gray-200'>
        <h1 className='font-bold text-xl'>{t('before_flight')}</h1>
        <p className='font-semibold mt-3'>
          {t('before_1')}
        </p>
        <p className='mt-3'>
          {t('before_2')}
        </p>
        <h2 className='mt-4 text-brand-300 font-semibold'>
          {t('before_3')}
        </h2>
        <div className='flex w-full gap-3 lg:gap-0 lg:w-2/3 mt-3'>
          <div className='w-1/2 flex flex-col gap-3 text-brand-300'>
            <h2>{t('before_4')}</h2>
            <ul className='break-words'>
              <li>
                &#9679; {t('before_5')}
              </li>
              <li>&#9679; {t('before_6')}</li>
              <li>&#9679; {t('before_7')}</li>
              <li>&#9679; {t('before_8')}</li>
            </ul>
            <h2 className='mt-4'>{t('before_9')}</h2>
            <ul className='break-words'>
              <li>
                &#9679; {t('before_10')}
              </li>
              <li>&#9679; {t('before_11')}</li>
            </ul>
          </div>
          <div className='w-1/2 flex flex-col gap-3 text-brand-300'>
            <h2>{t('before_12')}</h2>
            <ul className='break-words'>
              <li>
                &#9679; {t('before_13')}<br/>
              </li>
              <li>
                &#9679; {t('before_14')}
              </li>
            </ul>
            <h2 className='mt-4'>Еда:</h2>
            <ul className='break-words'>
              <li>
                &#9679; {t('before_15')}
              </li>
            </ul>
            <h2 className='mt-4'>Прочее:</h2>
            <ul className='break-words'>
              <li>
                &#9679; {t('before_16')}
              </li>
              <li>
                &#9679; {t('before_17')}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='w-full h-full container mx-auto py-6 px-6 text-brand-300'>
        <p className='font-semibold'>
          {t('before_18')}
        </p>
        <div className='flex w-full gap-3 lg:gap-0 lg:w-2/3 mt-3'>
          <div className='w-1/2 flex flex-col gap-3 text-brand-300'>
            <h2 className='mt-4'>{t('before_19')}</h2>
            <ul className='break-words'>
              <li>
                &#9679; {t('before_20')}<br/>
              </li>
              <li>
                &#9679; {t('before_21')}<br/>
              </li>
            </ul>
            <h2 className='mt-4'>{t('before_22')}</h2>
            <ul className='break-words'>
              <li>
                &#9679; {t('before_23')}
              </li>
              <li>
                &#9679; {t('before_24')}<br/>
              </li>
            </ul>
          </div>
          <div className='w-1/2 flex flex-col gap-3 text-brand-300'>
            <h2 className='mt-4'>{t('before_25')}</h2>
            <ul className='break-words'>
              <li>
                &#9679; {t('before_26')}<br/>
              </li>
              <li>
                &#9679; {t('before_27')}<br/>
              </li>
              <li>
                &#9679; {t('before_28')}<br/>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='bg-brand-300 h-full lg:h-[30vh] p-6 text-white container mx-auto mt-6'>
        <div className='h-full w-full flex flex-col lg:flex-row items-center justify-between gap-12'>
          <div className='flex flex-col gap-3'>
            <h1 className='font-semibold text-xl'>{t('before_29')}</h1>
            <p className='text-lg'>
              {t('before_30')}
            </p>
          </div>
          <img src="icons/exclamation.svg" className='w-32'/>
        </div>
      </div>
      <div className='mt-6 w-full h-full container mx-auto py-6 px-6 bg-gray-200'>
        <h1 className='font-bold text-xl'>{t('before_31')}</h1>
        <p className='font-semibold mt-3'>
          {t('before_32')}
        </p>
        <div className='w-full h-full container mx-auto py-6 px-6 text-brand-300'>
        <div className='flex w-2/3'>
          <div className='break-words flex flex-wrap gap-3 text-brand-300'>
            <li>
              {t('before_33')}<br/>
              <p className='py-2 text-black'>
                {t('before_34')}
              </p>
            </li>
            <li>
              {t('before_35')}<br/>
              <p className='py-2 text-black'>
                {t('before_36')}
              </p>
            </li>
            <li>
              {t('before_37')}<br/>
              <p className='py-2 text-black'>
                {t('before_38')}
              </p>
            </li>
            <li>
              {t('before_39')}<br/>
              <p className='py-2 text-black'>
                {t('before_40')}
              </p>
            </li>
            <li>
              {t('before_41')}<br/>
              <p className='py-2 text-black'>
                {t('before_42')}
              </p>
            </li>
            <li>
              {t('before_43')}<br/>
              <p className='py-2 text-black'>
                {t('before_44')}
              </p>
            </li>
            <li>
              {t('before_45')}<br/>
              <p className='py-2 text-black'>
                {t('before_46')}
              </p>
            </li>
            <li>
              {t('before_47')}<br/>
              <p className='py-2 text-black'>
                {t('before_48')}
              </p>
            </li>
            <li>
              {t('before_49')}<br/>
              <p className='py-2 text-black'>
                {t('before_50')}
              </p>
            </li>
          </div>
        </div>
      </div>
      </div>
      <div className='bg-brand-300 h-full lg:h-[30vh] p-6 text-white container mx-auto mt-6'>
        <div className='h-full w-full flex flex-col lg:flex-row items-center justify-between gap-12'>
          <div className='flex flex-col gap-3'>
            <h1 className='font-semibold text-xl'>{t('before_51')}</h1>
            <p className='text-lg'>
              {t('before_52')}
            </p>
          </div>
            <img src="icons/exclamation.svg" className='w-32'/>
        </div>
      </div>
    </div>
  );
};

export default Before;
