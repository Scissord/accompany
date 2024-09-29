import { FC } from 'react'
import { useNavigate } from 'react-router-dom';

export const HeaderLogo: FC = () => {
  const navigate = useNavigate();

  return (
    <img
      onClick={() => navigate('/accompany/')}
      src="logo.png"
      className="w-[10%] cursor-pointer z-30"
      alt="logo"
    />
  );
};
