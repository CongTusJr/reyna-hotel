import React from 'react';
import Header from '../HeaderCpn/Header';
import Footer from '../FooterCpn/Footer';

const Default = ({ children }) => {
    return (
        <div>
            <Header />
            <div style={{ marginTop: '20px' }}>{children}</div>
            <Footer />
        </div>
    );
};

export default Default;
