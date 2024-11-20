import { FC } from "react";
import { useTranslation } from "react-i18next";

const css = {
  img: "w-40 lg:w-72",
};

const Partners: FC = () => {
  const { t }  = useTranslation();

  return (
    <section className="text-white overflow-hidden">
      <div className="container mx-auto text-center py-12">
        <p className="text-3xl text-brand-300">
          {t('about_partners_title')}
        </p>
        <div className="mt-16 flex justify-center">
          <div className="flex space-x-20 animate-scroll">
            <img
              src="pages/about/scat.png"
              alt="SCAT Airlines"
              className={css.img}
            />
            <img
              src="pages/about/air_astana.png"
              alt="Air Astana"
              className={css.img}
            />
            <img
              src="pages/about/fly_arystan.png"
              alt="FlyArystan"
              className={css.img}
            />
            <img
              src="pages/about/aeroflot.png"
              alt="Aeroflot"
              className={css.img}
            />
            <img
              src="pages/about/scat.png"
              alt="SCAT Airlines"
              className={css.img}
            />
            <img
              src="pages/about/air_astana.png"
              alt="Air Astana"
              className={css.img}
            />
            <img
              src="pages/about/fly_arystan.png"
              alt="FlyArystan"
              className={css.img}
            />
            <img
              src="pages/about/aeroflot.png"
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
