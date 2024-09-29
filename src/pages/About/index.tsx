import { FC } from "react";
import Header from "./blocks/Header";
import Create from "./blocks/Create";
import Steps from "./blocks/Steps";
import Services from "./blocks/Services";
import Partners from "./blocks/Partners";
import WhyUs from "./blocks/WhyUs";
import Form from "./blocks/Form";
import { Footer } from "@components";

const About: FC = () => {
  return (
    <>
      <Header/>
      <Create/>
      <Steps/>
      <Services/>
      <Partners/>
      <WhyUs/>
      <Form/>
      <Footer/>
    </>
  );
};

export default About;
