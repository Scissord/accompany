import type { IRoute } from '@types';
import Home from '@pages/Home';
import About from '@pages/About';
import Charters from '@pages/Charters';
import Contacts from '@pages/Contacts';

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
		path: "/charters",
		element: <Charters/>,
		title: "Авиагид",
	},
  {
    path: "/contacts",
		element: <Contacts/>,
		title: "Контакты",
  }
];

export default AppRoutes;
