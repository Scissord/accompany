import { FC } from 'react'
import Header from './blocks/Header';
import Title from './blocks/Title';
import Plane from './blocks/Plane';
import Steps from './blocks/Steps';
import Cards from './blocks/Cards';
import { Footer } from '@components';

const VIP: FC = () => {
  return (
    <>
      <Header/>
      <Title/>
      <Plane/>
      <Steps/>
      <Cards/>
      <Footer/>
    </>
  )
}

export default VIP;
