import { FC } from "react";

const Form: FC = () => {
  return (
    <section className="h-[80vh] bg-dbg text-white">
      <div className="container mx-auto py-12 h-full">
        <div className="flex flex-col gap-6 h-full px-8 md:px-0">
          <p className="text-3xl font-bold">Оставить заявку</p>
          <p>Наименование компании</p>
          <div className="flex items-center justify-between h-full">
            <div className="flex items-start justify-center flex-col gap-6 w-full md:w-3/5 h-full">
              <input
                type="text"
                placeholder="Компания"
                className="border border-white p-4 bg-dbg w-full"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="border border-white p-4 bg-dbg w-full"
              />
              <textarea
                placeholder="Ваше обращение"
                className="border border-white p-4 bg-dbg h-full w-full"
              />
            </div>
            <div className="hidden md:block h-full w-full bg-white ml-12"/>
          </div>
          <div className="flex items-center gap-2 w-full md:w-1/3">
            <button className="w-1/2 bg-white text-brand-100 p-3">Отправить</button>
            <p className="w-1/2 text-[13px]">Персональная обработка данных</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
