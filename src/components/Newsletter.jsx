import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-20 px-8 text-white'>
      <div className='max-w-[1040px] mx-auto grid lg:grid-cols-3'>
        <div className='md:col-span-2'>
          <h1 className='lg:mr-20 md:text-4xl sm:text-3xl text-3xl py-2'>Want tips & tricks to optimize your flow?</h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4 lg:my-0'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input className='p-3 flex w-full rounded-xl text-black' type='email' placeholder='Enter Email' />
            <button className='bg-[#00df9a] text-black w-[200px] rounded-xl font-medium ml-4 my-6 px-6 py-3 hover:scale-105 hover:bg-[#4efac4] duration-300'>Notify Me</button>
          </div>
          <p className='text-xs lg:text-sm text-center lg:text-left'>We care about the protection of your data. Read our&nbsp;<span className='text-[#00df9a] underline cursor-pointer'>Privacy Policy</span>.</p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter