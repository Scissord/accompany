import { FC } from "react";
import { useTranslation } from "react-i18next";
import Content from "./Steps/Content";
import Mobile from "./Steps/Mobile";
import './Steps/steps.css';

const Steps: FC = () => {
  const { t } = useTranslation();

  const steps = [
    {
      id: 1,
      first_title_part: t('home_steps_first_title_part_1'),
      second_title_part: t('home_steps_first_title_part_2'),
      description: t('home_steps_first_description')
    },
    {
      id: 2,
      first_title_part: t('home_steps_second_title_part_1'),
      second_title_part: t('home_steps_second_title_part_2'),
      description: t('home_steps_second_description')
    },
    {
      id: 3,
      first_title_part: t('home_steps_third_title_part_1'),
      second_title_part: t('home_steps_third_title_part_2'),
      description: t('home_steps_third_description')
    },
  ];

  return (
    <section className="steps">
      <div className="absolute inset-0 bg-stone-400 bg-opacity-70" />
      <div className="absolute inset-0 bg-gray-700 bg-opacity-50" />
      <div className="relative z-10 text-center py-12">
        <p className="text-3xl font-bold text-white mb-12">{t('home_steps_title')}</p>
        <Content steps={steps}/>
        <Mobile steps={steps}/>
      </div>
      <div className="hidden lg:block absolute top-[155px] left-0 right-0 h-[4px] bg-brand-100"/>
    </section>
  );
};

export default Steps;
