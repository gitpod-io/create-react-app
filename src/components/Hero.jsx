import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Hero = () => {
  return (
    <div name='base' className='w-full h-screen bg-[#0a192f]'>
    {/* Container for base*/}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
      <p className='text-[#00FF00]'>Welcome</p>
      <h1 className='text-4xl sm:text-7xl font-bold text-[#f9f2f2]'>Victor C</h1>
      <h2 className='text-4xl sm:text-7xl font-bold text-[#9c9898]'>Full Stack Developer and MIS Specialist</h2>
      <div>
        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00FF00] hover:border-black hover:text-black'>Portfolio 
        <span className='group-hover:rotate-90 duration-500'>
        <HiArrowNarrowRight className='ml-2'/>
        </span>
        </button>
      </div>
    </div>
    </div>
  )
}

export default Hero