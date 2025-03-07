import { useTranslation } from "react-i18next";

const Steps = () => {

  const { t } = useTranslation();

  return (
    <div className='min-h-[20vh] text-white bg-brand-300'>
      <div className='py-12 container mx-auto flex flex-col items-center justify-center gap-6 px-6 lg:px-0'>
        <h1 className='text-3xl'>{t('vip_steps_title')}</h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-3'>
          <div className='flex flex-col items-center gap-12'>
            <img src='pages/vip/ava1.jpg' className='object-cover bg-center rounded-full w-40 h-40'/>
            <p className='text-center text-sm'>
              {t('vip_steps_1')}
            </p>
          </div>
          <div className='flex flex-col items-center gap-12'>
            <img src='pages/vip/ava2.jpg' className='rounded-full w-40 h-40 object-cover bg-center'/>
            <p className='text-center text-sm'>
              {t('vip_steps_2')}
            </p>
          </div>
          <div className='flex flex-col items-center gap-12'>
            <img src='pages/vip/ava3.jpg' className='rounded-full w-40 h-40 object-cover bg-center'/>
            <p className='text-center text-sm'>
              {t('vip_steps_3')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Steps