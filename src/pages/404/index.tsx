import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: FC = () => {
  const navigate = useNavigate();

  return (
    <div className='relative h-screen flex items-center justify-center'>
      <button
        onClick={() => navigate('/accompany/')}
        className='absolute top-5 left-5 bg-brand-200 text-white px-2 py-1 rounded'
      >
        На главную
      </button>
      <img
        src="/pages/notfound/notfound.jpg"
        alt="404"
        className='w-[50%]'
      />
    </div>
  )
}

export default NotFound;
