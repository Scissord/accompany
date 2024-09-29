import type { IRoute } from '@types';
import Home from '@pages/Home';
import About from '@pages/About';
import Charters from '@pages/Charters';
import Contacts from '@pages/Contacts';

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
		path: "/accompany/charters",
		element: <Charters/>,
		title: "Авиагид",
	},
  {
    path: "/accompany/contacts",
		element: <Contacts/>,
		title: "Контакты",
  }
];

export default AppRoutes;
