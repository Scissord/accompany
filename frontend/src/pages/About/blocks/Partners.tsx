import { FC } from "react";

const Partners: FC = () => {
  return (
    <section className="text-white overflow-hidden">
      <div className="container mx-auto text-center py-12">
        <p className="text-3xl text-brand-300">Наши партнеры</p>
        <div className="mt-16 flex justify-center">
          <div className="flex space-x-12 animate-scroll">
            <img src="pages/about/scat.png" alt="SCAT Airlines" className="w-72"/>
            <img src="pages/about/air_astana.png" alt="Air Astana" className="w-72"/>
            <img src="pages/about/fly_arystan.png" alt="FlyArystan" className="w-72"/>
            <img src="pages/about/aeroflot.png" alt="Aeroflot" className="w-72"/>
            <img src="pages/about/scat.png" alt="SCAT Airlines" className="w-72"/>
            <img src="pages/about/air_astana.png" alt="Air Astana" className="w-72"/>
            <img src="pages/about/fly_arystan.png" alt="FlyArystan" className="w-72"/>
            <img src="pages/about/aeroflot.png" alt="Aeroflot" className="w-72"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;