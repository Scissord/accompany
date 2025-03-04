import { FC } from 'react'
import { useTranslation } from "react-i18next";

const Cards: FC = () => {

  const { t } = useTranslation();

  const cards = [
    {
      title: t('plane_title_1'),
      path: 'pages/charters/plane1.png',
      description1: t('plane_description_1_1'),
      description2: t('plane_description_1_2'),
      description3: t('plane_description_1_3'),
      description4: t('plane_description_1_4'),
      description5: t('plane_description_1_5'),
      description6: t('plane_description_1_6'),
      description7: t('plane_description_1_7'),
      description8: t('plane_description_1_8'),
      description9: t('plane_description_1_9'),
      description10: t('plane_description_1_10'),
    },
    {
      title: t('plane_title_2'),
      path: 'pages/charters/plane2.png',
      description1: t('plane_description_2_1'),
      description2: t('plane_description_2_2'),
      description3: t('plane_description_2_3'),
      description4: t('plane_description_2_4'),
      description5: t('plane_description_2_5'),
      description6: t('plane_description_2_6'),
      description7: t('plane_description_2_7'),
      description8: t('plane_description_2_8'),
      description9: t('plane_description_2_9'),
      description10: t('plane_description_2_10'),
    },
    {
      title: t('plane_title_3'),
      path: 'pages/charters/plane3.png',
      description1: t('plane_description_3_1'),
      description2: t('plane_description_3_2'),
      description3: t('plane_description_3_3'),
      description4: t('plane_description_3_4'),
      description5: t('plane_description_3_5'),
      description6: t('plane_description_3_6'),
      description7: t('plane_description_3_7'),
      description8: t('plane_description_3_8'),
      description9: t('plane_description_3_9'),
      description10: t('plane_description_3_10'),
    },
  ];

  return (
    <section className='bg-white'>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 py-12 px-6 lg:px-0">
        {cards.map((card) => (
          <div
            key={card.title}
            className={`flex flex-col p-6 lg:p-12 bg-brand-200 text-white transform transition-transform duration-300 ease-in-out hover:scale-105`}
            style={{
              backgroundImage: `url(${card.path})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top',
            }}
          >
            <p className='text-2xl'>{card.title}</p>
            <div className='mt-48 text-sm'>
              <p>
                {card.description1}<br/>
                {card.description2}
              </p>
              <p className='mt-2'>
                {card.description3}<br/>
                {card.description4}
              </p>
              <p className='mt-2'>
                {card.description5}<br/>
                {card.description6}
              </p>
              <p className='mt-2'>
                {card.description7}<br/>
                {card.description8}
              </p>
              <p className='mt-2'>
                {card.description9}<br/>
                {card.description10}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
