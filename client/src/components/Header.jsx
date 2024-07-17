import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

import {MdPerson  } from 'react-icons/md'



const Header = () => {
  return (
    <header className=' mx-auto max-w-[1440px] px-6 lg:px-12;  sticky top-1 w-full left-0 right-0'>
        {/* Container */}

        <div className=' mx-auto max-w-[1440px] px-6 lg:px-12; bg-white transition-all duration-200 rounded-full  ring-1 ring-slate-900/5 shadow-lg'>
            <div className='flex items-center justify-between py-3'>
            {/* LOGO */}

            <Link to={'/'}>
                <span className='font-[900] text-[24px] text-primary'>India<span className='text-secondary'>Lib.in</span></span>
            </Link>

            {/* Navbar */}

            <div className='flex items-center justify-center '>

              {/* Desktop*/}
              <Navbar/>

              {/* Mobile */}
              {/* <Navbar/> */}
              
            </div>
            {/* Buttons */}
            
            <div className='text-[16px] font-[500] '>
            <Link to={'login'}>
              <button className='ring-1 px-3 py-1 gap-x-2 flex justify-between rounded-full border border-primary border-b-secondary border-r-secondary cursor-pointer font-bold text-gray-500 font-sans hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white hover:border-none shadow-lg'>
              <MdPerson  size={24} />
                
                <span>Login</span>
              </button>
              </Link>
            </div>


            </div>

            

            <div>
                
            </div>
        
        </div>
    </header>
  )
}

export default Header