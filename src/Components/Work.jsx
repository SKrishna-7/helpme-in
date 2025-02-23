import React from 'react'
import { Link } from 'react-router-dom'

const Work = () => {
    return (
        <div className="flex h-screen w-full justify-center items-center">
        <div className="w-[80%]">
            <p className='w-[70%] text-[25px] font-medium'>
            Nexion Connects was started with a passion for creativity, technology, and problem-solving. 
Our journey began as a group of students eager to explore the digital world and make an impact. 
Seeing how businesses struggle to build a strong digital presence, we decided to create an agency 
that provides affordable, high-quality, and professional digital services.
            <Link className='text-orange-500'> Contact us today!</Link>
            </p>
            </div>
        </div>
    )
}

export default Work