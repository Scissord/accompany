import { FC } from 'react';

const Title: FC = () => {
  return (
    <div className='h-[40vh] lg:min-h-[50vh] bg-dbg text-white'>
      <div className='container mx-auto flex flex-col gap-6 items-start justify-center h-full px-6 lg:px-0'>
        <h1 className='font-bold text-3xl'>
          Чартерные пассажирские перевозки
        </h1>
        <p className='font-semibold'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed ipsum sunt excepturi obcaecati quo nesciunt
           quas corporis modi voluptatem ea, quia dolorem amet blanditiis alias quidem perferendis? Aliquam,
           quisquam earum!
        </p>
      </div>
    </div>
  )
}

export default Title