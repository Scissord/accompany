import { FC, useState } from 'react';
import { motion } from "framer-motion";


const Mobile: FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const handleMenuClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="container mx-auto fijb lg:hidden px-6">
        <img src="logo.png" className="w-[24%]" alt="logo"/>
        <div className="cursor-pointer" onClick={handleMenuClick}>
          <IconThMenuOutline/>
        </div>
      </div>
      {isSidebarOpen && (
        <>
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0" }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-[70%] h-full bg-white z-50 p-5 text-black"
          >
            <div className="text-lg font-bold">Меню</div>
            <nav className="space-y-4 mt-8">
              <a href="#" className="block">О компании</a>
              <a href="#" className="block">Пассажирский чартер</a>
              <a href="#" className="block">Грузовой чартер</a>
              <a href="#" className="block">VIP-чартер</a>
              <a href="#" className="block">Контакты</a>
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleMenuClick}
            className="fixed top-0 right-0 w-[30%] h-full bg-black z-40"
          />
        </>
      )}
    </>
  );
};

export default Mobile;

function IconThMenuOutline() {
  return (
    <svg
      baseProfile="tiny"
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1.5em"
      width="1.5em"
    >
      <path d="M19 18c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1h14m0-2H5c-1.654 0-3 1.346-3 3s1.346 3 3 3h14c1.654 0 3-1.346 3-3s-1.346-3-3-3zm0-5c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1h14m0-2H5c-1.654 0-3 1.346-3 3s1.346 3 3 3h14c1.654 0 3-1.346 3-3s-1.346-3-3-3zm0-5c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1h14m0-2H5C3.346 2 2 3.346 2 5s1.346 3 3 3h14c1.654 0 3-1.346 3-3s-1.346-3-3-3z" />
    </svg>
  );
};