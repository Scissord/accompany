import { FC } from 'react'

const Map: FC = () => {
  return (
    <div className='h-[50vh]'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5899.8341427452415!2d69.60236249271243!3d42.32296750660268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skz!4v1727591380734!5m2!1sru!2skz" className="w-full h-full" loading="lazy"></iframe>
    </div>
  );
};

export default Map;
