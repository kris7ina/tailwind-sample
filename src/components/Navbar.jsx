import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className='pointer-events-auto text-white flex justify-between items-center h-24 max-w-[1040px] mx-auto px-8'>
      <h1 className='w-full text-3xl text-[#00df9a] cursor-pointer'>METRIQ.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4 cursor-pointer'>Home</li>
        <li className='p-4 cursor-pointer'>Company</li>
        <li className='p-4 cursor-pointer'>Resources</li>
        <li className='p-4 cursor-pointer'>About</li>
        <li className='p-4 cursor-pointer'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden cursor-pointer'>
        {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}  
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-700' : 'fixed left-[-100%] top-0 w-[60%] border-r border-r-gray-900 h-full bg-[rgb(0,3,0)] ease-in-out duration-700'}>
      <h1 className='m-4 mt-8 w-full text-3xl text-[#00df9a]'>MENU</h1>
        <ul className='pt-12 uppercase font-syne'>
          <li className='p-4 pb-6 border-b border-gray-900 cursor-pointer'>Home</li>
          <li className='p-4 py-6 border-b border-gray-900 cursor-pointer'>Company</li>
          <li className='p-4 py-6 border-b border-gray-900 cursor-pointer'>Resources</li>
          <li className='p-4 py-6 border-b border-gray-900 cursor-pointer'>About</li>
          <li className='p-4 py-6 cursor-pointer'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar