import { FC, useState } from "react";
import DatePicker from "react-datepicker";
import MenuTop from "./MenuTop";
import Wrapper from "./Wrapper";
import "react-datepicker/dist/react-datepicker.css";
import "./input.css";
import "./select.css";

const options = [
  { value: "1", label: "1 пассажир" },
  { value: "2", label: "2 пассажира" },
];

const Menu: FC = () => {
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");
  const [date, setDate] = useState<Date | null>(new Date());
  const [passengers, setPassengers] = useState<string>('1 пассажир');

  return (
    <div className="container mx-8 bg-brand-300 rounded pt-4 pb-8 px-6 hidden lg:block z-10 absolute bottom-[-90px] left-1/2 transform -translate-x-1/2">
      <MenuTop />
      <div className="flex items-center justify-between gap-6 mt-4">
        <div className="flex items-start justify-between gap-3 w-full">
          <Wrapper title={"Откуда"} bottom={"Алматы, Казахстан"} className="w-1/4">
            <div className="input-wrapper">
              <input
                type="text"
                className="first-input"
                value={from}
                onChange={(e) => {
                  localStorage.setItem('from', e.target.value);
                  setFrom(e.target.value)
                }}
              />
              <div className="right-border-right-top"></div>
              <div className="right-border-right-bottom"></div>
            </div>
            <img
              className="w-4 absolute right-[-14px] top-11 z-20"
              src="icons/left-right-arrows.svg"
              alt="arrows.svg"
            />
          </Wrapper>

          <Wrapper title={"Куда"} bottom={"Москва, Россия"} className="w-1/4">
            <div className="input-wrapper">
              <input
                type="text"
                className="second-input"
                value={to}
                onChange={(e) => {
                  localStorage.setItem('to', e.target.value);
                  setTo(e.target.value)
                }}
              />
              <div className="right-border-left-top"></div>
              <div className="right-border-left-bottom"></div>
            </div>
          </Wrapper>

          <Wrapper title={"Дата вылета"} className="w-1/4">
            <DatePicker
              selected={date}
              onChange={(date) => {
                if(date) {
                  localStorage.setItem('date', date.toISOString());
                  setDate(date)
                }
              }}
              className='h-14 p-2 bg-brand-300 border border-white w-full'
            />
            <img
              className="w-4 absolute bottom-6 right-3"
              src="icons/calendar.svg"
              alt="calendar.svg"
            />
          </Wrapper>

          <Wrapper title={"Пассажиры"} className="w-1/4">
            <Select
              value={passengers}
              onChange={(val) => {
                localStorage.setItem('passengers', val);
                setPassengers(val)
              }}
              options={options}
            />
            <IconChevronDown className='absolute z-10 right-3 top-11'/>
          </Wrapper>
        </div>

        <button className="h-14 text-sm bg-brand-100 whitespace-nowrap px-6 flex items-center justify-center font-semibold">
          Отправить заявку
        </button>
      </div>
    </div>
  );
};

export default Menu;

type SelectProps = {
  value: string;
  onChange: (val: string) => void;
  options: any;
};

const Select: FC<SelectProps>  = ({ value, onChange, options }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOptionClick = (option: any) => {
    onChange(option.label);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <div
        className="h-14 p-2 bg-brand-300 border border-white cursor-pointer flex items-center justify-start"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value ? value : ''}
      </div>
      {isOpen && (
        <div className="absolute z-10 bg-brand-300 border border-white mt-1 w-full">
          {options.map((option: any) => (
            <div
              key={option.value}
              className="h-12 p-2 hover:bg-brand-200 cursor-pointer flex items-center justify-start"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

function IconChevronDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
      />
    </svg>
  );
}
