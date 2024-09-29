import { FC } from "react";
import Title from "./Plane/Title";
import Menu from "./Plane/Menu";

const Plane: FC = () => {

  return (
    <section
      className="lg:bg-[url('./pages/main/avia_head.png')] lg:bg-right lg:bg-no-repeat lg:bg-43% h-[40vh] lg:h-[65vh] bg-dbg relative text-white"
    >
      <Title/>
      <Menu/>
    </section>
  );
};

export default Plane;
