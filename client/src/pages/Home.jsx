import React from 'react'
import Cities from '../components/Cities'
import Searchbar from '../components/Searchbar'
import Nearbylibrary from '../components/Nearbylibrary'

const Home = () => {
  return (
    <main className='mt-6'>
      <Searchbar/>
      <Cities/> 
      <Nearbylibrary/>

      
    </main>
  )
}

export default Home
