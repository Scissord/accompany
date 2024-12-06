import { useState } from 'react'

const Harmonic = () => {
  const [items, setItems] = useState([
    {
      id: 0,
      title: 'Общие положения',
      blocks: [
        {
          id: 0,
          label: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate quaerat accusantium molestias veritatis iste exercitationem totam minus non ipsa eum, quidem at praesentium odio nobis mollitia suscipit officia, ad ex.'
        },
        {
          id: 1,
          label: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate quaerat accusantium molestias veritatis iste exercitationem totam minus non ipsa eum, quidem at praesentium odio nobis mollitia suscipit officia, ad ex.'
        },
        {
          id: 2,
          label: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate quaerat accusantium molestias veritatis iste exercitationem totam minus non ipsa eum, quidem at praesentium odio nobis mollitia suscipit officia, ad ex.'
        },
        {
          id: 3,
          label: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate quaerat accusantium molestias veritatis iste exercitationem totam minus non ipsa eum, quidem at praesentium odio nobis mollitia suscipit officia, ad ex.'
        },
        {
          id: 4,
          label: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate quaerat accusantium molestias veritatis iste exercitationem totam minus non ipsa eum, quidem at praesentium odio nobis mollitia suscipit officia, ad ex.'
        },
      ],
      is_visible: false
    },
    {
      id: 1,
      title: 'Грузовая накладная',
      blocks: [
        {
          id: 0,
          label: 'Подраздел 2.'
        },
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

  const handleChangeItem = (index: Number) => {
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
