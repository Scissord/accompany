import { FC } from 'react';

const WhyUs: FC = () => {
  return (
    <section className='relative bg-gray-100'>
      <div className="container mx-auto py-20 flex flex-col gap-12">
        <p className="text-3xl text-brand-300 text-center lg:text-left">Почему мы?</p>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0'>
          <div className='flex flex-col items-start gap-4'>
            <img src='icons/timer.svg' className='h-24' alt="timer"/>
            <p className='text-2xl'>Срочные вылеты</p>
            <p className='text-gray-600'>
              Мы гарантируем организацию<br/>
              вылета всего в течении 4 часов!
            </p>
          </div>
          <div className='flex flex-col items-start gap-4'>
            <img src='icons/badge-dollar.svg' className='h-24' alt="dollar"/>
            <p className='text-2xl'>Срочные вылеты</p>
            <p className='text-gray-600'>
              Мы гарантируем организацию<br/>
              вылета всего в течении 4 часов!
            </p>
          </div>
          <div className='flex flex-col items-start gap-4'>
            <img src='icons/award.svg' className='h-24' alt="award"/>
            <p className='text-2xl'>Срочные вылеты</p>
            <p className='text-gray-600'>
              Мы гарантируем организацию<br/>
              вылета всего в течении 4 часов!
            </p>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0'>
          <div className='flex flex-col items-start gap-4'>
            <img src='icons/certificate-check.svg' className='h-24' alt="check"/>
            <p className='text-2xl'>Срочные вылеты</p>
            <p className='text-gray-600'>
              Мы гарантируем организацию<br/>
              вылета всего в течении 4 часов!
            </p>
          </div>
          <div className='flex flex-col items-start gap-4'>
            <img src='icons/compass.svg' className='h-24' alt="compass"/>
            <p className='text-2xl'>Срочные вылеты</p>
            <p className='text-gray-600'>
              Мы гарантируем организацию<br/>
              вылета всего в течении 4 часов!
            </p>
          </div>
          <div className='flex flex-col items-start gap-4'>
            <img src='icons/heart.svg' className='h-24' alt="heart"/>
            <p className='text-2xl'>Срочные вылеты</p>
            <p className='text-gray-600'>
              Мы гарантируем организацию<br/>
              вылета всего в течении 4 часов!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs;
