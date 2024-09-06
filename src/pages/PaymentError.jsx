import React from 'react'
import ps from "../assets/Error.png";
import Header from '../components/Header';

const PaymentError = () => {
  return (
    <>
    <Header />
    <div className='w-[99vw] h-screen flex-col flex justify-cen items-center mt-20'>
    
    <div className='h-40 w-80'>
    <h1 className='text-2xl font-bold'>Payment Failed</h1>
        <img src={ps} className='' />
        <div className='flex gap-6 justify-end mt-16'>
        <button onClick={() => window.location.href = '/home'} className='bg-lime-300 rounded-md px-2 py-1.5 text-gray-900 mr-20'>Return to Homepage</button></div>

    </div>
    </div>
    </>
  )
}

export default PaymentError