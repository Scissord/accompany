import { FC } from "react";
import Content from "./Steps/Content";
import Mobile from "./Steps/Mobile";
import './Steps/steps.css';

const steps = [
  {
    id: 1,
    first_title_part: 'Создайте свой идеальный',
    second_title_part: 'чартерный рейс',
    description: `
      AVIA CONSULTING COMPANY предоставляет гибкие
      графики чартерных рейсов, чтобы соответствовать
      вашим потребностям и планированию. Независимо
      от того, нужно ли вам чартерный рейс для
      бизнес-поездки, спортивного мероприятия или отдыха,
      мы готовы предоставить вам индивидуальный план
      полета, который соответствует вашим потребностям
      и требованиям.
    `
  },
  {
    id: 2,
    first_title_part: 'Максимальный комфорт',
    second_title_part: 'и удобство на чартерных рейсах',
    description: `
      Мы предоставляем услуги разных типов воздушных судов -
      от малых частных самолетов до больших VIP-бортов,
      соответствующих вашим потребностям и бюджету. Вы
      можете выбрать воздушное судно, которое наилучшим образом
      соответствует вашим потребностям и требованиям - от
      просторных салонов для встреч, до развлекательных систем и
      комфортабельных кресел.
    `
  },
  {
    id: 3,
    first_title_part: 'Экономьте своё время с',
    second_title_part: 'чартерными рейсами',
    description: `
      Наша команда специалистов работает вместе с вами, чтобы
      создать индивидуальный план полета, включая все
      дополнительные услуги, которые вам нужны - от питания
      до персональных хостесов. Мы стремимся обеспечить высокий
      уровень обслуживания и максимальный комфорт, чтобы вы
      могли полностью расслабиться и наслаждаться путешествием.
    `
  },
];

const Steps: FC = () => {
  return (
    <section className="steps">
      <div className="absolute inset-0 bg-stone-400 bg-opacity-70" />
      <div className="absolute inset-0 bg-gray-700 bg-opacity-50" />
      <div className="relative z-10 text-center">
        <p className="text-3xl text-white mb-12">Почему мы?</p>
        <Content steps={steps}/>
        <Mobile steps={steps}/>
      </div>
      <div className="hidden lg:block absolute top-[155px] left-0 right-0 h-[4px] bg-brand-100"/>
    </section>
  );
};

export default Steps;
