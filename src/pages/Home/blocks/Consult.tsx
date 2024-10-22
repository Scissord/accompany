import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";
import './Consult/consult.css';
import { useTranslation } from "react-i18next";

const Consult: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const { t } = useTranslation();

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="consult">
      <div className="absolute inset-0 bg-gradient-to-r w-0 lg:w-5/6 from-brand-300 via-brand-100 to-transparent" />
      <div
        ref={ref}
        className="container mx-auto px-8 lg:px-0 h-full flex flex-col items-start justify-center py-12 lg:py-0"
      >
        <motion.h1
          className="text-4xl sm:text-4xl font-bold z-10"
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          AVIA CONSULTING COMPANY
        </motion.h1>
        <motion.p
          className="mt-4 z-10 text-xl"
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t('home_consult_description_1')}<br />
          {t('home_consult_description_2')}
        </motion.p>
        <motion.p
          className="mt-4 z-10 text-xl"
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {t('home_consult_description_3')}<br />
          {t('home_consult_description_4')}
        </motion.p>
        <motion.p
          className="mt-4 z-10 text-xl"
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {t('home_consult_description_5')}<br />
          {t('home_consult_description_6')}<br />
          {t('home_consult_description_7')}
        </motion.p>
      </div>
    </section>
  );
};

export default Consult;
