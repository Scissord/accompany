import { FC } from "react";
import { useTranslation } from "react-i18next";

const css = {
  img: "w-40 lg:w-72",
};

const Partners: FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-brand-200 text-white overflow-hidden">
      <div className="container mx-auto flex flex-col gap-8 text-center py-12">
        <h2 className="text-3xl font-bold">{t('home_partners_title')}</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 p-8">
          <img
            src="pages/main/qatar.png"
            alt="qatar"
            className={css.img}
          />
          <img
            src="pages/main/bi.png"
            alt="bi"
            className={css.img}
          />
          <img
            src="pages/main/almaty_airport_logo.png"
            alt="almaty_airport_logo"
            className={css.img}
          />
          <img
            src="pages/main/turkish_cargo.png"
            alt="turkish_cargo"
            className={css.img}
          />
          <img
            src="pages/main/air_charter_service.png"
            alt="air_charter_service"
            className={css.img}
          />
          <img
            src="pages/main/dhl.png"
            alt="dhl"
            className={css.img}
          />
          <img
            src="pages/main/volga.png"
            alt="volga"
            className={css.img}
          />
          <img
            src="pages/main/silkway.png"
            alt="silkway"
            className={css.img}
          />
          <img
            src="pages/main/scat.png"
            alt="scat"
            className={css.img}
          />
          <img
            src="pages/main/lufthansa.png"
            alt="lufthansa"
            className={css.img}
          />
          <img
            src="pages/main/cargolux.png"
            alt="cargolux"
            className={css.img}
          />
          <img
            src="pages/main/air_astana.png"
            alt="air_astana"
            className={css.img}
          />
          <img
            src="pages/main/aeroflot.png"
            alt="aeroflot"
            className={css.img}
          />
          <img
            src="pages/main/fly_arystan.png"
            alt="fly_arystan"
            className={css.img}
          />
          <img
            src="pages/main/qazaq.png"
            alt="qazaq"
            className={css.img}
          />
          <div className="border border-white flex items-center justify-center w-full h-full">
            и другие...
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
