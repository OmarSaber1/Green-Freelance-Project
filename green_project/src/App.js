import React from 'react';
import Clients from './components/Clients';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Header from './components/header/header';
import NavBar from './components/navbar';

const App = () => {
  return (
    <>
      <NavBar />
      <Header />
      <ContactUs />
      <Clients />
      <Footer />
    </>
  );
};

export default App;
