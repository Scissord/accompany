import { useState } from "react"

const Blocks = () => {
  const [news, setNews] = useState([
    {
      id: 1,
      title: 'К строительству трех аэропортов приступили в Казахстане',
      description: 'По поручению Главы государства для развития внутреннего туризма и пассажирских авиаперевозок в Казахстане приступили к строительству трех новых аэропортов в курортных зонах Зайсан, Катон-Карагай и Кендирли.',
      source: 'https://primeminister.kz/ru/news/k-stroitelstvu-trekh-aeroportov-pristupili-v-kazakhstane-29599',
      path: 'pages/news/n1.jpg'
    },
    {
      id: 2,
      title: 'Авиакомпании вводят ограничения на перевозку популярных гаджетов',
      description: 'Портативные аккумуляторы (пауэрбанки) и электронные сигареты будут запрещены к провозу в ручной клади на верхней полке самолетов с 1 марта в Южной Корее, передает Avianews со ссылкой на Aviapages.',
      source: 'https://avianews.kz/grazhdanskaya-aviacziya/aviakompanii-vvodyat-ogranicheniya-na-perevozku-populyarnyh-gadzhetov/',
      path: 'pages/news/n2.jpg'
    },
    {
      id: 3,
      title: 'Казахстан первым в ЦА принял план по сокращению выбросов CO2 в авиации',
      description: 'Казахстан первым в Центральной Азии поддержал инициативу ИКАО, приняв Национальный план по снижению выбросов СО2 в окружающую среду, передает Avianews со ссылкой на пресс-службу КГА МТ РК.',
      source: 'https://avianews.kz/grazhdanskaya-aviacziya/aviakompanii-vvodyat-ogranicheniya-na-perevozku-populyarnyh-gadzhetov/',
      path: 'pages/news/n3.jpeg'
    }
  ]);

  return (
    <div className='min-h-[50vh]'>
      <div className='container mx-auto py-12 flex flex-col gap-3 px-6 lg:px-0'>
        {news.map((item) => (
          <div key={item.id} className="h-full lg:h-[50vh] flex flex-col lg:flex-row items-center rounded-tr-2xl rounded-br-2xl bg-gray-200">
            <div className="h-full w-full lg:w-1/3">
              <img src={item.path} className="w-full h-full object-cover" alt={item.path}/>
            </div>
            <div className="h-full w-full lg:w-2/3 flex flex-col justify-center gap-5 p-6">
              <h1 className="font-bold text-3xl">{item.title}</h1>
              <p className="text-xl">{item.description}</p>
                <p className="text-xl">
                  Первоисточник:
                  <a href={item.source} target="_blank" className="ml-2 text-lg text-blue-500 cursor-pointer hover:underline">
                    {item.source}
                  </a>
                </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blocks