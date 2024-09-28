import { FC } from "react";

const Partners: FC = () => {
  return (
    <section className="bg-brand-100 text-white overflow-hidden">
      <div className="container mx-auto text-center py-12">
        <h2 className="text-3xl font-bold">Наши партнеры</h2>
        <div className="mt-16 flex justify-center">
          <div className="flex space-x-12 animate-scroll">
            <img src="pages/main/scat.png" alt="SCAT Airlines" className="w-72"/>
            <img src="pages/main/air_astana.png" alt="Air Astana" className="w-72"/>
            <img src="pages/main/fly_arystan.png" alt="FlyArystan" className="w-72"/>
            <img src="pages/main/aeroflot.png" alt="Aeroflot" className="w-72"/>
            <img src="pages/main/scat.png" alt="SCAT Airlines" className="w-72"/>
            <img src="pages/main/air_astana.png" alt="Air Astana" className="w-72"/>
            <img src="pages/main/fly_arystan.png" alt="FlyArystan" className="w-72"/>
            <img src="pages/main/aeroflot.png" alt="Aeroflot" className="w-72"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
