import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Header/Navbar";
import Settings from "./Header/Settings";
import Mobile from "./Header/Mobile";

const Header: FC = () => {
  const navigate = useNavigate();

  return (
    <header className="h-[85vh] lg:h-[40vh] relative lg:bg-[url('pages/charters/header_bg.png')] lg:bg-cover lg:bg-bottom text-white">
      <div className="absolute inset-0 bg-stone-600 bg-opacity-70" />
      <div className="container mx-auto hidden lg:fijb pt-6">
        <img
          onClick={() => navigate('/')}
          src="logo.png"
          className="w-[10%] cursor-pointer z-30"
          alt="logo"
        />
        <Navbar/>
        <Settings/>
      </div>
      <Mobile/>
    </header>
  );
};

export default Header;
