import React from 'react';
import {MdSearch } from 'react-icons/md'

const Searchbar = () => {
  return (
    <div className='flex mx-auto items-center justify-center mt-1 mb-5 '>
       <input className='border border-solid outline-none border-primary border-r-secondary rounded-l-full px-2 py-1 shadow-lg' type="text" placeholder='Find Nearby Libraries'  /> 
       <button className=' gap-x-1 flex justify-between border border-solid border-primary border-r-secondary cursor-pointer font-bold text-gray-700 font-sans hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white hover:border-none px-5 py-1 rounded-r-full shadow-lg'><MdSearch  size={24} /> Find</button>
    </div>
    
  );
};

export default Searchbar;
