import React from 'react'

const Header = () => {
  return (
    <div className='bg-[#020013] flex flex-row gap-40 min-h-12'>
        <div className='w-1/3 flex gap-6 p-4 justify-center'>
            ASTROGUIDE
        </div>
        <div className='w-1/2 flex gap-6 p-6 '>
            <h2>Home</h2>
            <h2>Readers</h2>
            <h2>Horoscope</h2>
            <h2>About Us</h2>
            <h2>Services</h2>
        </div>
        <div className='w-1/3 flex gap-6 p-6 justify-end'>
        <button className='b bg-lime-300 rounded-md px-2 py-1.5 text-gray-900 mr-20'>Reservation</button></div>
    </div>
  )
}

export default Header