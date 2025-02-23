import React from 'react'
import { Link } from 'react-router-dom'

const Stats = () => {
  return (
<div className="p-2 w-full relative ">
   <div className=" flex justify-evenly">
        <div className="w-[300px]">
            <h1 className='text-[90px] font-bold border-b-2 border-gray-600  '>10+</h1>
            <p className='text-3xl font-extrabold py-3'>successful agency projects - Brand Identity, Website Design, Product Packaging</p>
        </div>
        <div className="w-[300px]">
        <h1 className='text-[90px] font-bold border-b-2  border-gray-600  '>5*</h1>
        <p className='text-3xl font-extrabold py-3'>In just five months, we have successfully delivered over 10 projects</p>

        </div>
        {/* <div className="w-[300px]">
        <h1 className='text-[90px] font-bold border-b-2  border-gray-600  pt-5'></h1>
        <p className='text-3xl font-extrabold py-3 border-t-2 border-gray-600'>Recognized at Islamiah College - Our agency has been appreciated for providing top-quality IT and
        digital services.</p>
        </div> */}
   </div>
   <div className="pl-36 mt-10">
        <Link className='text-2xl text-orange-500 font-medium'>About Nexion Connects </Link>

   </div>
   </div>
  )
}

export default Stats