import React from 'react'
import {FaFacebook,FaTwitter,FaYoutube,FaPinterest} from 'react-icons/fa';


function Footer() {
  return (
    <div className='w-full bg-gray-100 py-16 mt-10'>

    <div className='max-w-[1240px] mx-auto flex flex-col px-4'>

    <div className='sm:flex item-center justify-between text-center'>
        <h1>Beaches</h1>

        <div className='flex justify-between w-full sm:max-w-[200px] my-4'>
        <FaFacebook className='icon' />
        <FaTwitter className='icon' />
        <FaYoutube  className='icon' />
        <FaPinterest  className='icon'/>
        </div>
    </div>

    <div className='flex justify-between'>
        <ul className='lg:flex text-center'>
            <li>About</li>
            <li>PartnerShips</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Advertising</li>
        </ul>
        <ul  className='lg:flex text-center'>
            <li>Home</li>
            <li>Destination</li>
            <li>Travel</li>
            <li>View</li>
            <li>Book</li>
        </ul>
    </div>

    </div>
      
    </div>
  )
}

export default Footer
