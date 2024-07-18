import React from 'react'

const Plogin = () => { 
  return (
    <section className='w-full mx-auto min-h-screen p-6 flex flex-col justify-center items-center'>
    <div className='sm:mx-auto sm:w-full sm:max-w-md container flex flex-col justify-center items-center mx-4 p-4 rounded-lg shadow-lg'>
      <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-700'>Welcome To Partner SignIn</h2>
    </div>
    
    {/* Log in Form */}
    <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md container flex flex-col justify-center items-center mx-4 p-4 rounded-lg shadow-lg'>
      <form className="space-y-6 w-full" action="#" method="POST">
        <div>
          <label htmlFor="userID" className="block text-sm font-medium text-gray-700">User ID</label>
          <input 
            id="userID"
            name="userID"
            type="text"
            autoComplete="user-id"
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input 
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <button 
            type="submit" 
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  </section>
  )
}

export default Plogin
