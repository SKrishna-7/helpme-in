import React from 'react'
import image from '../assets/img.jpg'
const Showreel = () => {
  return (
    <div className="w-full mt-[10%]  bg-white pt-20">
        <div className="lg:flex lg:justify-between w-full lg:items-center">
            <div className="w-full">
                {/* <video src="https://dd.nyc/wp-content/uploads/2025/01/Showreel_bestbig-compressed.mp4" className=''autoPlay></video> */}
                <img src={image} alt="" className='w-full  h-[500px] object-cover' />
            </div>
            <div className="lg:w-[80%] lg:p-10 pt-7 px-2 w-full">
                <p className='lg:text-5xl text-4xl w-max font-extrabold lg:p-4'>Nexicon Connection® <br /> Our Inspiration</p>
                <p className='lg:p-4 py-3 px-2 text-lg lg:leading-tight text-left'>
                Nexion Connects was started with a passion for creativity, technology, and problem-solving. 
Our journey began as a group of students eager to explore the digital world and make an impact. 
Seeing how businesses struggle to build a strong digital presence, we decided to create an agency 
that provides affordable, high-quality, and professional digital services
                </p>
            </div>
        </div>

    </div>
  )
}

export default Showreel