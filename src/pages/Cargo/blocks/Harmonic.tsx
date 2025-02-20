import { useState } from 'react'

const Harmonic = () => {
  const [items, setItems] = useState([
    {
      id: 0,
      title: 'Общие положения',
      blocks: [
        {
          id: 0,
          label: 'К воздушной перевозке принимается груз, который по своему качеству, свойствам, объему, весу и упаковке допущен к транспортировке воздушными судами в соответствии с законодательством РК, а также законодательства страны, на территорию, с территории или через территорию которой осуществляется перевозка груза.'
        },
        {
          id: 1,
          label: 'Некоторые виды особых грузов (скоропортящиеся, опасные, живность), а также тяжеловесные и негабаритные грузы, принимаются к перевозке по согласованию с авиакомпанией в соответствии с условиями, изложенными в настоящих Правилах и требованиями внутренних, международных или иных нормативных документов.'
        },
        {
          id: 2,
          label: 'Груз не должен изменять химических, физических и иных свойств, которые могут привести к его порче или повышению степени опасности в период перевозки.'
        },
        {
          id: 3,
          label: 'Габариты груза ограничиваются размерами загрузочным люков. Общий объём перевозимого на воздушном судне груза ограничен размерами багажных грузовых отсеков используемых воздушных судов. Общий вес перевозимого груза ограничивается допустимой предельной коммерческой загрузкой.'
        },
        {
          id: 4,
          label: 'Общий вес и объем перевозимого в багажных отсеках груза ограничивается допустимой предельной загрузкой багажного отсека согласно Руководству по центровке и балансировке соответствующего типа воздушного судна передельной коммерческой загрузкой и (или) объёмами грузовых отсеков, используемых типов воздушных судов.'
        },
      ],
      is_visible: false
    },
    {
      id: 1,
      title: 'Грузовая накладная',
      blocks: [
      ],
      is_visible: false
    },
    {
      id: 2,
      title: 'Приём груза к перевозке',
      blocks: [],
      is_visible: false
    },
    {
      id: 3,
      title: 'Требования к упаковке и маркировке груза',
      blocks: [],
      is_visible: false
    },
    {
      id: 4,
      title: 'Перевозка легковесных грузов',
      blocks: [],
      is_visible: false
    },
    {
      id: 5,
      title: 'Перевозка тяжеловесных грузов',
      blocks: [],
      is_visible: false
    },
    {
      id: 6,
      title: 'Перевозка скоропортящихся грузов',
      blocks: [],
      is_visible: false
    },
    {
      id: 7,
      title: 'Перевозка живности',
      blocks: [],
      is_visible: false
    },
  ]);

  const handleChangeItem = (index: number) => {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, is_visible: !item.is_visible } : { ...item, is_visible: false }
      )
    );
  };

  return (
    <div className='min-h-[50vh]'>
      <div className='container mx-auto py-12 flex flex-col gap-3 px-6 lg:px-0'>
        {items.map((item, index) => (
          <div>
            <h1
              className='font-bold text-xl py-2 px-4 bg-gray-200 hover:bg-gray-300 transition duration-300 ease-in-out cursor-pointer'
              onClick={() => handleChangeItem(index)}
            >
              {item.title}
            </h1>
            {item.is_visible &&
              <div className='flex flex-col gap-6 py-3 bg-gray-200'>
                {item.blocks.map((block, index) => (
                  <div className='flex gap-2 px-4'>
                    <p className='font-semibold text-brand-300'>
                      {index + 1}.
                    </p>
                    <p className='font-semibold text-brand-300'>
                      {block.label}
                    </p>
                  </div>

                ))}
              </div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Harmonic;
