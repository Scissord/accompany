import { FC } from "react";
import { Navbar, NavbarMobile, HeaderSettings, HeaderLogo } from "@components";

const Header: FC = () => {
  return (
    <header className="sticky top-0 z-30 h-[8vh] bg-dbg text-white fijc">
      <div className="h-[8vh] container mx-auto hidden lg:fijb">
        <HeaderLogo />
        <Navbar />
        <HeaderSettings />
      </div>
      <NavbarMobile />
    </header>
  );
};

export default Header;
