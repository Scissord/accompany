import { useState } from "react";
import { useTranslation } from "react-i18next";

const Harmonic = () => {
  const { t } = useTranslation();
  const [items, setItems] = useState([
    {
      id: 0,
      title: t('harmonic_1_title'),
      blocks: [
        {
          id: 0,
          label: t('harmonic_1_1_label'),
        },
        {
          id: 1,
          label: t('harmonic_1_2_label'),
        },
        {
          id: 2,
          label: t('harmonic_1_3_label'),
        },
        {
          id: 3,
          label: t('harmonic_1_4_label'),
        },
        {
          id: 4,
          label: t('harmonic_1_5_label'),
        },
      ],
      is_visible: false
    },
    {
      id: 1,
      title: t('harmonic_2_title'),
      blocks: [
        {
          id: 5,
          label: t('harmonic_2_1_label'),
        },
        {
          id: 6,
          label: t('harmonic_2_2_label'),
        },

      ],
      is_visible: false
    },
    {
      id: 2,
      title: t('harmonic_3_title'),
      blocks: [
        {
          id: 7,
          label: t('harmonic_3_1_label'),
        },
      ],
      is_visible: false
    },
    {
      id: 3,
      title: t('harmonic_4_title'),
      blocks: [
        {
          id: 7,
          label: t('harmonic_4_1_label'),
        },
      ],
      is_visible: false
    },
    {
      id: 4,
      title: t('harmonic_5_title'),
      blocks: [
        {
          id: 8,
          label: t('harmonic_5_1_label'),
        },
      ],
      is_visible: false
    },
    {
      id: 5,
      title: t('harmonic_6_title'),
      blocks: [
        {
          id: 8,
          label: t('harmonic_6_1_label'),
        },
      ],
      is_visible: false
    },
    {
      id: 6,
      title: t('harmonic_7_title'),
      blocks: [
        {
          id: 9,
          label: t('harmonic_7_1_label'),
        },
      ],
      is_visible: false
    },
    {
      id: 7,
      title: t('harmonic_8_title'),
      blocks: [
        {
          id: 10,
          label: t('harmonic_8_1_label'),
        },
      ],
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
