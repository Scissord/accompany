import { FC } from 'react'
import Header from './blocks/Header';
import Form from './blocks/Form';
import Footer from './blocks/Footer';
import Map from './blocks/Map';

const Contacts: FC = () => {
  return (
    <>
      <Header/>
      {/* <Map/> */}
      <Form/>
      <Footer/>
    </>
  );
};

export default Contacts;
