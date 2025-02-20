import React from 'react'
import { Link } from 'react-router-dom'

const Stats = () => {
  return (
<div className="p-2">
   <div className="w-full h-full flex justify-evenly">
        <div className="w-[300px]">
            <h1 className='text-[90px] font-bold border-b-2 border-gray-600  '>300+</h1>
            <p className='text-3xl font-extrabold py-3'>successful agency projects - Brand Identity, Website Design, Product Packaging</p>
        </div>
        <div className="w-[300px]">
        <h1 className='text-[90px] font-bold border-b-2  border-gray-600  '>10</h1>
        <p className='text-3xl font-extrabold py-3'>years in business improving digital design products for our customers</p>

        </div>
        <div className="w-[300px]">
        <h1 className='text-[90px] font-bold border-b-2  border-gray-600  '>9.8</h1>
        <p className='text-3xl font-extrabold py-3'>average NPS*
we receive
from our clients</p>
        </div>
   </div>
   <div className="pl-36 mt-10">
        <Link className='text-2xl text-orange-500 font-medium'>About DD.ync  </Link>

   </div>
   </div>
  )
}

export default Stats