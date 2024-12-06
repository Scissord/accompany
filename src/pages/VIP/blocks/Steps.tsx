import React from 'react'

type Props = {}

const Steps = (props: Props) => {
  return (
    <div className='min-h-[50vh] text-white bg-brand-300'>
      <div className='py-12 container mx-auto flex flex-col items-center justify-center gap-6 px-6 lg:px-0'>
        <h1 className='text-3xl'>Какие возможности открывает VIP чартер?</h1>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-6'>
          <div className='flex flex-col items-center gap-6'>
            <img src='pages/about/aeroflot.png' className='rounded-full border w-40 h-40'/>
            <p className='text-center'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis nesciunt ut quam non repellat vero inventore doloremque quas blanditiis aliquid illo facere reprehenderit vel provident, recusandae fugiat odit in dolorum.
            </p>
          </div>
          <div className='flex flex-col items-center gap-6'>
            <img src='pages/about/aeroflot.png' className='rounded-full border w-40 h-40'/>
            <p className='text-center'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis nesciunt ut quam non repellat vero inventore doloremque quas blanditiis aliquid illo facere reprehenderit vel provident, recusandae fugiat odit in dolorum.
            </p>
          </div>
          <div className='flex flex-col items-center gap-6'>
            <img src='pages/about/aeroflot.png' className='rounded-full border w-40 h-40'/>
            <p className='text-center'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis nesciunt ut quam non repellat vero inventore doloremque quas blanditiis aliquid illo facere reprehenderit vel provident, recusandae fugiat odit in dolorum.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Steps