import { FC } from "react";
import Title from "./Plane/Title";
import Menu from "./Plane/Menu";
import "./Plane/plane.css";

const Plane: FC = () => {
  return (
    <section className="plane">
      <Title />
      <Menu />
    </section>
  );
};

export default Plane;
