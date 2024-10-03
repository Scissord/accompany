import { FC } from "react";
import Title from "./Plane/Title";
import Menu from "./Plane/Menu";

const Plane: FC = () => {

  return (
    <section
      className="h-[40vh] lg:h-[65vh] bg-dbg relative text-white"
      style={{
        backgroundImage: `url('pages/main/avia_head.png')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        backgroundSize: "43%",
        // backgroundAttachment: "fixed",
        // backgroundBlendMode: "multiply",
      }}
    >
      <Title/>
      <Menu/>
    </section>
  );
};

export default Plane;
