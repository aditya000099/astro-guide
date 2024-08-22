import React from 'react';
import Header from '../components/Header';

const LoginPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page
    window.location.href = '/'; // Redirect to '/'
  };

  return (
    <div className='flex justify-center items-center w-screen'>
    
      <div className="w-full h-screen flex flex-col justify-center items-center bg-[#020013]">
      <h1 className='text-5xl font-bold'>AstroGuide</h1>
        <div className="w-full max-w-md bg-white rounded-lg p-8 shadow-lg mt-10">
          <h2 className="text-2xl font-bold text-center text-black mb-6">Login</h2>
          
          {/* <form onSubmit={handleSubmit}> */}
            <div className="mb-4">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 text-black focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 text-black focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full bg-[#020013] text-white font-bold py-3 px-4 rounded-lg hover:bg-gray-800 focus:outline-none"
              >
                Login
              </button>
            </div>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
