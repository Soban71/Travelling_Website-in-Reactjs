import React from 'react';

const SelectCard = (props) => {
  return (
    <div className='relative overflow-hidden transform transition-transform duration-1000 hover:scale-105 cursor-pointer'>
      <img src={props.bg} alt='' className='w-full h-full' />

      <div className='absolute top-0 left-0 bg-gray-900/30 w-full h-full'>
        <p className='left-4 bottom-4 absolute text-white font-bold text-2xl'>
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default SelectCard;

