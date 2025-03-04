import { FC } from "react";
import { useTranslation } from "react-i18next";

const Events: FC = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-gbg text-white">
      <div className="container mx-auto py-12 h-full px-6 lg:px-0">
        <p className="text-3xl font-bold">{t('home_events_title')}</p>
        <div className="flex flex-col lg:flex-row justify-between gap-12 h-full py-3">
          <div className="flex flex-col gap-6 w-full lg:w-1/3 h-full">
            <div className="h-full w-full">
              <img src="pages/news/n1.jpg" className="w-full h-full object-cover" alt="pages/news/n1.jpg"/>
            </div>
            <p className="text-xl font-bold">К строительству трех аэропортов приступили в Казахстане</p>
            <p>
              По поручению Главы государства для развития внутреннего туризма и пассажирских авиаперевозок в Казахстане приступили к строительству трех новых аэропортов в курортных зонах Зайсан, Катон-Карагай и Кендирли.
            </p>
            <span>
              Первоисточник:
              <a href="https://primeminister.kz/ru/news/k-stroitelstvu-trekh-aeroportov-pristupili-v-kazakhstane-29599" target="_blank" className="ml-1 text-lg text-white cursor-pointer hover:underline">
                https://primeminister.kz/ru/news/k-stroitelstvu-trekh-aeroportov-pristupili-v-kazakhstane-29599
              </a>
            </span>
          </div>
          <div className="flex flex-col gap-6 w-full lg:w-1/3 h-full bg-brand-100 py-6 px-3">
            <div className="h-full w-full">
              <img src="pages/news/n2.jpg" className="w-full h-full object-cover" alt="pages/news/n2.jpg"/>
            </div>
            <p className="text-xl font-bold">Авиакомпании вводят ограничения на перевозку популярных гаджетов</p>
            <p>
              Портативные аккумуляторы (пауэрбанки) и электронные сигареты будут запрещены к провозу в ручной клади на верхней полке самолетов с 1 марта в Южной Корее, передает Avianews со ссылкой на Aviapages.
            </p>
            <span>
              Первоисточник:
              <a href="https://avianews.kz/grazhdanskaya-aviacziya/aviakompanii-vvodyat-ogranicheniya-na-perevozku-populyarnyh-gadzhetov/" target="_blank" className="ml-1 text-lg text-white cursor-pointer hover:underline">
                https://avianews.kz/grazhdanskaya-aviacziya/aviakompanii-vvodyat-ogranicheniya-na-perevozku-populyarnyh-gadzhetov/
              </a>
            </span>
          </div>
          <div className="flex flex-col gap-6 w-full lg:w-1/3 h-full">
            <p className="text-xl font-bold">Казахстан первым в ЦА принял план по сокращению выбросов CO2 в авиации</p>
            <p>
              Казахстан первым в Центральной Азии поддержал инициативу ИКАО, приняв Национальный план по снижению выбросов СО2 в окружающую среду, передает Avianews со ссылкой на пресс-службу КГА МТ РК.
            </p>
            <span>
              Первоисточник:
              <a href="https://avianews.kz/grazhdanskaya-aviacziya/aviakompanii-vvodyat-ogranicheniya-na-perevozku-populyarnyh-gadzhetov/" target="_blank" className="ml-1 text-lg text-white cursor-pointer hover:underline">
                https://avianews.kz/grazhdanskaya-aviacziya/aviakompanii-vvodyat-ogranicheniya-na-perevozku-populyarnyh-gadzhetov/
              </a>
            </span>
            <div className="h-full w-full">
              <img src="pages/news/n3.jpeg" className="w-full h-full object-cover" alt="pages/news/n3.jpeg"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events;
