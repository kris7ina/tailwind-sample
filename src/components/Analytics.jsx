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
          <p>Monitor and optimize your data-driven insights with our advanced Data Analytics Dashboard. Streamline your analytics processes, visualize trends, and make informed decisions, all from a centralized platform.</p>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 px-6 py-3 text-white hover:scale-105 hover:bg-[#4efac4] duration-300'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics