import { FC } from 'react'

const Before: FC = () => {
  return (
    <div className='min-h-[50vh] text-black bg-white py-6'>
      <div className='w-full h-full container mx-auto py-6 px-6 bg-gray-200'>
        <h1 className='font-bold text-xl'>Перед взлетом</h1>
        <p className='font-semibold mt-3'>
          Что можно и нельзя брать в ручную кладь на борту самолёта
        </p>
        <p className='mt-3'>
          Для комфортного и безопасного полёта важно знать правила перевозки личных вещей
          в ручной клади. Ниже представлены категории предметов и условия их провоза.
        </p>

        <h2 className='mt-4 text-brand-300 font-semibold'>
          Разрешённые предметы
        </h2>
        <div className='flex w-full gap-3 lg:gap-0 lg:w-2/3 mt-3'>
          <div className='w-1/2 flex flex-col gap-3 text-brand-300'>
            <h2>Средства личной гигиены:</h2>
            <ul className='break-words'>
              <li>
                &#9679; Дезодорант, репеллент, шампунь, крем от солнца — в ёмкостях до 100 мл и упакованы
                в пакет 20×20 см.
              </li>
              <li>&#9679; Влажные салфетки.</li>
              <li>&#9679; Электронная сигарета.</li>
              <li>&#9679; Зубная щётка.</li>
            </ul>
            <h2 className='mt-4'>Электроника и устройства:</h2>
            <ul className='break-words'>
              <li>
                &#9679; Телефон, ноутбук,фотоаппарат, электроннаякнига и зарядные устройства.
              </li>
              <li>&#9679; Электробритва.</li>
            </ul>
          </div>
          <div className='w-1/2 flex flex-col gap-3 text-brand-300'>
            <h2>Лекарства и медицинские товары:</h2>
            <ul className='break-words'>
              <li>
                &#9679; Аптечка с таблетками и порошками.<br/>
              </li>
              <li>
                &#9679; Жидкие лекарства до 100 мл (при необходимости — с медицинской справкой).
              </li>
            </ul>
            <h2 className='mt-4'>Еда:</h2>
            <ul className='break-words'>
              <li>
                &#9679; Шоколад, орехи, бутербродыи другие твёрдые продукты.
              </li>
            </ul>
            <h2 className='mt-4'>Прочее:</h2>
            <ul className='break-words'>
              <li>
                &#9679; Обычная зажигалка (одна штука).
              </li>
              <li>
                &#9679; Фен, утюжок, плойка для волос.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='w-full h-full container mx-auto py-6 px-6 text-brand-300'>
        <p className='font-semibold'>
          Запрещённые предметы
        </p>
        <div className='flex w-full gap-3 lg:gap-0 lg:w-2/3 mt-3'>
          <div className='w-1/2 flex flex-col gap-3 text-brand-300'>
            <h2 className='mt-4'>Острые и режущие предметы:</h2>
            <ul className='break-words'>
              <li>
                &#9679; Штопор, перочинный нож.<br/>
              </li>
              <li>
                &#9679; Маникюрный набор.<br/>
              </li>
            </ul>
            <h2 className='mt-4'>Спортивное снаряжение:</h2>
            <ul className='break-words'>
              <li>
                &#9679; Треккинговые и лыжные палки.
              </li>
              <li>
                &#9679; Костыли.<br/>
              </li>
            </ul>
          </div>
          <div className='w-1/2 flex flex-col gap-3 text-brand-300'>
            <h2 className='mt-4'>Опасные и воспламеняющиеся предметы:</h2>
            <ul className='break-words'>
              <li>
                &#9679; Жидкость для заправки зажигалок.<br/>
              </li>
              <li>
                &#9679; Фейерверки, петарды и бенгальские огни.<br/>
              </li>
              <li>
                &#9679; Пустая бутылка.<br/>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='bg-brand-300 h-full lg:h-[30vh] p-6 text-white container mx-auto mt-6'>
        <div className='h-full w-full flex flex-col lg:flex-row items-center justify-between gap-12'>
          <div className='flex flex-col gap-3'>
            <h1 className='font-semibold text-xl'>Примечание</h1>
            <p className='text-lg'>
              При нарушении этих правил сотрудники службы безопасности имеют право изъять
              запрещённые предметы. Для жидкостей и аэрозолей применяются особые
              ограничения: каждая ёмкость должна быть не более 100 мл и упакована в
              герметичный пакет. Исключения составляют лекарства и детское питание, которые
              могут понадобиться в полёте.
            </p>
          </div>
          <img src="icons/exclamation.svg" className='w-32'/>
        </div>
      </div>
      <div className='mt-6 w-full h-full container mx-auto py-6 px-6 bg-gray-200'>
        <h1 className='font-bold text-xl'>Правила безопасности полётов ICAO</h1>
        <p className='font-semibold mt-3'>
          Правила безопасности, разработанные Международной организацией гражданской
          авиации (ICAO), направлены на обеспечение безопасности полётов на глобальном
          уровне. Они охватывают широкий спектр стандартов и практик, которые регулярно
          обновляются в связи с техническим прогрессом и новыми вызовами отрасли. Ниже
          представлены основные аспекты.
        </p>
        <div className='w-full h-full container mx-auto py-6 px-6 text-brand-300'>
        <div className='flex w-2/3'>
          <div className='break-words flex flex-wrap gap-3 text-brand-300'>
            <li>
              Annex 1: Лицензирование персонала<br/>
              <p className='py-2 text-black'>
                Определяет требования к квалификации и подготовке пилотов, диспетчеров,
                механиков и другого авиационного персонала.
                Устанавливает минимальные стандарты знаний, опыта и физического состояния.
              </p>
            </li>
            <li>
              Annex 2: Правила полётов<br/>
              <p className='py-2 text-black'>
                Регламентирует полёты в международном воздушном пространстве и управление
                воздушным движением (ATM).
                Описывает действия в нормальных и чрезвычайных ситуациях.
              </p>
            </li>
            <li>
              Annex 3: Метеорологическое обслуживание<br/>
              <p className='py-2 text-black'>
                Определяет стандарты предоставления прогнозов и предупреждений о погодных
                условиях.
                Обеспечивает пилотов и диспетчеров актуальной метеорологической информацией
                для планирования полётов.
              </p>
            </li>
            <li>
              Annex 4: Карты аэронавигации<br/>
              <p className='py-2 text-black'>
                Обеспечивает точную информацию о воздушных трассах, навигационных объектах и
                аэропортах.
              </p>
            </li>
            <li>
              Annex 6: Эксплуатациявоздушных судов<br/>
              <p className='py-2 text-black'>
                Устанавливает требования к безопасной эксплуатации самолётов и управлению
                рисками.
                Регулирует планирование полётов и техническое обслуживание воздушных судов.
              </p>
            </li>
            <li>
              Annex 8: Лётная годность воздушных судов<br/>
              <p className='py-2 text-black'>
              Включает стандарты сертификации конструкции и оборудования самолётов.
              </p>
            </li>
            <li>
              Annex 11: Обслуживание воздушного движения<br/>
              <p className='py-2 text-black'>
                Определяет процедуры управления воздушным движением для предотвращения
                столкновений и безопасного разделения судов.
              </p>
            </li>
            <li>
              Annex 14: Аэродромы<br/>
              <p className='py-2 text-black'>
                Устанавливает стандарты проектирования и эксплуатации аэропортов, включая
                системы навигации и аварийные службы..
              </p>
            </li>
            <li>
              Annex 19: Управление безопасностью<br/>
              <p className='py-2 text-black'>
                Требует внедрения систем управления безопасностью (SMS) для авиаперевозчиков и
                аэропортов.
                Включает процессы оценки рисков и постоянного мониторинга уровня безопасности.
              </p>
            </li>
          </div>
        </div>
      </div>
      </div>
      <div className='bg-brand-300 h-full lg:h-[30vh] p-6 text-white container mx-auto mt-6'>
        <div className='h-full w-full flex flex-col lg:flex-row items-center justify-between gap-12'>
          <div className='flex flex-col gap-3'>
            <h1 className='font-semibold text-xl'>Заключение</h1>
            <p className='text-lg'>
              Эти правила безопасности помогают избежать угроз на борту и минимизировать риски,
              связанные с авиаперевозками. Применение стандартов ICAO и соблюдение правил
              ручной клади позволяет пассажирам путешествовать безопасно и комфортно.
              Соблюдение всех норм также ускоряет прохождение контроля в аэропорту,
              предотвращая возможные задержки.
            </p>
          </div>
            <img src="icons/exclamation.svg" className='w-32'/>
        </div>
      </div>
    </div>
  );
};

export default Before;
