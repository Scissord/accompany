import { FC } from 'react'
import Header from './blocks/Header';
import Title from './blocks/Title';
import WhyUs from './blocks/WhyUs';
import Cargo from './blocks/Cargo';
import Harmonic from './blocks/Harmonic';
import Cards from './blocks/Cards';
import { Footer } from '@components';

const VIP: FC = () => {
  return (
    <>
      <Header/>
      <Title/>
      <WhyUs/>
      <Cargo/>
      <Harmonic/>
      <Cards/>
      <Footer/>
    </>
  )
}

export default VIP;
