import React from 'react'
import libraryData from '../constant/Librarydata'
import { Link, useNavigate } from 'react-router-dom';


const NearbyLibrary = () => {

  const navigate=useNavigate();
  return (
    <section className='mx-auto max-w-[1440px] px-2 lg:px-5'>
      
      <div className='mx-auto max-w-[1440px] px-2 lg:px-5 py-8 xl:py-10 rounded-3xl'>

      <h2 className='text-center text-2xl font-bold mb-8 text-gray-600'>Nearby Libraries</h2>

        
        

        {/* Grid Container */}
       
        <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10'>
          {libraryData.map((library) => (
             <Link  to={`/library/${library.id}`} key={library.id} >        
           
            <div
               key={library.id}
               className='bg-white p-4 rounded-lg shadow-lg h-full'
              
              >
              <img src={library.image} alt={library.title} className='w-full h-40 object-cover rounded-lg' />
              <div className='mt-4'>
                <h2 className='text-lg font-bold'>{library.title}</h2>
                <p className='text-gray-600'>{library.city}</p>
                <p className='text-gray-600'>{library.location}</p>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NearbyLibrary;