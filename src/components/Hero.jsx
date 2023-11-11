import React from 'react'
import BeachVid from '../assests/beachVid.mp4'
import {BsSearch} from 'react-icons/bs'

function Hero() {
  return (
    <div className='w-full h-screen relative'>

    <video src={BeachVid}
    className='w-full h-full object-cover'
    autoPlay loop muted
      />
      
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'> </div>

      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center p-4 text-white'>
        <h1>First Class Travel</h1>
        <h2 className='py-4'>Top 1% Location WorldWide</h2>
      


      <form className='flex justify-between items-center max-w-[700px] 
      mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90 '>

        <div>
            <input type='text' placeholder='Search Destination' className='bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none'/>
        </div>

        <div>
        <button><BsSearch className='icon' style={{color:'#ffffff'}} />  </button>
        </div>

      </form>
      </div>


    </div>
  )
}

export default Hero
