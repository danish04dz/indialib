import React from 'react'
import Addlib from '../../components/Addlib'
import { Link } from 'react-router-dom'


const Dashboard = () => {
  return (
    
    <section className='flex flex-col items-center justify-center mx-auto my-auto p-5 mt-5'>
      <div>
      <h1>welcome to Partner Dasboard</h1>
      </div>
     
      <div className='flex gap-5  '>
        
      <Link to='/addlib' className='bg-slate-500 py-3 px-2 text-white rounded-md '>
      Profile
      </Link>
      <Link to='/addlib' className='bg-slate-500 py-3 px-2 text-white rounded-md '>
      Add Librray
      </Link>
      <Link to='/addlib' className='bg-slate-500 py-3 px-2 text-white rounded-md '>
      Manage Seats
      </Link>
      <Link to='/addlib' className='bg-slate-500 py-3 px-2 text-white rounded-md '>
      See All Booking
      </Link>

      </div>
      
      

    </section>
    
  )
}

export default Dashboard