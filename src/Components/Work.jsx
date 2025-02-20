import React from 'react'
import { Link } from 'react-router-dom'

const Work = () => {
    return (
        <div className="flex h-screen w-full justify-center items-center">
        <div className="w-[60%]">
            <p className='w-[70%] text-[25px] font-medium'>
            DD.NYC® is an award-winning Manhattan-based creative agency founded in 2015, specializing in branding, web design, packaging, and video storytelling. With over a decade of teamwork and a combined 50+ years of expertise, the agency delivers innovative and impactful solutions tailored to a wide range of industries, including real estate, healthcare, and lifestyle. 
            <Link className='text-orange-500'>See our work</Link>
            </p>
            </div>
        </div>
    )
}

export default Work