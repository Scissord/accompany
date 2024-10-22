import { FC } from 'react'
import { useTranslation } from 'react-i18next';

const MenuTop: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full flex items-center justify-between">
      <p className="font-semibold text-black dark:text-white">
        {t('home_menu_top_title')}
      </p>
      <div className="flex items-center gap-1 py-1 px-2 bg-brand-100">
        <img src="icons/refresh.svg" alt="refresh" className="w-3"/>
        <p className="text-xs text-white">
          {t('home_menu_top_type')}
        </p>
      </div>
    </div>
  );
};

export default MenuTop;
