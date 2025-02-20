import { FC } from "react";
import { Navbar, NavbarMobile, HeaderSettings, HeaderLogo } from "@components";

const Header: FC = () => {
  return (
    <header className="sticky top-0 z-30 h-[10vh] bg-dbg text-white fijc">
      <div className="h-[10vh] container mx-auto hidden lg:fijb">
        <HeaderLogo />
        <Navbar />
        <HeaderSettings />
      </div>
      <NavbarMobile />
    </header>
  );
};

export default Header;
