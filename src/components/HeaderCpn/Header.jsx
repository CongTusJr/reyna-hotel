import { CloseOutlined, UnorderedListOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate=useNavigate()
    const handlenavigateHome=()=>{
        navigate('/')
    }

    const Links =[
        {name: 'Home', link:'/'},
        {name: 'Room', link:'/room'},
        {name: 'About Us', link:'/about-us'},
        {name: 'Booked', link:'/booked'},
        {name: 'Contact', link:'/contact'},
    ]
    const [isOpen, setIsOpen]=useState(false)
  return ( 
    <div className='shadow-md w-full bg-[#000]'>
        <div className='md:px-10 py-4 px-[60px] md:flex justify-between items-center mx-44' >
            <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                <img onClick={handlenavigateHome} src="https://reynaluxuryhotel.com/files/files/logo-reyna.png" alt="logo-reynal" className='w-24 md:w-18'/> 
            </div>
            <div onClick={()=> setIsOpen(!isOpen)} className="w-8 h-8 absolute right-8 text-goldlg top-6 cursor-pointer md:hidden ">
                {
                    isOpen?<CloseOutlined/>:<UnorderedListOutlined/>
                }
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#000] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-[128   ]' : 'top-[-490px]'}`}>
                {Links.map(link=>(
                    <li key={link.name} className='font-semibold  my-7 md:pl-0 md:ml-8'>
                        <Link to={`${link.link}`} className='text-goldlg hover:text-[#fff] '>{link.name}</Link>
                    </li>
                ))}
                <button className="btn bg-goldlg text-[#fff] my-7 px-3 md:ml-8 rounded md:static h-[40px] align-center hover:text-goldlg hover:bg-[#fff]">
                    Book Now
                </button>
            </ul>     
            
        </div>
    </div>
  )
}

export default Header