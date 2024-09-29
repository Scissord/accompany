  import { FC } from "react"
  import Header from "./blocks/Header";
  import Plane from "./blocks/Plane";
  import Consult from "./blocks/Consult";
  import Cards from "./blocks/Cards";
  import Steps from "./blocks/Steps";
  import Partners from "./blocks/Partners";
  import Form from "./blocks/Form";
  import Events from "./blocks/Events";
  import { Footer } from "@components";

  const Home: FC = () => {
    return (
      <>
        <Header/>
        <Plane/>
        <Consult/>
        <Cards/>
        <Steps/>
        <Partners/>
        <Form/>
        <Events/>
        <Footer/>
      </>
    );
  };

  export default Home;
