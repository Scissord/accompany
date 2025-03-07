import { FC, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useViewContext } from "@context";

const Title: FC = () => {
  const ref = useRef(null);
  const context = useViewContext();
  const { t } = useTranslation();

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const css = {
    button: `
      py-4 text-sm bg-brand-100 whitespace-nowrap
      flex items-center justify-center
      font-semibold hover:bg-white text-sm
      hover:bg-opacity-50 text-dbg
      mt-4 lg:hidden w-full
    `
  }

  return (
    <motion.div
      ref={ref}
      className="container mx-auto px-8 lg:px-0 h-full py-12 lg:py-0 z-10"
      initial="hidden"
      animate={"visible"}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.h1
        className="text-4xl sm:text-6xl font-bold"
        variants={textVariants}
        transition={{ duration: 0.8, delay: 0.3 }}
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
      <motion.button
        className={css.button}
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.7 }}
        onClick={() => context?.modal.set(true)}
      >
        {t('home_menu_submit_button')}
      </motion.button>
    </motion.div>
  );
};

export default Title;
