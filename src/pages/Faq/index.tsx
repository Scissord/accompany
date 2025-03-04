import { FC, useState } from 'react';
import Header from './blocks/Header';
import Title from './blocks/Title';
import Tabs from './blocks/Tabs';
import Before from './blocks/Before';
import While from './blocks/While';
import After from './blocks/After';
import { Footer } from "@components";
import { useTranslation } from "react-i18next";

const Faq: FC = () => {
  const { t } = useTranslation();
  const [tab, setTab] = useState<number>(1);
  const tabs = [
    {
      value: 1,
      label: t('before_flight'),
      src: 'pages/faq/plane1.svg'
    },
    {
      value: 2,
      label: t('in_flight'),
      src: 'pages/faq/plane2.svg'
    },
    {
      value: 3,
      label: t('after_flight'),
      src: 'pages/faq/plane3.svg'
    },
  ];

  return (
    <>
      <Header/>
      <Title/>
      <Tabs
        tab={tab}
        setTab={setTab}
        tabs={tabs}
      />
      {tab === 1 && <Before/>}
      {tab === 2 && <While/>}
      {tab === 3 && <After/>}
      <Footer/>
    </>
  );
};

export default Faq;
