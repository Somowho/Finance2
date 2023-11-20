import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
    <div className='max-w-[800px] mt-[-90px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
    {/*h-screen means 100vh in css*/}

    {/*mx-auto sets margin left and margin-right to auto, which centers the element horizontally
      within its parents */}

    <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS </p>
    {/*p-2 means padding equals 8px */}

    <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md: py-6'>Grow with data</h1>
    {/*py-6 means padding-top & padding bottom = 24px */}




    <div className='flex justify-center items-center'>
    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, flexible, financing for</p>

    <Typed 
    className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'  
    strings={['BTB', 'BTC', 'SASS']} typeSpeed={120} backSpeed={140} loop/>
    </div>

    {/*pl-2 means padding on the left */}

    <p className='md:text-2xl text-xl font-bold text-gray-500 '>Monitor your data analytics to increase revenue for BTB, BTC & SASS platform.</p>


    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
     </div>
    </div>
  )
}

export default Hero