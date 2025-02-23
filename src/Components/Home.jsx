import React from 'react'
import clutch from '../assets/clutch.svg'
const Home = () => {
  return (
   <div className="w-full lg:h-full flex flex-col lg:mt-[15%] font-clashdisplay  justify-center lg:px-16 px-2 relative h-screen items-center ">
    <div className="w-full leading-none mt-7 ">
        <p className='lg:text-[70px] text-6xl lg:font-[800] leading-none uppercase tracking-tighter font-extrabold '>Nexion Connects. <br />
        <p className='lg:text-[70px] text-5xl relative font-[800] text-orange-500 tracking-tighter pt-4 leading-[55px] lg:text-left text-right uppercase'>
            Сreative design agency.
            </p></p>
    </div>

    <div className="lg:mt-[10%] w-[95%] flex lg:justify-between mt-[20%]">
        <div className=""></div>
        {/* <div className="lg:flex flex-col  sm:hidden md:flex">
            <div className="flex p-2 items-center">
                <p className='pr-3 text-xs font-normal text-gray-400'>REVIEWED ON</p>
                <p className='text-xs font-bold text-gray-400'>⭐⭐⭐⭐⭐</p>
            </div>
        
        <div className="flex items-end">
            <img src={clutch} alt="logo" className='px-1 w-[100px]' />
            <p className='pl-2 text-xs font-medium text-gray-400'>93 REVIEWS</p>
        </div>
        </div> */}

    
    <div className="">
        <a className="px-10 py-4 bg-black text-white font-semibold rounded-full hover:bg-orange-600 duration-200 transition lg:text-normal   ">
          New Project ?
        </a>
    </div>

    </div>

   </div>
  )
}

export default Home