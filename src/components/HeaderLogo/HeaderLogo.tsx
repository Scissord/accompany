import { FC } from 'react'
import { useNavigate } from 'react-router-dom';

export const HeaderLogo: FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className='z-30 h-full fi w-[15%]'
    >
      <img
        src="logo.png"
        className="w-[60%] cursor-pointer"
        alt="logo"
        onClick={() => navigate('/')}
      />
    </div>
  );
};
