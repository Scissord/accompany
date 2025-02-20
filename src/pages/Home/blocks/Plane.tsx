import { FC } from "react";
import Title from "./Plane/Title";
import Menu from "./Plane/Menu";

const Plane: FC = () => {
  return (
    <section className={`
      relative dark:bg-dbg
      text-white bg-brand-300
      bg-[url("/pages/main/bg.jpg")]
      bg-cover bg-center bg-no-repeat
      flex items-center justify-center
      h-full lg:min-h-[70vh]
    `}>
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />
      <img src="pages/main/avia_head.png" className="hidden lg:block absolute right-0 lg:w-[43%] lg:z-20"/>
      <Title />
      <Menu />
    </section>
  );
};

export default Plane;
