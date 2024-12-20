import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
// import './Consult/consult.css';

const Consult: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const { t } = useTranslation();

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className={`
      bg-gbg relative text-white
       bg-[url('/pages/main/consult-bg.png')]
       bg-no-repeat bg-center bg-cover
       flex items-center justify-center
       min-h-[30vh] lg:min-h-[70vh]
    `}>
      <div className="hidden lg:block absolute inset-0 bg-gradient-to-r w-5/6 dark:from-brand-300 dark:via-brand-100 from-stone-400 via-stone-500 to-transparent" />
      <div className="lg:hidden absolute inset-0 bg-brand-200 bg-opacity-80" />
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
