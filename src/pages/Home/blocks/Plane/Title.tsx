import { FC, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Title: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className="container mx-auto px-8 h-full py-12 lg:py-0"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.h1
        className="text-4xl sm:text-6xl font-bold"
        variants={textVariants}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Ваш чартер.<br /> Ваши границы
      </motion.h1>
      <motion.p
        className="mt-4 text-xl"
        variants={textVariants}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Мы предлагаем чартерные перелеты на частных<br />
        и бизнес-джетах по всему миру, обеспечивая<br />
        высокий уровень сервиса и конфиденциальности.
      </motion.p>
    </motion.div>
  );
};

export default Title;
