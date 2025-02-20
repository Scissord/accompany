import { FC } from 'react'

const Steps: FC = () => {
  return (
    <div className='min-h-[50vh] text-white bg-brand-300'>
      <div className='py-12 container mx-auto flex flex-col items-center justify-center gap-6 px-6 lg:px-0'>
        <h1 className='text-3xl'>Какие возможности открывает VIP чартер?</h1>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
          <div className='flex flex-col items-center gap-6'>
            <img src='pages/passenger/c1.png' className='rounded-full border w-40 h-40 object-cover'/>
            <p className='text-center'>
              Корпоративные поездки и командировки
            </p>
          </div>
          <div className='flex flex-col items-center gap-6'>
            <img src='pages/passenger/c2.jpg' className='rounded-full border w-40 h-40 object-cover'/>
            <p className='text-center'>
              Организация мероприятий
            </p>
          </div>
          <div className='flex flex-col items-center gap-6'>
            <img src='pages/passenger/c1.png' className='rounded-full border w-40 h-40 object-cover'/>
            <p className='text-center'>
              Отдых с семьёй или друзьями
            </p>
          </div>
          <div className='flex flex-col items-center gap-6'>
            <img src='pages/passenger/c2.jpg' className='rounded-full border w-40 h-40 object-cover'/>
            <p className='text-center'>
              Срочные перелёты
            </p>
          </div>
        </div>
        <p className='text-gray-200 font-semibold'>
          Мы предлагаем полный спектр услуг по организации чартерных пассажирских перевозок, начиная от подбора оптимального самолёта и планирования маршрута до организации комфортного трансфера и дополнительных услуг на борту. Наши специалисты готовы создать для вас индивидуальное предложение, учитывая все ваши требования и пожелания.
        </p>
      </div>
    </div>
  );
};

export default Steps;
