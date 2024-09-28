import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Header/Navbar";
import Settings from "./Header/Settings";
import Mobile from "./Header/Mobile";

const Header: FC = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-30 h-[8vh] lg:h-[12vh] bg-dbg text-white fijc">
      <div className="container mx-auto hidden lg:fijb">
        <img
          onClick={() => navigate('/')}
          src="logo.png"
          className="w-[10%] cursor-pointer"
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
