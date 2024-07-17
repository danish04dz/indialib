import React from 'react'
import seat from '../assets/seat.png'

const Seats = () => {
  return (
    <div className='flex justify-between items-center '>
        <div className='flex justify-center'>
            <button id='1' > <img src={seat} width={100} height={50} className='filter-green' alt="1" /></button>
            
        </div>
     
    </div>
  )
}

export default Seats
