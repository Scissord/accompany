import { FC } from "react";
import { Navbar, NavbarMobile, HeaderSettings, HeaderLogo } from "@components";

const Header: FC = () => {
  return (
    <header className="sticky top-0 z-30 h-[8vh] lg:h-[12vh] bg-dbg text-white fijc">
      <div className="container mx-auto hidden lg:fijb">
        <HeaderLogo/>
        <Navbar/>
        <HeaderSettings/>
      </div>
      <NavbarMobile/>
    </header>
  );
};

export default Header;
