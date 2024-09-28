import { FC } from 'react'
import { useNavigate } from 'react-router-dom';

const css = {
  link: 'cursor-pointer',
};

const Navbar: FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center space-x-12">
      <p className={css.link} onClick={() => navigate("/about")}>О компании</p>
      <p className={css.link} onClick={() => navigate("/charters")}>Пассажирский чартер</p>
      <p className={css.link} onClick={() => navigate("/charters")}>Грузовой чартер</p>
      <p className={css.link} onClick={() => navigate("/charters")}>VIP-чартер</p>
      <p className={css.link} onClick={() => navigate("/contacts")}>Контакты</p>
    </nav>
  );
};

export default Navbar;
