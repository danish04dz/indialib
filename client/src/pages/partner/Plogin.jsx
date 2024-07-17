import React from 'react'

const Plogin = () => { 
  return (
    <section className='w-full mx-auto min-h-max p-3'>
    <div className='sm:mx-auto sm:w-full sm:max-w-md container flex justify-center items-center mx-4 p-4  rounded-lg shadow-lg'>
      <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-600'>Welcome To Partner SignIn</h2>
    </div>
      {/* Log in fORM */}
      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md container flex justify-center items-center mx-4 p-4  rounded-lg shadow-lg'>
      <form className="space-y-6" action="#" method="POST">
        <input  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />

         
        
      </form>

      </div>
      
   
   </section>
  )
}

export default Plogin
