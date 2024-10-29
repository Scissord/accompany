import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";

const Title: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const { t } = useTranslation();

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className="container mx-auto px-8 lg:px-0 h-full py-12 lg:py-0 z-10"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.h1
        className="text-4xl sm:text-6xl font-bold"
        variants={textVariants}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/*  */}
        {t('home_title')}
        <br />
        {/*  */}
        {t('home_subtitle')}
      </motion.h1>
      <motion.p
        className="mt-4 text-xl"
        variants={textVariants}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {t('home_description_first')}
        <br />
        {t('home_description_second')}
        <br />
        {t('home_description_third')}
      </motion.p>
    </motion.div>
  );
};

export default Title;
