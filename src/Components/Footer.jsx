import React from 'react'
import { Link, Links } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bg-black text-white h-full w-full">
        <div className="p-20">
            <h1 className='text-5xl max-w-[70%] font-bold text-white'>Starting a new project or want to collaborate with us? 
           
            <Link className='text-orange-600 px-2 font-bold'>Let’s talk </Link></h1>
            <p className='py-2 text-5xl text-zinc-800 hover:text-zinc-700 font-medium'>hello@dd.nyc</p>
        </div>

        <div className="w-full pl-20 flex max-w-[90%] justify-between">
            <div className="flex-col flex justify-around h-[320px]">
                <p className='pt-4 text-lg font-bold border-t-2 w-max'>Company</p>
                <Link className='hover:text-orange-600'>Work</Link>
                <Link className='hover:text-orange-600'>Agency</Link>
                <Link className='hover:text-orange-600'>Services</Link>
                <Link className='hover:text-orange-600'>Industries</Link>
                <Link className='hover:text-orange-600'>Client Testimonial</Link>
                <Link className='hover:text-orange-600'>Contact</Link>
                <Link className='hover:text-orange-600'>Website Accessbility</Link>
            </div>
            <div className="flex flex-col justify-around h-[300px]">
                <p className='pt-4 text-lg font-bold border-t-2 w-max'>Services</p>
                <Link className='hover:text-orange-600'>Web Design</Link>
                <Link className='hover:text-orange-600'>WordPress Websites</Link>
                <Link className='hover:text-orange-600'>Branding</Link>
                <Link className='hover:text-orange-600'>Web Design</Link>
                <Link className='hover:text-orange-600'>Graphic Design</Link>
                <Link className='hover:text-orange-600'>Real Estate Design</Link>

           </div>
            <div className="flex flex-col">
                <p className='pt-4 text-lg font-bold border-t-2 w-max'>Address</p>
                <p className='py-4 w-[150px] text-justify'>85 Broad Street
17th Floor - Suite 17.005
New York, NY
10004</p>
<p className='py-2 hover:text-orange-600'>+1 212.380.1761</p>
<p className='hover:text-orange-600'>hello@dd.nyc</p>
            </div>
            <div className="flex flex-col h-[250px] justify-around">
                <p className='pt-4 text-lg font-bold border-t-2 w-max'>Connect</p>
                <p className='pt-1 hover:text-orange-600'>Behance</p>
                <p className='pt-1 hover:text-orange-600'>LinkedIn</p>
                <p className='pt-1 hover:text-orange-600'>Instagram</p>
                <p className='pt-1 hover:text-orange-600'>Dribble</p>
                <p className='pt-1 hover:text-orange-600'>Twitter</p>
            </div>
        </div>
       <div className="w-full flex justify-around p-10 mt-24 items-center ">
        <div className="">
            <p className='text-xs'>Copyright © 2025 DigitalDesign.NYC LLC | Headquartered in New York & Beyond</p>
        </div>
        <div className="">
            <img src="https://dd.nyc/wp-content/uploads/2023/10/digitaldesignlogo_full_white.svg" alt="" className='w-[180px]' />
        </div>
        <div className="">
            <img src="https://dd.nyc/wp-content/uploads/2024/10/New-York-State-Certified-Woman-owned-business-1-1.png" alt="" className='w-[200px]'/>

        </div>
        <div className="">
            <img src="https://dd.nyc/wp-content/uploads/2024/10/Frame-1-1.png" alt="" className='w-[200px] '/>
            
        </div>
        <div className="">
          <p className='text-xs'>All rights reserved</p>
            
        </div>
       </div>
    </div>
  )
}

export default Footer