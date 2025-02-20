import { FC } from 'react'
import Header from './blocks/Header';
import WhyUs from './blocks/WhyUs';
import Steps from './blocks/Steps';
import Cards from './blocks/Cards';
import { Footer } from '@components';

const VIP: FC = () => {
  return (
    <>
      <Header/>
      <WhyUs/>
      <Steps/>
      <Cards/>
      <Footer/>
    </>
  )
}

export default VIP;
