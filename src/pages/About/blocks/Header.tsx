import { FC } from "react";
import { Navbar, NavbarMobile, HeaderSettings, HeaderLogo } from "@components";

const Header: FC = () => {
  return (
    <header className="sticky top-0 z-30 h-[8vh] lg:h-[40vh] bg-dbg text-white lg:relative lg:bg-[url('pages/about/plane.png')] lg:bg-cover lg:bg-bottom fijb lg:block">
      <div className="hidden lg:block absolute inset-0 bg-brand-100 bg-opacity-70" />
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
