import { FC } from "react";

const Events: FC = () => {
  return (
    <div className="bg-gbg text-white">
      <div className="container mx-auto py-12 h-full px-6 lg:px-0">
        <p className="text-3xl font-bold">События</p>
        <div className="flex flex-col lg:flex-row justify-between gap-12 h-full py-3">
          <div className="flex flex-col gap-6 w-full lg:w-1/3 h-full">
            <div className="h-[200px] w-full bg-white"/>
            <p className="text-xl font-bold">Безопасность</p>
            <p>
              Свыше 200 клиентов по всему миру доверяют нам
              организацию своих деловых и личных поездок, а
              также перевозку грузов
            </p>
            <p className="underline cursor-pointer">Читать далее</p>
          </div>
          <div className="flex flex-col gap-6 w-full lg:w-1/3 h-full bg-brand-100 py-6 px-3">
            <div className="h-[200px] w-full bg-brand-200"/>
            <p className="text-xl font-bold">Новые возможности</p>
            <p>
              Свыше 200 клиентов по всему миру доверяют нам
              организацию своих деловых и личных поездок, а
              также перевозку грузов
            </p>
            <p className="underline cursor-pointer">Читать далее</p>
          </div>
          <div className="flex flex-col gap-6 w-full lg:w-1/3 h-full">
            <p className="text-xl font-bold">Новые возможности</p>
            <p>
              Рады представитьвам наш новый самолет,доступный для
              чартерных рейсов! Этот современный лайнер
              объединяет передовые технологии, непревзойденный
              комфорт и высокие стандарты безопасности
            </p>
            <p className="underline cursor-pointer">Читать далее</p>
            <div className="h-[200px] w-full bg-white"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events;
