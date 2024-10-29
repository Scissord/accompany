import { FC } from "react";
import Title from "./Plane/Title";
import Menu from "./Plane/Menu";

const Plane: FC = () => {
  return (
    <section className={`
      relative bg-dbg text-white
      bg-[url('/pages/main/avia_head.png')]
      bg-no-repeat bg-right bg-cover
      lg:bg-43% flex items-center justify-center
      min-h-[30vh] lg:min-h-[70vh]
    `}>
      <div className="lg:hidden absolute inset-0 bg-black bg-opacity-80" />
      <Title />
      <Menu />
    </section>
  );
};

export default Plane;
