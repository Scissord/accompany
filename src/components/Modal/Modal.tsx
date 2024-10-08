import { useViewContext } from '@context';
import { FC } from 'react'

export const Modal: FC = () => {
  const context = useViewContext();

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-40 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="relative bg-white w-[70%] h-[80%] rounded-lg shadow-lg p-6 overflow-y-auto z-50">
        <button
          onClick={() => context?.modal.set(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          ✖
        </button>
        <h1 className="text-2xl font-semibold">Заявка</h1>
        <p>*Обязательные поля для заполнения</p>
        <div className='grid grid-cols-3 mt-6'>
          <p className='text-xl font-bold'>Информация о перелете*</p>
          <div className='col-span-2 flex flex-col gap-6 w-full'>
            <div className='flex items-center justify-between gap-4'>
              <input type='text' placeholder='Шымкент' className='w-1/2 border border-stone-700 py-2 px-4'/>
              <input type='text' placeholder='Москва' className='w-1/2 border border-stone-700 py-2 px-4'/>
            </div>
            <div className='flex items-center justify-between gap-4'>
              <input type='text' placeholder='Шымкент' className='w-1/2 border border-stone-700 py-2 px-4'/>
              <input type='text' placeholder='Москва' className='w-1/2 border border-stone-700 py-2 px-4'/>
            </div>

          </div>
        </div>
        <div className='grid grid-cols-3 mt-6'>
          <p className='text-xl font-bold'>Информация о перелете*</p>
          <div className='col-span-2 flex flex-col gap-6 w-full'>
            <div className='flex items-center justify-between gap-4'>
              <input type='text' placeholder='Шымкент' className='w-1/2 border border-stone-700 py-2 px-4'/>
              <input type='text' placeholder='Москва' className='w-1/2 border border-stone-700 py-2 px-4'/>
            </div>
            <div className='flex items-center justify-between gap-4'>
              <input type='text' placeholder='Шымкент' className='w-1/2 border border-stone-700 py-2 px-4'/>
              <input type='text' placeholder='Москва' className='w-1/2 border border-stone-700 py-2 px-4'/>
            </div>

          </div>
        </div>
        <div className='grid grid-cols-3 mt-6'>
          <p className='text-xl font-bold'>Информация о перелете*</p>
          <div className='col-span-2 flex flex-col gap-6 w-full'>
            <div className='flex items-center justify-between gap-4'>
              <input type='text' placeholder='Шымкент' className='w-1/2 border border-stone-700 py-2 px-4'/>
              <input type='text' placeholder='Москва' className='w-1/2 border border-stone-700 py-2 px-4'/>
            </div>
            <div className='flex items-center justify-between gap-4'>
              <input type='text' placeholder='Шымкент' className='w-1/2 border border-stone-700 py-2 px-4'/>
              <input type='text' placeholder='Москва' className='w-1/2 border border-stone-700 py-2 px-4'/>
            </div>

          </div>
        </div>
        <div className='grid grid-cols-3 mt-6'>
          <p className='text-xl font-bold'>Информация о перелете*</p>
          <div className='col-span-2 flex flex-col gap-6 w-full'>
            <div className='flex items-center justify-between gap-4'>
              <input type='text' placeholder='Шымкент' className='w-1/2 border border-stone-700 py-2 px-4'/>
              <input type='text' placeholder='Москва' className='w-1/2 border border-stone-700 py-2 px-4'/>
            </div>
            <div className='flex items-center justify-between gap-4'>
              <input type='text' placeholder='Шымкент' className='w-1/2 border border-stone-700 py-2 px-4'/>
              <input type='text' placeholder='Москва' className='w-1/2 border border-stone-700 py-2 px-4'/>
            </div>

          </div>
        </div>
        <div className='grid grid-cols-3 mt-6'>
          <p className='text-xl font-bold'>Информация о перелете*</p>
          <div className='col-span-2 flex flex-col gap-6 w-full'>
            <div className='flex items-center justify-between gap-4'>
              <input type='text' placeholder='Шымкент' className='w-1/2 border border-stone-700 py-2 px-4'/>
              <input type='text' placeholder='Москва' className='w-1/2 border border-stone-700 py-2 px-4'/>
            </div>
            <div className='flex items-center justify-between gap-4'>
              <input type='text' placeholder='Шымкент' className='w-1/2 border border-stone-700 py-2 px-4'/>
              <input type='text' placeholder='Москва' className='w-1/2 border border-stone-700 py-2 px-4'/>
            </div>

          </div>
        </div>
        <div className='grid grid-cols-3 mt-6'>
          <p className='text-xl font-bold'>Информация о перелете*</p>
          <div className='col-span-2 flex flex-col gap-6 w-full'>
            <div className='flex items-center justify-between gap-4'>
              <input type='text' placeholder='Шымкент' className='w-1/2 border border-stone-700 py-2 px-4'/>
              <input type='text' placeholder='Москва' className='w-1/2 border border-stone-700 py-2 px-4'/>
            </div>
            <div className='flex items-center justify-between gap-4'>
              <input type='text' placeholder='Шымкент' className='w-1/2 border border-stone-700 py-2 px-4'/>
              <input type='text' placeholder='Москва' className='w-1/2 border border-stone-700 py-2 px-4'/>
            </div>

          </div>
        </div>

        <div className='grid grid-cols-3 mt-6'>
          <p className='text-xl font-bold'>Информация о перелете*</p>
          <div className='col-span-2 flex flex-col gap-6 w-full'>
            <div className='flex items-center justify-between gap-4'>
              <input type='text' placeholder='Шымкент' className='w-1/2 border border-stone-700 py-2 px-4'/>
              <input type='text' placeholder='Москва' className='w-1/2 border border-stone-700 py-2 px-4'/>
            </div>
            <div className='flex items-center justify-between gap-4'>
              <input type='text' placeholder='Шымкент' className='w-1/2 border border-stone-700 py-2 px-4'/>
              <input type='text' placeholder='Москва' className='w-1/2 border border-stone-700 py-2 px-4'/>
            </div>

          </div>
        </div>
        <div className='grid grid-cols-3 mt-6'>
          <p className='text-xl font-bold'>Информация о перелете*</p>
          <div className='col-span-2 flex flex-col gap-6 w-full'>
            <div className='flex items-center justify-between gap-4'>
              <input type='text' placeholder='Шымкент' className='w-1/2 border border-stone-700 py-2 px-4'/>
              <input type='text' placeholder='Москва' className='w-1/2 border border-stone-700 py-2 px-4'/>
            </div>
            <div className='flex items-center justify-between gap-4'>
              <input type='text' placeholder='Шымкент' className='w-1/2 border border-stone-700 py-2 px-4'/>
              <input type='text' placeholder='Москва' className='w-1/2 border border-stone-700 py-2 px-4'/>
            </div>

          </div>
        </div>
        <div className='grid grid-cols-3 mt-6'>
          <p className='text-xl font-bold'>Информация о перелете*</p>
          <div className='col-span-2 flex flex-col gap-6 w-full'>
            <div className='flex items-center justify-between gap-4'>
              <input type='text' placeholder='Шымкент' className='w-1/2 border border-stone-700 py-2 px-4'/>
              <input type='text' placeholder='Москва' className='w-1/2 border border-stone-700 py-2 px-4'/>
            </div>
            <div className='flex items-center justify-between gap-4'>
              <input type='text' placeholder='Шымкент' className='w-1/2 border border-stone-700 py-2 px-4'/>
              <input type='text' placeholder='Москва' className='w-1/2 border border-stone-700 py-2 px-4'/>
            </div>

          </div>
        </div>
        <div className='grid grid-cols-3 mt-6'>
          <p className='text-xl font-bold'>Информация о перелете*</p>
          <div className='col-span-2 flex flex-col gap-6 w-full'>
            <div className='flex items-center justify-between gap-4'>
              <input type='text' placeholder='Шымкент' className='w-1/2 border border-stone-700 py-2 px-4'/>
              <input type='text' placeholder='Москва' className='w-1/2 border border-stone-700 py-2 px-4'/>
            </div>
            <div className='flex items-center justify-between gap-4'>
              <input type='text' placeholder='Шымкент' className='w-1/2 border border-stone-700 py-2 px-4'/>
              <input type='text' placeholder='Москва' className='w-1/2 border border-stone-700 py-2 px-4'/>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
