import { FC, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const css = {
  link: "cursor-pointer",
};

export const Navbar: FC = () => {
  const navigate = useNavigate();
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
    <nav className="relative flex items-center gap-12 z-30">
      <p
        className={css.link}
        onClick={() => navigate("/accompany/about")}
        onMouseEnter={() => setHoverAbout(true)}
      >
        О компании
      </p>
      {hoverAbout && (
        <div
          ref={dropdownRef}
          className="absolute top-6 left-0 bg-white flex flex-col gap-6 text-black px-2 py-4 rounded"
        >
          <p
            className={css.link}
            onClick={() => navigate("/accompany/charters")}
          >
            Гид по самолетам
          </p>
          <p
            className={css.link}
            onClick={() => navigate("/accompany/charters")}
          >
            Новости
          </p>
          <p
            className={css.link}
            onClick={() => navigate("/accompany/charters")}
          >
            Безопасность
          </p>
        </div>
      )}
      <p className={css.link} onClick={() => navigate("/accompany/charters")}>
        Пассажирский чартер
      </p>
      <p className={css.link} onClick={() => navigate("/accompany/charters")}>
        Грузовой чартер
      </p>
      <p className={css.link} onClick={() => navigate("/accompany/charters")}>
        VIP-чартер
      </p>
      <p className={css.link} onClick={() => navigate("/accompany/contacts")}>
        Контакты
      </p>
    </nav>
  );
};
