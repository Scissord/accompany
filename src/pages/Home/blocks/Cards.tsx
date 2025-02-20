import { FC, useRef } from 'react';
import { motion, useInView  } from 'framer-motion';
import { useTranslation } from 'react-i18next';



const Cards: FC = () => {
  const { t } = useTranslation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cards = [
    {
      id: 0,
      image: 'pages/main/card1.png',
      title: t('home_cards_title_1'),
      description: t('home_cards_description_1'),
      badges : [
        { id: 0, label: t('home_cards_badge_1') },
        { id: 1, label: t('home_cards_badge_2') },
        { id: 2, label: t('home_cards_badge_3') },
        { id: 3, label: t('home_cards_badge_4') },
      ],
      annotation: t('home_cards_annotation_1')
    },
    {
      id: 1,
      image: 'pages/main/card2.png',
      title: t('home_cards_title_2'),
      description: t('home_cards_description_2'),
      badges : [
        { id: 0, label: t('home_cards_badge_5') },
        { id: 1, label: t('home_cards_badge_6') },
        { id: 2, label: t('home_cards_badge_7') },
      ],
      annotation: t('home_cards_annotation_2')
    },
    {
      id: 2,
      image: 'pages/main/card3.png',
      title: t('home_cards_title_3'),
      description: t('home_cards_description_3'),
      badges : [
        { id: 0, label: t('home_cards_badge_8') },
        { id: 1, label: t('home_cards_badge_9') },
      ],
      annotation: t('home_cards_annotation_3')
    },
  ];

  const css = {
    button : `
      w-full bg-white text-brand-100
      p-2 font-bold hover:bg-black
      hover:bg-opacity-50
      hover:text-white
      transition duration-300 ease-in-out
    `
  }

  return (
    <section ref={ref} className="bg-[#133457] text-white">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 py-12 px-6 lg:px-0">
        {cards.map((card, index) => {
          return (
            <motion.div
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
                <div className="flex flex-wrap items-start gap-3 h-[80px]">
                  {card.badges.map((badge) => (
                    <div key={badge.id} className="px-2 py-1 border border-slate-400">
                      <p>{badge.label}</p>
                    </div>
                  ))}
                </div>
                <div className="w-full border border-white" />
                <p className="text-left text-[13px]">
                  {t('home_cards_cooperation')}
                </p>
                <button className={css.button}>
                  {t('home_cards_submit_button')}
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
