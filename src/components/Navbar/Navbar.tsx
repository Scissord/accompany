import { FC } from 'react'
import { useNavigate } from 'react-router-dom';

const css = {
  link: 'cursor-pointer',
};

export const Navbar: FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center space-x-12 z-30">
      <p className={css.link} onClick={() => navigate("/accompany/about")}>О компании</p>
      <p className={css.link} onClick={() => navigate("/accompany/charters")}>Пассажирский чартер</p>
      <p className={css.link} onClick={() => navigate("/accompany/charters")}>Грузовой чартер</p>
      <p className={css.link} onClick={() => navigate("/accompany/charters")}>VIP-чартер</p>
      <p className={css.link} onClick={() => navigate("/accompany/contacts")}>Контакты</p>
    </nav>
  );
};
