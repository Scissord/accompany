import { FC } from "react";
import { useViewContext } from "@context";
import { useTranslation } from "react-i18next";
import './form.css';

const Form: FC = () => {
  const { t } = useTranslation();
  const context = useViewContext();

  const css = {
    button : `
      w-1/2 bg-white text-brand-100
      p-3 font-bold transition
      duration-300 ease-in-out
      hover:text-white hover:bg-black
    `
  }

  return (
    <section className="form">
      <div className="absolute inset-0 bg-stone-900 bg-opacity-70" />
      <div className="absolute inset-0 bg-gray-500 bg-opacity-50" />
      <div className="container mx-auto py-12 h-full">
        <div className="flex flex-col gap-6 h-full px-8 md:px-0">
          <p className="text-3xl font-bold z-30">{t('home_form_title')}</p>
          <p className="z-30">{t('home_form_description')}</p>
          <div className="flex items-center justify-between h-full z-30">
            <div className="flex items-start justify-center flex-col gap-6 w-full md:w-2/5 h-full">
              <input
                type="text"
                placeholder={t('home_form_first_input')}
                className="border border-white p-4 w-full"
              />
              <input
                type="email"
                placeholder={t('home_form_second_input')}
                className="border border-white p-4 w-full"
              />
              <textarea
                placeholder={t('home_form_textarea')}
                className="border border-white p-4 h-full w-full"
              />
            </div>
            <div className="hidden md:block h-full w-3/5 bg-white ml-12"/>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-0 justify-between z-30">
            <div className="flex items-center gap-2 w-full md:w-2/5">
              <button className={css.button}>{t('home_form_send_button')}</button>
              <p className="w-1/2 text-[13px] lg:whitespace-nowrap">
                {t('home_form_politic')}
              </p>
            </div>
            <div className="w-full md:w-3/5 md:ml-12">
              <button onClick={() => context?.modal.set(true)} className="bg-white text-brand-100 p-3">
                {t('home_form_open_button')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
