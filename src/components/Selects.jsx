import React from 'react'
import image1 from "../assests/borabora.jpg";
import image2 from "../assests/borabora2.jpg";
import image3 from "../assests/Turkey.jpeg";
import image6 from "../assests/Norway.jpeg";
import image4 from "../assests/maldives2.jpg";
import image5 from "../assests/Islamabad.jpeg";
import image7 from "../assests/Paris.jpeg";
import SelectCard from './SelectCard';

function Selects() {
  return (
    <div  className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
    
      <SelectCard bg={image4} text='Maldive'  />
      <SelectCard bg={image5} text='Pakistan'  />
      <SelectCard bg={image3} text='Turkey'  />
      <SelectCard bg={image2} text='BoraBora'  />
      <SelectCard bg={image6} text='Norway'  />
      <SelectCard bg={image7} text='France'  />

    </div>
  )
}

export default Selects;


