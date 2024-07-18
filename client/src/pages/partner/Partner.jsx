import React from 'react'

const Partner = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
    {/* Header */}
    <header className="w-full bg-white shadow-md py-4 mb-6">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800">Partner home page from whrer they registration done for their library and request for the user id and password</h1>
      </div>
    </header>
    
    {/* Contact Form */}
    <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>
      <form className="space-y-6" action="#" method="POST">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input 
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input 
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea 
            id="message"
            name="message"
            rows="4"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <button 
            type="submit" 
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Partner
