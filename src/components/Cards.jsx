import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full pb-[8rem] pt-[5rem] px-4 bg-white'>
      <p className='text-[#00df9a] font-bold text-center py-2'>ENSURING YOUR DATA SAFETY</p>
      <h1 className='px-4 pb-[6rem] md:text-4xl sm:text-3xl text-3xl text-center'>Select a plan that works for you</h1>
      
      <div className='max-w-[1040px] mx-auto grid lg:grid-cols-3 gap-8 px-4'>

        <div className='w-full mx-auto max-w-[400px] shadow-xl shadow-cyan-800/10 flex flex-col p-4 my-8 rounded-xl hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem]' src={Single} alt='person' />
          <h2 className='text-3xl text-center py-8'>Single User</h2>
          <p className='text-center text-4xl font-bold'>$149<span className='text-sm'>/ year</span></p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>500 GB STORAGE</p>
            <p className='py-2 border-b mx-8'>1 Granted User</p>
            <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
          </div>
          <button className='bg-[#00df9a] w-[200px] rounded-xl font-medium my-6 mx-auto px-6 py-3 text-white hover:bg-[#4efac4] duration-300'>Start Trial</button>
          <p className='text-center text-sm text-gray-400 pb-2'>30-day money-back guarantee.</p>
        </div>
        
        <div className='w-full mx-auto max-w-[400px] shadow-xl shadow-cyan-800/10 flex flex-col p-4 my-8 md:my-3 rounded-xl hover:scale-105 duration-300 bg-slate-100'>
          <img className='w-20 mx-auto mt-[-3rem]' src={Double} alt='person' />
          <h2 className='text-3xl text-center py-8'>Partnership</h2>
          <p className='text-center text-4xl font-bold'>$199<span className='text-sm'>/ year</span></p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b border-b-gray-300 mx-8 mt-8'>1 TB STORAGE</p>
            <p className='py-2 border-b border-b-gray-300 mx-8'>2 Users Allowed</p>
            <p className='py-2 border-b border-b-gray-300 mx-8'>Send up to 10 GB</p>
          </div>
          <button className='bg-black w-[200px] rounded-xl font-medium my-6 mx-auto px-6 py-3 text-white md:scale-110 md:mt-12 hover:bg-[#353535] duration-300'>Start Trial</button>
          <p className='text-center text-sm text-gray-400 md:py-2 pb-2'>30-day money-back guarantee.</p>
        </div>

        <div className='w-full mx-auto max-w-[400px] shadow-xl shadow-cyan-800/10 flex flex-col p-4 my-8 rounded-xl hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem]' src={Triple} alt='person' />
          <h2 className='text-3xl text-center py-8'>Group Account</h2>
          <p className='text-center text-4xl font-bold'>$299<span className='text-sm'>/ year</span></p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>5 TB STORAGE</p>
            <p className='py-2 border-b mx-8'>10 Users Allowed</p>
            <p className='py-2 border-b mx-8'>Send up to 20 GB</p>
          </div>
          <button className='bg-[#00df9a] w-[200px] rounded-xl font-medium my-6 mx-auto px-6 py-3 text-white hover:bg-[#4efac4] duration-300'>Start Trial</button>
          <p className='text-center text-sm text-gray-400 pb-2'>30-day money-back guarantee.</p>
        </div>

      </div>
    </div>
  )
}

export default Cards