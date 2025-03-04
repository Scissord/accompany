import { useTranslation } from "react-i18next";

const Steps = () => {

  const { t } = useTranslation();

  return (
    <div className='min-h-[50vh] text-white bg-brand-300'>
      <div className='py-12 container mx-auto flex flex-col items-center justify-center gap-6 px-6 lg:px-0'>
        <h1 className='text-3xl'>{t('vip_steps_title')}</h1>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-6'>
          <div className='flex flex-col items-center gap-6'>
            <img src='pages/vip/ava1.jpg' className='object-cover bg-center rounded-full border w-40 h-40'/>
            <p className='text-center'>
              {t('vip_steps_1')}
            </p>
          </div>
          <div className='flex flex-col items-center gap-6'>
            <img src='pages/vip/ava2.jpg' className='rounded-full border w-40 h-40 object-cover bg-center'/>
            <p className='text-center'>
              {t('vip_steps_2')}
            </p>
          </div>
          <div className='flex flex-col items-center gap-6'>
            <img src='pages/vip/ava3.jpg' className='rounded-full border w-40 h-40 object-cover bg-center'/>
            <p className='text-center'>
              {t('vip_steps_3')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Steps