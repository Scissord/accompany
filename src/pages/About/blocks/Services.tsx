import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Services: FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative bg-white">
      <div className='flex w-full'>
        <div className="w-0 lg:w-2/5 bg-[url('/pages/about/passenger.jpg')] bg-cover bg-top bg-no-repeat"/>
        <div className='w-full lg:w-3/5 px-8 lg:px-28 py-12 bg-brand-100 flex flex-col gap-6 text-white'>
          <h1 className='text-2xl font-semibold'>
            {t('about_services_out_services')}
            <span className='font-normal ml-2'>
              &#9679; {t('about_services_title_1')}
            </span>
          </h1>
          <p>
            {t('about_services_card1_description')}
          </p>
          <div className='flex flex-col gap-3'>
            <div className="flex flex-wrap items-center gap-6">
              <div className="px-4 py-1 border border-slate-400">
                <p>{"Empty legs"}</p>
              </div>
              <div className="px-4 py-1 border border-slate-400">
                <p>{t('about_services_card1_badge2')}</p>
              </div>
              <div className="px-4 py-1 border border-slate-400">
                <p>{t('about_services_card1_badge3')}</p>
              </div>

            </div>
            <div className="flex items-center gap-6">
              <div className="px-4 py-1 border border-slate-400">
                <p>{t('about_services_card1_badge4')}</p>
              </div>
              <div className="px-4 py-1 border border-slate-400">
                <p>{t('about_services_card1_badge5')}</p>
              </div>
            </div>
          </div>

          <div className="w-full border border-white" />
          <p className='italic'>
            {t('about_services_card1_annotation')}
          </p>
          <div className='flex items-center gap-6'>
            <button className="w-[250px] bg-white text-brand-100 p-2 font-bold hover:bg-black transition duration-300 ease-in-out hover:text-white">
              {t('about_services_send')}
            </button>
            <p className='text-xs'>
              {t('about_services_ask')}
            </p>
          </div>
        </div>
      </div>
      <div className='flex w-full'>
        <div className='w-full lg:w-3/5 px-8 lg:px-28 py-12 bg-brand-100 flex flex-col gap-6 text-white'>
          <h1 className='text-2xl font-semibold'>
            {t('about_services_out_services')}
            <span className='font-normal ml-2'>
              &#9679; {t('about_services_title_2')}
            </span>
          </h1>
          <p>
            {t('about_services_card2_description')}
          </p>
          <div className='flex flex-col gap-3'>
            <div className="flex flex-wrap items-center gap-6">
              <div className="px-4 py-1 border border-slate-400">
                <p>{t('about_services_card2_badge1')}</p>
              </div>
              <div className="px-4 py-1 border border-slate-400">
                <p>{t('about_services_card2_badge2')}</p>
              </div>
              <div className="px-4 py-1 border border-slate-400">
                <p>{t('about_services_card2_badge3')}</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="px-4 py-1 border border-slate-400">
                <p>{t('about_services_card2_badge4')}</p>
              </div>
              <div className="px-4 py-1 border border-slate-400">
                <p>{t('about_services_card2_badge5')}</p>
              </div>
            </div>
          </div>

          <div className="w-full border border-white" />
          <p className='italic'>
            {t('about_services_card2_annotation')}
          </p>
          <div className='flex items-center gap-6'>
          <button className="w-[250px] bg-white text-brand-100 p-2 font-bold hover:bg-black transition duration-300 ease-in-out hover:text-white">
              {t('about_services_send')}
            </button>
            <p className='text-xs'>
              {t('about_services_ask')}
            </p>
          </div>
        </div>
        <div className="w-0 lg:w-2/5 bg-[url('/pages/about/cargo.jpg')] bg-cover bg-center bg-no-repeat"/>
      </div>
      <div className='flex w-full'>
        <div className="w-0 lg:w-2/5 bg-[url('/pages/about/vip.jpg')] bg-cover bg-bottom bg-no-repeat"/>
        <div className='w-full lg:w-3/5 px-8 lg:px-28 py-12 bg-brand-100 flex flex-col gap-6 text-white'>
          <h1 className='text-2xl font-semibold'>
            {t('about_services_out_services')}
            <span className='font-normal ml-2'>
              &#9679; {t('about_services_title_3')}
            </span>
          </h1>
          <p>
            {t('about_services_card3_description')}
          </p>
          <div className="w-full border border-white" />
          <p className='italic'>
            {t('about_services_card3_annotation')}
          </p>
          <div className='flex items-center gap-6'>
            <button className="w-[250px] bg-white text-brand-100 p-2 font-bold hover:bg-black transition duration-300 ease-in-out hover:text-white">
              {t('about_services_send')}
            </button>
            <p className='text-xs'>
              {t('about_services_ask')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
