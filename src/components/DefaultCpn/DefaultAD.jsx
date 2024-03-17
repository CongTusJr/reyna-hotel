import React from 'react';
import NavbarAdmin from '../NavbarAdmin/NavbarAdmin';

const Default = ({ children }) => {
  return (
    <div className='flex'>
      <NavbarAdmin />
        {children}
    </div>
  );
}

export default Default;