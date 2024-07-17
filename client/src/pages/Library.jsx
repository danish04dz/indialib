import React from 'react'
import  { useState } from 'react'
import { MdChair, MdCurrencyRupee,   MdLocationPin, MdSchool, MdTimer } from 'react-icons/md';
import { FaCloudMoon, FaCloudSun } from 'react-icons/fa';
import  libraryData from '../constant/Librarydata';
import { useLocation, useParams } from 'react-router-dom';
import { GoogleMap,LoadScript, Marker } from '@react-google-maps/api'
import Seats from '../components/Seats';




const containerStyle = {
  width: '100%',
  height: '200px'
};

const Library = () => {
  const { libraryId } = useParams();
  const library = libraryData.find(lib => lib.id === parseInt(libraryId));

  if (!library) {
    return <div>Library not found</div>; // Optional: Handle case where libraryId doesn't match any library
  }

  const center = {
    lat: library.latitude,
    lng: library.longitude
  };

  

  

  return (
    <section className='mx-auto max-w-[1440px] px-6 lg:px-12 m-5'>
      <div className='bg-white   p-4'>
        {/* headr image */}
        {/* <div>
        <img src={library.image} alt={library.title} className='w-full h-48 object-cover rounded-md mb-4' />

        </div>
        
        <h2 className='text-xl font-bold text-gray-800'>{library.title}</h2>
        <p className='text-gray-600 mb-2'>{library.city}</p>
        <p className='text-gray-600 mb-2'>{library.location}</p>
        <p className='text-gray-600 mb-2'>
          Price: ${library.price} per seat
        </p>
        <p className='text-gray-600 mb-2'>
          Total Seats: {library.totalseats}
        </p>
        <p className='text-gray-600 mb-2'>
          Opening Time: {library.openingTime} - {library.closingTime}
        </p>
        <div className='flex items-center text-gray-600'>
          <MdChair className='w-5 h-5 mr-1' />
          Available seats: {library.totalseats}
        </div> */}

        {/* Hero image */}
        <div
               key={library.id}
               className='bg-white p-4 rounded-lg shadow-lg h-full'
              
              >
              
              <img src={library.image} alt={library.title} className='w-full h-40 object-cover rounded-lg' />
              
              {/* Title & addres */}
              <div className='mt-4 flex justify-between'>
                <div>
                <h2 className='text-lg font-bold flex justify-start  mx-auto px-2 gap-x-2 '><MdSchool/> {library.title}</h2>
    
                     <p className='text-gray-600 flex  justify-start  mx-auto py-2 px-2 gap-x-2'> <MdLocationPin/>{library.location}</p>

                </div>

                {/* price and time */}
                
                <div>
                       <h2 className='text-red-500 font-bold flex justify-start  mx-auto px-2 gap-x-1 '> 
                             <MdCurrencyRupee className='my-1'/> {library.price} / Hour  <MdTimer className='my-1'/>
                       </h2>
                     
    
                     <p className='text-gray-600 flex justify-start  mx-auto py-2 px-2 gap-x-2'> <FaCloudSun className='my-1' />{library.openingTime} To  <FaCloudMoon className='my-1'/> {library.closingTime}</p>
                     <p className='text-gray-600 flex justify-start  mx-auto py-2 px-2 gap-x-2'> Total :- {library.totalseats}  <MdChair className='my-1'/></p>

                </div>
                
                
              </div>
              <hr className='w-20 mx-auto' />
              
            </div>

            {/* Available seats */}
            <div className='container p-5 flex flex-col md:flex-row justify-between items-center gap-y-4 md:gap-x-4 h-auto'>
              <div className='container w-full items-center flex justify-center mx-auto px-5 bg-slate-300 rounded-md shadow-lg'>
                <h1 className='text-lg md:text-xl font-bold'>Available Seats</h1>
                <div className='mt-2'>

                  <Seats/>
                </div>
              </div>

              <div className='container w-full items-center flex flex-col justify-center mx-auto px-5 bg-slate-300 rounded-md shadow-lg'>
                <h1 className='text-lg md:text-xl font-bold mb-4'>Book Now</h1>
                
                
              
              </div>
            </div>
            {/* Google Map Locatin */}
            <div className='py-5 items-center flex justify-center mx-auto px-auto'>
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
              <Marker position={center} />
            </GoogleMap>
            </LoadScript>

            </div>
      </div>
    </section>
  );
};

export default Library;