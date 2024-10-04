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
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <div className="container mx-8 bg-brand-300 rounded pt-4 pb-8 px-6 hidden lg:block z-10 absolute bottom-[-90px] left-1/2 transform -translate-x-1/2">
      <MenuTop />
      <div className="flex items-center justify-center gap-3 mt-4">
        <div className="flex justify-center gap-3">
          <div className="flex items-center gap-3">
            <Wrapper title={"Откуда"} bottom={"Алматы, Казахстан"}>
              <div className="input-wrapper">
                <input className="first-input" type="text" />
                <div className="right-border-right-top"></div>
                <div className="right-border-right-bottom"></div>
              </div>
              <img
                className="w-4 absolute right-[-14px] top-11 z-20"
                src="icons/left-right-arrows.svg"
                alt="arrows.svg"
              />
            </Wrapper>

            <Wrapper title={"Куда"} bottom={"Москва, Россия"}>
              <div className="input-wrapper">
                <input className="second-input" type="text" />
                <div className="right-border-left-top"></div>
                <div className="right-border-left-bottom"></div>
              </div>
            </Wrapper>
          </div>

          <Wrapper title={"Дата вылета"}>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="h-14 p-2 bg-brand-300 border border-white w-[200px]"
            />
            <img
              className="w-4 absolute bottom-11 right-3"
              src="icons/calendar.svg"
              alt="calendar.svg"
            />
          </Wrapper>

          <Wrapper title={"Пассажиры"}>
            <Select options={options} />
            <IconChevronDown className="absolute z-10 right-3 top-11" />
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
  options: any;
};

const Select: FC<SelectProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState<any>({
    value: "1",
    label: "1 пассажир",
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-[200px]">
      <div
        className="h-14 p-2 bg-brand-300 border border-white cursor-pointer flex items-center justify-start"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? selectedOption.label : ""}
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
