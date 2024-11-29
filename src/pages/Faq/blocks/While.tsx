import { FC } from 'react'


const While: FC = () => {
  return (
    <div className='min-h-[50vh] text-black bg-white py-6'>
      <div className='w-full h-full container mx-auto py-6 px-6 bg-gray-200'>
        <h1 className='font-bold text-xl'>Нормы провода багажа</h1>
        <p className='font-semibold mt-3'>
          Что можно и нельзя брать в ручную кладь на борту самолёта
        </p>
        <p className='mt-3'>
          Для комфортного и безопасного полёта важно знать правила перевозки личных вещей и ручной клади.
          Ниже приведены категории предметов и условия их перевозки.
        </p>

        <h2 className='mt-4 text-brand-300 font-semibold'>Разрешенные предметы</h2>
        <div className='flex w-2/3 mt-3'>
          <div className='w-1/2 flex flex-col gap-3 text-brand-300'>
            <h2>Средства личной гигиены</h2>
            <ul className='break-words'>
              <li>
                &#9679; Дезодорант, репеполешь, шампунь<br/>
                крем от солнца - в емкости до 100<br/>
                мл и упакованы в пакет 20х20см.
              </li>
              <li>&#9679; Влажные салфетки</li>
              <li>&#9679; Электронная сигарета</li>
              <li>&#9679; Зубная щетка</li>
            </ul>
            <h2 className='mt-4'>Электроника и устройства</h2>
            <ul className='break-words'>
              <li>
                &#9679; Телефон, ноутбук,<br/>
                фотоаппарат, электронная<br/>
                книга и зарядные устройства
              </li>
              <li>&#9679; Электробритва</li>
            </ul>
          </div>
          <div className='w-1/2 flex flex-col gap-3 text-brand-300'>
            <h2>Лекарства и медицинские товары</h2>
            <ul className='break-words'>
              <li>
                &#9679; Аптечка с таблетками и порошками<br/>
              </li>
              <li>
                &#9679; Жидкие лекарства до 100 мл (при<br/>
                необходимости - с медицинской<br/>
                справкой)
              </li>
            </ul>
            <h2 className='mt-4'>Еда</h2>
            <ul className='break-words'>
              <li>
                &#9679; Шоколад, орехи, бутерброды<br/>
                и другие твёрдые продукты
              </li>
            </ul>
            <h2 className='mt-4'>Прочее</h2>
            <ul className='break-words'>
              <li>
                &#9679; Обычная зажигалка (одна штука)<br/>
              </li>
              <li>
                &#9679; Фен, утюжок, плойка для волос<br/>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='bg-brand-300 h-[30vh] p-6 text-white container mx-auto mt-6'>
        <div className='h-full w-full flex items-center justify-between gap-12'>
          <div className='flex flex-col gap-3'>
            <h1 className='font-semibold'>Примечание</h1>
            <p>
              При нарушении этих правил сотрудники службы безопасности имеют право изъять
              запрещённые предметы. Для жидкостей и аэрозолей применяются особые ограничения
              каждая ёмкость должна быть не более 100 мл и упакована в герметичный пакет.
              Исключения составляют лекарства и десткое питание, которые могут понадобиться
              в полёте.
            </p>
          </div>
            <img src="icons/moon.svg" className='w-24'/>
        </div>
      </div>
    </div>
  );
};

export default While;
