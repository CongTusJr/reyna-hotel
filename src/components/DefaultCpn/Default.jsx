import React from 'react';
import Header from '../HeaderCpn/Header';
import Footer from '../FooterCpn/Footer';

const Default = ({ children }) => {
  return (
    <div>
      <Header/>
      {children}
      <Footer />
    </div>
  );
}

export default Default;
