import { FC } from "react";
import './form.css';

const Form: FC = () => {
  return (
    <section className="form">
      <div className="absolute inset-0 bg-stone-900 bg-opacity-70" />
      <div className="absolute inset-0 bg-gray-500 bg-opacity-50" />
      <div className="container mx-auto h-full relative z-10">
        <div className="flex flex-col gap-6 h-full px-8 md:px-0">
          <p className="text-3xl font-bold">Оставить заявку</p>
          <p>Наименование компании</p>
          <div className="flex items-center justify-between h-full">
            <div className="flex items-start justify-center flex-col gap-6 w-full md:w-1/3">
              <input
                type="text"
                placeholder="Компания"
                className="border border-white p-4 w-full"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="border border-white p-4 w-full"
              />
              <textarea
                placeholder="Ваше обращение"
                className="border border-white p-4 h-full w-full"
              />
            </div>
            <div className="hidden md:block h-full w-2/3 bg-white ml-12"/>
          </div>
          <div className="flex flex-col lg:flex-row items-center h-full">
            <div className="flex items-center gap-6 w-full md:w-1/3">
              <button className="w-1/2 bg-white text-brand-100 p-3">Отправить</button>
              <p className="w-1/2 text-[13px]">Персональная обработка данных</p>
            </div>
            <div className="mt-6 md:mt-0 md:w-2/3 md:ml-12">
              <button className="bg-white text-brand-100 p-3">Заполнить продвинутую форму</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
