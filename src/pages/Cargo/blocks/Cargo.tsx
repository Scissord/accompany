import { useTranslation } from "react-i18next"

const Cargo = () => {
  const { t } = useTranslation();

  return (
    <div className='min-h-[20vh] bg-brand-300 text-white py-12'>
      <div className='container mx-auto flex items-center gap-3 px-6 lg:px-0'>
        <div className='w-full lg:w-1/2 flex flex-col gap-3'>
          <h1 className='text-2xl font-bold'>{t('cargo_cargo_title')}</h1>
          <p>
            {t('cargo_cargo_1')}
          </p>
          <p>
            {t('cargo_cargo_2')}
          </p>
          <p>
            {t('cargo_cargo_3')}
          </p>
        </div>
        <div className='w-1/2 hidden lg:flex flex-col gap-3'>
          <img src="pages/cargo/plane.png" alt="plane"/>
        </div>
      </div>
    </div>
  )
}

export default Cargo