import React from 'react'

const Showreel = () => {
  return (
    <div className="w-full mt-[10%] h-screen bg-white pt-20">
        <div className="flex justify-between w-full items-center">
            <div className="w-full ">
                <video src="https://dd.nyc/wp-content/uploads/2025/01/Showreel_bestbig-compressed.mp4" className=''autoPlay></video>
            </div>
            <div className="w-[80%] p-10">
                <p className='text-5xl font-extrabold p-4'>DD.NYC® Agency Showreel</p>
                <p className='p-4 text-lg leading-tight'>A glimpse into the creativity, precision, and impact that define DD.NYC®. Our award-winning Manhattan-based agency specializes in branding, web design, packaging, and video storytelling. With nearly a decade of experience as a team and over 30+ years of combined expertise, we’ve partnered with global leaders and innovators in healthcare, real estate, and beyond. From the rebranding of WillowWood at Hanger Live to designing VTS’ Accelerate conference and unveiling New York City FC’s Etihad Park, we deliver elevated design solutions that inspire and drive results.</p>
            </div>
        </div>

    </div>
  )
}

export default Showreel