import { FC, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const css = {
  link: "cursor-pointer",
  dropMenuLink: "cursor-pointer hover:bg-gray-300 hover:rounded px-2 py-2",
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
      <p
        className={css.link}
        onClick={() => navigate("/accompany/about")}
        onMouseEnter={() => setHoverAbout(true)}
      >
        {t('header_about')}
      </p>
      {hoverAbout && (
        <div
          ref={dropdownRef}
          className="absolute top-12 left-6 bg-white flex flex-col text-black rounded"
          onMouseLeave={() => setHoverAbout(false)}
        >
          <p
            className={css.dropMenuLink}
            onClick={() => navigate("/accompany/charters")}
          >
            {t('header_about_guide')}
          </p>
          <p
            className={css.dropMenuLink}
            onClick={() => navigate("/accompany/charters")}
          >
            {t('header_about_news')}
          </p>
          <p
            className={css.dropMenuLink}
            onClick={() => navigate("/accompany/charters")}
          >
            {t('header_about_safety')}
          </p>
        </div>
      )}
      <p className={css.link} onClick={() => navigate("/accompany/charters")}>
        {t('header_passenger')}
      </p>
      <p className={css.link} onClick={() => navigate("/accompany/charters")}>
        {t('header_cargo')}
      </p>
      <p className={css.link} onClick={() => navigate("/accompany/charters")}>
        {t('header_vip')}
      </p>
      <p className={css.link} onClick={() => navigate("/accompany/contacts")}>
        {t('header_contacts')}
      </p>
    </nav>
  );
};
