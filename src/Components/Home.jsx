import React from 'react'
import clutch from '../assets/clutch.svg'
import { motion } from 'framer-motion'
import {fadeIn} from '../ui/Varient'
const Home = () => {
  return (
   <div className="w-full lg:h-full flex flex-col lg:mt-[15%] font-clashdisplay  justify-center lg:px-16 px-2 relative h-screen items-center ">
    <motion.div 
    variants={fadeIn("up",0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{
        once:false,amount:0.7
    }}

    className="w-full leading-none mt-7 ">
        <p className='lg:text-[70px] text-4xl lg:font-[800] leading-none uppercase tracking-tighter font-bold lg:block hidden'>Nexion Connects. </p> <br />
        <p className='lg:text-[70px] text-5xl relative lg:font-[800] font-[500] text-orange-600 tracking-tighter pt-4 leading-[50px] lg:text-left text-left uppercase'>
            Сreative design agency.
            </p>
    </motion.div>

    <div className="lg:mt-[10%] w-full flex lg:justify-between mt-[20%]">
        <div className="hidden"></div>
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
        <a className="px-10 py-4 bg-black text-white font-semibold rounded-3xl hover:bg-orange-600 duration-200 transition lg:text-normal   ">
          New Project ?
        </a>
    </div>

    </div>

   </div>
  )
}

export default Home