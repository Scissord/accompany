import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";

const Consult: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="relative lg:bg-[url('pages/main/consult-bg.png')] lg:bg-cover lg:bg-center h-[90vh] lg:h-[60vh] bg-gbg text-white">
      <div className="absolute inset-0 bg-gradient-to-r w-0 lg:w-1/3 from-brand-300 via-brand-100 to-transparent" />
      <div
        ref={ref}
        className="container mx-auto px-8 lg:px-32 h-full flex flex-col items-start justify-center pt-0 lg:pt-20"
      >
        <motion.h1
          className="text-3xl font-bold z-10"
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          AVIA CONSULTING COMPANY
        </motion.h1>
        <motion.p
          className="mt-4 z-10"
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Чартерные рейсы - это идеальное решение для тех, кто<br />
          ценит свободу выбора, комфорт и гибкость в путешествиях.
        </motion.p>
        <motion.p
          className="mt-4 z-10"
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 0.6 }} // Задержка для второго параграфа
        >
          С нами вы сможете планировать перелеты по своему<br />
          расписанию, избегая ограничений регулярных рейсов.
        </motion.p>
        <motion.p
          className="mt-4 z-10"
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 0.8 }} // Задержка для третьего параграфа
        >
          Мы предлагаем чартерные перелеты на частных и<br />
          бизнес-джетах по всему миру, обеспечивая высокий<br />
          уровень сервиса и конфиденциальности.
        </motion.p>
      </div>
    </section>
  );
};

export default Consult;
