import React from 'react'
import Images from './Images'

const Hero = () => {
  return (
    <div className='flex flex-col items-center md:h-[170vh] h-[85vh] gap-14 relative mt-[100px] md:mt-[200px] text-white bg-black'>
      {/* BACKGROUND IMG */}
      <img src="/images/background.png" alt="" className='w-full h-[100%] absolute -z-0 -top-56'/>
      {/* TEXT */}
      <div className='flex flex-col gap-14 z-0 px-20'>
        <h1 className='text-5xl md:text-7xl'>Get your clients what they need</h1>
        <div className='flex items-center justify-center'>
          <div className='border-r-2 border-black px-6'>
            <button className='bg-black cursor-pointer rounded-sm md:w-32 md:h-12 w-24 h-12'>Get your web</button>
          </div>
          <div className='px-2 md:px-6 12 w-auto h-12'>
            <h3 className='text-gray-300 text-xs md:text-[1em]'>30% Discount on every package from 20 <br /> may to 20 june</h3>
          </div>
        </div>
      </div>
      {/* IMAGE AND SHADOW */}
      <Images />
    </div>
  )
}

export default Hero