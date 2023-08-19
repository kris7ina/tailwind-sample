import React from 'react'
import Data from '../assets/data.svg'

const Analytics = () => {
  return (
    <div className='bg-white w-full py-16 px-8'>
      <div className='max-w-[1040px] mx-auto grid md:grid-cols-2'>
        <img src={Data} alt='dashboard' className='w-[470px] mx-auto my-4 md:pr-10' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-3xl py-2'>Manage Data Analytics Centrally</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?</p>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 px-6 py-3 text-white'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics