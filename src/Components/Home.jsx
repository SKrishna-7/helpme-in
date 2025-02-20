import React from 'react'
import clutch from '../assets/clutch.svg'
const Home = () => {
  return (
   <div className="w-full h-full flex flex-col lg:mt-[15%]  sm:justify-center lg:px-16 px-4">
    <div className="w-full leading-none ">
        <h1 className='lg:text-[95px] text-5xl relative font-[900]  '>
            Сreative design agency,</h1>
        <h1 className='lg:text-[95px] text-5xl font-[900]'>located in the heart of NYC.</h1>
    </div>

    <div className="mt-[10%] w-[95%] flex justify-between ">
        <div className="lg:flex flex-col  sm:hidden md:flex">
            <div className="flex p-2 items-center">
                <p className='pr-3 text-xs font-normal text-gray-400'>REVIEWED ON</p>
                <p className='text-xs font-bold text-gray-400'>⭐⭐⭐⭐⭐</p>
            </div>
        
        <div className="flex items-end">
            <img src={clutch} alt="logo" className='px-1 w-[100px]' />
            <p className='pl-2 text-xs font-medium text-gray-400'>93 REVIEWS</p>
        </div>
        </div>

    
    <div className="">
        <button className="px-10 py-4 bg-black text-white font-semibold rounded-full hover:bg-orange-600 duration-200 transition lg:text-normal   ">
          New Project ?
        </button>
    </div>

    </div>

   </div>
  )
}

export default Home