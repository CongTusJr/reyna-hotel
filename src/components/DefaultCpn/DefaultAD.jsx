import React from 'react';
import NavbarAdmin from '../NavbarAdmin/NavbarAdmin';

const Default = ({ children }) => {
  return (
    <div className='flex'>
      <NavbarAdmin />
      <div className='ml-52 w-full'>

        {children}
      </div>
    </div>
  );
}

export default Default;