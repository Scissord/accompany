import { FC } from 'react'
import Header from './blocks/Header';
import Cards from './blocks/Cards';
import Form from './blocks/Form';
import { Footer } from '@components';

const Cargo: FC = () => {
  return (
    <>
      <Header/>
      <Cards/>
      <Form/>
      <Footer/>
    </>
  )
}

export default Cargo;
