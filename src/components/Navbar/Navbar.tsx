import { FC, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const css = {
  link: "cursor-pointer hover:text-hvr transition duration-300 ease-in-out",
  dropMenuLink: "transition duration-300 ease-in-out cursor-pointer hover:bg-gray-300 hover:rounded px-2 py-2",
};

export const Navbar: FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [hoverAbout, setHoverAbout] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setHoverAbout(false);
    }
  };

  const handleClickHoverAbout = (url: string) => {
    navigate(url);
    setHoverAbout(false);
  };

  useEffect(() => {
    if (hoverAbout) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [hoverAbout]);

  return (
    <nav className="relative flex items-center justify-center gap-12 z-30 h-full w-[70%]">
      <div className="relative">
        <p
          className={css.link}
          onClick={() => navigate("/about")}
          onMouseEnter={() => setHoverAbout(true)}
        >
          {t('header_about')}
        </p>
        {hoverAbout && (
          <div
            ref={dropdownRef}
            className="absolute top-full left-1/2 transform -translate-x-1/2 bg-brand-100 flex flex-col gap-3 text-white rounded min-w-[250px] py-3 px-2 bg-opacity-50"
            onMouseLeave={() => setHoverAbout(false)}
          >
            <p
              className={css.dropMenuLink}
              onClick={() => handleClickHoverAbout("/air-guide")}
            >
              {t('header_about_guide')}
            </p>
            <p
              className={css.dropMenuLink}
              onClick={() => handleClickHoverAbout("/news")}
            >
              {t('header_about_news')}
            </p>
            <p
              className={css.dropMenuLink}
              onClick={() => handleClickHoverAbout("/faq")}
            >
              {t('header_about_safety')}
            </p>
          </div>
        )}
      </div>
      <p className={css.link} onClick={() => navigate("/passenger")}>
        {t('header_passenger')}
      </p>
      <p className={css.link} onClick={() => navigate("/cargo")}>
        {t('header_cargo')}
      </p>
      <p className={css.link} onClick={() => navigate("/vip")}>
        {t('header_vip')}
      </p>
      <p className={css.link} onClick={() => navigate("/contacts")}>
        {t('header_contacts')}
      </p>
    </nav>
  );
};
