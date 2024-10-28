import { FC, useState } from "react"
import Header from "./blocks/Header";
import Plane from "./blocks/Plane";
import Consult from "./blocks/Consult";
import Cards from "./blocks/Cards";
import Steps from "./blocks/Steps";
import Partners from "./blocks/Partners";
import Form from "./blocks/Form";
import Events from "./blocks/Events";
import { Footer } from "@components";
import videoSrc from "/video/preloader.mp4";

const Home: FC = () => {
  const isVideoShowed = localStorage.getItem("videoShowed");
  const [isPreloaderShowed, setIsPreloaderShowed] = useState(isVideoShowed);

  return (
    <>
      {isPreloaderShowed === null ? (
        <div className="relative w-full h-screen">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover z-50"
              src={videoSrc}
              autoPlay
              muted
              playsInline
              onEnded={() => {
                localStorage.setItem("videoShowed", "true");
                setIsPreloaderShowed("true")
              }}
            />
        </div>
      ) : (
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
      )}
    </>
  );
};

export default Home;
