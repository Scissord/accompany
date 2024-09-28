import { FC } from 'react';

const css = {
  wrapper: "flex flex-col items-center justify-center gap-3",
  text: "text-sm text-center"
}

const Steps: FC = () => {
  return (
    <section className="relative bg-white">
      <div className='container mx-auto flex flex-col items-center py-12'>
        <p className="text-3xl text-brand-300 mb-6">Этапы организации аренды</p>
        <p className='text-gray-600'>
          Чтобы узнать стоимость аренды коммерческого самолета, свяжитесь с нашим
          менеджером. Стоимость зависит от <br/>
          продолжительности рейса, сложности маршрута, типа самолета и года выпуска,
          а также от аэропортных сборов.
        </p>
        <div className='flex items-start justify-center gap-24 mt-12'>
          <div className={css.wrapper}>
            <img src="icons/portrait-user.svg" className='h-28'/>
            <p className={css.text}>Подача заявки<br/> на рейс</p>
          </div>
          <div className={css.wrapper}>
            <img src="icons/user-check.svg" className='h-28'/>
            <p className={css.text}>Согласование<br/> всех деталей</p>
          </div>
          <div className={css.wrapper}>
            <img src="icons/user-pen.svg" className='h-28'/>
            <p className={css.text}>Подготовка<br/> коммерческого<br/> предложения</p>
          </div>
          <div className={css.wrapper}>
            <img src="icons/user-shield.svg" className='h-28'/>
            <p className={css.text}>Оформление договора<br/> и произведение<br/> оплаты</p>
          </div>
          <div className={css.wrapper}>
            <img src="icons/user-vip.svg" className='h-24 rotate-45'/>
            <p className={css.text + " mt-4"}>Вылет из<br/> VIP-терминала.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Steps;
