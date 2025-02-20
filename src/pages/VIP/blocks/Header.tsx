import { FC } from "react";
import { Navbar, NavbarMobile, HeaderSettings, HeaderLogo } from "@components";
import './header.css';

const Header: FC = () => {
  return (
    <header className="header_vip">
      <div className="hidden lg:block absolute inset-0 bg-brand-100 bg-opacity-70" />
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
