import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ citydata }) => {
  return (
    <div className='group relative'>
      <Link to={'/'}>
        <div className='flex justify-center items-center'>
          <img src={citydata.image} alt={citydata.city} className='rounded-full w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 object-cover transition-transform transform group-hover:scale-105' />
        </div>
        <div className='flex justify-center items-center font-bold pt-2'>
          <h2>{citydata.city}</h2>
        </div>
      </Link>
    </div>
  );
};

export default Item;