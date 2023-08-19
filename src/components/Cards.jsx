import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1040px] mx-auto grid md:grid-cols-3 gap-8 px-4'>

        <div className='w-full mx-auto max-w-[400px] shadow-xl shadow-cyan-800/10 flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem]' src={Single} alt='person' />
          <h2 className='text-3xl text-center py-8'>Single User</h2>
          <p className='text-center text-4xl font-bold'>$149</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>500 GB STORAGE</p>
            <p className='py-2 border-b mx-8'>1 Granted User</p>
            <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
          </div>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white'>Start Trial</button>
        </div>
        
        <div className='w-full mx-auto max-w-[400px] shadow-xl shadow-cyan-800/10 flex flex-col p-4 my-8 md:my-3 rounded-lg hover:scale-105 duration-300 bg-slate-200'>
          <img className='w-20 mx-auto mt-[-3rem]' src={Double} alt='person' />
          <h2 className='text-3xl text-center py-8'>Partnership</h2>
          <p className='text-center text-4xl font-bold'>$199</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b border-b-white mx-8 mt-8'>1 TB STORAGE</p>
            <p className='py-2 border-b border-b-white mx-8'>2 Users Allowed</p>
            <p className='py-2 border-b border-b-white mx-8'>Send up to 10 GB</p>
          </div>
          <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white md:scale-110 md:my-12'>Start Trial</button>
        </div>

        <div className='w-full mx-auto max-w-[400px] shadow-xl shadow-cyan-800/10 flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300'>
          <img className='w-20 mx-auto mt-[-3rem]' src={Triple} alt='person' />
          <h2 className='text-3xl text-center py-8'>Group Account</h2>
          <p className='text-center text-4xl font-bold'>$299</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8'>5 TB STORAGE</p>
            <p className='py-2 border-b mx-8'>10 Users Allowed</p>
            <p className='py-2 border-b mx-8'>Send up to 20 GB</p>
          </div>
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white'>Start Trial</button>
        </div>

      </div>
    </div>
  )
}

export default Cards