import type { IRoute } from '@types';
import Home from '@pages/Home';
import About from '@pages/About';
import AirGuide from '@pages/AirGuide';
import Faq from '@pages/Faq';
import VIP from '@pages/VIP';
import Cargo from '@pages/Cargo';
import Contacts from '@pages/Contacts';
import Passenger from '@pages/Passenger';

const AppRoutes: IRoute[] = [
  {
		path: "/accompany",
		element: <Home/>,
		title: "Главная",
	},
  {
		path: "/accompany/about",
		element: <About/>,
		title: "О нас",
	},
  {
		path: "/accompany/air-guide",
		element: <AirGuide/>,
		title: "Авиагид",
	},
  {
		path: "/accompany/faq",
		element: <Faq/>,
		title: "Часто задаваемые вопросы",
	},
  {
		path: "/accompany/passenger",
		element: <Passenger/>,
		title: "Пассажирские чартеры",
	},
  {
		path: "/accompany/cargo",
		element: <Cargo/>,
		title: "Грузовые чартеры",
	},
  {
		path: "/accompany/vip",
		element: <VIP/>,
		title: "VIP чартеры",
	},
  {
    path: "/accompany/contacts",
		element: <Contacts/>,
		title: "Контакты",
  },
];

export default AppRoutes;
