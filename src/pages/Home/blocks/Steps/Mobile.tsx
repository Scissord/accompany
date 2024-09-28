import { FC, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type Props = {
  steps: any[];
};

const Mobile: FC<Props> = ({ steps }) => {
  return (
    <div className="container mx-auto fijc gap-6 flex-col lg:hidden px-6">
      {steps.map((step, index) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: false }); // Анимация срабатывает один раз при появлении

        return (
          <motion.div
            ref={ref}
            key={step.id}
            className="w-full border border-white rounded p-6 flex fijc flex-col"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <div className="text-3xl text-center fijc w-12 h-12 bg-white text-brand-100 font-bold rounded-full border-4 border-brand-100">
              {step.id}
            </div>
            <div className="w-full fijc flex-col gap-4">
              <h3 className="text-md text-white font-bold mt-4">
                {step.first_title_part}<br /> {step.second_title_part}
              </h3>
              <p className="text-sm text-white max-w-xs">
                {step.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Mobile;
