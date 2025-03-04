import type { IRoute } from '@types';
import Home from '@pages/Home';
import About from '@pages/About';
import AirGuide from '@pages/AirGuide';
import Faq from '@pages/Faq';
import VIP from '@pages/VIP';
import Cargo from '@pages/Cargo';
import Contacts from '@pages/Contacts';
import Passenger from '@pages/Passenger';
import News from '@pages/News';

const AppRoutes: IRoute[] = [
  {
		path: "/",
		element: <Home/>,
		title: "Главная",
	},
  {
		path: "/about",
		element: <About/>,
		title: "О нас",
	},
  {
		path: "/air-guide",
		element: <AirGuide/>,
		title: "Авиагид",
	},
  {
		path: "/faq",
		element: <Faq/>,
		title: "Безопасность",
	},
  {
		path: "/passenger",
		element: <Passenger/>,
		title: "Пассажирские чартеры",
	},
  {
		path: "/cargo",
		element: <Cargo/>,
		title: "Грузовые чартеры",
	},
  {
		path: "/vip",
		element: <VIP/>,
		title: "VIP чартеры",
	},
  {
    path: "/contacts",
		element: <Contacts/>,
		title: "Контакты",
  },
  {
    path: "/news",
		element: <News/>,
		title: "Новости",
  },
];

export default AppRoutes;
