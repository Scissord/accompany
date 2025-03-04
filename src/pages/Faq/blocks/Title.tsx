import { useTranslation } from "react-i18next";

const Title = () => {
  const { t } = useTranslation();

  return (
    <div className='h-full lg:h-[50vh] bg-dbg text-white'>
      <div className='container mx-auto flex flex-col justify-center gap-8 h-full p-6 lg:px-0'>
        <h1 className='font-bold text-3xl'>
          {t('safety_title')}
        </h1>
        <p className="text-xl">
          {t('safety_description')}
        </p>
      </div>
    </div>
  )
}

export default Title