    import React from 'react'
    import { motion } from 'framer-motion'
import {fadeIn} from '../ui/Varient'
    const Vision = () => {
      return (
       <div className="lg:p-20 px-2 relative mt-11 py-10 mb-4 ">
                <motion.div 
                variants={fadeIn("right",0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{
                            once:false,amount:0.7
                        }}
                className="lg:text-[80px] w-full text-3xl lg:text-4xl lg:leading-none leading-1 lg:w-[90%] lg:font-bold uppercase">
                <b className='text-orange-600'>‶</b><br /> we are not just a design agency-we are a team of thinkers, creators, and
 problem solvers.<b className='text-orange-600'> ‶</b>
                </motion.div>
       </div>
      )
    }
    
    export default Vision