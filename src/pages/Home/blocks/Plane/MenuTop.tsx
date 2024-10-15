import { FC } from 'react'

const MenuTop: FC = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <p className="font-semibold text-black dark:text-white">
        Укажите маршрут, и мы поможем Вам найти ваш подходящий рейс
      </p>
      <div className="flex items-center gap-1 py-1 px-2 bg-brand-100">
        <img src="icons/refresh.svg" alt="refresh" className="w-3"/>
        <p className="text-xs text-white">
          Пассажирский
        </p>
      </div>
    </div>
  );
};

export default MenuTop;
