import { FC, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Consult: FC = () => {
  const ref = useRef(null);
  const { t } = useTranslation();

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className={`
       text-white bg-[#1d3f64] relative
       h-full xl:h-[800px] z-10 overflow-hidden
       flex items-center justify-center
    `}>
      <div className="xl:hidden absolute inset-0 bg-gray-600 bg-opacity-80" />
      <img src="./pages/main/cloud3.png" className="hidden xl:block absolute top-0 left-[-50px]"/>
      <img src="./pages/main/cloud4.png" className="hidden xl:block absolute top-[-100px] right-[-100px]"/>
      <img src="./pages/main/cloud1.png" className="hidden xl:block absolute top-[300px] left-[50px] w-[700px]"/>
      <img src="./pages/main/cloud2.png" className="hidden xl:block absolute top-[500px] left-[200px] w-[700px]"/>
      <img src="./pages/main/cloud3.png" className="hidden xl:block absolute bottom-[-150px] left-0 z-[5]"/>
      <div className="z-20 hidden xl:block absolute top-[450px] left-[250px] w-[400px] bg-[#1d3f64] p-4 rounded-3xl shadow-[0_0_15px_#003366]">
        {t('home_consult_description_1')}<br />
        {t('home_consult_description_2')}
      </div>
      <div className="h-full w-full flex items-center justify-between container mx-auto z-10">
        <div className="hidden xl:block w-1/2">
          <img
            src='./pages/main/plane.png'
            className="w-full"
          />
        </div>
        <div ref={ref} className="w-full xl:w-1/2 flex flex-col  gap-6 p-8 xl:p-12 text-lg">
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate={"visible"}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <img
              src='logo.png'
              className=""
            />
          </motion.div>

          <motion.h1
            className="text-2xl font-bold"
            variants={textVariants}
            initial="hidden"
            animate={"visible"}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            AVIA CONSULTING COMPANY
          </motion.h1>

          <motion.p
            variants={textVariants}
            initial="hidden"
            animate={"visible"}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {t('home_consult_description_3')}<br />
            {t('home_consult_description_4')}
          </motion.p>

          <motion.p
            variants={textVariants}
            initial="hidden"
            animate={"visible"}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {t('home_consult_description_5')}<br />
            {t('home_consult_description_6')}<br/>
            {t('home_consult_description_7')}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Consult;
