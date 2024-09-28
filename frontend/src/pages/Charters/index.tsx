import { FC } from 'react'
import Header from './blocks/Header';
import Cards from './blocks/Cards';
import Form from './blocks/Form';
import Footer from './blocks/Footer';

const Charters: FC = () => {
  return (
    <>
      <Header/>
      <Cards/>
      <Form/>
      <Footer/>
    </>
  )
}

export default Charters;
