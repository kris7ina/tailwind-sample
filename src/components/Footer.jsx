import React from 'react'
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1040px] mx-auto py-16 px-8 grid md:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl text-[#00df9a] cursor-pointer'>METRIQ.</h1>
        <p className='py-4'>Unlocking Insights, Powering Growth. Your partner in data analytics, driving informed decisions and unleashing the potential of your data.</p>
        <div className='flex md:w-[90%] my-6 justify-between'>
          <FaFacebookSquare size={30} className='cursor-pointer' />
          <FaInstagram size={30} className='cursor-pointer' />
          <FaTwitterSquare size={30} className='cursor-pointer' />
          <FaDribbbleSquare size={30} className='cursor-pointer' />
          <FaGithubSquare size={30} className='cursor-pointer' />
        </div>
      </div>
      <div className='flex justify-between md:mt-6 md:ml-20 md:col-span-2'>
        
        <div>
          <h6 className='font-medium text-gray-400'>Solutions</h6>
          <ul>
            <li className='pb-2 pt-4 text-sm cursor-pointer'>Analytics</li>
            <li className='py-2 text-sm cursor-pointer'>Marketing</li>
            <li className='py-2 text-sm cursor-pointer'>Commerce</li>
            <li className='py-2 text-sm cursor-pointer'>Insights</li>
          </ul>
        </div>

        <div>
          <h6 className='font-medium text-gray-400'>Support</h6>
          <ul>
            <li className='pb-2 pt-4 text-sm cursor-pointer'>Pricing</li>
            <li className='py-2 text-sm cursor-pointer'>Documentation</li>
            <li className='py-2 text-sm cursor-pointer'>Guides</li>
            <li className='py-2 text-sm cursor-pointer'>API Status</li>
          </ul>
        </div>

        <div>
          <h6 className='font-medium text-gray-400'>Company</h6>
          <ul>
            <li className='pb-2 pt-4 text-sm cursor-pointer'>About</li>
            <li className='py-2 text-sm cursor-pointer'>Blog</li>
            <li className='py-2 text-sm cursor-pointer'>Jobs</li>
            <li className='py-2 text-sm cursor-pointer'>Press</li>
          </ul>
        </div>

        <div>
          <h6 className='font-medium text-gray-400'>Legal</h6>
          <ul>
            <li className='pb-2 pt-4 text-sm cursor-pointer'>Claims</li>
            <li className='py-2 text-sm cursor-pointer'>Policy</li>
            <li className='py-2 text-sm cursor-pointer'>Terms</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Footer