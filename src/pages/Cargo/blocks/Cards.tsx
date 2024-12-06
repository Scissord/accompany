import { FC } from 'react'

const cards = [
  {
    title: "Airbus A300 B4F",
    path: 'pages/charters/plane1.png',
    description1: `
      Крейсерная скорость -
    `,
    description2: `
      905 км/ч / 563 миль/ч
    `,
    description3: `
      Дальность полета -
    `,
    description4: `
      5430 км / 3374 мили
    `,
    description5: `
      Вместимость (грузоподъемность) -
    `,
    description6: `
      43500 кг / 95901 фунт
    `,
    description7: `
      Размер грузового отсека в CM -
    `,
    description8: `
      3550x477x245 cm / 116'5''x15'7''x8'0''
    `,
    description9: `
      Размер люка CM -
    `,
    description10: `
      358x256 см / 11'8''x8'4''
    `,
  },
  {
    title: "Airbus A300-600F",
    path: 'pages/charters/plane2.png',
    description1: `
      Крейсерная скорость -
    `,
    description2: `
      905 км/ч / 563 миль/ч
    `,
    description3: `
      Дальность полета -
    `,
    description4: `
      5430 км / 3374 мили
    `,
    description5: `
      Вместимость (грузоподъемность) -
    `,
    description6: `
      43500 кг / 95901 фунт
    `,
    description7: `
      Размер грузового отсека в CM -
    `,
    description8: `
      3550x477x245 cm / 116'5''x15'7''x8'0''
    `,
    description9: `
      Размер люка CM -
    `,
    description10: `
      358x256 см / 11'8''x8'4''
    `,
  },
  {
    title: "Airbus A300 B4F",
    path: 'pages/charters/plane3.png',
    description1: `
      Крейсерная скорость -
    `,
    description2: `
      905 км/ч / 563 миль/ч
    `,
    description3: `
      Дальность полета -
    `,
    description4: `
      5430 км / 3374 мили
    `,
    description5: `
      Вместимость (грузоподъемность) -
    `,
    description6: `
      43500 кг / 95901 фунт
    `,
    description7: `
      Размер грузового отсека в CM -
    `,
    description8: `
      3550x477x245 cm / 116'5''x15'7''x8'0''
    `,
    description9: `
      Размер люка CM -
    `,
    description10: `
      358x256 см / 11'8''x8'4''
    `,
  },
];

const Cards: FC = () => {
  return (
    <section className='bg-brand-300'>
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
