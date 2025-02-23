import React from 'react'
import image from '../assets/img.jpg'
import { motion } from 'framer-motion'
import {fadeIn} from '../ui/Varient'
const Showreel = () => {
  return (
    <div className="w-full mt-[10%]  bg-white pt-20">
        <div className="lg:flex lg:justify-between w-full lg:items-center">
            <div className="w-full">
                {/* <video src="https://dd.nyc/wp-content/uploads/2025/01/Showreel_bestbig-compressed.mp4" className=''autoPlay></video> */}
                <img src={image} alt="" className='w-full  h-[500px] object-cover' />
            </div>
            <motion.div
            variants={fadeIn("right",0.2)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{
                                        once:false,amount:0.7
                                    }}
            className="lg:w-[80%] lg:p-10 pt-7 px-1 w-full">
                <p className='lg:text-5xl text-[23px]  uppercase w-full font-medium lg:p-4 px-2 pt-7 lg:font-extrabold'>Our Inspiration</p>
                <p className='lg:p-4 py-9 px-2 text-sm lg:leading text-left text-gray-600 leading-5 uppercase lg:normal-case lg:text-lg lg:text-zinc-900'>
                Nexion Connects was started with a passion for creativity, technology, and problem-solving. 
Our journey began as a group of students eager to explore the digital world and make an impact. 
Seeing how businesses struggle to build a strong digital presence, we decided to create an agency 
that provides affordable, high-quality, and professional digital services
                </p>
            </motion.div>
        </div>

    </div>
  )
}

export default Showreel