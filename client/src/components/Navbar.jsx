import React from 'react'
import { MdMail, MdPhone, MdWhatsapp } from 'react-icons/md'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='hidden lg:flex justify-between gap-x-3 text-gray-600'>
      <Link to={'/'}>
      <MdPhone  size={22} />
      </Link>
      <Link to={'/'}>
      <MdWhatsapp size={22}/>
      </Link>
      <Link to={'/'}>
      <MdMail size={22}/>
      </Link>
      
    </div>
  )
}

export default Navbar
