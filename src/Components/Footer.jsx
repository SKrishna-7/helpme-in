import React from 'react'

const Footer = () => {
  return (
    <div className="bg-black text-white h-full w-full uppercase overflow-hidden">
        <div className="lg:p-20 px-3 py-10 w-full">
            <h1 className='lg:text-5xl lg:max-w-[70%] text-2xl text-white '>Starting a new project or want to collaborate with us? 
           
            <a className='text-orange-600 px-2 font-bold'>Let’s talk </a></h1>
            <p className='py-5 lg:text-5xl text-zinc-800 hover:text-zinc-700 font-medium text-xl w-full'>info@nexionconnects.in</p>
        </div>

        <div className="w-full lg:pl-20 lg:flex lg:max-w-[90%] p-5 justify-between">
            <div className="flex-col flex justify-around h-[200px]">
                <p className='pt-4 text-lg font-bold border-t-2 w-max'>Company</p>
                <a href='#work' className='hover:text-orange-600'>Work</a>
                <a href='#aboutus' className='hover:text-orange-600'>About Us</a>
                <a href='#contact' className='hover:text-orange-600'>Services</a>
                <a href='#contact' className='hover:text-orange-600'>Contact</a>
            </div>
            <div className="flex flex-col justify-around h-[300px] hidden">
                <p className='pt-4 text-lg font-bold border-t-2 w-max'>Services</p>
                <a className='hover:text-orange-600'>Web Design</a>
                <a className='hover:text-orange-600'>UI / UX Design</a>
                <a className='hover:text-orange-600'>Branding</a>
                <a className='hover:text-orange-600'>Artificial Intelligence</a>
                <a className='hover:text-orange-600'>Graphic Design</a>
                <a className='hover:text-orange-600'>SEO</a>

           </div>
            <div className="flex flex-col mt-4">
                <p className='pt-3 text-lg font-bold border-t-2 w-max'>Address</p>
                <p className='lg:py-4 tracking-wider'>
                No.03 vavoor madhar street, ambur 635802
</p>
<p className='py-2 hover:text-orange-600'>7598527523</p>
<a href='Info@nexionconnects.in' className='hover:text-orange-600  pb-3'>Info@nexionconnects.in</a>
            </div>
            <div className="flex flex-col lg:h-[170px] justify-between">
                <p className='pt-4 text-lg font-bold border-t-2 w-max pb-4'>Connect</p>
                <p className='pt-1 hover:text-orange-600'>LinkedIn</p>
                <p className='pt-1 hover:text-orange-600'>Instagram</p>
                <p className='pt-1 hover:text-orange-600'>Twitter</p>
            </div>
        </div>
       <div className="w-full flex lg:flex-row flex-col justify-between lg:p-10 p-5 lg:mt-24 items-center h-full hidden">
        <div className="w-full py-2">
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
        <p className='text-xs px-2 w-full py-4 text-center'>Copyright © 2025 Nexion Connects </p>
    </div>
  )
}

export default Footer