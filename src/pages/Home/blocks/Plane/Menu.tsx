import { FC, useState, useMemo } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { ru } from 'date-fns/locale/ru';
import MenuTop from "./MenuTop";
import Wrapper from "./Wrapper";
import "react-datepicker/dist/react-datepicker.css";
import "./input.css";
import "./select.css";
import { useViewContext } from "@context";
import { useTranslation } from "react-i18next";
import airportsData from './airports.json';
import { debounce } from "lodash";
registerLocale('ru', ru);

const css = {
  container: `
    container bg-brand-300
    rounded-xl pt-4 pb-8 px-6 hidden lg:block
    z-20 absolute bottom-[-80px] left-1/2
    -translate-x-1/2 border-8 border-white
  `,
  button: `
    h-14 text-sm bg-brand-100 whitespace-nowrap
    px-6 flex items-center justify-center
    font-semibold hover:bg-white
    hover:bg-opacity-50 hover:text-dbg
    transition duration-300 ease-in-out text-white
  `
}

const Menu: FC = () => {
  const { t } = useTranslation();
  const context = useViewContext();

  const [userInfo, setUserInfo] = useState({
    from: localStorage.getItem("from") || "",
    to: localStorage.getItem("to") || "",
    startDate: localStorage.getItem("startDate")
      ? new Date(localStorage.getItem("startDate") as string)
      : new Date(),
    passengers: localStorage.getItem("passengers") || ""
  })

  const [filteredFromAirports, setFilteredFromAirports] = useState([]);
  const [filteredToAirports, setFilteredToAirports] = useState([]);

  const filterAirports = (input: string) => {
    if (!input) return [];

    return Object.values(airportsData)
      .filter((airport) =>
        airport.name.toLowerCase().includes(input.toLowerCase()) ||
        airport.city.toLowerCase().includes(input.toLowerCase()) ||
        airport.icao.toLowerCase().includes(input.toLowerCase()) ||
        (airport.iata && airport.iata.toLowerCase().includes(input.toLowerCase()))
      )
      .slice(0, 10);
  };

  const debouncedFromFilterAirports = useMemo(
    () => debounce((input) => setFilteredFromAirports(filterAirports(input)), 300),
    []
  );

  const debouncedToFilterAirports = useMemo(
    () => debounce((input) => setFilteredToAirports(filterAirports(input)), 300),
    []
  );

  return (
    <div className={css.container}>
      <MenuTop />
      <div className="flex items-end justify-between gap-6 mt-4">
        <div className="flex items-center justify-between gap-3 w-full">
          <Wrapper
            title={t('home_menu_from_label')}
            className="w-1/4">
            <div className="input-wrapper">
              <input
                type="text"
                className="first-input text-white border border-white"
                value={userInfo.from}
                placeholder={t('home_menu_from_placeholder')}
                onChange={(e) => {
                  const value = e.target.value;
                  localStorage.setItem('from', value);
                  setUserInfo({ ...userInfo, from: value });
                  debouncedFromFilterAirports(value);                }}
              />
              {filteredFromAirports.length > 0 && (
                <ul className="absolute bottom-[80px] left-0 bg-brand-300 flex flex-col text-white rounded overflow-y-auto w-full bg-opacity-50 py-3 min-h-[50px] max-h-[300px] z-50 shadow-lg">
                  {filteredFromAirports.map((airport) => (
                    <li className="hover:bg-brand-100 py-1 px-2 cursor-pointer"
                      key={airport.icao}
                      onClick={() => {
                        const from = `${airport.name} ${airport.iata}`;
                        localStorage.setItem('from', from);
                        setUserInfo({ ...userInfo, from });
                        setFilteredFromAirports([]);
                      }}
                    >
                      {airport.name} ({airport.iata})
                    </li>
                  ))}
                </ul>
              )}
              <div className="right-border-right-top bg-white"></div>
              <div className="right-border-right-bottom bg-white"></div>
            </div>
            <img
              className="w-4 absolute right-[-14px] top-11 z-20"
              src="icons/left-right-arrows-white.svg"
              alt="arrows.svg"
            />
          </Wrapper>

          <Wrapper
            title={t('home_menu_to_label')}
            className="w-1/4"
          >
            <div className="input-wrapper">
              <input
                type="text"
                className="second-input text-white border border-white"
                value={userInfo.to}
                placeholder={t('home_menu_to_placeholder')}
                onChange={(e) => {
                  const value = e.target.value;
                  localStorage.setItem('to', value);
                  setUserInfo({ ...userInfo, to: value });
                  debouncedToFilterAirports(value);
                }}
              />
              {filteredToAirports.length > 0 && (
                <ul className="absolute bottom-[80px] left-0 bg-brand-300 flex flex-col text-white rounded overflow-y-auto w-full bg-opacity-50 py-3 min-h-[50px] max-h-[300px] z-50 shadow-lg">
                  {filteredToAirports.map((airport) => (
                    <li className="hover:bg-brand-100 py-1 px-2 cursor-pointer" key={airport.icao} onClick={() => {
                      const to = `${airport.name} ${airport.iata}`;
                      localStorage.setItem('to', to);
                      setUserInfo({ ...userInfo, to });
                      setFilteredToAirports([]);
                    }}>
                      {airport.name} ({airport.iata})
                    </li>
                  ))}
                </ul>
              )}
              <div className="right-border-left-top bg-white"></div>
              <div className="right-border-left-bottom bg-white"></div>
            </div>
          </Wrapper>

          <Wrapper title={t('home_menu_date_label')} className="w-1/4">
            <DatePicker
              selected={userInfo.startDate}
              onChange={(date) => {
                if(date) {
                  localStorage.setItem('startDate', date.toISOString());
                  setUserInfo({ ...userInfo, startDate: date })
                }
              }}
              className='h-14 p-2 text-white border border-white w-full'
              dateFormat="dd.MM.yyyy h:mm"
              timeInputLabel="Время:"
              popperClassName="z-20"
              popperPlacement="bottom-start"
              portalId="root-portal"
              // showTimeSelect
              showTimeInput
              locale='ru'
            />
            <img
              className="w-4 absolute bottom-5 right-3"
              src="icons/calendar-white.svg"
              alt="calendar.svg"
            />
          </Wrapper>

          <Wrapper
            title={t('home_menu_passengers_label')}
            className="w-1/4"
          >
            <input
              type="text"
              className="h-14 p-2 text-white border border-white"
              value={userInfo.passengers}
              placeholder={t('home_menu_passengers_placeholder')}
              onChange={(e) => {
                localStorage.setItem('passengers', e.target.value);
                setUserInfo({ ...userInfo, passengers: e.target.value });
              }}
            />
          </Wrapper>
        </div>

        <button className={css.button} onClick={() => context?.modal.set(true)}>
          {t('home_menu_submit_button')}
        </button>
      </div>
    </div>
  );
};

export default Menu;
