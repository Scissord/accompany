import { FC, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const cards = [
  {
    id: 0,
    image: 'pages/main/card1.png',
    title: 'VIP ЧАРТЕРЫ',
    description: `
      Мы поможем организовать чартерные перелеты
      на вертолетах бизнесджетах и VIP-авиалайнерах.
    `,
    badges : [
      { id: 0, label: 'Частные перелеты' },
      { id: 1, label: 'Авиатакси' },
      { id: 2, label: 'Empty Legs' },
      { id: 3, label: 'VIP авиалайнеры' },
    ],
    annotation: `
      Данный сервис подходит бизнесменам
      и людям, желающим комфортно и быстро
      путешествовать.
    `
  },
  {
    id: 1,
    image: 'pages/main/card2.png',
    title: 'ГРУППОВОЙ ЧАРТЕР',
    description: `
      От перевозок персонала до спортивных и гастрольных чартеров,
      мы предлагаем множество услуг.
    `,
    badges : [
      { id: 0, label: 'Логистика персонала' },
      { id: 1, label: 'MICE' },
      { id: 2, label: 'Гастрольные туры' },
    ],
    annotation: `
      Услуга компании подходит для деловых
      поездок, отдыха и организации спортивных
      и гастрольных туров.
    `
  },
  {
    id: 2,
    image: 'pages/main/card3.png',
    title: 'ГРУЗОВЫЕ ЧАРТЕРЫ',
    description: `
      От перевозок персонала до спортивных и гастрольных
      чартеров, мы предлагаем множество услуг.
    `,
    badges : [
      { id: 0, label: 'Курьерская авиадоставка' },
      { id: 1, label: 'Опасные грузы' },
    ],
    annotation: `
      Услуга компании подходит для деловых
      поездок, отдыха и организации спортивных
      и гастрольных туров.
    `
  },
];

const Cards: FC = () => {
  return (
    <section className="bg-brand-100 text-white">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 py-12 px-6 lg:px-0">
        {cards.map((card, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: false });

          return (
            <motion.div
              ref={ref}
              key={card.id}
              className={`relative p-6 lg:p-12 bg-brand-200 rounded`}
              style={{
                backgroundImage: `url(${card.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <div className="absolute inset-0 bg-brand-100 bg-opacity-80 rounded" />
              <div className="relative z-10 text-white flex flex-col gap-4">
                <h2 className="text-xl font-bold text-left">{card.title}</h2>
                <p className="text-left mt-28">{card.description}</p>
                <div className="flex flex-wrap items-center gap-3">
                  {card.badges.map((badge) => (
                    <div key={badge.id} className="px-2 py-1 border border-slate-400">
                      <p>{badge.label}</p>
                    </div>
                  ))}
                </div>
                <div className="w-full border border-white" />
                <p className="text-left text-[13px]">
                  Если хотите обсудить сотрудничество, жмите на кнопку ниже
                </p>
                <button className="w-full bg-white text-brand-100 p-2 font-bold">
                  Оставить заявку
                </button>
                <p className="text-left text-[13px] text-gray-400 italic">
                  {card.annotation}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Cards;
