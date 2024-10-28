import { FC } from "react";
import { useTranslation } from "react-i18next";

const css = {
  img: "w-40 lg:w-72",
};

const Partners: FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-brand-100 text-white overflow-hidden">
      <div className="container mx-auto text-center py-12">
        <h2 className="text-3xl font-bold">{t('home_partners_title')}</h2>
        <div className="mt-16 flex justify-center">
          <div className="flex space-x-20 animate-scroll">
            <img
              src="pages/main/scat.png"
              alt="SCAT Airlines"
              className={css.img}
            />
            <img
              src="pages/main/air_astana.png"
              alt="Air Astana"
              className={css.img}
            />
            <img
              src="pages/main/fly_arystan.png"
              alt="FlyArystan"
              className={css.img}
            />
            <img
              src="pages/main/aeroflot.png"
              alt="Aeroflot"
              className={css.img}
            />
            <img
              src="pages/main/scat.png"
              alt="SCAT Airlines"
              className={css.img}
            />
            <img
              src="pages/main/air_astana.png"
              alt="Air Astana"
              className={css.img}
            />
            <img
              src="pages/main/fly_arystan.png"
              alt="FlyArystan"
              className={css.img}
            />
            <img
              src="pages/main/aeroflot.png"
              alt="Aeroflot"
              className={css.img}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
