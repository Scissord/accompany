import { FC } from "react";
import { Navbar, NavbarMobile, HeaderSettings, HeaderLogo } from "@components";

const Header: FC = () => {
  return (
    <header className="sticky top-0 z-30 lg:relative h-[8vh] lg:h-[40vh] bg-dbg text-white lg:bg-[url('pages/charters/header_bg.png')] lg:bg-cover lg:bg-bottom fijb lg:block">
      <div className="hidden lg:block absolute inset-0 bg-stone-600 bg-opacity-70" />
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
