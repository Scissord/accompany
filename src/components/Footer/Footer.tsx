import { FC } from "react";
import './footer.css';

export const Footer: FC = () => {
  return (
    <footer className="h-[55vh] lg:h-[40vh] bg-brand-100 py-12 lg:py-20 relative">
      <div className="footer" />
      <div className="container mx-auto h-full px-6 lg:px-0">
        <div className="h-[30%] lg:h-[70%] w-full flex flex-col lg:flex-row justify-between">
          <img src="logo.png" className="w-[35%] sm:w-[20%] lg:w-[10%] h-12" alt="logo" />
          <div className="w-[20%] flex items-start justify-between gap-10 text-white">
            <div className="flex flex-col gap-3">
              <p>?????</p>
              <p>?????</p>
            </div>
            <div className="flex flex-col gap-3">
              <p>?????</p>
              <p>?????</p>
            </div>
            <div className="flex flex-col gap-3">
              <p>?????</p>
              <p>?????</p>
            </div>
          </div>
          <div className="hidden lg:block w-[20%]" />
        </div>
        <div className="relative pt-12 lg:pt-0 h-[70%] lg:h-[30%] flex flex-col lg:flex-row items-start lg:items-center gap-3 lg:gap-10 text-white">
          <p>{"TOO «Avia Consulting Company»"}</p>
          <p>Политика обработки персональных данных</p>
          <button className="border border-slate-400 text-white py-2 px-4 rounded-full">
            Заказать обратный звонок
          </button>
          <p className=" whitespace-nowrap">Design by Quasar</p>
        </div>
      </div>
    </footer>
  );
};
