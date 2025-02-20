const Title = () => {
  return (
    <div className='h-full lg:h-[50vh] bg-dbg text-white'>
      <div className='container mx-auto flex flex-col justify-center gap-8 h-full p-6 lg:px-0'>
        <h1 className='font-bold text-3xl'>
          Грузовой чартер
        </h1>
        <p className="text-xl">
          Если вам срочно нужно доставить груз в удаленный пункт, расположенный на другом конце света, мы готовы предложить услуги авиаперевозки, в любую точку мира.
        </p>
        <p className="text-xl">
          Мы организуем как грузовые авиаперевозки по Казахстану, так и международные перелёты, обеспечивая быструю и надёжную доставку.
        </p>
      </div>
    </div>
  )
}

export default Title