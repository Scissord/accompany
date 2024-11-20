import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const css = {
  wrapper: "flex flex-col items-center justify-center gap-3",
  text: "text-sm text-center"
}

const Steps: FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative bg-white">
      <div className='container mx-auto flex flex-col items-center py-12 px-8 lg:px-0'>
        <p className="text-3xl text-brand-300 mb-6">
          {t('about_steps_title')}
        </p>
        <p className='text-brand-100 text-center'>
          {t('about_steps_title_description')}
        </p>
        <div className='flex items-center lg:items-start justify-between flex-col lg:flex-row mt-12 w-full'>
          <div className={css.wrapper}>
            <img src="icons/portrait-user.svg" className='h-28'/>
            <p className={css.text}>{t('about_steps_1')}<br/> {t('about_steps_2')}</p>
          </div>
          <div className={css.wrapper}>
            <img src="icons/user-check.svg" className='h-28'/>
            <p className={css.text}>{t('about_steps_3')}<br/> {t('about_steps_4')}</p>
          </div>
          <div className={css.wrapper}>
            <img src="icons/user-pen.svg" className='h-28'/>
            <p className={css.text}>{t('about_steps_5')}<br/> {t('about_steps_6')}<br/> {t('about_steps_7')}</p>
          </div>
          <div className={css.wrapper}>
            <img src="icons/user-shield.svg" className='h-28'/>
            <p className={css.text}>{t('about_steps_8')}<br/> {t('about_steps_9')}<br/> {t('about_steps_10')}</p>
          </div>
          <div className={css.wrapper}>
            <img src="icons/user-vip.svg" className='h-24 rotate-45'/>
            <p className={css.text + " mt-4"}>{t('about_steps_11')}<br/> {t('about_steps_12')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Steps;
