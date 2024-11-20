import { FC, useState } from 'react'
import { useViewContext } from '@context';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "./checkbox.css";

export const Modal: FC = () => {
  const context = useViewContext();
  const [userInfo, setUserInfo] = useState({
    from: localStorage.getItem("from") || "",
    to: localStorage.getItem("to") || "",
    startDate: localStorage.getItem("startDate")
      ? new Date(localStorage.getItem("startDate") as string)
      : new Date(),
    endDate: localStorage.getItem("endDate")
      ? new Date(localStorage.getItem("endDate") as string)
      : new Date(),
    passengers: localStorage.getItem("passengers") || "",
    customer: localStorage.getItem("customer") || "",
    isTeam: localStorage.getItem('isTeam') === 'true',
    face: localStorage.getItem("face") || "",
    email: localStorage.getItem("email") || "",
    phone: localStorage.getItem("phone") || "",
    nutrition: localStorage.getItem('nutrition') || "",
    isBusiness: localStorage.getItem('isBusiness') === 'true',
    isSmall: localStorage.getItem('isSmall') === 'true',
    isUniqueDesk: localStorage.getItem('isUniqueDesk') === 'true',
    isAnimals: localStorage.getItem('isAnimals') === 'true',
    isPrepared: localStorage.getItem('isPrepared') === 'true',
    additionallyInfo: localStorage.getItem('additionallyInfo') || ""
  });

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-40 bg-black bg-opacity-50 flex items-center justify-center">
      <div
        className={`
          relative w-[70%] h-[80%] rounded-lg shadow-lg p-6 z-50
          ${context?.theme.get === 'dark' ? 'bg-dbg text-white' : 'bg-white text-black'}
        `}>
        <button
          onClick={() => context?.modal.set(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          ✖
        </button>
        <h1 className="text-2xl font-semibold">Заявка</h1>
        <p>*Обязательные поля для заполнения</p>
        <div
          className="mt-6 mb-6 overflow-y-auto"
          style={{ maxHeight: "calc(100% - 60px)" }}
        >
          <div className='grid grid-cols-3 gap-6'>
            <p className='text-xl font-bold'>Информация о перелете*</p>
            <div className='col-span-2 flex flex-col gap-6 w-full'>
              <div className='flex items-center justify-between gap-4'>
                <input
                  type='text'
                  placeholder='Шымкент'
                  value={userInfo.from}
                  onChange={(e) => {
                    localStorage.setItem('from', e.target.value);
                    setUserInfo({ ...userInfo, from: e.target.value })
                  }}
                  className={`
                    w-1/2 border py-2 px-4
                    ${context?.theme.get === 'dark' ? 'border-white' : 'border-dbg'}
                  `}
                />
                <input
                  type='text'
                  placeholder='Москва'
                  value={userInfo.to}
                  onChange={(e) => {
                    localStorage.setItem('to', e.target.value);
                    setUserInfo({ ...userInfo, to: e.target.value })
                  }}
                  className={`
                    w-1/2 border py-2 px-4
                    ${context?.theme.get === 'dark' ? 'border-white' : 'border-dbg'}
                  `}
                />
              </div>
              <div className='flex items-center justify-between w-full gap-4'>
                <div className='relative w-1/2'>
                  <DatePicker
                    selected={userInfo.startDate}
                    onChange={(date) => {
                      if(date) {
                        localStorage.setItem('startDate', date.toISOString());
                        setUserInfo({ ...userInfo, startDate: date })
                      }
                    }}
                    className={`
                      w-full border py-2 px-4
                      ${context?.theme.get === 'dark' ? 'border-white' : 'border-dbg'}
                    `}
                    wrapperClassName='w-full'
                    dateFormat="dd.MM.yyyy h:mm aa"
                    timeInputLabel="Time:"
                    showTimeInput
                  />
                  <img
                    className="w-4 absolute bottom-3 right-3"
                    src="icons/calendar-dark.svg"
                    alt="calendar.svg"
                  />
                </div>
                <div className='relative w-1/2'>
                  <DatePicker
                    selected={userInfo.endDate}
                    onChange={(date) => {
                      if(date) {
                        localStorage.setItem('endDate', date.toISOString());
                        setUserInfo({ ...userInfo, endDate: date })
                      }
                    }}
                    className={`
                      w-full border py-2 px-4
                      ${context?.theme.get === 'dark' ? 'border-white' : 'border-dbg'}
                    `}
                    wrapperClassName='w-full'
                    dateFormat="dd.MM.yyyy h:mm aa"
                    timeInputLabel="Time:"
                    showTimeInput
                  />
                  <img
                    className="w-4 absolute bottom-3 right-3"
                    src="icons/calendar-dark.svg"
                    alt="calendar.svg"
                  />
                </div>
              </div>
            </div>
            <p className='text-xl font-bold col-span-full'>Контактная информация</p>
            <p className='text-xl font-bold'>Заказчик*</p>
            <div className='col-span-2 flex flex-col gap-6 w-full'>
              <div className='flex items-center justify-between gap-4'>
                <input
                  type='text'
                  placeholder='...'
                  value={userInfo.customer}
                  onChange={(e) => {
                    localStorage.setItem('customer', e.target.value);
                    setUserInfo({ ...userInfo, customer: e.target.value })
                  }}
                  className={`
                    w-full border py-2 px-4
                    ${context?.theme.get === 'dark' ? 'border-white' : 'border-dbg'}
                  `}
                />
              </div>
              <div className='flex items-center w-full gap-3'>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={userInfo.isTeam}
                    onChange={(e) => {
                      localStorage.setItem('isTeam', e.target.checked.toString());
                      setUserInfo({ ...userInfo, isTeam: e.target.checked })
                    }}
                    className="appearance-none w-6 h-6 border border-gray-300 rounded-full checked:bg-brand-100 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 relative"
                  />
                </label>
                <p>Перелет команды спортивного клуба</p>
              </div>
            </div>
            <p className='text-xl font-bold'>Контактное лицо*</p>
            <div className='col-span-2 flex flex-col gap-6 w-full'>
              <input
                type='text'
                placeholder='...'
                value={userInfo.face}
                onChange={(e) => {
                  localStorage.setItem('face', e.target.value);
                  setUserInfo({ ...userInfo, face: e.target.value })
                }}
                className={`
                  w-full border py-2 px-4
                  ${context?.theme.get === 'dark' ? 'border-white' : 'border-dbg'}
                `}
              />
            </div>
            <p className='text-xl font-bold'>Email*</p>
            <div className='col-span-2 flex flex-col gap-6 w-full'>
              <input
                type='text'
                placeholder='...'
                value={userInfo.email}
                onChange={(e) => {
                  localStorage.setItem('email', e.target.value);
                  setUserInfo({ ...userInfo, email: e.target.value })
                }}
                className={`
                  w-full border py-2 px-4
                  ${context?.theme.get === 'dark' ? 'border-white' : 'border-dbg'}
                `}
              />
            </div>
            <p className='text-xl font-bold'>Телефон*</p>
            <div className='col-span-2 flex flex-col gap-6 w-full'>
              <input
                type='text'
                placeholder='...'
                value={userInfo.phone}
                onChange={(e) => {
                  localStorage.setItem('phone', e.target.value);
                  setUserInfo({ ...userInfo, phone: e.target.value })
                }}
                className={`
                  w-full border py-2 px-4
                  ${context?.theme.get === 'dark' ? 'border-white' : 'border-dbg'}
                `}
              />
            </div>
            <p className='text-xl font-bold col-span-full'>Дополнительные услуги</p>
            <p className='text-xl font-bold'>Питание*</p>
            <div className="col-span-2 flex flex-col gap-6 w-full">
              {['Не требуется ', 'Бизнес', 'Бизнес+Эконом', 'Специальное', 'Эконом', 'Другое'].map((option, index) => (
                <label key={index} className="inline-flex items-center gap-2">
                  <input
                    type="radio"
                    name="optionGroup"
                    value={option}
                    checked={userInfo.nutrition === option}
                    onChange={(e) => {
                      localStorage.setItem('nutrition', e.target.value);
                      setUserInfo({ ...userInfo, nutrition: e.target.value });
                    }}
                    className="appearance-none w-6 h-6 border border-gray-300 rounded-full checked:bg-brand-100 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 relative"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
            <p className='text-xl font-bold'>Дополнительно*</p>
            <div className='col-span-2 flex flex-col gap-6 w-full'>
              <div className='flex items-center w-full gap-3'>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={userInfo.isBusiness}
                    onChange={(e) => {
                      localStorage.setItem('isBusiness', e.target.checked.toString());
                      setUserInfo({ ...userInfo, isBusiness: e.target.checked })
                    }}
                    className="appearance-none w-6 h-6 border border-gray-300 rounded-full checked:bg-brand-100 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 relative"
                  />
                </label>
                <p>Бизнес-щал</p>
              </div>
              <div className='flex items-center w-full gap-3'>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={userInfo.isSmall}
                    onChange={(e) => {
                      localStorage.setItem('isSmall', e.target.checked.toString());
                      setUserInfo({ ...userInfo, isSmall: e.target.checked })
                    }}
                    className="appearance-none w-6 h-6 border border-gray-300 rounded-full checked:bg-brand-100 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 relative"
                  />
                </label>
                <p>Негабаритный багаж</p>
              </div>
              <div className='flex items-center w-full gap-3'>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={userInfo.isUniqueDesk}
                    onChange={(e) => {
                      localStorage.setItem('isUniqueDesk', e.target.checked.toString());
                      setUserInfo({ ...userInfo, isUniqueDesk: e.target.checked })
                    }}
                    className="appearance-none w-6 h-6 border border-gray-300 rounded-full checked:bg-brand-100 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 relative"
                  />
                </label>
                <p>Отдельная стойка регистрации</p>
              </div>
              <div className='flex items-center w-full gap-3'>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={userInfo.isAnimals}
                    onChange={(e) => {
                      localStorage.setItem('isAnimals', e.target.checked.toString());
                      setUserInfo({ ...userInfo, isAnimals: e.target.checked })
                    }}
                    className="appearance-none w-6 h-6 border border-gray-300 rounded-full checked:bg-brand-100 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 relative"
                  />
                </label>
                <p>Поездка с животными</p>
              </div>
            </div>
            <p className='text-xl font-bold'>Обработка персональных данных*</p>
            <div className='col-span-2 flex flex-col gap-6 w-full'>
              <div className='flex items-center w-full gap-3'>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={userInfo.isPrepared}
                    onChange={(e) => {
                      localStorage.setItem('isPrepared', e.target.checked.toString());
                      setUserInfo({ ...userInfo, isPrepared: e.target.checked })
                    }}
                    className="appearance-none w-6 h-6 border border-gray-300 rounded-full checked:bg-brand-100 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-300 relative"
                  />
                </label>
                <p>Я ознакомился с Политикой конфиденциальности и даю согласие на обработку данных</p>
              </div>
            </div>
            <p className='text-xl font-bold'>Дополнительная информация</p>
            <div className='col-span-2 flex flex-col gap-6 w-full'>
              <textarea
                value={userInfo.additionallyInfo}
                onChange={(e) => {
                  localStorage.setItem('additionallyInfo', e.target.value);
                  setUserInfo({ ...userInfo, additionallyInfo: e.target.value })
                }}
                placeholder='...'
                className={`
                  border py-2 px-4
                  ${context?.theme.get === 'dark' ? 'border-white' : 'border-dbg'}
                `}
              >

              </textarea>
            </div>
            <button className="w-3/4 h-14 text-sm bg-brand-100 whitespace-nowrap px-10 flex items-center justify-center font-semibold text-white">
              Оставить заявку
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
