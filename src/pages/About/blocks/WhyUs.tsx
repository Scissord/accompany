import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const WhyUs: FC = () => {
  const { t } = useTranslation();

  return (
    <section className='relative bg-gray-100'>
      <div className="container mx-auto py-20 flex flex-col gap-12">
        <p className="text-3xl text-brand-300 text-center lg:text-left">
          {t('about_why_title')}
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='flex flex-col items-center lg:items-start gap-6'>
            <img src='icons/timer.svg' className='h-24' alt="timer"/>
            <p className='text-2xl'>{t('about_why_card1_title')}</p>
            <p className='text-gray-600'>
              {t('about_why_card1_description1')}<br/>
              {t('about_why_card1_description2')}
            </p>
          </div>
          <div className='flex flex-col items-center lg:items-start gap-6'>
            <img src='icons/badge-dollar.svg' className='h-24' alt="dollar"/>
            <p className='text-2xl'>{t('about_why_card2_title')}</p>
            <p className='text-gray-600'>
              {t('about_why_card2_description1')}<br/>
              {t('about_why_card2_description2')}
            </p>
          </div>
          <div className='flex flex-col items-center lg:items-start gap-6'>
            <img src='icons/award.svg' className='h-24' alt="award"/>
            <p className='text-2xl'>{t('about_why_card3_title')}</p>
            <p className='text-gray-600'>
              {t('about_why_card3_description1')}<br/>
              {t('about_why_card3_description2')}
            </p>
          </div>
          <div className='flex flex-col items-center lg:items-start gap-6'>
            <img src='icons/certificate-check.svg' className='h-24' alt="check"/>
            <p className='text-2xl'>{t('about_why_card4_title')}</p>
            <p className='text-gray-600'>
              {t('about_why_card4_description1')}<br/>
              {t('about_why_card4_description2')}
            </p>
          </div>
          <div className='flex flex-col items-center lg:items-start gap-6'>
            <img src='icons/compass.svg' className='h-24' alt="compass"/>
            <p className='text-2xl'>{t('about_why_card5_title')}</p>
            <p className='text-gray-600'>
              {t('about_why_card5_description1')}<br/>
              {t('about_why_card5_description2')}
            </p>
          </div>
          <div className='flex flex-col items-center lg:items-start gap-6'>
            <img src='icons/heart.svg' className='h-24' alt="heart"/>
            <p className='text-2xl'>{t('about_why_card6_title')}</p>
            <p className='text-gray-600'>
              {t('about_why_card6_description1')}<br/>
              {t('about_why_card6_description2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs;
