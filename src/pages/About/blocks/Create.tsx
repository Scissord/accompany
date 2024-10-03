import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";

const Create: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="relative lg:bg-[url('pages/about/create-bg.png')] lg:bg-cover lg:bg-center bg-dbg text-white">
      <div className="absolute inset-0 bg-gradient-to-r w-0 lg:w-1/2 from-[#7c7c7c] via-[#bdbbbc] to-transparent" />
      <div
        ref={ref}
        className="container mx-auto h-full flex flex-col justify-center py-12 px-8 lg:px-0 "
      >
        <motion.h1
          className="text-3xl font-bold z-10"
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
        Создайте свой идеальный<br/>
        чартерный рейс
        </motion.h1>
        <motion.p
          className="mt-4 z-10"
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          AVIACONSULTING COMPANY-предоставляет гибкие<br/>
          графики чартерных рейсов,чтобы соответствовать вашим<br/>
          потребностям и планированию. Независимо от того, нужно<br/>
          ли вам чартерный рейс для бизнес-поездки, спортивного<br/>
          мероприятия или отдыха, мы готовы предоставить вам<br/>
          индивидуальный план полета, который соответствует<br/>
          вашим потребностям и требованиям.
        </motion.p>
        <motion.p
          className="mt-4 z-10"
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Наши опытные специалисты обеспечат вам высокий<br/>
          уровень обслуживания и гарантированное<br/>
          удовлетворение. Мы предлагаем полный комплекс услуг,<br/>
          включая трансферы, багаж и другие дополнительные<br/>
          услуги, чтобы вы могли полностью расслабиться и<br/>
          наслаждаться беззаботным путешествием.
        </motion.p>
        <motion.p
          className="mt-4 z-10"
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Создайте свой идеальный чартерный рейс с AVIA<br/>
          CONSULTING COMPANY и переживите незабываемые<br/>
          впечатления от полета!
        </motion.p>
      </div>
    </section>
  );
};

export default Create;
