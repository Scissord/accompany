import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

const Create: FC = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="relative bg-[url('/pages/about/plane-right.png')] bg-[right_bottom_30%] bg-cover lg:bg-50% bg-no-repeat bg-[#454c56] text-white h-full xl:h-[800px]">
      <div className="lg:hidden absolute inset-0 bg-black bg-opacity-80" />
      <img src="./pages/about/cloud1.png" className="hidden xl:block absolute left-0 bottom-[-325px]"/>
      <img src="./pages/about/cloud2.png" className="hidden xl:block absolute right-0 top-[230px] w-2/5"/>
      <img src="./pages/about/cloud3.png" className="hidden xl:block absolute right-0 top-[-110px]" />
      <img src="./pages/about/cloud4.png" className="hidden xl:block absolute right-0 bottom-[20px] w-1/2" />
      <div
        ref={ref}
        className="container mx-auto h-full flex flex-col justify-center py-12 px-8 lg:px-0 "
      >
        <motion.h1
          className="text-2xl lg:text-5xl font-bold z-10"
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
        {t('about_create_title_first')}<br/>
        {t('about_create_title_second')}
        </motion.h1>
        <motion.p
          className="mt-4 text-sm lg:text-xl z-10"
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t('about_create_description_1')}<br/>
          {t('about_create_description_2')}<br/>
          {t('about_create_description_3')}<br/>
          {t('about_create_description_4')}<br/>
          {t('about_create_description_5')}<br/>
          {t('about_create_description_6')}<br/>
          {t('about_create_description_7')}
        </motion.p>
        <motion.p
          className="mt-4 text-sm lg:text-xl z-10"
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {t('about_create_description_8')}<br/>
          {t('about_create_description_9')}<br/>
          {t('about_create_description_10')}<br/>
          {t('about_create_description_11')}<br/>
          {t('about_create_description_12')}<br/>
          {t('about_create_description_13')}
        </motion.p>
        <motion.p
          className="mt-4 text-sm lg:text-xl z-10"
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {t('about_create_description_14')}<br/>
          {t('about_create_description_15')}<br/>
          {t('about_create_description_16')}
        </motion.p>
      </div>
    </section>
  );
};

export default Create;
