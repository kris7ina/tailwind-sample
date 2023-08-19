import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='pt-20 max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
        <h1 className=' md:text-7xl sm:text-6xl text-5xl md:py-5'>Grow with data.</h1>
        <div className='py-4 flex justify-center'>
          <p className='md:text-4xl sm:text-3xl text-xl font-bold pr-2'>Fast, flexible financing for</p>
          <TypeAnimation
            className='md:text-4xl sm:text-3xl text-xl font-bold text-gray-500 md:pl-3'
            sequence={[
              'D2C',
              1000,
              'SaaS',
              1000,
              'BTB',
              1000
            ]}
            wrapper="span"
            speed={1}
            deletionSpeed={2}
            repeat={Infinity}
          />
          </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500 px-6'>Monitor your data analytics to increase revenue for D2C, BTB & SaaS platforms</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Get Started</button>
      </div>
    </div>
  )
}

export default Hero