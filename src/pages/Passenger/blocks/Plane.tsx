import { useState, useRef, useEffect } from 'react';

const Plane = () => {
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
      title: 'Гибкость и индивидуальный подход',
      text: 'Чартерные рейсы предоставляют вам полную свободу выбора. Вы сами определяете время вылета и прибытия, а также маршрут, что позволяет избегать пересадок и лишних ожиданий. Мы подберём самолёт под любые ваши потребности, будь то небольшой частный джет или вместительный авиалайнер для группы.',
    },
    {
      title: 'Комфорт и приватность',
      text: 'Чартерные перевозки обеспечивают высокий уровень комфорта и приватности. Весь рейс будет предоставлен исключительно для вас и вашей группы, что позволяет насладиться полётом в спокойной обстановке и с учётом всех ваших пожеланий.',
    },
    {
      title: 'Экономия времени',
      text: 'Чартерный рейс позволяет избежать длинных очередей и стандартных процедур аэропорта. Наши клиенты проходят регистрацию и предполётные формальности по упрощённой схеме, что значительно экономит время и делает путешествие более приятным.',
    },
    {
      title: 'Безопасность',
      text: 'Мы работаем только с сертифицированными авиакомпаниями и тщательно проверяем каждое воздушное судно перед вылетом. Высококвалифицированные экипажи и соблюдение всех стандартов безопасности гарантируют надёжность и спокойствие в пути.',
    },
  ];

  return (
    <div className='min-h-[50vh] py-12 bg-gray-200'>
      <div className='container mx-auto flex flex-col gap-6 px-6 lg:px-0'>
        <h1 className='text-xl font-bold text-brand-300'>
          Преимущества грузовых перевозок
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
