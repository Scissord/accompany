import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from 'react';

const Plane = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  const handleScroll = () => {
    sectionRefs.current.forEach((ref, index) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
          setActiveIndex(index);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const descriptions = [
    {
      title: t('passengers_plane_title_1'),
      text: t('passengers_plane_description_1'),
    },
    {
      title: t('passengers_plane_title_2'),
      text: t('passengers_plane_description_2'),
    },
    {
      title: t('passengers_plane_title_3'),
      text: t('passengers_plane_description_3'),
    },
    {
      title: t('passengers_plane_title_4'),
      text: t('passengers_plane_description_4'),
    },
  ];

  return (
    <div className='min-h-[50vh] py-12 bg-gray-200'>
      <div className='container mx-auto flex flex-col gap-6 px-6 lg:px-0'>
        <h1 className='text-xl font-bold text-brand-300'>
          {t('passengers_plane_title')}
        </h1>
        <div className='flex flex-col lg:flex-row gap-3'>
          <div className='w-full lg:w-1/2'>
            <img src='pages/passenger/plane.png' alt='plane' />
          </div>
          <div className='w-full lg:w-1/2 flex gap-6'>
            <div className='flex flex-col items-center justify-between'>
              {descriptions.map((_, index) => (
                <div key={index} className='flex flex-col items-center h-full'>
                  <div
                    className={`rounded-full min-w-6 min-h-6 border transition duration-500 ease-in-out ${
                      activeIndex === index
                        ? 'bg-brand-300 border-brand-300'
                        : 'bg-white border-brand-300'
                    }`}
                  />
                  <div className='w-1 bg-brand-100 h-full'/>
                </div>
              ))}
            </div>
            <div className='flex flex-col justify-between'>
              {descriptions.map((item, index) => (
                <div
                  key={index}
                  className='flex flex-col gap-3'
                  ref={(el) => (sectionRefs.current[index] = el!)}
                >
                  <h3 className='text-lg font-bold text-gray-800'>{item.title}</h3>
                  <p className='text-gray-600'>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plane;
