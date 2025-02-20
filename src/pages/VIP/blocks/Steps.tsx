const Steps = () => {
  return (
    <div className='min-h-[50vh] text-white bg-brand-300'>
      <div className='py-12 container mx-auto flex flex-col items-center justify-center gap-6 px-6 lg:px-0'>
        <h1 className='text-3xl'>Какие возможности открывает VIP чартер?</h1>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-6'>
          <div className='flex flex-col items-center gap-6'>
            <img src='pages/vip/ava1.jpg' className='object-cover bg-center rounded-full border w-40 h-40'/>
            <p className='text-center'>
              эффективное использование времени. Проведение встреч и переговоров в приватной обстановке прямо на борту.
            </p>
          </div>
          <div className='flex flex-col items-center gap-6'>
            <img src='pages/vip/ava2.jpg' className='rounded-full border w-40 h-40 object-cover bg-center'/>
            <p className='text-center'>
              путешествия с максимальным комфортом для всей семьи или друзей. Приватность и высокий уровень сервиса на каждом этапе.
            </p>
          </div>
          <div className='flex flex-col items-center gap-6'>
            <img src='pages/vip/ava3.jpg' className='rounded-full border w-40 h-40 object-cover bg-center'/>
            <p className='text-center'>
              путешествуйте без усталости и напряжения, даже если полёт займёт несколько часов.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Steps