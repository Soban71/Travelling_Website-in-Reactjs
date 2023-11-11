import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { FaFacebook, FaTwitter, FaYoutube, FaPinterest } from 'react-icons/fa';

import { Link as ScrollLink, animateScroll as scroll } from "react-scroll"; 


function Navbar() {
  const [Nav, SetNav] = useState(false);
  const [Logo, SetLogo] = useState(false);

  const handleNav = () => {
    SetNav(!Nav);
  };

  return (
    <div className='flex justify-between h-20 items-center px-4 absolute text-white z-10 w-full'>
      <div>
        <h1 onClick={handleNav} className={Logo ? 'hidden' : 'block'}>
          Beaches
        </h1>
      </div>

      <ul className='hidden md:flex'>
      
      <ScrollLink to='Hero' smooth={true} duration={500}>
          <li className='cursor-pointer'>Home</li>
        </ScrollLink>
        <ScrollLink to='Travel' smooth={true} duration={1500}>
          <li className='cursor-pointer'>Destinations</li>
        </ScrollLink>
        <ScrollLink to='Destination' smooth={true} duration={1500}>
          <li className='cursor-pointer'>Travel</li>
        </ScrollLink>
        

        <ScrollLink to='Booking' smooth={true} duration={1500}>
          <li className='cursor-pointer'>Booking</li>
        </ScrollLink>

        <ScrollLink to='View' smooth={true} duration={1500}>
          <li className='cursor-pointer'>Views</li>
        </ScrollLink>

      </ul>

      <div className='hidden md:flex'>
        <BsPerson className='mr-3' />
        <BsSearch />
      </div>

      <div
        className='md:hidden'
        onClick={handleNav}
        style={{ zIndex: 10 }}
      >
        {Nav ? <AiOutlineClose size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      {/**mobile version */}
      <div
        onClick={handleNav}
        className={
          Nav
            ? 'absolute top-0 left-0 text-black bg-gray-100/90 w-full px-4 py-7 flex flex-col'
            : 'absolute left-[-100%]'
        }
      >
        <ul>
          <h1>Beaches </h1>
          <li className='border-b'> Home</li>
          <li className='border-b'>Destination</li>
          <li className='border-b'>Travel</li>
          <li className='border-b'>View</li>
          <li className='border-b'>Book</li>
          <div className='flex flex-col'>
            <button className='my-4'>Search</button>
            <button>Account</button>
          </div>

          <div className='flex justify-between my-4'>
            <FaFacebook className='icon' />
            <FaTwitter className='icon' />
            <FaYoutube className='icon' />
            <FaPinterest className='icon' />
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
