import { FC, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type Props = {
  steps: any[];
};

const Content: FC<Props> = ({ steps }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  // Анимации для заголовков и описаний
  const titleVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mx-auto hidden lg:fijb">
      {steps.map((step, index) => (
        <motion.div
          ref={ref}
          key={step.id}
          className="relative"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: index * 0.3 }} // Задержка для каждого шага
        >
          <div className="w-full fijc">
            <div className="text-3xl text-center fijc w-12 h-12 bg-white text-brand-100 font-bold rounded-full border-4 border-brand-100">
              {step.id}
            </div>
          </div>
          <div className="w-full fijc flex-col gap-4">
            <motion.h3
              className="text-md text-white font-bold mt-4"
              variants={titleVariants}
              transition={{ duration: 0.8 }}
            >
              {step.first_title_part}<br/> {step.second_title_part}
            </motion.h3>
            <motion.p
              className="text-sm text-white max-w-xs"
              variants={descriptionVariants}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {step.description}
            </motion.p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Content;
